import React, { useState } from 'react'
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography, styled, Box, Menu, MenuItem } from '@mui/material'
import Logo from '../../../../public/bidphere_logo_v1.png'
import HLogo from '../../../../public/bidphere_logo_notext_v1.png'
import Mail from '@mui/icons-material/Mail'
import Notifications from '@mui/icons-material/Notifications'
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  color: "black",
  gap: "20px",
  [theme.breakpoints.up('sm')]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const BLogo = styled("img")(({ theme }) => ({

  display: "none",
  // backgroundColor: "white",
  // borderRadius: "20%",
  marginLeft: "5%",
  height: "50px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const SLogo = styled("img")(({ theme }) => ({
  display: "flex",
  height: "60px",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    // <div style="background">
    <>
      <CssBaseline />
      <AppBar position="sticky" style={{ padding: "0", backgroundColor: "#7088ff   " }}>
        <StyledToolbar>

          <BLogo src={Logo} />
          <SLogo src={HLogo} />

          {/* <div style={{
            backgroundColor: "white",
            padding: "0 10px",
            borderRadius: "30px",
            width: "20%"
          }}>
            <Search> <InputBase placeholder='search..'></InputBase></Search> 
            </div> */}
            <form style={{borderRadius:"30px"}}>
              <TextField
                id="search-bar"
                className="text"
                style={{ backgroundColor: "white", borderRadius: "30px", width: "80%",border:"none" }}
                // onInput={(e) => {
                //   setSearchQuery(e.target.value);
                // }}
                variant="outlined"
                placeholder="Search..."
                size="small"
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "black" }} />
              </IconButton>
            </form>
         


          <div style={{ marginRight: "5%" }}>
            <Icons>
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
              <Badge badgeContent={2} color="secondary">
                <Notifications />
              </Badge>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109?s=200"
                onClick={(e) => setOpen(true)}
              />

            </Icons>
            <UserBox onClick={(e) => setOpen(true)}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109?s=200"
              />
              <Typography variant="span" color={'black'}>John</Typography>
            </UserBox>
          </div>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>

      </AppBar>
    </>
    // </div>
  )
}

export default Header