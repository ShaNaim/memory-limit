# NeuroFlux

A fast-paced cognitive workout that fuses mental math with memory mastery.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Memory Limit challenges users to recall sequences of numbers while performing mental arithmetic. It’s designed to improve cognitive speed, working memory, and numerical agility.

## Features

- **Random Sequence Generation:** Generates a customizable sequence of `n` random integers from 0 to `s`.
- **Timed Memory Phase:** Displays each number for a brief interval before hiding.
- **Answer Input & Validation:** Users input results; the app validates answers (each answer should be the shown number plus 1).
- **Multiple Difficulty Levels:** Adjust both sequence length and maximum value.
- **Responsive Design:** Mobile-first layout with Tailwind CSS and DaisyUI.
- **SPA Navigation:** Vue Router powers a multi-page experience (Home, About, Game).

## Demo

Link to live demo (if hosted).

## Technologies

- **Vue 3**: Reactive UI components and Composition API.
- **Vite**: Blazing-fast development server and build tool.
- **Vue Router**: Client-side routing between views.
- **Tailwind CSS & DaisyUI**: Utility-first styling, prebuilt UI components.
- **ESLint, Prettier & OXLint**: Code linting, formatting, and quality enforcement.

## Installation

```bash
git clone https://github.com/ShaNaim/memory-limit.git
cd memory-limit
npm install
npm run dev    # start development server
```

## Usage

1. Choose difficulty: sequence length (`n`) and max value (`s`).
2. Click **Start** to begin the memory phase.
3. Memorize the numbers as they appear.
4. Enter the results (each number plus 1) and submit.
5. View your score and try again to improve!

## Project Structure

```
src/
├─ assets/           # Images & static assets
├─ components/       # Reusable UI components
│  ├─ UI/             # Button components
│  ├─ navigation/     # NavBar, Footer
│  └─ templates/      # Shared templates
├─ pages/            # Route views (Home, Game, About)
├─ router/           # Vue Router configuration
├─ services/         # Business logic (random number generation, validation)
├─ styles/           # Global CSS & Tailwind config
├─ App.vue           # Root component
└─ main.js           # App bootstrap
```

## Contributing

Contributions welcome! Please open issues or pull requests.

## License

[MIT](https://github.com/ShaNaim/memory-limit/?tab=MIT-1-ov-file)

## Contact

For questions or feedback, reach out at [your-email@example.com].
