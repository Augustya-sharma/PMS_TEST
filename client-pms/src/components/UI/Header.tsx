import * as React from "react";
import Logoheader from "../../assets/Images/Logoheader.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import {
  DASHBOARDM,
  MASTER_NAV,
  MIDYEAR_PERFORMANCE, NORMALIZER, REVIEWER,
} from "../../constants/routes/Routing";

{
  /*import logo from "./Images/Taqeef.png";*/
}



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 25,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(-14),
    width: "58%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#A8CEDF",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

setTimeout(() => {
  let height = document.getElementById("header")!.offsetHeight;
  console.log(height);
}, 5000);

//background: "linear-gradient(to right, #023a53, #4286b9,#67cbeb)"
export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [opendropdown, setopenDropDown] = React.useState(false);
  const [hoverTR, setHoverTR] = React.useState(false);
  const [hoverTR1, setHoverTR1] = React.useState(false);
  const [hoverTR2, setHoverTR2] = React.useState(false);
  const [hoverTR3, setHoverTR3] = React.useState(false);
  const [hoverTR4, setHoverTR4] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleopen = () => {
    setopenDropDown(true)
    if (opendropdown === true) {
      setopenDropDown(false)
    }
  }
  return (
    <AppBar
      id="header"
      style={{
        position: "sticky",
        background: "linear-gradient(to right, #024E77, #3F94BB,#71CCF1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, marginRight: 65 }}
          >
            <img src={Logoheader} alt="logo" height={40} width={100}></img>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Here"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <p style={{ fontSize: "15px", paddingRight: "10px" }}>
            PA Guidelines
          </p>
          <Box sx={{ flexGrow: 0, display: "block" }}>
            {/* <Tooltip title=""> */}
            {/* <IconButton sx={{ p: 0 }}> */}
            <Button
              style={{
                textTransform: "none",
                marginRight: "30px",
              }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              //onClick={handleClick}
              onClick={handleopen}
            >
              <Avatar alt="" src="" />
            </Button>
            {opendropdown &&
              <div style={{ position: 'relative' }} >
                <div style={{ textAlign:'center', background: "white", position: 'absolute', minWidth: '110px', overflow: 'auto', zIndex: '1', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",borderRadius:'5px' }}>

                  <Link
                    style={{ color: "GrayText", fontSize: "14px" }}



                    to={MASTER_NAV}
                  >

                    <Typography sx={{ padding: '5px', backgroundColor: hoverTR === true ? '#EBE6E6' : 'white' }}
                      onPointerOver={() => setHoverTR(true)}
                      onPointerOut={() => setHoverTR(false)}
                      onClick={handleopen} >
                      PA Admin
                    </Typography>

                  </Link>
                  <Link
                    style={{ color: "GrayText", fontSize: "14px" }}
                    to={"/dashboardreview"}
                  >
                    <Typography
                      sx={{ padding: '5px', backgroundColor: hoverTR1 === true ? '#EBE6E6' : 'white' }} onClick={handleopen}
                      onPointerOver={() => setHoverTR1(true)}
                      onPointerOut={() => setHoverTR1(false)}
                    >
                      Appraiser
                    </Typography>
                  </Link>
                  <Link
                    style={{ color: "GrayText", fontSize: "14px" }}
                    to={REVIEWER}
                  >
                    <Typography
                      sx={{ padding: '5px', backgroundColor: hoverTR2 === true ? '#EBE6E6' : 'white' }}
                      onPointerOver={() => setHoverTR2(true)}
                      onPointerOut={() => setHoverTR2(false)}
                      onClick={handleopen} > Reviewer</Typography>

                  </Link>
                  <Link
                    style={{ color: "GrayText", fontSize: "14px" }}
                    to={NORMALIZER}
                  >
                    <Typography 
                    sx={{ padding: '5px', backgroundColor: hoverTR3 === true ? '#EBE6E6' : 'white' }} 
                    onPointerOver={() => setHoverTR3(true)}
                    onPointerOut={() => setHoverTR3(false)}
                    onClick={handleopen} > Normalizer</Typography>

                  </Link>
                  <Link
                    style={{ color: "GrayText", fontSize: "14px" }}
                    to={`${MIDYEAR_PERFORMANCE}/employee/6204935ebca89023952f2db3`}
                  >
                    <Typography 
                    sx={{ padding: '5px', backgroundColor: hoverTR4 === true ? '#EBE6E6' : 'white' }} 
                    onPointerOver={() => setHoverTR4(true)}
                    onPointerOut={() => setHoverTR4(false)}
                    onClick={handleopen} 
                    >Employee</Typography>

                  </Link>
                </div>
              </div>}

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{ width: '140px' }}


              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >

              <MenuItem onClick={handleClose}>
                <Link
                  style={{ color: "GrayText", fontSize: "14px" }}
                  to={MASTER_NAV}
                >

                  <Typography>
                    PA Admin
                  </Typography>

                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  style={{ color: "GrayText", fontSize: "14px" }}
                  to={"/dashboardreview"}
                >
                  <Typography>
                    Appraiser
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  style={{ color: "GrayText", fontSize: "14px" }}
                  to={REVIEWER}
                >
                  <Typography> Reviewer</Typography>

                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  style={{ color: "GrayText", fontSize: "14px" }}
                  to={NORMALIZER}
                >
                  <Typography> Normalizer</Typography>

                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  style={{ color: "GrayText", fontSize: "14px" }}
                  to={`${MIDYEAR_PERFORMANCE}/employee/6204935ebca89023952f2db3`}
                >
                  <Typography>Employee</Typography>

                </Link>
              </MenuItem>
            </Menu>
            {/* </IconButton> */}
            {/* </Tooltip> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
