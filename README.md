# Local Service Booking — Frontend

React (Vite) frontend for the Local Service Booking System. Fully browsable
right now on mock data — no backend required to explore the UI.

## Setup

```
npm install
npm run dev
```

Opens at http://localhost:5173

## Connecting to the Django backend later

1. Create a `.env` file in this folder:
   ```
   VITE_API_URL=http://127.0.0.1:8000/api/v1
   ```
2. Swap the mock calls for real ones:
   - `src/context/AuthContext.jsx` — replace the mock `login`/`register`
     bodies with `api.post('/auth/login/', ...)` / `/auth/register/`,
     store `access`/`refresh` from the response.
   - `src/pages/ProviderListing.jsx`, `ProviderDetail.jsx` — fetch from
     `/providers/` instead of `src/data/mockData.js`.
   - `src/pages/BookingForm.jsx`, `CustomerDashboard.jsx`,
     `ProviderDashboard.jsx`, `AdminDashboard.jsx` — same swap for
     `/bookings/`, `/reviews/`, `/categories/`, `/contact/`.
3. `src/api/axios.js` already has the JWT interceptor and 401-refresh
   hook wired up — nothing to change there.

## Structure

```
src/
  api/axios.js          — axios instance + JWT interceptor
  context/AuthContext.jsx — role-based session state
  components/            — Navbar, Footer, ProviderCard, StatusBadge,
                            RatingStars, Pagination, FilterSidebar,
                            ProtectedRoute
  pages/                  — one file per route (see App.jsx for the map)
  data/mockData.js        — sample providers/bookings/reviews, remove
                            once the API is wired up
  styles/                 — tokens.css (design system) + global.css
```

## Design

"Job ticket" visual identity — deep blueprint navy + safety orange,
Archivo for display type, IBM Plex Mono for ticket IDs/status stamps.
Booking status is shown as a rotated stamp badge on a perforated
ticket card throughout the app (see `.ticket` / `.stamp` in
`styles/global.css`).
