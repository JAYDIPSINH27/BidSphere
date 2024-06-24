# CSCI 5709 Grp-14

- _Date Created_: 24 May 2024
- _Last Modification Date_: 23 June 2024
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

- <!---How---> The code in [JavaScript Email Validation: Tutorial with Code Snippets](https://mailtrap.io/blog/javascript-email-validation/) was implemented by using the regular expression for email validation.
- <!---Why---> [JavaScript Email Validation: Tutorial with Code Snippets](https://mailtrap.io/blog/javascript-email-validation/)'s Code was used because it provides a simple and effective way to validate email addresses.
- <!---How---> [JavaScript Email Validation: Tutorial with Code Snippets](https://mailtrap.io/blog/javascript-email-validation/)'s Code was modified by integrating it into the form validation logic.
