
# Hi, I'm Aman, and this is my Portfolio Website ! 👋

## Deployments

| Entity | Platform | URL Endpoint |
| :--- | :--- | :--- |
| **React/Frontend** | **Vercel** | [Frontend](https://i-am-raj-dev.vercel.app)|
| **Node.js/Express** | **Vercel** | [Backend](https://portfolio-payment-service-dev.vercel.app/api) |

## 🚀 Technologies Used

![Razorpay](https://img.shields.io/badge/Razorpay-0C2451&logo=razorpay&logoColor=white)
![React](https://img.shields.io/badge/React-JS-61DAFB&logo=react&logoColor=black)
![Express](https://img.shields.io/badge/Express-JS-000000&logo=express&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-Animation-88CE02e&logo=greensock&logoColor=black)
![Aceternity UI](https://img.shields.io/badge/Aceternity-UI-6366F1)
![Flowbite](https://img.shields.io/badge/Flowbite-CSS-1C64F2&logo=flowbite&logoColor=white)


## Run Locally 

Clone the project

```bash
git clone https://github.com/IAMAmanRaj/Portfolio_01.git
```
Go to the project directory

```bash
cd Portfolio_01
```

## Environment Variables

To run this project, you will be needed to add the following environment variables to your .env files individually for both frontend and backend :

### app folder [ frontend ]
```
VITE_SERVER_URL=http://localhost:5000/api
```
### api folder [ backend ]
```
RAZORPAY_KEY_ID="YOUR_KEY_ID_HERE"
RAZORPAY_SECRET="YOUR_SECRET_HERE"
PORT=5000
CORS_ORIGIN=http://localhost:5173,http://127.0.0.1:5173
```

### Docker Workflow
The project is set up with **Docker** and **Docker Compose**. This ensures environment parity and makes it easy for anyone to get the project running with a single command.

## If you do not have Docker installed, you can run the project locally using Node.js and npm.

## 🐳 Docker Development

**Prerequisites:** Docker Desktop ( or Rancher Desktop/ any other Container for managing containers ) should be installed and running.

**Quick Start:**  
```bash
docker compose up --build
```

### ⚙️ Local Setup (without Docker)
Install dependencies for both frontend and backend and start them individually :

Start the backend server:

```bash
cd api
npm i
npm run dev
```
Start the frontend development server:

```bash
cd app
npm i
npm run dev
```

## Feedback

If you have any feedback, please reach out to me at imamanraj87@gmail.com


## Related

Check out my other Projects

[Projects Section](https://github.com/IAMAmanRaj?tab=repositories)

