# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"(I Know You're Having Fun But) I'm Still Working" is a desktop/workplace simulator game built for the 10th Idle Thumbs Wizard Jam. Players are a new employee at "GlobalEarth" who must identify animals for ecology data while being interrupted by chatty coworkers and a chaotic desktop environment. Playable at stillworking.me.

## Tech Stack

- **Backend:** Ruby 2.6.5, Rails 6.0, PostgreSQL
- **Frontend:** Webpacker 4 with JavaScript (ES6 modules), ERB-embedded JS files (`.js.erb`)
- **Templates:** HAML (not ERB)
- **Window Manager:** `simple-window-manager` npm package for the simulated desktop UI
- **Node:** 13.6.0 (see `.tool-versions`)

## Commands

```bash
bin/rails server          # Start dev server
bin/rails db:create       # Create PostgreSQL databases
bin/rails db:migrate      # Run migrations
bin/rails db:seed          # Seed data
bin/webpack-dev-server    # Start webpack dev server (for JS hot reload)
bin/rails test            # Run test suite
bundle install            # Install Ruby dependencies
yarn install              # Install JS dependencies
```

Admin panel is available at `/admin` (RailsAdmin).

## Architecture

The app is primarily a single-page game served from `GamesController#index`. The backend is minimal — most game logic lives in client-side JavaScript.

### Game Flow (all in `app/javascript/packs/`)

1. **`game.js.erb`** — Main entry point. Orchestrates the full game loop: title screen → personality quiz → desktop simulation → game over. Manages score, timers (BSOD at 5min, game over at ~15min), and the Twitch video embed selection based on quiz score.

2. **`intro.js.erb`** — Title screen and personality quiz (5 questions). Quiz score determines which OS theme (wallpaper, startup sound, Twitch video) the player gets.

3. **`windows.js`** — Creates all desktop windows via `simple-window-manager`: work (iframe to instantwild.zsl.org), play (Twitch embed), text editor, trash, and app icons. Also contains `moveWindow`/`resizeWindow` functions that make the play window annoyingly drift and resize over the work window.

4. **`chat.js`** — Scripted chat sequences from coworkers (Dave, Susan, Karen, Chris, EAC bot) that pop up on timers. Includes a "Wizard" chatbot that gives random responses.

5. **`game_over.js`** — End screen shown when the game timer expires.

### Backend Models

- **User** — Anonymous, identified by session UUID
- **FreeTextQuestion / FreeTextAnswer** — Unused/incomplete Q&A feature (has controller + routes but not wired into the game view)
- **Question** — Plain Ruby class (not ActiveRecord) that picks a random unanswered question

### Key Patterns

- `.js.erb` files use `<%= audio_path(...) %>` and `<%= image_path(...) %>` to reference Rails asset paths from JavaScript
- Users are auto-created via `ApplicationController#current_user` using session-based UUIDs
- Chat windows cannot be closed (they reopen on close via `test.on('close', ...)`)
- The play window similarly cannot be closed and periodically moves/resizes to cover the work window
