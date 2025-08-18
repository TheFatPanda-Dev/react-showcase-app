# React Showcase App

This is a React-based showcase application built with Vite and TypeScript. It demonstrates a pet listing UI with features such as liking pets, viewing pet details, and a modern responsive design.

## Features

- List pets with images and details
- Like/unlike pets
- Responsive layout
- Modular component structure
- Uses Vite for fast development

## Project Structure

```
src/
  App.tsx           # Main app component
  main.tsx          # Entry point
  components/       # Reusable UI components
  data/             # Pet data (JSON and TypeScript)
  types/            # TypeScript types
  assets/           # Images and static assets
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheFatPanda-Dev/react-showcase-app.git
   cd react-showcase-app
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

### Mock API

You will need to use a mock API for pets data:

```bash
npm run json-server
```

This will start `json-server` on [http://localhost:5555](http://localhost:5555) using demo data from `src/data/pets.json`.

-## Environment Variables

You need to create a `.env` file in the project root to store environment variables for local development.

```bash
# To create a .env file in the project root:
touch .env
```

Add data to the newly created .env file

Example:

```env
VITE_API_BASE_URL=http://localhost:$VITE_API_PORT
VITE_API_PORT=5555
VITE_API_PETS_ENDPOINT=/pets
```

Variables prefixed with `VITE_` are exposed to the Vite-powered React app. Do not commit sensitive information to version control.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run json-server` - Start mock JSON server

## License

MIT
