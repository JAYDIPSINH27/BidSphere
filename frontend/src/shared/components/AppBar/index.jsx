import React, { useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Logo from '../../../../public/bidphere_logo_notext_v1.png'
import { navLinks } from './../../constants/index';
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

const AppBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      {
        navLinks.map((link) => {
          return <li key={link.id}>
            <Link to={`/${link.id}`} className='link text-white'>{link.title}</Link>
          </li>
        })
      }

    </ul>
  );
  return (
    <motion.div 
    // animate={}
      // initial={{y:-50, opacity:0}}
      // animate={{y:0, opacity:1}}
      // transition={{
      //   delay: 1,
      //   type: "easeIn",
      //   bounce: 1.5,
      // }}
    >
      <Navbar
        className=" top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-bsnavyblue fixed" blurred={false}>
        <div className="flex items-center justify-between text-blue-gray-900 cursor-pointer" >
        <Link to="/">
          <div className="flex align-middle ">
           
            <img className="mr-4  py-1.5 align-middle" src={Logo} alt="Logo" width="10%" />
         
            <Typography color="white" className="align-middle mt-3 font-bold ">BidSphere</Typography>
          </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span className="text-primary-50">Sign Up</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign In</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" className="" size="sm" >
              <span className="text-primary-50" >Sign Up</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
}
export default AppBar;
