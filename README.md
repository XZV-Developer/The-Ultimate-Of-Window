# The Website — Next.js (SSG) scaffold

This project is now a minimal Next.js app with an SSG example and a simple client-only login flow.

## Pages

- `/` — Landing page with a **Start** button that navigates to `/home`
- `/home` — Simple home page to expand with content
- `/login` — Simple login form (client-side, placeholder auth)

## Scripts

- `npm run dev` — start Next.js dev server
- `npm run build` — build production app
- `npm run start` — run production server
- `npm run export` — export static HTML (works because pages use SSG)

## Next steps

- Replace placeholder auth with a real auth provider
- Add more SSG pages or dynamic routes
- Add tests and CI
