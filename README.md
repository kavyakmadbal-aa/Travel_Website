# EchoEarth Adventures

## Project Overview
EchoEarth Adventures is a web application built with React and Vite for the frontend and Express.js for the backend. The application provides an inquiry API and a modern user interface for users to interact with.

---

## Prerequisites
Before running the project, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (Node Package Manager)

---

## Project Setup

### 1. Clone the Repository
If you haven't already, clone the repository to your local machine:
```bash
# Replace <repository-url> with the actual repository URL
git clone <repository-url>
```

### 2. Navigate to the Project Directory
Navigate to the directory where the `package.json` file is located:
```powershell
cd "C:\Users\KAVYA K.M\Downloads\EchoEarth Travels\EchoEarth Travels"
```

### 3. Install Dependencies
Install all required dependencies:
```powershell
npm install
```

---

## Running the Project

### 1. Start the Development Server
To run the frontend development server:
```powershell
npm run dev
```
This will start the Vite development server. You can access the application in your browser at the URL provided in the terminal (e.g., `http://127.0.0.1:5174/`).

### 2. Start the Backend Server
To run the Express backend server:
```powershell
npm run server
```
This will start the backend server. The API will be available at:
```
http://127.0.0.1:4000
```

---

## Building and Deploying the Project

### 1. Build the Project
To create a production build of the frontend:
```powershell
npm run build
```
This will generate a `dist` folder containing the optimized production files.

### 2. Preview the Build Locally
To test the production build locally:
```powershell
npm run preview
```
This will serve the `dist` folder locally, and you can access it in your browser.

### 3. Deploy the Project
You can deploy the `dist` folder to any hosting service. Here are some options:
- **Vercel**: Use the Vercel CLI to deploy.
- **Netlify**: Use the Netlify CLI to deploy.
- **Static Hosting**: Upload the `dist` folder to a static hosting service like GitHub Pages, AWS S3, or Firebase Hosting.

For the backend, deploy the `server.js` file to a platform like Heroku, Render, or AWS.

---

## Example Commands

### Start the Development Server
```powershell
PS C:\Users\KAVYA K.M\Downloads\EchoEarth Travels> cd "EchoEarth Travels"
PS C:\Users\KAVYA K.M\Downloads\EchoEarth Travels\EchoEarth Travels> npm.cmd run dev

> echoearth-adventures@1.0.0 dev
> vite --host 127.0.0.1

Port 5173 is in use, trying another one...

  VITE v7.3.3  ready in 302 ms

  ➜  Local:   http://127.0.0.1:5174/
  ➜  press h + enter to show help
Terminate batch job (Y/N)? y
```

### Start the Backend Server
```powershell
PS C:\Users\KAVYA K.M\Downloads\EchoEarth Travels\EchoEarth Travels> npm.cmd run server

> echoearth-adventures@1.0.0 server
> node server.js

EchoEarth inquiry API running at http://127.0.0.1:4000
```

---

## License
This project is licensed under the MIT License.