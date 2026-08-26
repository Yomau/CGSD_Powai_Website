# CGKG Royapuram — Website Clone (PRD)

## Original Problem Statement
Build a pixel-perfect clone of https://www.cgkgroyapuram.com/ (Coast Guard Kindergarten, Royapuram).
Match design, layout, colors (white bg, navy text, indigo accents, orange highlights), fonts, animations,
structure and responsive behavior. Use the provided uploaded images.

## Tech Stack
- Frontend: React + React Router DOM + Tailwind CSS + Shadcn UI. Icons via lucide-react.
- Backend: FastAPI + MongoDB (NOT yet implemented).
- Data: currently 100% mock (`/app/frontend/src/mock.js`).

## Architecture
```
/app/frontend/src/
├── mock.js            # all static data + image URLs (LOGO = new transparent crest PNG)
├── App.js             # routing + <Preloader/> + <RouteLoader/> (page-transition spinner demo)
├── App.css            # brand vars + logo Y-axis flip animations (.logo-flip-once/.logo-flip-loop)
├── index.css
├── components/
│   ├── Header.jsx, Footer.jsx, HeroSlider.jsx, WhatsAppButton.jsx, SocialSidebar.jsx,
│   ├── QuickLinks.jsx, HomeSections.jsx, NewsGallery.jsx, PageHero.jsx
│   ├── Preloader.jsx     # full-screen splash, 1.5s ease-out Y-flip on first load
│   └── LogoSpinner.jsx   # reusable loading spinner (continuous Y-flip logo)
└── pages/ Home, About, TeachingStaff, MissionVision, Administration, Admission,
           Facilities, Gallery, Events, Contact
```

## Implemented (2026-06)
- Full multi-page frontend clone (mock-data driven), matching original theme.
- **Rebranded location Royapuram → Powai (2026-06):** site-wide swap of locality, address,
  city/state (Chennai/Tamil Nadu → Mumbai/Maharashtra), landmarks (now "near IDBI Bank, MHADA Colony").
  Full address: 16 B, Jogeshwari - Vikhroli Link Rd, near IDBI Bank, MHADA Colony 20, Powai, Mumbai,
  Maharashtra 400076. Updated: Header/Footer/Preloader labels, copyright, Home/About/Admission copy,
  news testimonials, Contact map embed + new "Get Directions" link (share.google), SEO title/meta/OG,
  and added schema.org Preschool JSON-LD in public/index.html. mock.js CONTACT gained `mapEmbed` + `directions`.
  - FLAGGED (kept as-is per client, 2026-08): phone `+91 78456 81810` & whatsapp `7845681810`,
    and email `info@cgkgroyapuram.com`.
- **Real Powai photos (2026-08):** hero banner (5), News & Events (5: Annual Day 2026, Fancy Dress,
  Little Master Chefs, Red Day, Janmashtami), and Gallery (15 real photos incl. flag hoisting, graduation,
  sports, Teachers' Day, festivals). All old cgkgroyapuram.com/webp gallery URLs removed.
  Note: About/Home AboutSection still use old USER_IMAGES (Republic Day) — not yet replaced.
- **Logo animations (2026-06):**
  - New transparent-background crest logo used everywhere (`LOGO` in mock.js).
  - `Preloader`: full-screen splash on first load; logo does a smooth ease-out Y-axis
    flip (~1.5s, 720deg) then fades out. Verified via screenshot (caught mid-flip).
  - `LogoSpinner`: reusable continuous Y-axis spin loader (size/label props, data-testid="logo-spinner").
  - `RouteLoader` in App.js: shows LogoSpinner overlay ~650ms on each route change (demo of reusable spinner).
  - CSS uses `perspective` on parent (true 3D flip, no flat squish); respects `prefers-reduced-motion` (static logo).
  - Pure CSS animations, no extra libraries.

## Backlog (not started)
- P1: `contracts.md` API contracts; replace mock.js with backend.
- P2: FastAPI models + CRUD for Events / News / Gallery.
- P3: Frontend ↔ backend integration; remove mock.js.
- P3: Wire LogoSpinner into real async states (admission form submit, gallery fetch) once backend exists.

## Notes
- Preview URL comes from REACT_APP_BACKEND_URL only.
- No backend / auth / integrations yet. No credentials needed.
