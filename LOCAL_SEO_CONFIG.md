# Configurazione Local SEO - To Do

Questo file contiene le istruzioni per personalizzare i dati del LocalBusiness Schema.

## 📝 DATI DA PERSONALIZZARE

### 1. Numero di Telefono
**File:** `components/StructuredData.tsx` - Riga 55

```typescript
"telephone": "+39-XXX-XXXXXXX", // ← AGGIORNA QUI
```

**Formato:** `+39-XXX-XXXXXXX` (esempio: `+39-041-1234567`)

---

### 2. Indirizzo Completo (Opzionale)
**File:** `components/StructuredData.tsx` - Riga 62

```typescript
"streetAddress": "Venezia", // ← AGGIORNA QUI se vuoi pubblicare indirizzo specifico
```

**Esempi:**
- `"Via Roma, 123"`
- `"Piazza San Marco, 45"`
- Lascia `"Venezia"` se preferisci non pubblicare indirizzo preciso

---

### 3. CAP (Codice Postale)
**File:** `components/StructuredData.tsx` - Riga 65

```typescript
"postalCode": "30100", // ← AGGIORNA se necessario
```

**Note:** `30100` è corretto per Venezia centro. Cambia se sei a Mestre (30170-30175) o altra zona.

---

### 4. Rating e Recensioni
**File:** `components/StructuredData.tsx` - Righe 173-179

```typescript
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0",     // ← Media recensioni (1-5)
  "reviewCount": "15",      // ← Numero recensioni totali
  "bestRating": "5",
  "worstRating": "1"
}
```

**Come ottenere dati reali:**
- Esporta recensioni Google My Business
- Raccogli feedback clienti LinkedIn
- **IMPORTANTE:** Usa solo dati reali e verificabili

---

### 5. Orari di Apertura (Opzionale)
**File:** `components/StructuredData.tsx` - Righe 161-172

```typescript
"openingHoursSpecification": {
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ],
  "opens": "09:00",  // ← Orario apertura
  "closes": "18:00"  // ← Orario chiusura
}
```

**Opzioni:**
- Modifica orari se diversi
- Aggiungi sabato/domenica se lavori weekend
- Rimuovi completamente il campo se lavori solo su appuntamento

---

## 🎯 BENEFICI LOCAL SEO

Una volta personalizzati questi dati, il tuo sito comparirà per:

### Ricerche "Near Me"
- ✅ "consulente marketing near me"
- ✅ "marketing manager vicino a me"
- ✅ "google ads specialist venezia"

### Local Pack (Mappa Google)
- ✅ Comparirà nella mappa locale di Google
- ✅ Rich snippet con stelle, orari, contatti

### Voice Search
- ✅ "Alexa, trova un marketing manager a Venezia"
- ✅ "Ok Google, consulente google ads vicino a me"

### Città coperte
- Venezia
- Mestre
- Padova
- Treviso
- Verona
- Tutto il Veneto

---

## ✅ CHECKLIST POST-CONFIGURAZIONE

Dopo aver aggiornato i dati:

1. [ ] Verifica Schema.org con: https://validator.schema.org/
2. [ ] Testa Rich Results: https://search.google.com/test/rich-results
3. [ ] Crea Google My Business (se non l'hai già)
4. [ ] Aggiungi NAP (Name, Address, Phone) identici ovunque:
   - Google My Business
   - LinkedIn
   - Questo sito
   - Directory locali (PagineGialle, etc.)

---

## 🚀 PROSSIMI PASSI

1. **Google My Business**
   - Crea profilo su https://business.google.com
   - Verifica indirizzo
   - Carica foto professionali
   - Richiedi recensioni ai clienti

2. **Directory Locali**
   - PagineGialle.it
   - PagineBianche.it
   - Yelp Italia
   - TripAdvisor (per servizi B2B)

3. **Backlinks Locali**
   - Camera di Commercio Venezia
   - Associazioni imprenditori Veneto
   - Blog locali su business/marketing

---

**Ultimo aggiornamento:** 2025-12-18
**Versione Schema:** 1.0.0
