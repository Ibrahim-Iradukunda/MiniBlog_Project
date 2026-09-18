# Dev Insights Mini Blog

A small internal blog interface built for the React formative assessment. It uses Vite, React, and TypeScript and displays three sample development posts.

## Setup

This project uses Vite with the React TypeScript template.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The production build can be checked with:

```bash
npm run build
npm run preview
```

The test script runs the production build, so it checks TypeScript compilation and the Vite bundle:

```bash
npm test
```

Linting is also available with `npm run lint`.

## Project Structure

- `src/components/Header.tsx` contains the brand and the non-functional New Post navigation link.
- `src/components/PostList.tsx` owns the typed sample post data and renders the post list.
- `src/components/Post.tsx` is the reusable single-post component.
- `src/components/hoc/withLogger.tsx` contains the mount/unmount logging HOC.
- `src/types/post.ts` defines the `Post` TypeScript type.
- `src/App.css` and `src/index.css` contain the external stylesheet rules.

## Assessment Requirements

### Components and TypeScript

All components are functional components because this UI has no need for class lifecycle methods or local class state. Functional components are concise and work naturally with hooks. `Post` receives a typed `Post` object, and `PostList` uses a typed array of sample posts. The list renders three posts with a title, author, excerpt, category, and date.

### Styling

The project uses external CSS files for the shared layout and component styles. It also uses an inline style in `Post` to add the coral top border to featured posts by Maya Chen. Conditional class names highlight that author's post with a mint background. Posts published within the last 24 hours also receive a conditional `New!` badge.

### Optimization and HOC

Each post uses its stable `id` as the React list key. `Post` is wrapped with `React.memo` so it can skip rendering when its post prop has not changed. The `withLogger` higher-order component wraps `PostList` and logs mount and unmount messages through `useEffect`.

## Packages

- React and React DOM: UI rendering
- Vite: development server and production bundling
- TypeScript: static typing
- ESLint with the React Hooks and React Refresh plugins: code quality checks

No additional runtime UI libraries are used.

## Reflection

The most valuable part of this project was seeing how a small React feature can be divided into focused components while keeping the data contract explicit with TypeScript. Using a reusable `Post` component made the list easy to extend, and `React.memo` plus stable keys made the rendering choices visible rather than abstract.

The main challenge was combining the assessment techniques without making the app feel over-engineered. I kept the HOC deliberately small, used CSS for the main visual system, and reserved the inline style for one clear conditional example.
