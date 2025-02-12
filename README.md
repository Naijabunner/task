# Task App

## Overview
Task App is a web application built with Next.js, React, and Tailwind CSS. It includes various UI components and utilities to manage tasks efficiently.

## Features
- Responsive design with Tailwind CSS
- State management with React Query
- Form handling with Formik and Yup
- UI components from Radix UI and Lucide React
- Theming support with Next Themes

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Naijabunner/task.git
   cd task
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server
To start the development server, run:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

### Building for Production
To build the application for production, run:
```bash
npm run build
# or
yarn build
```
This will create an optimized production build in the `.next` directory.

### Starting the Production Server
After building the application, you can start the production server with:
```bash
npm start
# or
yarn start
```

## Project Structure
```
/c:/Users/USER/projects/task/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   └── /* ...other files... */
├── components/
│   ├── Layout/
│   │   └── DashboardLayout.tsx
│   └── ui/
│       └── sonner.tsx
├── public/
│   └── /* ...static assets... */
├── pages/
│   └── /* ...Next.js pages... */
├── package.json
└── /* ...other files... */
```

## Dependencies
### Main Dependencies
- `next`: ^15.1.7
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `@tanstack/react-query`: ^5.66.0
- `formik`: ^2.4.6
- `yup`: ^1.6.1
- `tailwindcss`: ^3.4.1

### Dev Dependencies
- `typescript`: ^5
- `postcss`: ^8
- `@types/react`: ^19
- `@types/node`: ^20

## License
This project is licensed under the MIT License.
