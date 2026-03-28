# Barplay — QR Code Icebreaker Game for Bars

Turn empty tables into conversations. Barplay puts a QR code on every table — guests scan, play trivia, and connect with strangers two tables over. Bar owners get dwell-time data to prove it works.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Auth:** NextAuth.js (email + Google OAuth)
- **Database:** PostgreSQL (Prisma ORM)
- **Fonts:** Playfair Display + DM Sans + DM Mono

## Quick Start

```bash
npm install
cp .env.local.example .env.local  # fill in values
npx prisma generate
npm run dev
```

## Environment Variables

```env
DATABASE_URL="postgresql://..."
AUTH_SECRET="..."
NEXTAUTH_URL="https://barplay.ashketing.com"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
STRIPE_SECRET_KEY=""
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
NEXT_PUBLIC_URL="https://barplay.ashketing.com"
NEXT_PUBLIC_GA_ID="G-E4NCD9HZZZ"
```

## Pages

| Page | Description |
|------|-------------|
| `/` | Landing page (10 sections) |
| `/about` | Company story, mission, differentiators |
| `/pricing` | Plans, feature comparison table, FAQ |
| `/signup` | Bar owner registration (14-day trial) |
| `/login` | Bar owner login |
| `/dashboard` | Live session dashboard, table heatmap, analytics |
| `/dashboard/analytics` | Weekly breakdowns, top questions |
| `/dashboard/qr-codes` | Generate and download QR codes |
| `/dashboard/games` | Game format library (Trivia, Would You Rather, Hot Takes) |
| `/dashboard/settings` | Venue and account settings |
| `/play/[venueId]/[tableId]` | Guest game interface (no login) |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/deck` | Pitch deck (10 Framer Motion slides) |
| `/docs` | Documentation hub (5 sections) |

## Deploy

Dockerfile included for Coolify deployment:

```bash
# Builds a ~200MB standalone container
docker build -t barplay .
docker run -p 3000:3000 barplay
```

## Brand

- **Colors:** #0F0D0A (bg), #E8872A (amber accent), #F5EDD8 (cream text)
- **Fonts:** Playfair Display (display), DM Sans (body), DM Mono (data)
- **Signature:** Amber Connection Spark animation when strangers match
