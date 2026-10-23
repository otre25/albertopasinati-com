export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Unica fonte per la FAQ: alimenta sia la sezione visibile (components/Faq.tsx)
 * sia il FAQPage JSON-LD (components/StructuredData.tsx). Tenerle allineate è il
 * motivo per cui la lista vive qui e non duplicata nei due file.
 */
export const faqItems: FaqItem[] = [
  {
    question: 'Sei disponibile per nuove opportunità?',
    answer:
      "Sì. Cerco un ruolo da Marketing Manager o Head of Marketing in aziende del lusso, retail, manifattura o tech. Scrivimi per capire se c'è un incastro.",
  },
  {
    question: 'Lavori anche come temporary manager?',
    answer:
      "Sì. Per un incarico a tempo entro con un obiettivo preciso: avviare un reparto, gestire un lancio o coprire un'assenza. Lascio un piano, i processi e un team in grado di proseguire. Per un ruolo stabile ragiono invece su priorità e budget a 12-24 mesi.",
  },
  {
    question: 'Cosa farai nei primi 90 giorni?',
    answer:
      "Nei primi 30 giorni ascolto e faccio diagnosi: guardo dati, budget, canali, agenzie e team, e capisco cosa funziona e cosa no. Tra il 30° e il 60° giorno definisco la strategia: obiettivi misurabili, allocazione del budget e roadmap. Tra il 60° e il 90° parto con le azioni a maggior impatto e imposto una dashboard che mostri i risultati. È lo stesso metodo in 4 fasi che trovi sopra, applicato a un caso concreto.",
  },
  {
    question: 'Che budget e che team hai gestito?',
    answer:
      "Budget pubblicitari oltre €1M/anno, ripartiti tra Google, Meta, TikTok, LinkedIn, eventi e attività offline. In Store Cucine ho coordinato il marketing di 20 negozi in Italia. Il team era di 7+ persone, più agenzie e freelance che selezionavo e coordinavo direttamente.",
  },
  {
    question: 'Come misuri se il marketing funziona?',
    answer:
      "Parto dal risultato di business, non dal click: costo per lead, costo di acquisizione, revenue per canale e tasso di conversione. Misuro con GA4 e dashboard BI su misura. Se un canale non porta lead qualificati, sposto il budget.",
  },
  {
    question: 'Dove lavori e in che lingue?',
    answer:
      "Sono a Venezia. Lavoro in modalità ibrida, circa 80% in smart working e 20% in presenza, e mi sposto per fiere e progetti, da Milano a Parigi fino ai mercati EMEA. Parlo italiano e inglese (ottimo).",
  },
];
