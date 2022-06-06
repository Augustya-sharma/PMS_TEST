import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Cancel from "@mui/icons-material/Cancel";
import { Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import PAMaster from "../../components/UI/PAMaster";
import { AlertDialog } from "..";
import dayjs from "dayjs";
import Close from "../../assets/Images/Close.svg";
import Edit from "../../assets/Images/Edit.svg";
import Tooltip from "@mui/material/Tooltip";
import { EDIT_TEMPLATE } from "../../constants/routes/Routing";
import { Scrollbar } from "react-scrollbars-custom";

const BT = () => {
    return (
        <>
            <Link to="/template/edit-template">
                <Tooltip title="Edit">
                    <IconButton>
                        <img src={Edit} alt="icon" />
                    </IconButton>
                </Tooltip>
            </Link>
            <Tooltip title="Delete">
                <IconButton>
                    <img src={Close} alt="icon" />
                </IconButton>
            </Tooltip>
        </>
    );
};

function createData(
    number: number,
    templateName: string,
    date: string,
    action: any
) {
    return { number, templateName, date, action };
}

const rows = [
    createData(1, "Manager", "20/09/21", <BT />),
    createData(2, "Juniors", "20/09/21", <BT />),
];

export default function ViewTemplate(props: any) {
    const { ViewTemplateData, onDelete } = props;
    const [open, setOpen] = useState(false);
    const [newId, setNewId] = useState("");
    const [newName, setNewName] = useState("");
    const [hide, setHide] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = (id: string, nameAlert: string) => {
        setOpen(true);
        setNewId(id);
        setNewName(nameAlert);
    };
    const handleClickClose = () => {
        setOpen(false);
    };

    const handleClickIdClose = () => {
        if (newId) {
            onDelete(newId);
            setOpen(false);
            console.log(newId);
        }
    };

    return (
        <>
            <PAMaster name={"View Template"} />
            <Container
                sx={{
                    maxWidth: "96.5% !important",
                    height: "calc(100vh - 165px)",
                    backgroundColor: "#fff",
                    paddingTop: "30px",
                    //boxShadow:'2px 4px 6px 4px rgba(0, 0, 0, 0.2)',
                }}
            >
                <TableContainer>
                    <Scrollbar style={{ width: "100%", height: "calc(100vh - 245px)" }}>

                        <Table  size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ bgcolor: "#F7F9FB" }}>
                                    <TableCell
                                        sx={{
                                            borderColor: "#F7F9FB",
                                            color: "#004C75",
                                            fontSize: "14px",
                                        }}
                                        width={20}
                                    >
                                        #
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontFamily:"regular",
                                            borderColor: "#F7F9FB",
                                            color: "#004C75",
                                            fontSize: "14px",
                                        }}
                                        align="left"
                                        width="30%"
                                    >
                                        Template Name
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontFamily:"regular",
                                            borderColor: "#F7F9FB",
                                            color: "#004C75",
                                            fontSize: "14px",

                                        }}
                                        align="left"
                                        width="55%"
                                    >
                                        Last Modified Date
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontFamily:"regular",
                                            borderColor: "#F7F9FB",
                                            color: "#004C75",
                                            fontSize: "14px",
                                        }}
                                        align="center"
                                    >
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ViewTemplateData &&
                                    ViewTemplateData.templates.map((row: any, index: any) => {
                                        return (
                                            <TableRow
                                                key={row._id}
                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                            >
                                                <TableCell
                                                    sx={{ fontSize: "14px", color: "#33333" }}
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ fontSize: "14px", color: "#33333",opacity:"80%",fontFamily:"regular" }}
                                                    align="left"
                                                >
                                                    {row.name}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ fontSize: "14px", color: "#33333",opacity:"80%",fontFamily:"regular" }}
                                                    align="left"
                                                >
                                                    {/* {row.createdAt} */}
                                                    {dayjs(row.updatedAt).format("DD/MM/YYYY")}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ fontSize: "14px", color: "#7A7A7A" }}
                                                    align="center"
                                                >
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            aria-label="EditIcon"
                                                            onClick={() =>
                                                                navigate(`${EDIT_TEMPLATE}/${row._id}`)
                                                            }
                                                        >
                                                            <img src={Edit} alt="icon" />
                                                        </IconButton>
                                                    </Tooltip>

                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            aria-label="CancelOutlinedIcon "
                                                            onClick={() => handleClickOpen(row._id, row.name)}
                                                        >
                                                            <img src={Close} alt="icon" />
                                                        </IconButton>
                                                    </Tooltip>

                                                    <AlertDialog
                                                        isAlertOpen={open}
                                                        handleAlertOpen={() =>
                                                            handleClickOpen(row._id, row.name)
                                                        }
                                                        handleAlertClose={handleClickClose}
                                                        handleAlertIdClose={handleClickIdClose}
                                                        rowAlert={row}
                                                    >
                                                        Are you sure you wish to delete this item?
                                                    </AlertDialog>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </Scrollbar>
                </TableContainer>
            </Container>
        </>
    );
}