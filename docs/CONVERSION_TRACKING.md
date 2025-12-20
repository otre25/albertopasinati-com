# 📊 Conversion Tracking Avanzato - Documentazione

Sistema completo di tracking conversioni implementato per **albertopasinati.com** con Google Analytics 4.

---

## 🎯 Panoramica

Il sistema di conversion tracking traccia automaticamente:

✅ **Scroll Depth** - Profondità di scroll (25%, 50%, 75%, 100%)
✅ **Time on Page** - Tempo totale sulla pagina
✅ **Section Visibility** - Tempo di visualizzazione per ogni sezione
✅ **Funnel Steps** - Passi del funnel di conversione
✅ **User Engagement** - Interazioni personalizzate

---

## 📦 File Implementati

### 1. `components/Analytics.tsx`
Funzioni di tracking GA4:
- `trackScrollDepth(depth)` - Traccia profondità scroll
- `trackSectionView(sectionName, timeVisible)` - Traccia tempo su sezione
- `trackEngagement(type, value)` - Traccia engagement generico
- `trackFunnelStep(funnel, step, stepNumber, data)` - Traccia step funnel
- `trackTimeOnPage(seconds)` - Traccia tempo totale

### 2. `hooks/useConversionTracking.ts`
Custom hooks React:
- `useConversionTracking()` - Auto-traccia scroll depth e time on page
- `useSectionTracking(name, threshold)` - Traccia visibilità sezione
- `useFunnelTracking(funnelName)` - Helper per funnel tracking

---

## 🚀 Come Usare

### 1. Tracking Automatico nella HomePage

```typescript
import { useConversionTracking } from '../hooks/useConversionTracking';

const HomePage = () => {
  // Attiva tracking automatico: scroll depth + time on page
  useConversionTracking();

  return <div>...</div>;
};
```

**Eventi tracciati automaticamente:**
- `scroll_depth` - Al raggiungimento di 25%, 50%, 75%, 100%
- `time_on_page` - All'uscita dalla pagina (se > 5 secondi)

---

### 2. Tracking Visibilità Sezioni

```typescript
import { useSectionTracking } from '../hooks/useConversionTracking';

const About = () => {
  const sectionRef = useSectionTracking('chi_sono', 0.5);

  return (
    <section ref={sectionRef}>
      {/* Contenuto sezione */}
    </section>
  );
};
```

**Parametri:**
- `sectionName` - Nome univoco sezione (es. "chi_sono", "servizi", "portfolio")
- `threshold` - Percentuale visibilità minima (0.5 = 50% visibile)

**Eventi tracciati:**
- `section_view` - Quando sezione diventa invisibile dopo essere stata visibile > 2s
  - `section_name` - Nome sezione
  - `time_visible_seconds` - Tempo di visualizzazione
- `user_engagement` - Quando sezione diventa visibile (prima volta)
  - `engagement_type` = "section_visible"
  - `engagement_value` = nome sezione

---

### 3. Tracking Funnel di Conversione

```typescript
import { useFunnelTracking } from '../hooks/useConversionTracking';

const ContactModal = () => {
  const { trackStep } = useFunnelTracking('contact_form');

  const handleOpen = () => {
    trackStep('modal_opened', 1);
  };

  const handleFieldFocus = (field) => {
    trackStep('field_focused', 2, { field_name: field });
  };

  const handleSubmit = () => {
    trackStep('form_submitted', 3);
  };

  return <form>...</form>;
};
```

**Eventi tracciati:**
- `funnel_step`
  - `funnel_name` - Nome del funnel
  - `step_name` - Nome dello step
  - `step_number` - Numero progressivo step
  - `...additionalData` - Dati extra opzionali

---

### 4. Tracking CTA Clicks (già implementato)

```typescript
import { trackCTAClick } from '../components/Analytics';

<button onClick={() => trackCTAClick('contattami', 'hero')}>
  Contattami
</button>
```

**Parametri:**
- `ctaName` - Nome identificativo CTA
- `ctaLocation` - Posizione nel sito (es. "hero", "footer", "services")

---

## 📈 Eventi GA4 Disponibili

### Eventi Custom Implementati

| Evento | Parametri | Quando si attiva |
|--------|-----------|------------------|
| **scroll_depth** | `depth_percentage`, `page_path` | 25%, 50%, 75%, 100% scroll |
| **time_on_page** | `time_seconds`, `page_path` | All'uscita dalla pagina (> 5s) |
| **section_view** | `section_name`, `time_visible_seconds`, `page_path` | Sezione invisibile dopo visibilità > 2s |
| **user_engagement** | `engagement_type`, `engagement_value`, `page_path` | Interazione personalizzata |
| **funnel_step** | `funnel_name`, `step_name`, `step_number`, custom data | Step funnel completato |
| **cta_click** | `cta_name`, `cta_location` | Click su CTA |
| **project_view** | `project_title`, `project_id` | Apertura modal progetto |
| **form_submit** | `form_name` | Invio form |

