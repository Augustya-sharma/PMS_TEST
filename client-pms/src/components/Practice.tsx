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
} from "./../constants/routes/Routing";
// import Leftarrow from "../../assets/Images/Leftarrow.svg";

setTimeout(() => {
  let height = document.getElementById("master")!.offsetHeight;
  console.log(height);
}, 5000);

//let intViewportHeight = window.innerHeight;
//console.log(intViewportHeight)

export default function Practice(props: any) {
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
   
    <div id="master">
     
          <Button
            style={{
              textTransform: "none",
              fontWeight: "400",
              fontSize: "14px",
              textDecoration: "underline",
              color: "skyblue",
            }}
            id="basic-button"
            color="inherit"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Levels:1.2.3
          </Button>
          <Menu
          style={{width:"50%"}}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div >
              <Typography
                style={{
                  borderBottom: "1px solid lightgrey",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "5px",
                    paddingTop: "20px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      height: "17px",
                      width: "17px",
                    }}
                  />
                  <span style={{ paddingLeft: "7px", fontSize: "14px" }}>
                    Level 1
                  </span>
                </div>
                <p
                  style={{
                    paddingLeft: "37px",
                    fontSize: "12px",
                    opacity: "75%",
                  }}
                >
                  Level 1 definition
                </p>
              </Typography>
            </div>
            <div>
            <Typography
                style={{
                  borderBottom: "1px solid lightgrey",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "5px",
                    paddingTop: "20px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      height: "17px",
                      width: "17px",
                    }}
                  />
                  <span style={{ paddingLeft: "7px", fontSize: "14px" }}>
                    Level 1
                  </span>
                </div>
                <p
                  style={{
                    paddingLeft: "37px",
                    fontSize: "12px",
                    opacity: "75%",
                  }}
                >
                  Level 1 definition
                </p>
              </Typography>



            </div>

            <div >

            <Typography
                style={{
                //   borderBottom: "1px solid lightgrey",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "5px",
                    paddingTop: "20px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      height: "17px",
                      width: "17px",
                    }}
                  />
                  <span style={{ paddingLeft: "7px", fontSize: "14px" }}>
                    Level 1
                  </span>
                </div>
                <p
                  style={{
                    paddingLeft: "37px",
                    fontSize: "12px",
                    opacity: "75%",
                  }}
                >
                  Level 1 definition
                </p>
              </Typography>

            </div>
          </Menu>
     
    </div>

    // </Container>
  );
}
