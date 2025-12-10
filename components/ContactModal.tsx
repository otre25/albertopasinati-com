import React, { useEffect, useRef, useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '../contexts/ToastContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  privacy?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const { showToast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Focus trap e gestione keyboard
  useEffect(() => {
    if (!isOpen) return;

    // Salva l'elemento attivo prima di aprire il modal
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Focus sul pulsante chiudi quando il modal si apre
    closeButtonRef.current?.focus();

    // Gestione ESC key
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Focus trap: cicla tra elementi focusabili
    const handleTabKey = (e: KeyboardEvent) => {
      if (!modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    document.addEventListener('keydown', handleTabKey);

    // Previene scroll del body quando il modal è aperto
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
      document.removeEventListener('keydown', handleTabKey);
      document.body.style.overflow = '';

      // Ripristina il focus all'elemento precedente
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose]);

  // Reset form quando il modal si chiude
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', email: '', message: '', privacy: false });
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validazione nome
    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Il nome deve contenere almeno 2 caratteri';
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Inserisci un'email valida";
    }

    // Validazione messaggio
    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Il messaggio deve contenere almeno 10 caratteri';
    }

    // Validazione privacy
    if (!formData.privacy) {
      newErrors.privacy = 'Devi accettare la privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('Compila correttamente tutti i campi', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Invia email tramite EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'alberto.pasinati@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      showToast('Messaggio inviato con successo!', 'success');
      onClose();
    } catch (error) {
      console.error('Errore invio email:', error);
      showToast('Errore nell\'invio del messaggio. Riprova.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Rimuovi l'errore quando l'utente inizia a digitare
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-auto bg-white rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-6 right-6 z-10 min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center bg-black text-white rounded-full hover:bg-brand-yellow hover:text-black transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          aria-label="Chiudi modal"
          disabled={isSubmitting}
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="bg-deep-black text-white p-8 md:p-12">
          {/* Title */}
          <h2
            id="modal-title"
            className="text-4xl md:text-5xl font-display font-black uppercase leading-[0.9] mb-4"
          >
            Contattami
          </h2>

          {/* Yellow underline */}
          <div className="h-1 w-24 bg-brand-yellow mb-6"></div>

          <p className="text-gray-300 text-lg mb-8">
            Compila il form e ti risponderò il prima possibile.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold uppercase tracking-wider mb-2"
              >
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/10 border-2 ${
                  errors.name ? 'border-red-500' : 'border-white/20'
                } rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors`}
                placeholder="Il tuo nome"
                disabled={isSubmitting}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold uppercase tracking-wider mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/10 border-2 ${
                  errors.email ? 'border-red-500' : 'border-white/20'
                } rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors`}
                placeholder="tuaemail@esempio.com"
                disabled={isSubmitting}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Messaggio */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold uppercase tracking-wider mb-2"
              >
                Messaggio *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-white/10 border-2 ${
                  errors.message ? 'border-red-500' : 'border-white/20'
                } rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors resize-none`}
                placeholder="Scrivimi il tuo messaggio..."
                disabled={isSubmitting}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-400 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Privacy checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className={`mt-1 w-5 h-5 rounded border-2 ${
                    errors.privacy ? 'border-red-500' : 'border-white/20'
                  } bg-white/10 text-brand-yellow focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-deep-black cursor-pointer`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.privacy}
                  aria-describedby={errors.privacy ? 'privacy-error' : undefined}
                />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  Accetto la{' '}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-yellow hover:underline"
                  >
                    privacy policy
                  </a>{' '}
                  e acconsento al trattamento dei miei dati personali *
                </span>
              </label>
              {errors.privacy && (
                <p id="privacy-error" className="text-red-400 text-sm mt-1">
                  {errors.privacy}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-yellow text-deep-black px-8 py-4 rounded-sm text-lg font-bold flex items-center justify-center gap-3 hover:bg-white hover:shadow-lg active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Invio in corso...
                </>
              ) : (
                <>
                  Invia messaggio <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
