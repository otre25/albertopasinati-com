export interface MethodStep {
  name: string;
  text: string;
}

/**
 * Fonte unica del metodo di lavoro: alimenta la sezione visibile
 * (components/Method.tsx) e il HowTo JSON-LD (components/StructuredData.tsx).
 */
export const methodTitle = 'Come Alberto Pasinati imposta una strategia di marketing';
export const methodDescription =
  'Il processo in 4 fasi per definire e implementare una strategia marketing data-driven che genera risultati misurabili.';

export const methodSteps: MethodStep[] = [
  {
    name: 'Analisi e Diagnosi',
    text: 'Analisi del mercato, dei competitor e del posizionamento attuale del brand. Identificazione delle opportunità di crescita e dei KPI prioritari.',
  },
  {
    name: 'Strategia e Roadmap',
    text: 'Definizione della strategia di marketing integrata con obiettivi SMART, piano dei canali (digitale e offline), budget allocation e timeline operativa.',
  },
  {
    name: 'Esecuzione Multi-Canale',
    text: 'Gestione operativa di campagne Google Ads, Meta Ads, content marketing, SEO, eventi fieristici internazionali e PR. Coordinamento team interno e agenzie esterne.',
  },
  {
    name: 'Misurazione e Ottimizzazione',
    text: 'Monitoraggio continuo tramite GA4, dashboard BI e report periodici. Ottimizzazione in tempo reale basata sui dati per massimizzare il ROI.',
  },
];
