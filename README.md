
# Hi, I'm Aman, and this is my Portfolio Website ! 👋



![App Screenshot](https://github.com/user-attachments/assets/454c1ae4-8346-4371-8dbb-6ea437e23c8d)


This Portfolio Website is a dynamic and interactive platform designed to showcase personal projects and skills. Built with React JS, Tailwind CSS, Aceternity UI, Flowbite, and GSAP for animations, it offers a modern and engaging user experience. The backend, developed with Express, includes live payment gateway integration using Razorpay

## Demo

https://github.com/user-attachments/assets/d4ca2fc1-a928-4be5-b461-d24a74559857
## 🔗 Live Link
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-amanraj.onrender.com/)

# Technologies Used

## Razorpay [ Payment Gateway ]
![Logo](https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg)

## React JS
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s)

## Express JS
![Logo](https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png)

## Tailwind CSS
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s)

## GSAP
![Logo](https://images.prismic.io/toyfight/65e1e07d27237c2bb829b9dc_GSAP-Meta-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C2400%2C1260&w=10800&h=1260)

## Aceternity UI
![Logo](https://framerusercontent.com/images/gPxoXjsHQH3pGW3B7RqJjiUPcw.webp?scale-down-to=1024)

## Flowbite CSS
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEWGFf_icx6QxWJgpNAHN5hvHQKho_RO1KA&s)




## Run Locally

Clone the project

```bash
git clone https://github.com/IAMAmanRaj/Portfolio_01.git
```

Go to the project directory

```bash
cd Portfolio_01
```

Install dependencies for both frontend and backend :

```bash
cd api
npm install
cd ..
cd ../app
npm install

```

Start the backend server:

```bash
cd api
npm start
```
Start the frontend development server:

```bash
cd app
npm start
```


## Installation

Install my-project with npm

```bash
npm install my-project
cd my-project
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file inside root folder

`RAZORPAY_KEY_ID`

`RAZORPAY_SECRET`




## Vite Configuration
### The vite.config.js file has to be configured according to the proxy API requests to the backend server

```bash
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
});

```
## Feedback

If you have any feedback, please reach out to me at imamanraj87@gmail.com


## Related

Check out my other Projects

[Projects Section](https://github.com/IAMAmanRaj?tab=repositories)

