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
    question: 'Chi è Alberto Pasinati?',
    answer:
      "Alberto Pasinati è un Marketing Manager con oltre 10 anni di esperienza nella direzione strategica del marketing per brand del lusso, retail e PMI innovative. Ha gestito budget superiori a €1M/anno, generato oltre 15.000 lead qualificati e guidato la strategia marketing di brand come Wave Murano Glass, Store Cucine e Il Fanale Group.",
  },
  {
    question: 'Cosa significa essere un Full Stack Marketer?',
    answer:
      "Un Full Stack Marketer padroneggia l'intera catena del marketing — dalla definizione della strategia di brand alla gestione operativa delle campagne, dall'analisi dei dati alla leadership del team. Non è uno specialista di un singolo canale, ma un professionista che coordina tutti gli asset di marketing verso un obiettivo di business misurabile.",
  },
  {
    question: 'Quali risultati ha ottenuto Alberto Pasinati come Marketing Manager?',
    answer:
      "Nel corso della sua carriera Alberto Pasinati ha gestito budget marketing superiori a €1M/anno, generato oltre 15.000 lead qualificati per clienti B2B e B2C, scalato brand del lusso su mercati internazionali EMEA, coordinato team multidisciplinari e gestito fiere internazionali come il Salone del Mobile di Milano e Maison&Objet di Parigi.",
  },
  {
    question: 'In quali settori ha esperienza Alberto Pasinati?',
    answer:
      "Alberto Pasinati ha maturato esperienza consolidata nei settori luxury, retail e manifattura di alta gamma. Ha lavorato con brand dell'artigianato veneziano (Wave Murano Glass), del retail cucine (Store Cucine, 20 negozi in Italia), dell'illuminazione di design (Il Fanale Group) e della gioielleria artigianale (Atelier Alessandra).",
  },
  {
    question: 'Come si misura il ROI di una strategia marketing?',
    answer:
      "Il ROI di una strategia marketing si misura attraverso KPI definiti in fase di pianificazione: costo per lead (CPL), costo di acquisizione cliente (CAC), revenue generata per canale, tasso di conversione e lifetime value del cliente. Alberto Pasinati utilizza Google Analytics 4, piattaforme BI personalizzate e attribution modeling per garantire visibilità completa su ogni euro investito.",
  },
  {
    question: "Qual è l'approccio di Alberto Pasinati alla strategia di marketing?",
    answer:
      "Alberto Pasinati adotta un approccio data-driven e integrato in 4 fasi: analisi di mercato e diagnosi del posizionamento, definizione della strategia e roadmap operativa, esecuzione multi-canale (Google Ads, Meta Ads, SEO, eventi), monitoraggio e ottimizzazione continua con GA4 e dashboard BI. Ogni strategia è costruita intorno agli obiettivi di business, non attorno ai tool.",
  },
  {
    question: 'Alberto Pasinati è disponibile per nuove opportunità?',
    answer:
      "Sì, Alberto Pasinati è aperto a nuove opportunità professionali come Marketing Manager o Head of Marketing, in particolare per aziende del lusso, retail, manifattura o tech che cercano un professionista con visione strategica a 360° e comprovata capacità di generare risultati misurabili.",
  },
  {
    question: 'Dove si trova Alberto Pasinati e in quali mercati ha operato?',
    answer:
      "Alberto Pasinati è basato a Venezia, Veneto, Italia. Ha operato principalmente su mercati italiani ed europei (EMEA), con esperienza in eventi internazionali come il Salone del Mobile di Milano, Maison&Objet di Parigi e fiere di settore B2B. Gestisce strategie marketing sia per il mercato italiano che per l'export.",
  },
  {
    question: 'Come Alberto Pasinati gestisce il budget marketing?',
    answer:
      "Alberto Pasinati adotta un approccio strutturato alla gestione del budget marketing: definisce le priorità di investimento in base agli obiettivi di business, alloca le risorse tra canali digitali, eventi e attività offline, seleziona e coordina agenzie e fornitori, e monitora il ROI attraverso dashboard dedicate. Ha gestito budget marketing superiori a €1M/anno con accountability diretta sui risultati.",
  },
  {
    question: 'Cosa distingue un Marketing Manager da un consulente di marketing?',
    answer:
      "Un Marketing Manager è un professionista interno che guida la strategia di marketing come parte del team di un'azienda, con responsabilità diretta sul budget, sul team e sui risultati di business a lungo termine. Un consulente opera tipicamente su progetti specifici e limitati nel tempo. Alberto Pasinati lavora come Marketing Manager integrando visione strategica, esecuzione operativa e leadership del team.",
  },
];
