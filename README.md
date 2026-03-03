## Edward Tran Website
A personal website used as my portfolio and blog using NextJS. More tools and features will be added over time.

## About Me
Hi, I'm Edward — a backend engineer who loves Neovim and AI tooling.

## Tech Stack
- NextJS
- ShadCN UI
- Tailwindcss

## Features

- Admin dashboard
- Authenticator (Login page)
- Full text search
- Analytic intergration

## Project Structure

```
.
├── app
│   ├── (admin)
│   │   └── dashboard
│   │       ├── blog
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       └── projects
│   ├── (auth)
│   │   └── login
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── (public)
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── components
│   ├── admin
│   │   ├── app-breadcrumb.tsx
│   │   ├── app-header.tsx
│   │   ├── app-sidebar.tsx
│   │   ├── nav-main.tsx
│   │   └── new-article-form.tsx
│   ├── auth
│   │   └── login-form.tsx
│   └── ui
│       ├── breadcrumb.tsx
│       ├── button-group.tsx
│       ├── button.tsx
│       ├── collapsible.tsx
│       ├── field.tsx
│       ├── input.tsx
│       ├── item.tsx
│       ├── label.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── tooltip.tsx
│       └── typography.tsx
├── components.json
├── constants
│   └── navigation.tsx
├── eslint.config.mjs
├── features
│   ├── articles
│   │   ├── components
│   │   │   ├── admin
│   │   │   └── public
│   │   ├── contexts
│   │   └── types
│   │       └── article.ts
│   ├── comments
│   └── projects
├── hooks
│   ├── test.ts
│   ├── use-debounce.ts
│   ├── use-mobile.ts
│   └── use-mounted.ts
├── lib
│   └── utils.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── imgs
│   │   └── authorize-page-bg.png
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── tsconfig.json
├── types
│   ├── breadcrumb.ts
│   └── navigation.ts
└── yarn.lock
```

## Getting Started

```
### 1. Clone repository
git clone https://github.com/edwardtran1561/edward-tran-website.git

cd edward-tran-website

### 2. Install dependencies
yarn install

### 3. Run development server
yarn dev
```






