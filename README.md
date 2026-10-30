# Quotes App

A minimalist, editorial-style quote discovery application built with React. Designed to create a calm, thoughtful space where users can discover meaningful quotes, explore wisdom by mood, and save their favorite words.

The project focuses on clean UI design, reusable React components, responsive layouts, and practical API integration.

## ✨ Overview

Words have a way of staying with us.

This application brings together meaningful quotes from different authors and perspectives in a simple, elegant interface. Inspired by literary journals and editorial design, the experience puts typography and content first.

The goal is to build more than a collection of quote cards — it's to create a personal space for inspiration, reflection, and discovery.

## 🎨 Design Direction

The application follows a **minimalist editorial design** with a warm light theme.

- Warm ivory backgrounds and subtle earthy accents
- Elegant serif typography for quotes
- Clean sans-serif typography for navigation and interface elements
- Generous whitespace and restrained visual elements
- Responsive layouts for desktop and mobile
- Subtle transitions and interactive states

The design prioritizes readability, simplicity, and a distraction-free experience.

## 🚀 Planned Features

### Discover
- Featured Quote of the Day
- Discover random quotes
- Browse recently discovered quotes
- Explore quotes by mood or category

### Explore
- Search quotes by keyword or author
- Browse quote collections
- Filter quotes by category
- Discover quotes from different authors

### Favorites
- Save quotes to a personal collection
- Remove saved quotes
- Access favorite quotes in one place

### Sharing
- Share quotes with others
- Copy quote text and author attribution
- Support native sharing where available

### Responsive Experience
- Desktop and mobile layouts
- Responsive navigation
- Mobile-friendly quote cards
- Accessible interaction targets

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI development |
| Vite | Development server and build tooling |
| JavaScript | Application logic |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | Reusable UI components |
| Lucide React | Icons |
| React Router | Client-side navigation |
| DummyJSON Quotes API | Initial quote data source |

## 🏗️ Project Structure

The frontend will follow a modular component-based architecture.

```text
src/
├── app/
│   ├── App.jsx
│   ├── AppRouter.jsx
│   └── AppLayout.jsx
│
├── components/
│   ├── layout/
│   ├── quotes/
│   ├── discovery/
│   └── ui/
│
├── pages/
│   ├── HomePage.jsx
│   ├── ExplorePage.jsx
│   └── FavoritesPage.jsx
│
├── hooks/
│   ├── useQuotes.js
│   └── useFavorites.js
│
├── services/
│   └── quotesApi.js
│
├── context/
│   └── FavoritesContext.jsx
│
├── styles/
│   └── globals.css
│
└── main.jsx
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd quotes-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🔌 API Integration

The application will initially use the [DummyJSON Quotes API](https://dummyjson.com/docs/quotes) to retrieve quote data.

Example endpoint:

```http
GET https://dummyjson.com/quotes/random
```

The API integration will be implemented through a dedicated service layer to keep data-fetching logic separate from UI components.

## 🧪 Testing

Testing will be introduced alongside feature development.

The testing strategy will focus on:

- Component rendering
- User interactions
- Favorite quote functionality
- API loading and error states
- Responsive behavior
- Accessibility

Vitest and React Testing Library are planned for frontend testing.

## 🗺️ Development Roadmap

- [ ] Initialize React + Vite project
- [ ] Configure Tailwind CSS and shadcn/ui
- [ ] Establish design tokens and typography
- [ ] Build responsive application layout
- [ ] Implement Home page
- [ ] Build reusable quote components
- [ ] Integrate Quotes API
- [ ] Implement Favorites functionality
- [ ] Add search and category filtering
- [ ] Implement sharing functionality
- [ ] Add component tests
- [ ] Polish responsive layouts and accessibility

## 📚 Learning Objectives

This project is also an opportunity to strengthen practical frontend development skills.

Key learning areas include:

- Component composition and reusable UI patterns
- React state management
- Custom hooks
- Context API
- API integration and asynchronous operations
- Error handling and loading states
- Responsive design with Tailwind CSS
- Frontend testing
- Accessibility and maintainable code structure

## 📌 Project Status

**Status: In Development**

The visual direction and initial design have been finalized. Implementation will proceed incrementally, beginning with the frontend foundation and core UI components.

## 📄 License

This project is intended for learning and portfolio development.

A license will be added as the project progresses.
