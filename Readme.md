# CSCI 5709 Grp-14

- _Date Created_: 24 May 2024
- _Last Modification Date_: 09 August 2024
- _Deployed Application URL_: <https://bidsphere.netlify.app/>
- _Repository GitLab URL_: <https://git.cs.dal.ca/kumawat/csci-5709-grp-14/-/tree/main>

## Authors

- [Ashish Bhasin](ashish.bhasin@dal.ca) - _(Owner)_
- [Christin Saji](christin.saji@dal.ca) - _(Owner)_
- [Dheemanth Rajendra Prasad Kumawat](dh243394@dal.ca) - _(Owner)_
- [Jaydipsinh Ranjitsinh Padhiyar](jy761996@dal.ca) - _(Owner)_
- [Nizamul Kazi](kazinizamul@dal.ca) - _(Owner)_
- [Vraj Shah](vr597381@dal.ca) - _(Owner)_

## About

This application is built using React.js as the frontend framework, following the atomic design pattern and Node.js and Springboot as the backend technologies. It aims to simplify the tender bidding process, offering a comprehensive platform for both issuers and bidders. It provides a transparent, efficient, and user-friendly environment where issuers can create and manage tenders, while bidders can easily place and manage their bids. The platform is designed to enhance user experience with secure transactions, smooth communication, and effective contract manage.

## Built With

