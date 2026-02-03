# Inner Space Memory

A space-themed memory card game built with vanilla JavaScript, HTML5 and CSS3.

**[Play it live](https://antonellambr.github.io/innerspacememory/)**

## About

Inner Space Memory is a classic card matching game with a neon/space aesthetic. Players flip cards to find matching pairs before the timer runs out. The game features three difficulty levels, a stats tracker, and persistent data using localStorage.

## Features

- 3 difficulty levels (Easy, Medium, Hard)
- Countdown timer per level
- Win/lose result modal
- Player stats (games played, wins, losses, average time)
- Stats saved in localStorage across sessions
- Responsive CSS Grid layout

## Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom Properties, Grid, Flexbox, animations
- **JavaScript ES6+** - No frameworks, no libraries

## JavaScript Concepts

| Concept | Usage |
|---------|-------|
| `let` / `const` | Variable declarations throughout |
| Arrow functions | Event listeners, callbacks |
| Spread operator | Array shuffling (`[...arr]`) |
| Destructuring | Stats extraction (`const { wins, losts } = getStats()`) |
| Closures | Event listeners retaining outer scope variables |
| Advanced objects | `gameState`, `gameLevel` configuration |
| Dynamic properties | `gameLevel[gameState.level]` |
| `filter` | Counting wins/losses from game history |
| `reduce` | Calculating average time |
| `sort` | Shuffling card array |
| `forEach` | Iterating cards, DOM elements |
| DOM manipulation | Dynamic card creation, classList, data-attributes |
| `setInterval` / `clearInterval` | Game timer |
| localStorage | Persisting game history with JSON.stringify/parse |

## Game Levels

| Level | Cards | Time |
|-------|-------|------|
| Easy | 6 | 20s |
| Medium | 12 | 40s |
| Hard | 18 | 60s |

## Project Structure

```
innerspacememory/
├── index.html
├── style.css
├── script.js
├── img/
│   ├── bg.png
│   ├── card.png
│   ├── card-1.png ... card-9.png
│   ├── home.png
│   ├── person.png
│   ├── update.png
│   ├── easy_no_bg.png
│   ├── medium_no_bg.png
│   └── hard_no_bg.png
└── README.md
```

## Run Locally

1. Clone the repository
2. Open `index.html` in a browser
3. Pick a level and play!

## License

MIT
