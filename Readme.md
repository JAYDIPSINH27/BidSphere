# CSCI 5709 Grp-14

- _Date Created_: 24 May 2024
- _Last Modification Date_: 24 June 2024
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

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this project up and running on your local machine, you will first need to install the following software / libraries / plug-ins:

- Node.js
- npm (Node Package Manager)
- Java 21

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins.

### Installing

A step-by-step series of instructions to get a development environment running:

1. **Install Node.js and npm**

   - Download and install Node.js from [Node.js](https://nodejs.org/).
   - npm is included with Node.js.

2. **Navigate to the Assignment1 Directory**

   - Open a terminal/command prompt.
   - Navigate to the `frontend` directory.
     ```bash
     cd frontend
     ```

3. **Install Dependencies**

   - Install the necessary dependencies using npm:
     ```bash
     npm install
     ```

4. **Start the Development Server**
   - Start the application development server:
     ```bash
     npm run dev
     ```
   - The app should open in your default web browser at `http://localhost:5173`.

## Deployment

To deploy the React app to Netlify using Github repository, follow these steps:

1. **Link Github with Netlify**

   - Login to your Netlify account
   - select Deploy from existing project and choose github
   - Authorize Github and select the repository

2. **Deploy to Netlify**

   - In Build settings specify the base directory where the application is present in the repository which is 'fronend'.
   - In Build command specify npm run build.
   - In Publish directory specify 'dist' and click deploy
   - Netlify will provide a URL for your deployed app.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/guide/) - Build tool
- [Netlify](https://www.netlify.com/) - For deployment
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Dependency Management

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