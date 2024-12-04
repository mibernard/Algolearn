# AlgoLearn

**AlgoLearn** is an interactive platform designed to help users learn and practice algorithms revolving around Algorand Smart Contracts. Built with modern web technologies, it provides an intuitive interface and multi-language support to enhance the learning experience.

## 🌐 Live Demo

The application is live and can be accessed here:

Visit [https://algo-learn.com](https://algo-learn.com)

## 🚀 Features

- **Interactive Algorithm Practice:** Solve problems and see step-by-step visualizations of algorithms.
- **Multi-Language Support:** Practice algorithms in Python, Java, and Go.
- **User-Friendly UI:** Clean and responsive design using Tailwind CSS.
- **State Management:** Efficient state management with React Hooks.
- **Scalable Framework:** Built with Next.js for performance and flexibility.

## 🛠️ Technologies Used

| **Category**            | **Technologies/Tools**                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Frontend**            | React, Next.js, TypeScript, Tailwind CSS, Shadcn/UI, Lucide React, Axios, React Suspense, Next.js Image & Link components                                                                                                                                                                                                                                                            |
| **Backend**             | Next.js API Routes, vm2 (JavaScript sandboxing), Judge0 via RapidAPI (Python and Go code execution), Axios                                                                                                                                                                                                                                                                                                   |
| **Data Management**     | Static Data Files (`@/data/chapters`)                                                                                                                                                                                                                                                                                                                                                                        |
| **Development Tools**   | Node.js, npm, TypeScript, ESLint, Prettier                                                                                                                                                                                                                                                                                                                                          |
| **Version Control**     | GitHub                                                                                                                                                                                                                                                                                                                                                                                                       |
| **UI/UX Features**      | Responsive Design, Dark Mode Toggle, Accessibility (ARIA), Dropdown Menus                                                                                                                                                                                                                                                                                                                                    |
| **Icons**               | Lucide React Icons                                                                                                                                                                                                                                                                                                                                                                                            |
| **Security**            | vm2 for JavaScript sandboxing, External code execution via Judge0, Error handling and logging                                                                                                                                                                                                                                                                                                                   |
| **Deployment**          | Vercel                                                                                                                                                                                                                                                                                                                                  |
| **Additional Libraries**| Axios for HTTP requests, React Suspense for asynchronous data fetching, Shadcn/UI or similar component library for UI components                                                                                                                                                                                                                                                                                    |

## 🛡️ Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```
   git clone https://github.com/mibernard/algolearn.git
   cd algolearn
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

4. **Run the Application:**
   ```
   npm run dev
   ```

6. **Access the Application:** Open your browser and navigate to http://localhost:3000.

## 🔑 API Key Setup

To enable the functionality of the embedded code compilers, you need to configure environment variables for API access. Follow these steps:

1. **Create a `.env.local` File**:
   In the root directory of the project, create a file named `.env.local`. This file will hold your environment variables and should not be committed to version control.
   
2. **Add the Following Variables:** Open .env.local in a text editor and add your API keys and configuration:
   ```
   # API Key for RapidAPI (Judge0)
   RAPIDAPI_KEY=your-rapidapi-key-here

   # Judge0 Host and API URL
   JUDGE0_HOST=judge0-ce.p.rapidapi.com
   JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com/submissions
   ```

3. **Secure Your API Keys:** Ensure .env.local is included in your .gitignore file to prevent it from being pushed to version control. This is already handled in the provided .gitignore configuration:
   ```
   # Environment Files
   .env
   .env.local
   ```
4. **Restart the Development Server:** After adding the environment variables, restart your development server to ensure the changes take effect:
   ```
   npm run dev
   ```

5. **Notes for Collaborators:** If you're working with collaborators, share the required keys securely (e.g., via a password manager or secure messaging) and provide the .env.example template included in this repository.

## 🌐 Deployment
  The application is hosted on Vercel. To deploy your changes, push your changes to the main branch. Vercel will automatically trigger a build and deploy the updated application.

## 🤝 Contributing
  Contributions are welcome! Follow these steps to contribute:
  Fork the repository.
  Create a feature branch: git checkout -b feature-name.
  Commit your changes: git commit -m "Add a feature".
  Push to the branch: git push origin feature-name.
  Submit a pull request.

## 📜 License
  This project is licensed under the MIT License.

## 👩‍💻 Authors
  Matthew Bernard - Creator and Maintainer
