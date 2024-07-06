import {
  blog01,
  blog02,
  blog03,
  blog04,
  course01,
  course02,
  // course03,
  course04,
  course05,
  course06,
  course07,
  course08,
  course09,
  course10,
  course11,
  course12,
  course13,
  instructor01,
  instructor02,
  instructor03,
  instructor04,
  instructor05,
  instructor06,
  instructor07,
  instructor08,
  instructor09,
  instructor10,
  instructor11,
  instructor12,
  instructor13,
} from './images';

export const navLinks = [
  {
    id: 'home',
    path: '',
    title: 'Home',
  },
  // {
  //   id: "about",
  //   title: "About",
  // },
  // {
  //   id: "tenders",
  //   title: "Tenders",
  // },
  // {
  //   id: "Reviews",
  //   title: "Reviews",
  // },
  // {
  //   id: "blog",
  //   title: "Blog",
  // },
  {
    id: 'faq',
    path: 'faq',
    title: 'FAQ',
  },
  {
    id: 'contact',
    path: 'contact',
    title: 'Contact',
  },
];

export const statistics = [
  {
    number: '10+',
    text: 'Years of Expertise',
  },
  {
    number: '2,000+',
    text: 'Tenders Facilitated',
  },
  {
    number: '5K+',
    text: 'Registered Suppliers',
  },
  {
    number: '20+',
    text: 'Industries Served',
  },
  {
    number: '24/7',
    text: 'Customer Support',
  },
  {
    number: '$10B+',
    text: 'Contract Value Facilitated',
  },
];

export const aboutFeatures = [
  {
    title: 'Our Vision',
    description:
      `We envision a world where every organization can seamlessly navigate the intricate landscape of procurement, forging lasting partnerships and fueling growth 
      through transparent and efficient bidding processes.`,
  },
  {
    title: 'Trusted Expertise',
    description:
      'Our platform is powered by industry veterans and procurement specialists, ensuring you have access to the latest best practices and insights.',
  },
  {
    title: 'Comprehensive Solutions',
    description:
      `From tender creation and bid evaluation to contract management and strategic 
      sourcing, BidSphere offers a comprehensive suite of solutions tailored to your procurement needs.`,
  },
  {
    title: 'Global Connectivity',
    description:
      'Our global network connects issuers and bidders across borders, fostering collaboration, diversity, and access to a vast pool of opportunities.',
  },
  // {
  //     title: "Unparalleled Transparency",
  //     description: "Transparency is at the core of our platform, ensuring fair and ethical practices throughout the bidding lifecycle."
  // },
  // {
  //     title: "Cutting-Edge Technology",
  //     description: "Leveraging cutting-edge technologies, BidSphere provides a secure, user-friendly, and data-driven environment for all your procurement activities."
  // },
  // {
  //     title: "Dedicated Support",
  //     description: "Our dedicated support team is always ready to assist you, ensuring a seamless and hassle-free experience every step of the way."
  // },
];

export const categories = [
  'All',
  'Infrastructure',
  'Technology',
  'Marketing',
  'Business',
  'Arts',
  'Healthcare',
  'Education',
  'Energy',
  // // "Environmental Services",
  // // "Transportation",
  // // "Finance",
  // // "Telecommunications",
  // // "Agriculture",
  // // "Construction",
  // // "Public Safety",
  // "Tourism",
  // "Retail",
  // "Manufacturing",
  // "Consulting",
  // "Real Estate"
];

