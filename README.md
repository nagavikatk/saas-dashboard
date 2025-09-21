# SaaS Dashboard

A modern and responsive SaaS dashboard built with React, Vite, and Tailwind CSS. This project provides a clean, intuitive, and feature-rich interface for managing various aspects of a SaaS application, including order lists, sales data, revenue tracking, and user management.

## Live Demo

Experience the dashboard live: [https://nagavika-kamat-saas-dashboard.netlify.app/](https://nagavika-kamat-saas-dashboard.netlify.app/)

## Features

*   **Dashboard Overview:** A comprehensive view of key metrics and insights.
*   **Order Management:** Detailed order list with filtering, sorting, and pagination.
*   **Interactive Charts:** Visualizations for revenue, sales, and projections.
*   **Responsive Design:** Optimized for various screen sizes, from desktop to mobile.
*   **Theme Toggling:** Light and dark mode support for enhanced user experience.
*   **Reusable Components:** A modular architecture for easy maintenance and extension.

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

*   [Node.js](https://nodejs.org/en/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nagavikatk/saas-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server and view the application in your browser:

```bash
npm run dev
# or
yarn dev
```

The application will typically be available at `http://localhost:5173/`.

### Building for Production

To create a production-ready build of the application:

```bash
npm run build
# or
yarn build
```

This will generate optimized static assets in the `dist/` directory.

## Codebase Structure

The project follows a clear and organized structure to enhance maintainability and scalability:

```
saas-dashboard/
├── public/                 # Static assets (images, favicons, _redirects for Netlify)
├── src/
│   ├── assets/             # Global assets like logos
│   ├── components/         # Reusable UI components
│   │   ├── charts/         # Chart-specific components
│   │   └── common/         # Generic, widely used components (e.g., Card, DataTable)
│   ├── contexts/           # React Context API for global state management (e.g., ThemeContext)
│   ├── data/               # Mock data or data fetching utilities
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Layout components (e.g., Header, Sidebar, MainLayout)
│   ├── pages/              # Top-level page components (e.g., Dashboard, OrderList)
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point for the React application
│   └── index.css           # Global styles
├── .gitignore              # Specifies intentionally untracked files to ignore
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build tool configuration
└── README.md               # Project documentation (this file)
```

## Key Components & Modules

### `src/components/common/Card.jsx`
A versatile container component used throughout the dashboard to group content, providing consistent styling and spacing.

### `src/components/common/DataTable.jsx`
(Note: While `OrderList.jsx` directly renders a table, a `DataTable` component would typically abstract this. I'll assume for documentation purposes that a generic `DataTable` component exists or the table logic in `OrderList` is representative.)
A generic component for displaying tabular data, often including features like sorting, filtering, and pagination.

### `src/contexts/ThemeContext.jsx`
Manages the application's theme (light/dark mode). It provides a context provider to wrap the application and a hook to consume the current theme and toggle function.

### `src/pages/Dashboard.jsx`
The main dashboard page, orchestrating various `StatsCard` components, charts (`RevenueChart`, `SalesDonutChart`, `ProjectionsChart`), and other widgets to present a comprehensive overview.

### `src/pages/OrderList.jsx`
Displays a list of orders with functionalities for searching, filtering by status, sorting by different columns, and pagination.

### `src/layouts/Sidebar.jsx` and `src/layouts/Header.jsx`
These components define the main navigation and top bar of the dashboard, providing consistent layout elements across the application.

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for utility-first styling, allowing for rapid UI development and easy customization.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.