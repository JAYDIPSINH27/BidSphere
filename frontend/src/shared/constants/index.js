import {
    blog01,
    blog02,
    blog03,
    blog04,
    course01,
    course02,
    course03,
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
} from "./images";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "tenders",
        title: "Tenders",
    },
    {
        id: "Reviews",
        title: "Reviews",
    },
    {
        id: "blog",
        title: "Blog",
    },
];

export const statistics = [
    {
        number: "10+",
        text: "Years of Expertise",
        },
        {
        number: "2,000+",
        text: "Tenders Facilitated",
        },
        {
        number: "5K+",
        text: "Registered Suppliers",
        },
        {
        number: "20+",
        text: "Industries Served",
        },
        {
        number: "24/7",
        text: "Customer Support",
        },
        {
        number: "$10B+",
        text: "Contract Value Facilitated",
        },
];

export const aboutFeatures = [
    
    {
        title: "Our Vision",
        description: "We envision a world where every organization can seamlessly navigate the intricate landscape of procurement, forging lasting partnerships and fueling growth through transparent and efficient bidding processes."
    },
    {
        title: "Trusted Expertise",
        description: "Our platform is powered by industry veterans and procurement specialists, ensuring you have access to the latest best practices and insights."
    },
    {
        title: "Comprehensive Solutions",
        description: "From tender creation and bid evaluation to contract management and strategic sourcing, BidSphere offers a comprehensive suite of solutions tailored to your procurement needs."
    },
    {
        title: "Global Connectivity",
        description: "Our global network connects issuers and bidders across borders, fostering collaboration, diversity, and access to a vast pool of opportunities."
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

export const categories = ["All", "Technology", "Marketing", "Arts", "Business"];

export const tenders = [
  {
    id: 1,
    title: "Construction of New Highway",
    sector: "Infrastructure",
    duration: "12 months",
    thumbnail: course01,
    organization: {
      name: "Global Constructions Ltd.",
      pic: instructor01
    },
    ending_date: "2024-09-30",
    publish_date: "2023-06-01"
  },
  {
    id: 2,
    title: "Development of Data Management System",
    sector: "Technology",
    duration: "6 months",
    thumbnail: course02,
    organization: {
      name: "Tech Innovators Inc.",
      pic: instructor02
    },
    ending_date: "2024-08-15",
    publish_date: "2023-07-15"
  },
  {
    id: 3,
    title: "National Marketing Campaign",
    sector: "Marketing",
    duration: "3 months",
    thumbnail: course13,
    organization: {
      name: "Creative Marketing Solutions",
      pic: instructor03
    },
    ending_date: "2024-07-10",
    publish_date: "2023-08-20"
  },
  {
    id: 4,
    title: "City Park Renovation",
    sector: "Infrastructure",
    duration: "5 months",
    thumbnail: course04,
    organization: {
      name: "Urban Landscapes Co.",
      pic: instructor04
    },
    ending_date: "2024-10-05",
    publish_date: "2023-05-10"
  },
  {
    id: 5,
    title: "Small Business Support Program",
    sector: "Business",
    duration: "8 months",
    thumbnail: course05,
    organization: {
      name: "Enterprise Growth Partners",
      pic: instructor05
    },
    ending_date: "2024-08-25",
    publish_date: "2023-09-01"
  },
  {
    id: 6,
    title: "Digital Marketing Strategy Development",
    sector: "Marketing",
    duration: "4 months",
    thumbnail: course06,
    organization: {
      name: "Digital Horizons LLC",
      pic: instructor06
    },
    ending_date: "2024-09-12",
    publish_date: "2023-07-22"
  },
  {
    id: 7,
    title: "AI Implementation for Retail",
    sector: "Technology",
    duration: "10 months",
    thumbnail: course07,
    organization: {
      name: "RetailTech Solutions",
      pic: instructor07
    },
    ending_date: "2024-11-20",
    publish_date: "2023-06-30"
  },
  {
    id: 8,
    title: "International Marketing Outreach",
    sector: "Marketing",
    duration: "6 months",
    thumbnail: course08,
    organization: {
      name: "Global Reach Marketing",
      pic: instructor08
    },
    ending_date: "2024-07-30",
    publish_date: "2023-05-25"
  },
  {
    id: 9,
    title: "Python Software Development",
    sector: "Technology",
    duration: "5 months",
    thumbnail: course09,
    organization: {
      name: "CodeCraft Ltd.",
      pic: instructor09
    },
    ending_date: "2024-08-18",
    publish_date: "2023-07-12"
  },
  {
    id: 10,
    title: "Comprehensive Social Media Strategy",
    sector: "Marketing",
    duration: "7 months",
    thumbnail: course10,
    organization: {
      name: "Social Media Experts",
      pic: instructor10
    },
    ending_date: "2024-07-25",
    publish_date: "2023-06-05"
  },
  {
    id: 11,
    title: "Public Art Installation",
    sector: "Arts",
    duration: "3 months",
    thumbnail: course11,
    organization: {
      name: "Artistic Endeavors Inc.",
      pic: instructor11
    },
    ending_date: "2024-11-05",
    publish_date: "2023-08-01"
  },
  {
    id: 12,
    title: "Entrepreneurial Training Program",
    sector: "Business",
    duration: "6 months",
    thumbnail: course12,
    organization: {
      name: "Startup Success Services",
      pic: instructor12
    },
    ending_date: "2024-09-15",
    publish_date: "2023-07-20"
  },
  {
    id: 13,
    title: "Cybersecurity Enhancement Project",
    sector: "Technology",
    duration: "8 months",
    thumbnail: course13,
    organization: {
      name: "SecureTech Solutions",
      pic: instructor13
    },
    ending_date: "2024-10-10",
    publish_date: "2023-06-25"
  }
      
];

export const instructors = [
    {
        id: 1,
        name: "Sarah Johnson",
        specialty: "Software Engineer",
        pic: instructor01,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Michael Chen",
        specialty: "Data Scientist",
        pic: instructor02,
        rating: 4.7,
    },
    {
        id: 3,
        name: "Emily Davis",
        specialty: "Digital Marketing Manager",
        pic: instructor03,
        rating: 4.6,
    },
    {
        id: 4,
        name: "James Anderson",
        specialty: "Photographer",
        pic: instructor04,
        rating: 4.9,
    },
    {
        id: 5,
        name: "Mark Roberts",
        specialty: "Business Manager",
        pic: instructor05,
        rating: 4.8,
    },
    {
        id: 6,
        name: "Laura Williams",
        specialty: "Digital Marketing Manager",
        pic: instructor06,
        rating: 4.9,
    },
    {
        id: 7,
        name: "Maria Rodriguez",
        specialty: "Data Scientist",
        pic: instructor07,
        rating: 4.7,
    },
    {
        id: 8,
        name: "Thomas Lee",
        specialty: "Digital Marketing",
        pic: instructor08,
        rating: 4.6,
    },
    {
        id: 9,
        name: "John Smith",
        specialty: "Software Engineer",
        pic: instructor09,
        rating: 4.5,
    },
    {
        id: 10,
        name: "Laura Davis",
        specialty: "Digital Marketing",
        pic: instructor10,
        rating: 4.9,
    },
    {
        id: 11,
        name: "Rachel White",
        specialty: "Artist",
        pic: instructor11,
        rating: 4.7,
    },
    {
        id: 12,
        name: "Mike Johnson",
        specialty: "Business Manager",
        pic: instructor12,
        rating: 4.6,
    },
    {
        id: 13,
        name: "Alex Turner",
        specialty: "Cybersecurity",
        pic: instructor13,
        rating: 4.8,
    },
];

export const blogs = [
    {
        id: 1,
        title: "Mastering Time Management",
        description: "Unlock productivity with time management techniques.",
        thumbnail: blog01,
    },
    {
        id: 2,
        title: "The Power of Data: Insights for Business Success",
        description: "Learn how to harness the power of data analytics, interpret trends.",
        thumbnail: blog02,
    },
    {
        id: 3,
        title: "Unlocking Your Creative Potential",
        description: "Discover the techniques, tips, and inspiration you need to unleash your inner creativity.",
        thumbnail: blog03,
    },
    {
        id: 4,
        title: "The Future of Work: Navigating Remote Collaboration",
        description: "Explore the latest trends and tools shaping remote collaboration.",
        thumbnail: blog04,
    },
];
