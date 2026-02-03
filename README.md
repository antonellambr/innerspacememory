# Inner Space Memory

Un gioco Memory interattivo con tema spaziale/neon, sviluppato in JavaScript vanilla come progetto portfolio.

## Descrizione

Inner Space Memory è un classico gioco di memoria dove il giocatore deve trovare tutte le coppie di carte nel minor tempo possibile. Il gioco offre tre livelli di difficoltà con un numero crescente di carte e tempo a disposizione.

## Screenshot

*Da aggiungere*

## Tecnologie

- HTML5
- CSS3 (Custom Properties, Flexbox)
- JavaScript ES6+

## Argomenti JavaScript Implementati

Questo progetto dimostra la padronanza dei seguenti concetti:

| Argomento | Stato | Dove viene usato |
|-----------|-------|------------------|
| `let` / `const` | ✅ | Tutto il progetto |
| Arrow functions | ✅ | Event listeners, callbacks |
| Parametri default | ⏳ | Da implementare |
| Spread operator | ⏳ | Shuffle array |
| Rest parameters | ⏳ | Da implementare |
| Destructuring | ⏳ | Da implementare |
| Scope e Closure | ⏳ | Timer, game logic |
| `this` keyword | ⏳ | Da implementare |
| Oggetti avanzati | ✅ | `gameState`, `gameLevel` |
| Proprietà dinamiche | ✅ | `gameLevel[gameState.level]` |
| Metodi shorthand | ⏳ | Da implementare |
| Array methods (`map`, `filter`, `reduce`, etc.) | ⏳ | Statistiche, rendering |
| DOM manipulation | ✅ | Selezione elementi, classi |
| Creazione dinamica elementi | ⏳ | Render carte |
| Classi dinamiche | ✅ | `classList.add/remove` |

## Struttura del Progetto

```
innerspacememory/
├── index.html      # Struttura HTML
├── style.css       # Stili e tema neon
├── script.js       # Logica di gioco
└── README.md       # Documentazione
```

## Livelli di Gioco

| Livello | Carte | Tempo |
|---------|-------|-------|
| Easy    | 6     | 60s   |
| Medium  | 12    | 100s  |
| Hard    | 18    | 120s  |

## Stato di Avanzamento

### Completato
- [x] Struttura HTML base
- [x] Sistema di navigazione (home/game)
- [x] Selezione livello di difficoltà
- [x] Oggetti di configurazione (`gameState`, `gameLevel`)
- [x] Funzione `updateView()` per cambio vista
- [x] Generazione array coppie di carte

### In Corso
- [ ] Shuffle delle carte (mescolare l'array)
- [ ] Rendering carte nel DOM

### Da Fare
- [ ] Logica flip carta (girare al click)
- [ ] Controllo match (verifica coppia)
- [ ] Timer countdown
- [ ] Sistema punteggio
- [ ] Schermata vittoria/sconfitta
- [ ] Modale profilo con statistiche
- [ ] Salvataggio statistiche in localStorage
- [ ] Animazioni CSS per flip carte

## Come Eseguire

1. Clona il repository
2. Apri `index.html` nel browser
3. Seleziona un livello e gioca!

## Roadmap Tecnica

### Step 1: Shuffle Array *(prossimo)*
Implementare funzione per mescolare le carte usando spread operator e `.sort()`

### Step 2: Render Carte
Creare elementi DOM dinamicamente con `createElement` e template

### Step 3: Flip Logic
Gestire click sulle carte con event delegation e closure

### Step 4: Match System
Confrontare carte girate, gestire stati matched/unmatched

### Step 5: Timer
Implementare countdown con `setInterval` e closure

### Step 6: Scoring
Calcolare punteggio basato su tempo, errori, livello

### Step 7: Statistics
Usare `reduce`, `map`, `filter` per calcolare statistiche

### Step 8: LocalStorage
Persistere dati giocatore tra sessioni

## Autore

*Il tuo nome*

## Licenza

MIT
