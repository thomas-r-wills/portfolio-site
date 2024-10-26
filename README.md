# Thomas Wills' Portfolio

This is the source code for my personal portfolio website, built using [Next.js](https://nextjs.org/) v14, [React](https://react.dev/), and [TailwindCSS](https://tailwindcss.com/). The site showcases my experience as a Fullstack Software Engineer, Cloud Architect, Cybersecurity Analyst, and Technical Delivery Lead.

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Key Features](#key-features)
- [License](#license)
- [Contact](#contact)

## About the Project

This project is a professional portfolio site designed to highlight my skills, experience, and projects. The website includes an interactive, animated interface with dynamic content rendering, a dark/light mode switcher, and responsive design optimized for both desktop and mobile views.

## Tech Stack

- **Frontend Framework**: Next.js v14, React 19
- **Styling**: TailwindCSS
- **Package Manager**: npm
- **Bundler**: Turbopack
- **Deployment**: GitHub Pages
- **Image Handling**: Optimized using Next.js features

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thomas-r-wills/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```
    <br>This will start the development server at http://localhost:3000.

4. **Build for production**:
    ```bash
    npm run build
    ```  
    <br>The build output will be generated in the .next directory.

5. **Run the production build**:
    ```bash
    npm run start
    ```

## Usage

The portfolio features interactive animations and smooth navigation between different sections. Users can toggle between dark and light modes, flip cards for detailed descriptions, and explore projects in a responsive, grid-based layout. For mobile users, the site adjusts to a vertical scrolling format with cards optimized for touch interaction.

## Navigating the Site

- **Home**: Provides links to resume, about, projects, and contact sections.
- **Resume**: Contains information about my skills and experience.
- **About**: Offers insights into my background, learning philosophy, and personal story.
- **Projects**: Showcases various software engineering projects.
- **Contact**: Provides links to GitHub, LinkedIn, and email.

## File Structure

Here's an overview of the main files and directories:  
```plaintext
    /.github
    ├── /workflows                  # GitHub actions CI configuration
        ├── /ci-build-deploy.yml    # GitHub Actions workflow file for the site
    /cypress
    ├── /e2e                        # End-to-end tests written with Cypress
        ├── /home.cy.js             # Cypress test scripts triggered by CI/CD pipeline
    /src
    ├── /__tests__                  # Jest unit tests
        ├── /Home.test.js           # Tests for the main component
    └── /app
        ├── /assets                 # Images for projects and roles
        ├── /fonts                  # Custom fonts
        ├── 404.tsx                 # Message shown if there is a 404 error
        ├── card.tsx                # Component for displaying individual cards of content
        ├── constants.tsx           # Constants used in the main page
        ├── favicon.ico             # Favicon for the site
        ├── globals.css             # Global CSS for TailwindCSS and custom styles
        ├── layout.tsx              # Main page layout configuration
        ├── robots.txt              # Crawling rules
        ├── section.tsx             # Display component used to show cards of content
        ├── sectionItems.ts         # Data structure for section content
        ├── utils.ts                # Utility functions for animations and interactions
```

## Key Features

- **Dynamic Animations**: Smooth animations for transitioning content boxes and interactive cards.
- **Responsive Design**: Adaptable layout for both desktop and mobile devices.
- **Dark/Light Mode**: Toggle between dark and light themes with preserved user settings.
- **SEO Optimized**: Includes robots.txt for search engine indexing.
- **Efficient Rendering**: Uses dynamic imports to improve performance by splitting the code.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

Feel free to reach out with any questions or collaboration opportunities:

- **GitHub**: [thomas-r-wills](https://github.com/thomas-r-wills)
- **LinkedIn**: [tomwills0001](https://www.linkedin.com/in/tomwills0001)
- **Email**: [tw8307542@gmail.com](mailto:tw8307542@gmail.com)