export const tenders = [
  {
    id: 1,
    title: 'Construction of New Highway',
    sector: 'Infrastructure',
    duration: '12 months',
    thumbnail: course01,
    organization: {
      name: 'Global Constructions Ltd.',
      pic: instructor01,
    },
    ending_date: '2024-09-30',
    publish_date: '2023-06-01',
  },
  {
    id: 2,
    title: 'Development of Data Management System',
    sector: 'Technology',
    duration: '6 months',
    thumbnail: course02,
    organization: {
      name: 'Tech Innovators Inc.',
      pic: instructor02,
    },
    ending_date: '2024-08-15',
    publish_date: '2023-07-15',
  },
  {
    id: 3,
    title: 'National Marketing Campaign',
    sector: 'Marketing',
    duration: '3 months',
    thumbnail: course13,
    organization: {
      name: 'Creative Marketing Solutions',
      pic: instructor03,
    },
    ending_date: '2024-07-10',
    publish_date: '2023-08-20',
  },
  {
    id: 4,
    title: 'City Park Renovation',
    sector: 'Infrastructure',
    duration: '5 months',
    thumbnail: course04,
    organization: {
      name: 'Urban Landscapes Co.',
      pic: instructor04,
    },
    ending_date: '2024-10-05',
    publish_date: '2023-05-10',
  },
  {
    id: 5,
    title: 'Small Business Support Program',
    sector: 'Business',
    duration: '8 months',
    thumbnail: course05,
    organization: {
      name: 'Enterprise Growth Partners',
      pic: instructor05,
    },
    ending_date: '2024-08-25',
    publish_date: '2023-09-01',
  },
  {
    id: 6,
    title: 'Digital Marketing Strategy Development',
    sector: 'Education',
    duration: '4 months',
    thumbnail: course06,
    organization: {
      name: 'Digital Horizons LLC',
      pic: instructor06,
    },
    ending_date: '2024-09-12',
    publish_date: '2023-07-22',
  },
  {
    id: 7,
    title: 'AI Implementation for Retail',
    sector: 'Technology',
    duration: '10 months',
    thumbnail: course07,
    organization: {
      name: 'RetailTech Solutions',
      pic: instructor07,
    },
    ending_date: '2024-11-20',
    publish_date: '2023-06-30',
  },
  {
    id: 8,
    title: 'International Marketing Outreach',
    sector: 'Marketing',
    duration: '6 months',
    thumbnail: course08,
    organization: {
      name: 'Global Reach Marketing',
      pic: instructor08,
    },
    ending_date: '2024-07-30',
    publish_date: '2023-05-25',
  },
  {
    id: 9,
    title: 'Python Software Development',
    sector: 'Arts',
    duration: '5 months',
    thumbnail: course09,
    organization: {
      name: 'CodeCraft Ltd.',
      pic: instructor09,
    },
    ending_date: '2024-08-18',
    publish_date: '2023-07-12',
  },
  {
    id: 10,
    title: 'Comprehensive Social Media Strategy',
    sector: 'Marketing',
    duration: '7 months',
    thumbnail: course10,
    organization: {
      name: 'Social Media Experts',
      pic: instructor10,
    },
    ending_date: '2024-07-25',
    publish_date: '2023-06-05',
  },
  {
    id: 11,
    title: 'Public Art Installation',
    sector: 'Healthcare',
    duration: '3 months',
    thumbnail: course11,
    organization: {
      name: 'Artistic Endeavors Inc.',
      pic: instructor11,
    },
    ending_date: '2024-11-05',
    publish_date: '2023-08-01',
  },
  {
    id: 12,
    title: 'Entrepreneurial Training Program',
    sector: 'Energy',
    duration: '6 months',
    thumbnail: course12,
    organization: {
      name: 'Startup Success Services',
      pic: instructor12,
    },
    ending_date: '2024-09-15',
    publish_date: '2023-07-20',
  },
  {
    id: 13,
    title: 'Cybersecurity Enhancement Project',
    sector: 'Technology',
    duration: '8 months',
    thumbnail: course13,
    organization: {
      name: 'SecureTech Solutions',
      pic: instructor13,
    },
    ending_date: '2024-10-10',
    publish_date: '2023-06-25',
  },
];

