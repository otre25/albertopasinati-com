import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Informativa sulla privacy e trattamento dei dati personali per il sito albertopasinati.com. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati."
        noindex={true}
      />
      <div className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-dark transition-colors mb-8 font-bold"
        >
          <ArrowLeft size={20} /> Torna alla Home
        </Link>

        {/* Header */}
        <h1 className="text-5xl md:text-7xl font-display font-black uppercase leading-tight mb-8">
          Privacy <span className="text-brand-yellow">Policy</span>
        </h1>
        <div className="h-2 w-24 bg-brand-yellow mb-12"></div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-stone-700 mb-6">
            <strong>Data di ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">1. Introduzione</h2>
            <p className="text-stone-700 leading-relaxed">
              La presente Privacy Policy descrive le modalità di raccolta, utilizzo e protezione dei dati personali
              degli utenti che visitano il sito web albertopasinati.com (di seguito "Sito").
              Il Titolare del trattamento è Alberto Pasinati, con sede in Italia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">2. Dati Raccolti</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Il Sito può raccogliere le seguenti tipologie di dati:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Dati di navigazione: indirizzo IP, tipo di browser, sistema operativo, pagine visitate, tempo di permanenza</li>
              <li>Dati forniti volontariamente: nome, email, e altre informazioni fornite tramite form di contatto</li>
              <li>Cookie tecnici e analytics per migliorare l'esperienza utente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">3. Finalità del Trattamento</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              I dati personali raccolti sono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Rispondere a richieste di contatto e fornire informazioni sui servizi offerti</li>
              <li>Migliorare la navigazione e l'esperienza utente sul Sito</li>
              <li>Analizzare statistiche di utilizzo del Sito in forma anonima e aggregata</li>
              <li>Adempiere a obblighi di legge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">4. Base Giuridica del Trattamento</h2>
            <p className="text-stone-700 leading-relaxed">
              Il trattamento dei dati personali si basa sul consenso dell'utente, sull'esecuzione di un contratto
              o su un legittimo interesse del Titolare, in conformità al Regolamento (UE) 2016/679 (GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">5. Conservazione dei Dati</h2>
            <p className="text-stone-700 leading-relaxed">
              I dati personali saranno conservati per il tempo strettamente necessario al raggiungimento delle finalità
              per cui sono stati raccolti. I dati forniti tramite form di contatto saranno conservati fino alla gestione
              della richiesta e per eventuali follow-up, salvo diversa richiesta dell'interessato.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">6. Diritti dell'Utente</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              In conformità al GDPR, l'utente ha diritto di:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica o la cancellazione dei dati</li>
              <li>Opporsi al trattamento dei dati</li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo all'Autorità Garante per la protezione dei dati personali</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">7. Cookie e Strumenti di Analytics</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Il Sito utilizza cookie tecnici necessari al funzionamento e cookie analytics per monitorare le statistiche
              di utilizzo. L'utente può gestire le preferenze sui cookie tramite il banner presente sul Sito o le impostazioni del proprio browser.
            </p>

            <div className="ml-4 mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold mb-3 text-brand-dark">7.1 Google Analytics</h3>
                <p className="text-stone-700 leading-relaxed">
                  Il Sito utilizza Google Analytics, un servizio di analisi web fornito da Google LLC. Google Analytics utilizza
                  cookie per raccogliere informazioni anonime sull'utilizzo del Sito (pagine visitate, tempo di permanenza,
                  sorgente di traffico) al fine di generare report statistici aggregati. I dati raccolti sono anonimi e non
                  permettono l'identificazione personale degli utenti. Per maggiori informazioni sulla privacy di Google Analytics:
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-yellow hover:underline ml-1">
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-3 text-brand-dark">7.2 Microsoft Clarity</h3>
                <p className="text-stone-700 leading-relaxed">
                  Il Sito utilizza Microsoft Clarity, un servizio di analisi comportamentale fornito da Microsoft Corporation.
                  Clarity raccoglie informazioni anonime su come gli utenti interagiscono con il Sito attraverso registrazioni
                  delle sessioni (heatmap, click, scroll) e metriche di performance. I dati raccolti sono completamente anonimi
                  e non contengono informazioni personalmente identificabili. Microsoft Clarity aiuta a comprendere come
                  migliorare l'esperienza utente del Sito. Per maggiori informazioni sulla privacy di Microsoft:
                  <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-brand-yellow hover:underline ml-1">
                    https://privacy.microsoft.com/privacystatement
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-3 text-brand-dark">7.3 Gestione dei Cookie</h3>
                <p className="text-stone-700 leading-relaxed">
                  L'utente può accettare o rifiutare i cookie analytics tramite il banner che appare alla prima visita del Sito.
                  È inoltre possibile modificare le preferenze sui cookie in qualsiasi momento eliminando i dati di navigazione
                  dal proprio browser. La disabilitazione dei cookie analytics non compromette la navigazione del Sito ma potrebbe
                  limitare alcune funzionalità statistiche anonime.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">8. Sicurezza dei Dati</h2>
            <p className="text-stone-700 leading-relaxed">
              Il Titolare adotta misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali
              da accessi non autorizzati, perdita, distruzione o divulgazione.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">9. Modifiche alla Privacy Policy</h2>
            <p className="text-stone-700 leading-relaxed">
              La presente Privacy Policy può essere aggiornata periodicamente. Le modifiche saranno pubblicate su questa
              pagina con indicazione della data di ultimo aggiornamento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">10. Contatti</h2>
            <p className="text-stone-700 leading-relaxed">
              Per esercitare i propri diritti o per qualsiasi informazione relativa al trattamento dei dati personali,
              è possibile contattare il Titolare del trattamento all'indirizzo email:{' '}
              <span className="text-brand-yellow font-bold">
                alberto.pasinati@gmail.com
              </span>
            </p>
          </section>
        </div>

        {/* Back to Top Button */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-yellow text-deep-black px-8 py-4 rounded-sm font-bold hover:bg-brand-dark hover:text-brand-yellow transition-colors"
          >
            <ArrowLeft size={20} /> Torna alla Home
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicyPage;
