import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Grid, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import Objective from "./objectivegroup/objective";
// import Objectivetype from "./objectivetype/objectivetype";
// import Objectivedescription from "./objectdescription/objdescription";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import {
  CREATE_CALENDER,
  CREATE_MAPPING,
  EDIT_VIEW_TEMPLATE,
  MASTER_NAV,
  VIEW_TEMPLATE,
} from "../../constants/routes/Routing";
import Leftarrow from "../../assets/Images/Leftarrow.svg";

setTimeout(() => {
  let height = document.getElementById("master")!.offsetHeight;
  console.log(height);
}, 5000);

//let intViewportHeight = window.innerHeight;
//console.log(intViewportHeight)

export default function PAMaster(props: any) {
  const navigate = useNavigate();
  const { name } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <Container
    //     sx={{
    //         width: "100%",
    //         height: 50,
    //         marginTop: "5px",
    //         backgroundColor: "#EEEDE8",
    //     }}
    // >
    <div id="master">
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography
            style={{
              color: "#004C75",
              fontSize: "24px",
            }}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <span style={{ marginRight: "8px" }}>
            <Link to={MASTER_NAV}>
              <IconButton>                
                  <img src={Leftarrow} alt="button" />               
              </IconButton>
              </Link>
            </span>

            <label>{name}</label>
          </Typography>
          <Button
            style={{
              textTransform: "none",
              color: "#004C75",
              fontSize: "16px",
              marginRight: "30px",
              fontWeight: "400",
            }}
          >
            <Link to="/"> Master</Link>
          </Button>
          <Button
            style={{
              textTransform: "none",
              color: "#004C75",
              fontSize: "16px",
              marginRight: "30px",
              fontWeight: "400",
            }}
            id="basic-button"
            color="inherit"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Template
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                style={{ color: "GrayText", fontSize: "14px" }}
                to="/template/create-template"
              >
                Create Template
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                style={{ color: "GrayText", fontSize: "14px" }}
                to={VIEW_TEMPLATE}
              >
                View Template
              </Link>
            </MenuItem>

            {/* <MenuItem onClick={handleClose}>
              <Link
                style={{ color: "GrayText", fontSize: "14px" }}
                to={EDIT_VIEW_TEMPLATE}
              >
                Edit Template
              </Link>
            </MenuItem> */}
            {/* */}
            <MenuItem onClick={handleClose}>
              <Link
                style={{ color: "GrayText", fontSize: "14px" }}
                to={CREATE_MAPPING}
              >
                Create Mapping
              </Link>
            </MenuItem>
          </Menu>
          <Link to={CREATE_CALENDER}>
            <Button
              style={{
                textTransform: "none",
                color: "#004C75",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Appraisal Calendar
            </Button>
          </Link>
        </Toolbar>
      </Box>
    </div>

    // </Container>
  );
}
