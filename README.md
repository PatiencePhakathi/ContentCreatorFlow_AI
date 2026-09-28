# ContentFlow AI

ContentFlow AI is a portfolio-ready AI content generation workspace built with React, TypeScript and Vite. It demonstrates structured prompt engineering, content generation, refinement workflows, reusable templates and local demo persistence.

## Features
- Dashboard with realistic sample activity and statistics
- AI content generator for 8 professional content types
- Structured prompt optimisation with a visible optimised prompt
- Mock AI generation mode so the UI works without an API key
- Editable generated output and quick refinement actions
- Copy, save and favourite actions with browser localStorage
- Content history and saved content library
- Template library with LinkedIn, email and marketing templates
- Prompt Lab case study: basic → improved → optimised → output
- Project/About page suitable for portfolio demonstrations
- Responsive sidebar and mobile navigation
- Loading states, empty states and success notifications

## Technologies
- React
- TypeScript
- Vite
- Modern CSS
- Lucide React icons
- Browser localStorage for demo persistence

## Installation
Requirements: Node.js 18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

For a production build:

```bash
npm run build
npm run preview
```

## Environment variables
Copy `.env.example` to `.env.local` if you need local configuration.

```env
VITE_AI_MODE=mock
VITE_AI_API_URL=/api/generate
```

**Security:** never place a private OpenAI/Anthropic/Gemini/etc. API key in a Vite `VITE_*` variable. Vite exposes `VITE_*` variables to browser code. Use a server-side endpoint instead.

## AI integration
The demo currently uses `src/lib/generator.ts` for mock generation. The intended production architecture is:

`React form → secure backend /api/generate → AI provider → validated response → React editor`

The backend should own the provider API key, validate user input, apply rate limits, and return only the generated content and optional metadata.

## Prompt engineering approach
ContentFlow builds an AI-ready prompt from structured fields:

1. Role: expert writer for the requested content type
2. Content goal/topic
3. Target audience
4. Tone
5. Writing style
6. Desired length
7. Language
8. Keywords
9. Additional instructions
10. Quality constraints such as specificity, natural language and avoiding filler

The UI exposes the resulting prompt so users can understand and demonstrate the prompt-engineering layer.

## Example use case
A graduate enters:
- Type: LinkedIn post
- Topic: Generative AI at work
- Audience: South African IT graduates
- Tone: Professional
- Length: Medium
- Keywords: AI, productivity, career growth

ContentFlow converts those choices into a structured prompt and generates a LinkedIn-ready first draft. The user can then edit, shorten, expand, change tone, copy or save it.

## Project structure
```text
src/
  components/       Reusable layout and UI components
  data/             Templates and realistic demo data
  lib/              Prompt builder and mock generation logic
  pages/            Dashboard, Generator, Prompt Lab, etc.
  types.ts          Shared TypeScript types
  App.tsx           Routes
  main.tsx          Entry point
  styles.css        Responsive application styling
```

## Future improvements
- Secure backend AI integration
- Authentication and cloud-synced workspaces
- Streaming generation
- More advanced tone/style controls
- User profiles and brand voice memory
- Version history for edits
- Export to DOCX/PDF
- Team collaboration
- Usage analytics and generation quotas
- Automated prompt evaluation and quality checks