export const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    review:
      'The tender process was seamless and efficient. Highly satisfied with the support provided.',
    pic: instructor01,
  },
  {
    id: 2,
    name: 'Michael Chen',
    review:
      'Exceptional platform for procurement. The bidding process was straightforward and transparent.',
    pic: instructor02,
  },
  {
    id: 3,
    name: 'Emily Davis',
    review:
      'Great experience with the solicitation process. The platform made everything easy to manage.',
    pic: instructor03,
  },
  {
    id: 4,
    name: 'James Anderson',
    review:
      'Very user-friendly interface for submitting bids. The team was very supportive throughout.',
    pic: instructor04,
  },
  {
    id: 5,
    name: 'Mark Roberts',
    review:
      'Professional service and excellent management of the tender process.',
    pic: instructor05,
  },
  {
    id: 6,
    name: 'Laura Williams',
    review:
      'Efficient and effective procurement platform. Great support from the team.',
    pic: instructor06,
  },
  {
    id: 7,
    name: 'Maria Rodriguez',
    review:
      'Highly recommend this platform for procurement. The process was smooth and transparent.',
    pic: instructor07,
  },
  {
    id: 8,
    name: 'Thomas Lee',
    review:
      'The bidding process was clear and well-organized. Excellent platform for tender management.',
    pic: instructor08,
  },
  {
    id: 9,
    name: 'John Smith',
    review:
      'Good experience overall. The platform made it easy to manage and submit bids.',
    pic: instructor09,
  },
  {
    id: 10,
    name: 'Laura Davis',
    review:
      'Excellent platform for digital procurement. The process was efficient and effective.',
    pic: instructor10,
  },
  {
    id: 11,
    name: 'Rachel White',
    review:
      'Wonderful service! The procurement process was smooth and well-supported.',
    pic: instructor11,
  },
  {
    id: 12,
    name: 'Mike Johnson',
    review:
      'Professional and efficient platform for managing tenders and bids.',
    pic: instructor12,
  },
  {
    id: 13,
    name: 'Alex Turner',
    review:
      'Top-quality platform for cybersecurity procurement. Very satisfied with the process.',
    pic: instructor13,
  },
];

export const blogs = [
  {
    id: 1,
    title: 'Mastering Time Management',
    description: 'Unlock productivity with time management techniques.',
    thumbnail: blog01,
  },
  {
    id: 2,
    title: 'The Power of Data: Insights for Business Success',
    description:
      'Learn how to harness the power of data analytics, interpret trends.',
    thumbnail: blog02,
  },
  {
    id: 3,
    title: 'Unlocking Your Creative Potential',
    description:
      'Discover the techniques, tips, and inspiration you need to unleash your inner creativity.',
    thumbnail: blog03,
  },
  {
    id: 4,
    title: 'The Future of Work: Navigating Remote Collaboration',
    description:
      'Explore the latest trends and tools shaping remote collaboration.',
    thumbnail: blog04,
  },
];