- [Spring Boot](https://spring.io/projects/spring-boot) - Backend framework for Java applications
- [Maven](https://maven.apache.org/) - Dependency Management and build tool
- [Docker](https://www.docker.com/) - Containerization platform
- [Render](https://render.com/) - Cloud platform for deploying backend
- [React](https://reactjs.org/) - Frontend JavaScript library
- [Vite](https://vitejs.dev/) - Frontend build tool
- [Netlify](https://www.netlify.com/) - Frontend deployment platform
- [AWS](https://aws.amazon.com/) - Cloud platform for file storage
- [Amazon S3](https://aws.amazon.com/s3/) - Service for storing files

## Setup and Installation

### Languages and Tools Used

<p align="left"> 
<a href="https://nodejs.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" width="40" height="40"/> </a>
<a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/java/java-vertical.svg" alt="java" width="30" height="50"/> </a>
<a href="https://maven.apache.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/apache_maven/apache_maven-icon.svg" alt="maven" width="40" height="40"/> </a> 
<a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring boot" width="40" height="40"/> </a> 
<a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="docker" width="40" height="40"/> </a> 
<a href="https://render.com/" target="_blank" rel="noreferrer"> <img src="https://upload.vectorlogo.zone/logos/render/images/6549c51d-de40-4016-97ae-8f49f5c94043.svg" alt="render" width="40" height="40"/> </a> 
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" width="40" height="40"/> </a>
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-ar21.svg" alt="vite" width="40" height="40"/> </a>
<a href="https://www.netlify.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="netlify" width="40" height="40"/> </a>
<a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="aws" width="40" height="40"/> </a>
<a href="https://aws.amazon.com/s3/" target="_blank" rel="noreferrer"> <img src="https://seeklogo.com/images/A/amazon-s3-simple-storage-service-logo-9A3F37976E-seeklogo.com.png" alt="amazon s3" width="40" height="40"/> </a>
</p>

### Prerequisites

Before you begin, ensure you have the following installed:

- [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven 3.8.4](https://maven.apache.org/download.cgi)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS S3 Bucket](https://aws.amazon.com/s3/)

### Installation Steps

Follow these steps to set up and run the project locally.

#### 1. Clone the Repository

Clone the repository using HTTPS:

```bash
git clone https://git.cs.dal.ca/kumawat/csci-5709-grp-14.git
```

#### 2. Navigate to the Project Directory

Navigate to the project directory for the tutorial:

```bash
cd csci-5709-grp-14/
```

#### 3. Build and Run the Backend (Spring Boot)

Navigate to the Spring Boot directory:

```bash
cd server/springboot
```

Build the Docker image:

```bash
docker build -t assignment3-app .
```

Run the Docker container:

```bash
docker run -p 8080:8080 assignment3-app
```

Open your web browser and go to [http://localhost:8080](http://localhost:8080) to access the API.

#### 4. Set Up and Run the Frontend (React)

Navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your web browser and go to [http://localhost:5173](http://localhost:5173) to access the frontend application.

#### 5. Build and Run the Node.js Server

Navigate to the Node.js server directory:

```bash
cd ../server/node
```

Install the dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Open your web browser and go to [http://localhost:5001](http://localhost:5001) to access the Node.js server.

This setup ensures that both your frontend and backend are running locally, allowing you to test and develop the application seamlessly. If you have any specific configurations or environment variables, make sure to set them up accordingly.

## Deployment

After setting up and running the project locally, you can deploy the Node.js backend, Spring Boot backend, and React.js frontend to the cloud platforms Render and Netlify, respectively. Follow the steps below for each deployment:

### Deploying the Node.js Backend to Render

To deploy the Node.js backend to Render, follow these steps:

1. **Sign In to Render**

   - Login to your Render account at [Render](https://render.com/).

2. **Create a New Web Service**

   - Click on "New" and select "Web Service".
   - Connect to your GitLab repository.
   - Select the branch to deploy from.

3. **Configure the Web Service**

   - Set the root directory to `server/node`.
   - Set the build command to `npm install`.
   - Set the start command to `node index.js` or `npm start`.

4. **Set Environment Variables**

   - Add all required environment variables from your `.env` file.

5. **Deploy**

   - Click "Create Web Service" to start the deployment process.

### Deploying the Spring Boot Backend to Render (Docker)

To deploy the Spring Boot backend using Docker on Render, follow these steps:

1. **Sign In to Render**

   - Login to your Render account at [Render](https://render.com/).

2. **Create a New Web Service**

   - Click on "New" and select "Web Service".
   - Connect to your GitLab repository.
   - Select the branch to deploy from.

3. **Configure the Web Service**

   - Set the root directory to `server/springboot`.
   - Choose "Docker" as the environment.
   - Set the Dockerfile path if it's not in the root directory (e.g., `Dockerfile`).

4. **Set Environment Variables**

   - Add all required environment variables from your application properties or `.env` file.

5. **Deploy**

   - Click "Create Web Service" to start the deployment process.

### Deploying the React.js Frontend to Netlify

To deploy the React.js frontend to Netlify, follow these steps:

1. **Sign In to Netlify**

   - Login to your Netlify account at [Netlify](https://www.netlify.com/).

2. **Create a New Site**

   - Click on "New site from Git".
   - Connect to your GitLab repository.
   - Select the branch to deploy from.

3. **Configure the Site**

   - Set the build command to `npm run build`.
   - Set the publish directory to `frontend/dist`.
   - Ensure that the `netlify.toml` file is correctly configured and located in the root directory of your frontend project.

4. **Add the `netlify.toml` File**

   - Ensure the `netlify.toml` file is located in the root of the `frontend` directory. This file should include your build settings, redirects, and other configurations needed for Netlify.
   - Example `netlify.toml` content:
     ```toml
     [build]
       command = "npm run build"
       publish = "dist"

     [[redirects]]
       from = "/*"
       to = "/index.html"
       status = 200
     ```

5. **Deploy**

   - Click "Deploy site" to start the deployment process.

Once deployed, Netlify will provide a URL for the frontend, and Render will provide URLs for the backends. You can use these URLs to access the application in a live environment.


## Folder Structure 
#### Frontend:
```
frontend/
├── dist/ # Build output directory
├── node_modules/ # Node.js packages
├── public/ # Public assets
└── src/ # Source files
├── components/ # Reusable components
│ ├── atoms/ # Basic building blocks
│ ├── molecules/ # Compound components made up of atoms
│ ├── organisms/ # Complex components made up of molecules
│ ├── pages/ # Page-level components
│ ├── templates/ # Layout templates
│ └── utils/ # Utility functions and helpers
├── core/ # Core application modules
│ ├── configs/ # Configuration files
│ ├── routes/ # Application routes
| ├── App.jsx # Main application component
| ├── index.css # Global CSS
└── index.jsx # Entry point of the application
├── data/ # Data handling and state management
├── services/ # Services for API calls and business logic

```
#### Node Backend:
```
server/
└── node/
├── dist/ # Build output directory
└── src/ # Source files
├── controller/ # Route controllers
├── middleware/ # Middleware functions
├── model/ # Data models
└── routes/ # API routes
```

#### SpringBoot Backend:
```
springboot/
└── bidsphere/
└── src/
├── main/
│ ├── java/com/g14/bidsphere/
│ │ ├── config/ # Configuration classes
│ │ ├── controller/ # REST controllers
│ │ ├── Dto/ # Data Transfer Objects
│ │ ├── exception/ # Exception handling
│ │ ├── model/ # Data models
│ │ ├── repository/ # Repository interfaces
│ │ ├── request/ # Request payloads
│ │ ├── service/ # Service classes
│ │ └── util/ # Utility classes
│ ├── resources/ # Resource files
└── test/ # Test files
```

## Sources Used

### frontend/src/components/atoms/accordian/index.jsx

_Line 20_

```
The arrow svg is used from (https://www.svgrepo.com/svg/80156/down-arrow) which is opened licensed svg vector and icons site.
```

### frontend/src/components/molecules/ContactForm/index.jsx

_Lines 30 - 32_

```
if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Invalid email format";
    }

```

The code above was created by adapting the code in [JavaScript Email Validation: Tutorial with Code Snippets](https://mailtrap.io/blog/javascript-email-validation/) as shown below:

```
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

```

<!---How---> 
- The code in [JavaScript Email Validation: Tutorial with Code Snippets](https://mailtrap.io/blog/javascript-email-validation/) was implemented by using the regular expression for email validation.
<!---Why---> 
- [JavaScript Email Validation: Tutorial with Code Snippets](https://mailtrap.io/blog/javascript-email-validation/)'s Code was used because it provides a simple and effective way to validate email addresses.
<!---How---> 
- [JavaScript Email Validation: Tutorial with Code Snippets](https://mailtrap.io/blog/javascript-email-validation/)'s Code was modified by integrating it into the form validation logic.

### frontend/src/components/molecules/LandingPage/Modal.jsx
_Lines 33 - 49_

Adapted Code:
```
<button className="footer-link" onClick={handleOpen}>{title}</button>
<Dialog open={open} handler={handleOpen} className=" overflow-none">
<DialogHeader>{title}
<DialogFooter className="space-x-1">

<Button variant="text" color="blue-gray" onClick={handleOpen}>
close
</Button>
</DialogFooter>
</DialogHeader>
<DialogBody className="h-[40rem] p-10 overflow-scroll mb-10">
<Typography className="font-normal">
     {formatContentToJSX()}
</Typography>
</DialogBody>
</Dialog>
```

The code above was created by adapting the code in [Tailwind CSS Dialog - React](https://www.material-tailwind.com/docs/react/dialog) as shown below:

Reference Code:
```
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
 
export function LongDialog() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen}>Long Dialog</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Long Dialog</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <Typography className="font-normal">
           Content
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
```

<!---How---> 
- The code in   was implemented [Tailwind CSS Dialog - React](https://www.material-tailwind.com/docs/react/dialog) to show terms and contidition and privacy policy modal.
<!---Why--->  
- [Tailwind CSS Dialog - React](https://www.material-tailwind.com/docs/react/dialog)'s Code was used because it provides a simple and effective React components which utilises Tailwind Css which we are implementing.
<!---How--->  
- [Tailwind CSS Dialog - React](https://www.material-tailwind.com/docs/react/dialog)'s Code was modified by integrating it with our dummy data.

### frontend/src/core/index.css

Adapted Code:
```
@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Regular.ttf"), format("truetype");
    font-weight: 400;
}

@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Medium.ttf"), format("truetype");
    font-weight: 500;
}

@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Semibold.ttf"), format("truetype");
    font-weight: 600;
}

@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Bold.ttf"), format("truetype");
    font-weight: 700;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    * {
        @apply p-0 m-0 box-border scroll-smooth;
    }
    section {
        @apply relative min-h-screen py-[70px] overflow-hidden;
    }

    body {
        background-color: #f1faee;
      }
}

@layer components {
    .link {
        @apply outline-none font-medium text-sm text-gray-10 cursor-pointer transition-colors hover:text-primary-40;
    }

    .btn {
        @apply px-6 rounded-full w-fit h-14 font-medium text-lg transition-colors duration-300;
    }

    .btn-primary {
        @apply rounded-full bg-primary-50 text-gray-10 hover:bg-primary-60 active:bg-primary-70;
    }

    .btn-outline {
        @apply bg-transparent border border-solid border-gray-10 text-gray-10 hover:bg-gray-10 hover:text-white;
    }

    .section-title-before {
        @apply before:content-[url("../shared/assets/heading-left.svg")] before:absolute before:-translate-x-full before:-translate-y-2/4;
    }

    .section-title-after {
        @apply after:content-[url("../shared/assets/heading-right.svg")] after:absolute after:-translate-y-1/4;
    }

    .footer-col {
        @apply flex flex-col gap-y-4 basis-[250px];
    }

    .social-icon {
        @apply p-1.5 bg-gray-30 rounded-full text-white;
    }

    .footer-heading {
        @apply text-xl font-semibold text-white;
    }

    .footer-link {
        @apply w-fit text-lg !leading-[normal] text-gray-80 hover:text-primary-50;
    }
}

.header__menu-icon span {
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #292c32;
    transition: all 200ms ease;
}

.header__menu-icon span:nth-child(1) {
    top: 0;
    left: 0;
    transform: translate(0);
}

.header__menu-icon span:nth-child(2) {
    top: 7px;
    left: 0;
    transform: translate(8px);
}

.header__menu-icon span:nth-child(3) {
    top: 14px;
    left: 0;
    transform: translate(4px);
}

.header__menu-icon:hover:not(.active) span:nth-child(1) {
    transform: translate(4px);
}

.header__menu-icon:hover:not(.active) span:nth-child(2) {
    transform: translate(0);
}

.header__menu-icon:hover:not(.active) span:nth-child(3) {
    transform: translate(8px);
}

.header__menu-icon.active span:nth-child(1) {
    top: 7px;
    transform: translate(0) rotate(225deg);
}

.header__menu-icon.active span:nth-child(2) {
    top: 7px;
    transform: translate(20px);
}

.header__menu-icon.active span:nth-child(3) {
    top: 7px;
    transform: translate(0) rotate(135deg);
}

[data-difficulty="short"] {
    --bg: #049905;
    --bg-alpha-35: rgba(4, 154, 4, 0.35);
}


```

The code above was created by adapting the code in [Responsive Landing Page](https://github.com/xdcode2/course-website) as shown below:

Reference Code:
```
@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Regular.ttf"), format("truetype");
    font-weight: 400;
}

@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Medium.ttf"), format("truetype");
    font-weight: 500;
}

@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Semibold.ttf"), format("truetype");
    font-weight: 600;
}

@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Bold.ttf"), format("truetype");
    font-weight: 700;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    * {
        @apply p-0 m-0 box-border scroll-smooth;
    }
    section {
        @apply relative min-h-screen py-[70px] overflow-hidden;
    }

    img {
        @apply w-full h-full object-cover select-none;
    }
}

@layer components {
    .link {
        @apply outline-none font-medium text-lg text-gray-10 cursor-pointer transition-colors hover:text-primary-40;
    }

    .btn {
        @apply px-6 rounded-full w-fit h-14 font-medium text-lg transition-colors duration-300;
    }

    .btn-primary {
        @apply rounded-full bg-primary-50 text-gray-10 hover:bg-primary-60 active:bg-primary-70;
    }

    .btn-outline {
        @apply bg-transparent border border-solid border-gray-10 text-gray-10 hover:bg-gray-10 hover:text-white;
    }

    .section-title-before {
        @apply before:content-[url("./assets/heading-left.svg")] before:absolute before:-translate-x-full before:-translate-y-2/4;
    }

    .section-title-after {
        @apply after:content-[url("./assets/heading-right.svg")] after:absolute after:-translate-y-1/4;
    }

    .footer-col {
        @apply flex flex-col gap-y-4 basis-[250px];
    }

    .social-icon {
        @apply p-1.5 bg-gray-30 rounded-full text-white;
    }

    .footer-heading {
        @apply text-xl font-semibold text-white;
    }

    .footer-link {
        @apply w-fit text-lg !leading-[normal] text-gray-80 hover:text-primary-50;
    }
}

::-webkit-scrollbar {
    width: 10px;
    height: 8px;
}

::-webkit-scrollbar-thumb {
    background-color: theme(colors.gray.40);
    border-radius: 100vmax;
    border: 2px solid transparent;
    background-clip: content-box;
}

.header__menu-icon span {
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #292c32;
    transition: all 200ms ease;
}

.header__menu-icon span:nth-child(1) {
    top: 0;
    left: 0;
    transform: translate(0);
}

.header__menu-icon span:nth-child(2) {
    top: 7px;
    left: 0;
    transform: translate(8px);
}

.header__menu-icon span:nth-child(3) {
    top: 14px;
    left: 0;
    transform: translate(4px);
}

.header__menu-icon:hover:not(.active) span:nth-child(1) {
    transform: translate(4px);
}

.header__menu-icon:hover:not(.active) span:nth-child(2) {
    transform: translate(0);
}

.header__menu-icon:hover:not(.active) span:nth-child(3) {
    transform: translate(8px);
}

.header__menu-icon.active span:nth-child(1) {
    top: 7px;
    transform: translate(0) rotate(225deg);
}

.header__menu-icon.active span:nth-child(2) {
    top: 7px;
    transform: translate(20px);
}

.header__menu-icon.active span:nth-child(3) {
    top: 7px;
    transform: translate(0) rotate(135deg);
}

[data-difficulty="beginner"] {
    --bg: #049905;
    --bg-alpha-35: rgba(4, 154, 4, 0.35);
}

[data-difficulty="intermediate"] {
    --bg: #f89e00;
    --bg-alpha-35: rgba(250, 158, 0, 0.35);
}

[data-difficulty="advanced"] {
    --bg: #f3381d;
    --bg-alpha-35: rgba(242, 57, 28, 0.35);
}
```

<!---How---> 
- The code  in [Responsive Landing Page](https://github.com/xdcode2/course-website)  was implemented for index.css styles.
<!---Why--->  
- [Responsive Landing Page](https://github.com/xdcode2/course-website)'s Code was used because it is open source and its styles are good reference point for our website style.
<!---How--->  
- [Responsive Landing Page](https://github.com/xdcode2/course-website)'s Code was modified by integrating it with our other color schemes and requirements.

### frontend/src/tailwind.config.js

Adapted Code:
```
theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: [
          "clamp(2.25rem, 4vw, 3.375rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        h2: [
          "clamp(2rem, 4vw, 2.75rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        h3: [
          "clamp(1.75rem, 4vw, 2.25rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        primary: {
          10: "#535c11",
          20: "#75811f",
          30: "#98a72c",
          40: "#bacc3a",
          50: "#ddf247",
          60: "#e4f56c",
          70: "#ebf791",
          80: "#f1fab5",
          90: "#f8fcda",
        },
        gray: {
          10: "#292c32",
          20: "#393e45",
          30: "#4a4f59",
          40: "#5a616c",
          50: "#6a7280",
          60: "#7d8491",
          70: "#9096a1",
          80: "#a4a9b2",
          90: "#b7bbc2",
        },
        dark:{
          primary: "#1D3557",
          secondary: "#457B9D",
        },
        light:{
          primary: "#A8DADC",
          secondary: "#F1FAEE",
        },
        logo:{
          primary:"#00008e"
        },
        bsnavyblue: "#1D3557",
        bslightgreen: "#A8DADC",
        bslightblue: "#457B9D",
        bsbase: "#F1FAEE",
      },
      borderRadius: {
        "4xl": "32px",
      },
    },
  },

```

The code above was created by adapting the code in [Responsive Landing Page](https://github.com/xdcode2/course-website) as shown below:

Reference Code:
```
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        container: {
            center: true,
            padding: "1rem",
        },
        fontFamily: {
            lato: ["Lato", "sans-serif"],
        },
        extend: {
            fontSize: {
                h1: [
                    "clamp(2.25rem, 4vw, 3.375rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                h2: [
                    "clamp(2rem, 4vw, 2.75rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                h3: [
                    "clamp(1.75rem, 4vw, 2.25rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
            },
            colors: {
                primary: {
                    10: "#535c11",
                    20: "#75811f",
                    30: "#98a72c",
                    40: "#bacc3a",
                    50: "#ddf247",
                    60: "#e4f56c",
                    70: "#ebf791",
                    80: "#f1fab5",
                    90: "#f8fcda",
                },
                gray: {
                    10: "#292c32",
                    20: "#393e45",
                    30: "#4a4f59",
                    40: "#5a616c",
                    50: "#6a7280",
                    60: "#7d8491",
                    70: "#9096a1",
                    80: "#a4a9b2",
                    90: "#b7bbc2",
                },
            },
            borderRadius: {
                "4xl": "32px",
            },
        },
    },
    plugins: [],
};
```

<!---How---> 
- The code  in [Responsive Landing Page](https://github.com/xdcode2/course-website)  was implemented for tailwind.config.js styles.
<!---Why--->  
- [Responsive Landing Page](https://github.com/xdcode2/course-website)'s Code was used because it is open source and its styles are good reference point for our website style.
<!---How--->  
- [Responsive Landing Page](https://github.com/xdcode2/course-website)'s Code was modified by integrating it with our other color schemes and requirements.

### frontend/src/components/atoms/dialog/index.jsx

_Lines 14 - 33_

```
 <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          {okbutton}
        </Button>
      </DialogActions>
  </Dialog>

```

The code above was created by adapting the code from official material ui components guide (https://mui.com/material-ui/react-dialog/) as shown below:

```
  <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
```

We have used the code in material Ui's dialog usage examples for Diaog in issuer dashboard page when no results are found using search filter. 
We changed the code by using just the dialog snippit and changed it as an atom in our code base, passing properties from parent component and making the dialog display dynamic values and perfrom open operation from the parent component.

### frontend/src/components/templates/tenderTable/hooks/useTable.js

_line 1-33_

```
import { useState, useEffect } from "react";

const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

export default useTable;
```

### frontend/src/components/atoms/tableFooter/index.jsx

_line 2-27_

```
import React, { useState } from "react";
import style from "./tableFooter.module.css";
import { useEffect } from "react";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className={style.tableFooter}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`${style.button} ${
            page === el ? style.activeButton : style.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};


export default TableFooter;
```

The above 2 code snippets have been picked from (https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd) and the full credit goes to the author. 
We have used this code with slight modification to create a paginator in the footer of the table. This article helped us a lot as we are following the atomic design approach and were looking for some sources to have the footer of the table as a separate component.

### Loader.jsx
_Lines 6 - 21_

```
export default function Loader() {
  return (
          <div className="flex h-screen w-full items-center justify-center">
            <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid
       border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
            >
              <span
                      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...
              </span>
            </div>
          </div>
  );
}

```

The code above was created by adapting the code in [Tailwind CSS React Spinner / Loader][SpinnerComponent] as shown below:

```
import React from 'react';

export default function App() {
  return (
          <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status">
            <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>
  );
}
```

- The code in [Tailwind CSS React Spinner / Loader][SpinnerComponent] was implemented by thoroughly studying original component.
  After understanding its functionality and source code, I adapted the code to suit the requirements of my assignment.
- [Tailwind CSS React Spinner / Loader][SpinnerComponent]'s Code was used because I believed it will help in making UI more suitable by showcasing buffer.
- [Tailwind CSS React Spinner / Loader][SpinnerComponent]'s Code was modified by altering it according to the need of component with minor changes in code like adding or updating attributes and
  properties as required and integrating it with other components, along with updating the content based on requirements of the assignment.

### frontend/src/components/organisms/Q&A/Questionaire/index.jsx

```
/* external imports */
import React, { useEffect } from 'react';
import { message } from 'antd';
import cx from 'classnames';
import moment from 'moment';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
/* internal components */
import Button from '@atoms/button';
import withNavbar from '@shared/hoc/withNavBar';
import ModalWrapper from './sections/ModalWrapper';
import { setquestionData } from './data/questionaire.slice';
import { setModalVisible } from './sections/ModalWrapper/slice/modalSlice';
/* styles */
import styles from './Questionaire.module.scss';
/* services */
import { getAllQuestions } from './service/Questionaire.service';

const Questions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const questionData = useSelector(
    state => state.QuesnAndAnswerReducer.QuestionaireReducer.QuestionaireReducer.questionData,
  );
  const isModalVisible = useSelector(
    state => state.QuesnAndAnswerReducer.QuestionaireReducer.ModelWrappereReducer.isModalVisible,
  );

  useEffect(() => {
    fetchQuestionData();
  }, []);

  const fetchQuestionData = () => {
    getAllQuestions()
      .then(({ data }) => {
        dispatch(setquestionData(data));
      })
      .catch((err) => {
        message.error(err);
      });
  };

  const handleButtonClick = () => {
    dispatch(setModalVisible(true));
  };

  const handleQuestionClick = (questionId) => {
    navigate(`${location.pathname}/${questionId}`);
  };

  return (
    <>
      <div className={styles.questions}>
        <div className={styles.topQuestions}>
          <div>Q <sub style={{ bottom: 'unset' }}>&</sub> A</div>
          <Button
            title="Ask a Question"
            className={styles.askButton}
            onClick={handleButtonClick}
          >Ask a Question
          </Button>
        </div>
        <div className={styles.questionList}>
          {(questionData || []).map((question) => {
            const {
              _id: qId = '',
              qTitle = '',
              qDesc = '',
              timeStamp = 0,
              askedByUsername = '',
              totalAnswers = 0,
            } = question || {};

            return (
              <div
                key={qId}
                role="button"
                tabIndex={0}
                className={styles.questionContainer}
                onClick={() => handleQuestionClick(qId)}
              >
                <div className={styles.authorSection}>
                  <FaUser className={styles.icon} />
                  <span className={styles.authorName}>{askedByUsername}</span>
                  <span className={styles.created}>asked {moment(timeStamp).fromNow()}</span>
                  <span
                    className={cx(styles.totalAnswers, {
                      [styles.noAnswers]: totalAnswers === 0,
                      [styles.hasAnswers]: totalAnswers > 0,
                    })}
                  >
                    {totalAnswers} Answers
                  </span>
                </div>
                <div className={styles.questionContent}>
                  <div className={styles.questionTitle}>{qTitle}</div>
                  <div className={styles.questionDescription}>{qDesc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isModalVisible && (
        <ModalWrapper title="Ask a Question" onSubmit={fetchQuestionData} />
      )}
    </>
  );
};

export default withNavbar(Questions);
```

### server/node/src/controller/payment.js

```
require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY)

exports.initPayment = async(req, res) => {
  const { product } = req.body;

  const lineItems = product.map((products) => {
    return {
      price_data: {
        currency: "cad",
        product_data: {
          name: products.title
        },
        unit_amount: products.amount * 100,
      },
      quantity: 1
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.FRONTEND_URL}/payment-success`,
    cancel_url: `${process.env.FRONTEND_URL}/payment-failure`,
  }) 

  res.json({ session })
}
```

The above code was modified by using the code from below link
https://docs.stripe.com/payments

### server/node/src/routes/auth.js

_Lines 08 - 31_

```
router.post(
  '/signup',
  [
    check('name').isString().notEmpty().matches(/^[A-Za-z\s]+$/),
    check('email').isEmail(),
    check('phone').isLength({ min: 10, max: 10 }).matches(/^\d{10}$/),
    check('address').notEmpty(),
    check('password')
      .isLength({ min: 8 })
      .matches(/[A-Za-z]/)
      .matches(/\d/)
      .matches(/[@$!%*#?&]/)
      .withMessage('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.'),
    check('role').notEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  authController.signup
);

```

The code above was created by adapting the code in [A Clean Approach to Using Express Validator](https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go) as shown below:

```
app.post(
  '/user',
  [
    // username must be an email
    check('username').isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 }),
  ],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    User.create({
      username: req.body.username,
      password: req.body.password,
    }).then(user => res.json(user))
  }
)

```

- <!---How---> The code in [A Clean Approach to Using Express Validator](https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go) was implemented by defining a POST route for user signup with validation checks for various input fields such as name, email, phone, address, password, and role.
- <!---Why---> [A Clean Approach to Using Express Validator](https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go)'s Code was used because it provides a robust and easy-to-use validation mechanism for handling input validation in Express.js applications.
- <!---How---> [A Clean Approach to Using Express Validator](https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go)'s Code was modified by adding additional validation rules specific to our application's requirements, such as stricter password policies.

### server/node/src/controller/auth.js

_Line 43_

```
const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

```

The code above was created by adapting the code in [JSON web token (JWT) authentication in NodeJS applications](https://mattermost.com/blog/json-web-token-jwt-authentication-in-nodejs-applications/) as shown below:

```
const token = jwt.sign({email}, process.env.JWT_SECRET, { expiresIn: "1800s" })

```

- <!---How---> The code in [JSON web token (JWT) authentication in NodeJS applications](https://mattermost.com/blog/json-web-token-jwt-authentication-in-nodejs-applications/) was implemented by defining a token generation method using JWT, including user-specific payload data.
- <!---Why---> [JSON web token (JWT) authentication in NodeJS applications](https://mattermost.com/blog/json-web-token-jwt-authentication-in-nodejs-applications/)'s Code was used because it provides a secure way to create JSON Web Tokens, which are essential for user authentication and session management.
- <!---How---> [JSON web token (JWT) authentication in NodeJS applications](https://mattermost.com/blog/json-web-token-jwt-authentication-in-nodejs-applications/)'s Code was modified by including additional user data in the payload and changing the token expiration time to meet the application's requirements.

### frontend/src/shared/assets
- All the image assets in this folder are referenced from multiple sources which are as below:
- [Enjoy the versatility of vector graphics](https://www.freepik.com/vectors)
- [Responsive Landing Page](https://github.com/xdcode2/course-website)
- [A World of Free Vector Art at Your Fingertips!](https://www.freevector.com/)


### The following 4 CSS validation errors have been detected by [w3](https://jigsaw.w3.org/), but these can be ignored as these classes are from tailwind css which has been imported and used as a css utility framework.
```
.shadow-none	Invalid RGB function
.focus\:shadow-none:focus	Invalid RGB function
.active\:shadow-none:active	Invalid RGB function
.disabled\:shadow-none:disabled	Invalid RGB function
```

## References
#### Here are some of the sources from where we have taken inspiration for uploading documents to S3, Deplotying spring boot backend on render, SpringBoot global exception handling, connecting MongoDB with SpringBoot.
- [Uploading Files to Amazon S3 Using Java](https://medium.com/@cemdrman/uploading-files-to-amazon-s3-using-java-d1d0a7e82890)
- [Free Hosting Bliss: Deploying Your Spring Boot App on Render](https://medium.com/spring-boot/free-hosting-bliss-deploying-your-spring-boot-app-on-render-d0ebd9713b9d)
-[Spring Boot Global Exception Handler](https://medium.com/@aedemirsen/spring-boot-global-exception-handler-842d7143cf2a)
-[Connecting Spring Boot to MongoDB: A Step-by-Step Guide](https://medium.com/@samuelcatalano/connecting-spring-boot-to-mongodb-a-step-by-step-guide-b9f2fd9e872d)
## Acknowledgments

This project was made possible by the collaborative efforts and contributions of various individuals and resources.

### Open Source Libraries and Frameworks

- **Spring Boot** - For providing a robust backend framework.
- **React** - For an intuitive and dynamic frontend framework.
- **Lombok** - For reducing boilerplate code in Java.
- **React Hook Form** - For efficient form handling and validation in React.
- **Axios** - For making HTTP requests from the frontend to the backend.
- **Material-UI** - For providing a set of accessible and customizable React components.
- **Tailwind CSS** - For utility-first CSS framework.
- **React Quill** - For rich text editor functionality.

### Community and Support

- **Stack Overflow** - For the invaluable support and solutions provided by the developer community.
- **GitHub Community** - For the collaborative environment and shared knowledge.

### Documentation and Tutorials

- **Spring Boot Documentation** - For comprehensive guides and reference materials.
- **React Documentation** - For detailed explanations and examples.
- **MDN Web Docs** - For extensive documentation on HTML, CSS, and JavaScript.

### Tools and Services

- **AWS S3** - For reliable and scalable storage solutions.
- **GitHub** - For version control and project management.
- **Postman** - For API testing and debugging.

We are grateful for all the support and resources that made this project possible.