---

## 🎯 Funnel di Conversione Consigliati

### Funnel 1: Contact Form (da implementare)

```typescript
const ContactModal = () => {
  const { trackStep } = useFunnelTracking('contact_form');

  // Step 1: Modal opened
  useEffect(() => {
    trackStep('modal_opened', 1);
  }, []);

  // Step 2: Form started
  const handleFieldFocus = () => {
    trackStep('form_started', 2);
  };

  // Step 3: Privacy accepted
  const handlePrivacyCheck = () => {
    trackStep('privacy_accepted', 3);
  };

  // Step 4: Form submitted
  const handleSubmit = () => {
    trackStep('form_submitted', 4);
  };
};
```

### Funnel 2: Project Engagement

```typescript
const Projects = () => {
  const { trackStep } = useFunnelTracking('project_engagement');

  // Step 1: Services section viewed
  useSectionTracking('servizi', 0.5);

  // Step 2: Portfolio scrolled to
  useEffect(() => {
    trackStep('portfolio_viewed', 1);
  }, []);

  // Step 3: Project clicked
  const handleProjectClick = (projectId) => {
    trackStep('project_clicked', 2, { project_id: projectId });
  };

  // Step 4: CTA clicked from modal
  const handleCTAClick = () => {
    trackStep('cta_from_project', 3);
  };
};
```

---

## 🔍 Visualizzazione Dati in GA4

### Report da Creare

1. **Scroll Depth Report**
   - Events: `scroll_depth`
   - Dimensioni: `depth_percentage`
   - Metriche: Event count

2. **Section Engagement Report**
   - Events: `section_view`
   - Dimensioni: `section_name`
   - Metriche: Avg `time_visible_seconds`, Event count

3. **Funnel Visualization**
   - Events: `funnel_step`
   - Filtri: `funnel_name`
   - Dimensioni: `step_name`, `step_number`
   - Metriche: Event count, Drop-off rate

4. **Time on Page Distribution**
   - Events: `time_on_page`
   - Dimensioni: `page_path`
   - Metriche: Avg `time_seconds`, Distribution

---

## 🛠️ Best Practices

### 1. Naming Convention

Usa nomi consistenti e lowercase con underscore:

✅ **Corretto:** `chi_sono`, `contact_form`, `hero_cta`
❌ **Evitare:** `Chi Sono`, `contactForm`, `Hero-CTA`

### 2. Threshold Ottimali

- **Hero/Above fold**: 0.3 (30%)
- **Sezioni standard**: 0.5 (50%)
- **Footer/Sezioni brevi**: 0.8 (80%)

### 3. Performance

Il tracking usa:
- `requestAnimationFrame` per throttling scroll
- `IntersectionObserver` per visibilità sezioni
- Tracking condizionale (solo se > 2s visibilità)

**Impatto performance**: < 5ms overhead

### 4. Privacy & GDPR

Il tracking si attiva SOLO se:
```javascript
localStorage.getItem('cookiePreferences').analytics === true
```

Cookie banner già implementato in [CookieBanner.tsx](../components/CookieBanner.tsx).

---

## 📊 Metriche Chiave da Monitorare

### Week 1-2 (Baseline)
- [ ] Scroll depth medio per pagina
- [ ] Tempo medio su ogni sezione
- [ ] Bounce rate per profondità scroll

### Week 3-4 (Optimization)
- [ ] Conversione funnel contact form
- [ ] Drop-off points nel funnel
- [ ] Sezioni con engagement più alto/basso

### Month 2+ (A/B Testing)
- [ ] Test CTA copy (baseline vs varianti)
- [ ] Test posizionamento CTA
- [ ] Test layout sezioni low-engagement

---

## 🔧 Debugging

### Verificare Tracking Funziona

1. Apri DevTools Console
2. Esegui:
```javascript
window.gtag('event', 'test_event', { test: 'value' });
```
3. Verifica in **GA4 Real-time** > Events

### Log Eventi in Development

Aggiungi in `Analytics.tsx`:
```typescript
export const trackEvent = (eventName, eventParams) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 GA4 Event:', eventName, eventParams);
  }
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};
```

---

## 🚀 Next Steps (Future Enhancements)

### 1. Heatmap Integration
```typescript
// components/Hotjar.tsx
export const initHotjar = () => {
  // Hotjar snippet
};
```

### 2. A/B Testing Framework
```typescript
// hooks/useABTest.ts
export const useABTest = (testName: string) => {
  const variant = assignVariant(testName);
  trackEvent('ab_test_assignment', { test_name: testName, variant });
  return variant;
};
```

### 3. Form Field Analytics
```typescript
// Track which fields users struggle with
trackEvent('form_field_error', {
  field_name: 'email',
  error_type: 'invalid_format'
});
```

---

## 📚 Risorse

- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Vitals](https://web.dev/vitals/)

---

**Ultimo aggiornamento**: 2024-12-20
**Maintainer**: Alberto Pasinati
