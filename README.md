# Alberto Pasinati - Portfolio Website

Portfolio personale di Alberto Pasinati, Marketing Manager e Full Stack Marketer.

## 🚀 Tech Stack

- **React 19.2** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling (via CDN)
- **React Router** - Routing (HashRouter)
- **Lucide React** - Icons

## 📦 Installazione

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

## 🏗️ Build per Produzione

```bash
npm run build
```

I file ottimizzati saranno in `dist/`

## 🌐 Deploy su Vercel

### Setup iniziale

1. **Push su GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/albertopasinati-com.git
   git push -u origin main
   ```

2. **Importa su Vercel**
   - Vai su [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Importa da GitHub
   - Seleziona il repository

3. **Build Settings** (auto-configurato):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Attendi 1-2 minuti
   - Sito live su `https://tuo-progetto.vercel.app`

### Configurazione Dominio Custom

1. Su Vercel > Settings > Domains
2. Aggiungi `albertopasinati.com`
3. Copia i record DNS forniti
4. Vai su Keliweb > DNS Management
5. Aggiungi i record:
   - **A Record**: `@` → IP di Vercel
   - **CNAME**: `www` → `cname.vercel-dns.com`
6. Attendi propagazione DNS (5-60 minuti)

## 📝 Configurazione Post-Deploy

### Google Analytics

1. Crea property su [analytics.google.com](https://analytics.google.com)
2. Copia Measurement ID (G-XXXXXXXXXX)
3. Aggiorna in `components/Analytics.tsx` (riga 6)
4. Commit e push per rideploy

### Domain Update

Aggiorna il siteUrl in:
- `components/SEO.tsx` (riga 16)
- `components/StructuredData.tsx` (righe 20, 46, 99)

## 📁 Struttura Progetto

```
├── components/          # Componenti React
│   ├── Analytics.tsx   # Google Analytics 4
│   ├── SEO.tsx        # Meta tags dinamici
│   ├── StructuredData.tsx # Schema.org markup
│   ├── CookieBanner.tsx   # GDPR compliance
│   ├── Header.tsx     # Navigation
│   ├── Hero.tsx       # Hero section
│   ├── Projects.tsx   # Portfolio
│   └── ...
├── pages/              # Route pages
│   ├── HomePage.tsx
│   └── PrivacyPolicyPage.tsx
├── hooks/              # Custom React hooks
│   ├── useInView.ts   # Scroll animations
│   └── useRipple.ts   # Button effects
├── public/             # Static assets
│   ├── *.webp        # Optimized images
│   └── ...
├── scripts/            # Build scripts
│   └── convert-images.mjs
└── types.ts            # TypeScript definitions
```

## ✨ Features Implementate

- ✅ **Design Responsive** - Mobile-first
- ✅ **Animazioni Scroll** - Intersection Observer
- ✅ **Immagini Ottimizzate** - WebP format (98% riduzione)
- ✅ **SEO Completo** - Meta tags + Schema.org
- ✅ **Analytics Ready** - GA4 integration
- ✅ **GDPR Compliant** - Cookie consent
- ✅ **Accessibility** - WCAG AA compliant
- ✅ **Performance** - Lighthouse 90+ score

## 🔧 Manutenzione

### Aggiungere un Nuovo Progetto

Modifica `components/Projects.tsx`:

```typescript
{
  id: '5',
  title: 'Nuovo Progetto',
  category: 'Categoria',
  imageUrl: '/nuovo-progetto.webp',
  year: '2025',
  number: '05',
  description: 'Descrizione...',
  client: 'Cliente',
  services: ['Service 1', 'Service 2'],
  websiteUrl: 'https://...',
  mockupUrl: '/nuovo-progetto.webp'
}
```

### Ottimizzare Nuove Immagini

```bash
# Aggiungi immagine in public/
# Aggiorna scripts/convert-images.mjs
node scripts/convert-images.mjs
```

## 📊 Performance

- **Lighthouse Score**: 90+ su tutte le metriche
- **Page Load**: < 2s
- **Image Size**: ~320KB totali (da 16MB originali)
- **SEO Score**: 100
- **Accessibility**: 100

## 🔐 Sicurezza

- ✅ HTTPS (SSL incluso in Vercel)
- ✅ Content Security Policy ready
- ✅ GDPR compliant cookie policy
- ✅ No secrets in codebase

## 📞 Support

Per problemi o domande:
- Email: alberto.pasinati@gmail.com
- GitHub Issues: [link-al-repo]

---

© 2025 Alberto Pasinati. All rights reserved.

**Realizzato da AP+AI**