export const footerData = {
  termsandservice: {
    title: 'Terms of Service',
    content: `
    1. Introduction
Welcome to BidSphere! These Terms of Service ("Terms") govern your use of our website and services. 
By accessing or using BidSphere, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our services.
2. Definitions
"Platform" refers to the BidSphere website and any related applications or services.
"User" refers to any individual or entity using the Platform, including both tender issuers and bidders.
"Content" refers to any information, text, graphics, or other materials uploaded or appearing on the Platform.
3. Account Registration
Users must register for an account to access certain features of the Platform. You agree to provide 
accurate and complete information during registration and keep your account information updated.
You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
4. User Responsibilities
Users agree to use the Platform for lawful purposes only.
Users must not use the Platform to post or transmit any unlawful, harmful, or offensive content.
Users must not interfere with or disrupt the Platform's functionality or security.
5. Tender Issuer Responsibilities
Tender issuers must provide accurate and complete information about their tenders.
Tender issuers are responsible for managing and updating their tenders as needed.
Tender issuers must comply with all applicable laws and regulations in relation to their tenders.
6. Bidder Responsibilities
Bidders must provide accurate and complete information when placing bids.
Bidders are responsible for ensuring their bids comply with all applicable laws and regulations.
Bidders must respect the terms and conditions set forth by the tender issuer.
7. Fees and Payments
Certain features of the Platform may be subject to fees. Users will be informed of any applicable fees prior to using such features.
All payments must be made in accordance with the specified terms and conditions.
8. Intellectual Property
BidSphere retains all rights, title, and interest in and to the Platform and its content, including all intellectual property rights.
Users are granted a limited, non-exclusive, non-transferable license to access and use the Platform for its intended purposes.
10. Disclaimers
The Platform is provided "as is" and "as available" without warranties of any kind, either express or implied.
BidSphere does not guarantee the accuracy, completeness, or reliability of any content or information provided through the Platform.
BidSphere is not responsible for any errors or omissions, or for the results obtained from the use of the Platform.
11. Limitation of Liability
To the maximum extent permitted by law, BidSphere shall not be liable for any indirect, incidental, 
special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the Platform.
12. Indemnification
You agree to indemnify, defend, and hold harmless BidSphere, its affiliates, and their respective 
officers, directors, employees, and agents from and against any claims, liabilities, damages, 
losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Platform.
13. Termination
BidSphere may terminate or suspend your account and access to the Platform at any time, without prior notice or liability, for any reason, including if you breach these Terms.
Upon termination, your right to use the Platform will immediately cease.
14. Governing Law
These Terms shall be governed and construed in accordance with the laws of Nova Scotia, without regard to its conflict of law principles.
Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Nova Scotia.
15. Changes to Terms
BidSphere reserves the right to modify these Terms at any time. We will provide notice of any 
changes by posting the new Terms on the Platform. Your continued use of the Platform after the changes become effective constitutes your acceptance of the new Terms.

`,
  },
  privacypolicy: {
    title: 'Privacy Policy',
    content:
    `
    1. Introduction
  Welcome to BidSphere. We are committed to protecting your personal information and your right to privacy. 
  If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at support@bidsphere.com.
  
  2. Information We Collect
  We collect personal information that you voluntarily provide to us when registering on the Platform, 
  expressing an interest in obtaining information about us or our products and services, when participating in activities on the Platform, or otherwise contacting us.

  The personal information we collect can include the following:
  - Name and Contact Data: We collect your first and last name, email address, postal address, phone number, and other similar contact data.
  - Credentials: We collect passwords, password hints, and similar security information used for authentication and account access.
  - Payment Data: We collect data necessary to process your payment if you make purchases, such as your payment 
  instrument number (e.g., a credit card number), and the security code associated with your payment instrument.

  3. How We Use Your Information
  We use personal information collected via our Platform for a variety of business purposes described below. 
  We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or 
  perform a contract with you, with your consent, and/or for compliance with our legal obligations.

  Specifically, we use the information we collect or receive to:
  - Facilitate account creation and logon process.
  - Send you marketing and promotional communications.
  - Fulfill and manage your orders.
  - Manage user accounts.
  - Respond to user inquiries/offer support to users.
  - Improve our Platform and services.
  - Enforce our terms, conditions, and policies.
  - Respond to legal requests and prevent harm.
  
  4. Sharing Your Information
  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.

  Specifically, we may need to process or share your data in the following situations:
  - Vendors, Consultants, and Other Third-Party Service Providers: We may share your data with third-party vendors, service providers, contractors, or agents who perform services 
  for us or on our behalf and require access to such information to do that work.
  - Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition 
  of all or a portion of our business to another company.
  - Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial 
  proceeding, court order, or legal process, such as in response to a court order or a subpoena.

  5. Data Retention
  We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention 
  period is required or permitted by law.

  6. Data Security
  We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, 
  please also remember that we cannot guarantee that the internet itself is 100% secure.

  7. Your Privacy Rights
  Depending on your location, you may have certain rights regarding your personal information. These may include the right to access, correct, update, 
  or delete your personal information.

  8. Changes to This Privacy Policy
  We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
    `,
  },
};
