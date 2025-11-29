import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary Component
 * Cattura errori JavaScript durante il rendering e mostra un fallback UI
 * Previene il crash dell'intera applicazione
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Aggiorna lo state per mostrare il fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Logga l'errore in console (in produzione, potresti voler inviare a un servizio di logging)
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Invia l'errore a Google Analytics se disponibile
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'exception', {
        description: `${error.name}: ${error.message}`,
        fatal: false,
        error_component: errorInfo.componentStack,
      });
    }

    // Salva l'errore nello state per mostrarlo (solo in development)
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      const isDevelopment = import.meta.env.DEV;

      return (
        <div className="min-h-screen bg-off-white flex items-center justify-center px-6">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8 md:p-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-red-100 rounded-full p-4">
                <AlertTriangle size={48} className="text-red-600" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-display font-bold text-deep-black text-center mb-4">
              Oops! Qualcosa è andato storto
            </h1>

            {/* Description */}
            <p className="text-brand-light text-center mb-8">
              Ci scusiamo per l'inconveniente. Si è verificato un errore imprevisto.
              Puoi provare a ricaricare la pagina o tornare alla home.
            </p>

            {/* Development Error Details */}
            {isDevelopment && this.state.error && (
              <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-300">
                <p className="font-mono text-sm text-red-700 mb-2">
                  <strong>Error:</strong> {this.state.error.name}
                </p>
                <p className="font-mono text-xs text-gray-700 mb-4">
                  {this.state.error.message}
                </p>
                {this.state.errorInfo && (
                  <details className="cursor-pointer">
                    <summary className="font-mono text-xs text-gray-600 hover:text-gray-900">
                      Component Stack
                    </summary>
                    <pre className="mt-2 text-xs text-gray-600 overflow-auto max-h-60">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-yellow text-deep-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                <RefreshCcw size={20} />
                Ricarica Pagina
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-deep-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Home size={20} />
                Torna alla Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
