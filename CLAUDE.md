# Backbone Consulting — Website Project Context

## What this is
The personal business website of **Miroslav Sedláček**, a solo consultant based in Prague, Czech Republic. The company is called **Backbone Consulting**.

## What Miroslav does
Two service tracks:

### 1. Operations & Automation
Helps early-stage founders and small businesses fix broken operations and automate repetitive tasks. Tools: Make, Zapier, n8n, spreadsheets, email, dashboards.
- Assessment: €400 (fixed, upfront)
- Implementation: from €800 (50/50 split)
- Ongoing support: on request
- Service Audit: from €400 (single), from €800 (baseline 3 visits)

### 2. Odoo ERP Implementation
Full Odoo ERP setup for SMBs, Czech compliance included.
- Discovery: €700 (credited to implementation if they proceed)
- Starter: €2,500 (~30h, 1–2 modules, up to 5 users)
- Standard: €6,500 (~80h, 3–4 modules, up to 15 users) — most common
- Advanced: €12,000 (~150h, 5+ modules, up to 30 users)
- Custom: on request (250h+)
- Support retainer: Light €400/mo, Standard €700/mo, Active €1,200/mo
- Overages: €85/hour

## Target clients
Small and medium businesses in Czech Republic and Slovakia, plus international clients (primarily Western Europe). All pricing in EUR.

## Miroslav's background
- **Mews** — implemented cloud PMS for hotels across Europe
- **Rossum** — implemented AI document processing for finance teams
- Now independent as Backbone Consulting
- One person, full accountability, no account management layers

## Contact details
- Email: miroslav.sedlacek11@gmail.com
- Phone: +420 702 065 207
- LinkedIn: linkedin.com/in/miroslavsedlacek
- Location: Prague, Czech Republic

## Case study (only one so far)
**ImunoVital Centrum** — private clinic in Bratislava (allergology, immunology, sports medicine), led by MUDr. Katarína Bergendiová. Implemented Bookio reservation system, restructured reception workflow using TPT framework (Tasks, Priorities, Time). Result: ~3 hours saved daily at reception, ~2 full reception-days returned per week, fewer schedule gaps for doctors.

## Website tech stack
- Single HTML file: `index.html`
- Pure HTML/CSS/JavaScript — no frameworks, no build tools
- Hosted on Netlify, deployed via GitHub (repo: miro-sedlacek/backbone-consulting)
- Domain: backbone-consulting.com
- Fonts: Fraunces (headings, serif) + Plus Jakarta Sans (body) — loaded from Google Fonts

## Design system
- Background: #F7F4EF (warm off-white)
- Surface: #FFFFFF
- Surface alt: #EDEBE5
- Text: #1A1916
- Text muted: #6B6860
- Accent: #2B6B47 (forest green)
- Accent dark: #1E4E33
- Accent light: #EBF4EF
- Border: #DDD9CF
- Border strong: #B5B1A8

## Design principles
- Clean, editorial, professional — not flashy
- Warm off-white background, not pure white
- Fraunces serif for all headings (distinctive, trustworthy)
- Grid-based layouts with 2px gaps between cells (not card shadows)
- Generous spacing (100px section padding)
- Scroll-reveal animations on elements
- Tabbed pricing section (Automation tab | Odoo tab)
- Dark contact section at the bottom (#1A1916 background)

## Tone of voice
Direct, honest, no-nonsense. Written for founders and business owners who are busy and sceptical of consultants. No fluff, no buzzwords. Concrete problems, concrete prices, concrete outcomes.

## What still needs doing
- Czech language version of the site
- More case studies as they come in
- Contact form (Netlify Forms — free up to 100 submissions/month)
- Possibly a blog/insights section for SEO

## How to push changes live
1. Make changes to index.html
2. `git add .`
3. `git commit -m "describe the change"`
4. `git push`
5. Netlify auto-deploys in ~30 seconds
