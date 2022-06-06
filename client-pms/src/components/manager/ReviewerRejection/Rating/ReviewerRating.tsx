import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
    ArrowBackIosRounded,
    EditOutlined,
    RemoveRedEyeOutlined,
} from "@mui/icons-material";
import { Button, Container, Stack, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { border, width, color, textAlign, borderColor } from "@mui/system";
import { table } from "console";
import { th } from "date-fns/locale";
import { text } from "express";
import { size } from "lodash";
import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';

// import {
//   MIDYEAR_PA_REPORT,
//   MIDYEAR_PERFORMANCE,
//   MIDYEAR_REJECT_RATING,
//   MIDYEAR_SUCCESS,
// } from "../../constants/routes/Routing";
import Command from "../../ReviewerRejection/Icons/Command.svg";
import Header from "../Header";
import { useEffect, useState } from "react";
import {
    useCreateEmployeeAppraisalMutation,
    useGetEmployeeAppraisalQuery,
    useGetEmployeeQuery,
    useGetObjectiveTitleQuery,
    useGetRatingScaleQuery
} from "../../../../service";
import { useAppraiserRejectsReviewerContext } from "../../../../context/AppraiserRejectsReviewer";

const Item = styled("div")(({ theme }) => ({
    backgroundColor: "#f2f9fa",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "188px",
}));

const Item2 = styled("div")(({ theme }) => ({
    backgroundColor: "#FFFBF2",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "188px",
    width: "450px",
    margin: '2rem'
}));

const Root = styled("div")(
    ({ theme }) => `
  table {
    // font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 231%;
    
  }

  td,
  th {
    border: 1px solid #e0e0e0;
    text-align: left;
    // padding: 6px;
   
  }

  th {
    background-color: #f2f9fa;
  }
  `
);

const Item1 = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Contain = styled("div")({
    "& .MuiButtonBase-root": {
        color: "#333333",
        backgroundColor: "#FFFFFF",
        height: "34px",
        width: "34px",
        boxShadow: "0px 0px 1px 1px #D4D4D4",
    },

    "& .MuiButton-root": {
        border: ` 1px solid `,
        borderColor: "#D4D4D4",
        minWidth: "0px",
        borderRadius: "50px",
        "&:focus": {
            // borderColor: '#3C8BB5',
        },
    },
});

export default function ReviewerRating() {
    // @ts-ignore
    const { empData: employeeData, employee_id } = useAppraiserRejectsReviewerContext()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [objectiveDescription, setObjectiveDescription] = useState<any>([]);

    console.log(isDrawerOpen)

    const { data: ratingsData } = useGetRatingScaleQuery('')
    // const {data: employeeData} = useGetEmployeeAppraisalQuery('6204935ebca89023952f2da9')


    console.log(employeeData, 'my test')
    const { data: objectiveTitleData, isLoading } = useGetObjectiveTitleQuery("");
    const [activeObjectiveDescription, setActiveObjectiveDescription] = useState('')
    const [activeObjectiveDescriptionName, setActiveObjectiveDescriptionName] = useState("");
    const [rating, setRating] = useState<any>("");
    const [updateMutation] = useCreateEmployeeAppraisalMutation()
    const [comments, setComments] = useState("");


    const findObjectiveTitleById = (id: any) => {
        if (objectiveTitleData) {
            console.log(id, "objectiveTitleData");
            return objectiveTitleData.data.find((item: any) => item._id === id);
        }
    };

    useEffect(() => {
        if (employeeData && objectiveTitleData) {
            setObjectiveDescription(() => {
                return employeeData.data.appraisal.objective_description.map(
                    (i: any) => {
                        return {
                            ...i,
                            objective_title: findObjectiveTitleById(i.name.objective_title),
                        };
                    }
                );
            });
        }
    }, [employeeData, objectiveTitleData]);


    const openDrawer = () => {
        setIsDrawerOpen(true)
    }
    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }
    const ratingSubmitHandler = () => {
        closeDrawer()
        updateMutation({
            objective_description: activeObjectiveDescription,
            objective_description_name: activeObjectiveDescriptionName,
            ratings: rating,
            comments: comments,
            id: employee_id,
        })
        setRating('')

    }
    const openDrawerHandler = (objective: any) => {
        openDrawer()
        setActiveObjectiveDescriptionName(objective.name._id)
        setActiveObjectiveDescription(objective._id)
        setComments(objective.comments)
        setRating(objective.ratings._id)

    }

    const acceptHandler = (objective: any, rating: any) => {
        // setActiveObjectiveDescriptionName(objective.name._id)
        // setActiveObjectiveDescription(objective._id)
        // setComments(objective.comments)
        // setRating(rating)

        // ratingSubmitHandler()
        updateMutation({
            objective_description: objective._id,
            objective_description_name: objective.name._id,
            ratings: rating,
            comments: comments,
            id: employee_id,
        })


    }

    console.log(ratingsData, 'rating')
    return (
        <React.Fragment>

            <Drawer
                anchor={'right'}
                open={isDrawerOpen}

            // sx={maxWidth: 300px}
            // onClose={toggleDrawer(anchor, false)}
            >

                {/*@ts-ignore*/}
                <Item2 justifyContent="space-between"
                    sx={{ width: "fitContent", padding: "0px" }}
                >
                    <>
                        <Stack justifyContent="center" direction="row" spacing={1.7}>
                            {ratingsData &&
                                ratingsData.data
                                    .slice()
                                    .sort(function (a: any, b: any) {
                                        return a.rating - b.rating;
                                    })
                                    .map((ratings: any, _id: any) => (
                                        <Item1
                                            sx={{
                                                marginLeft: "2px",
                                                padding: "0px",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Contain>
                                                <Button

                                                    onClick={() => {
                                                        if(ratings)
                                                        setRating(ratings._id);
                                                        // ratingColorHandler(rating._id)
                                                    }}

                                                    style={{
                                                        //@ts-ignore
                                                        borderColor: rating === ratings._id && "#3C8BB5",
                                                    }}
                                                    size="small"
                                                >
                                                    {ratings.rating}
                                                </Button>

                                                {rating === ratings._id && (
                                                    <p style={{ color: "#3C8BB5", fontSize: "10px" }}>
                                                        {ratings.rating_scale}
                                                    </p>
                                                )}

                                            </Contain>

                                            {/* <p style={{ color: "#3C8BB5", fontSize: "10px" }}>{ratings.rating_scale}</p> */}


                                        </Item1>
                                    ))}
                        </Stack>

                        <TextField
                            style={{ width: "30%" }}
                            // fullWidth
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        />

                        <Button onClick={ratingSubmitHandler}> Reject </Button>
                        <Button onClick={closeDrawer}> Cancel </Button>


                    </>
                </Item2>

            </Drawer>


            <div style={{ backgroundColor: "#F1F1F1", }}>
                <Container
                    sx={{
                        maxWidth: "96.5% !important",
                        // height: "1408px",
                        // height: "calc(100vh - 165px)",
                        background: "#fff",
                    }}
                >
                    <div>{/* <Header /> */}</div>
                    <Box sx={{ flexGrow: 1, paddingBottom: "20px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                {/*<Item>*/}
                                {/*    <h2*/}
                                {/*        style={{*/}
                                {/*            color: "#004C75",*/}
                                {/*            fontWeight: "400",*/}
                                {/*            opacity: "0.9",*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        Sharaban Abdullah Rating*/}
                                {/*    </h2>*/}
                                {/*    <h2>4.5</h2>*/}
                                {/*    <p*/}
                                {/*        style={{*/}
                                {/*            fontSize: "13px",*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        10-Jun-21*/}
                                {/*    </p>*/}
                                {/*    <h4 style={{fontWeight: "400"}}>Exceeds Expectations</h4>*/}
                                {/*</Item>*/}
                            </Grid>
                            {/*<Grid item xs={4}>*/}
                            {/*    <Item1>*/}
                            {/*        <h2*/}
                            {/*            style={{*/}
                            {/*                color: "#004C75",*/}
                            {/*                fontWeight: "400",*/}
                            {/*                opacity: "0.9",*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            Your Rating*/}
                            {/*        </h2>*/}
                            {/*        <h2>3.0</h2>*/}
                            {/*        <p*/}
                            {/*            style={{*/}
                            {/*                fontSize: "13px",*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            Delivering*/}
                            {/*        </p>*/}
                            {/*    </Item1>*/}
                            {/*</Grid>*/}
                        </Grid>
                    </Box>

                    <Root sx={{ width: "43.3%" }}>
                        <table>
                            <thead
                                style={{
                                    color: "#004C75",
                                    fontSize: "15px",
                                    fontWeight: "400",
                                    opacity: "0.9",
                                    height: "50px"
                                }}
                            >
                                <tr>
                                    <th
                                        style={{
                                            color: "#004C75",
                                            paddingLeft: "20px",
                                            borderBottom: "1px solid #fff",
                                            width: "18%"
                                        }}
                                    >
                                        <form>
                                            <select
                                                style={{
                                                    fontWeight: "100",
                                                    fontFamily: "regular",
                                                    fontSize: "14px",
                                                    color: "#004C75",
                                                    border: "none",
                                                    background: "none",
                                                    // margin:"-5px"
                                                }}
                                            >
                                                <option value="Training Title">Objective Group</option>
                                            </select>
                                        </form>
                                    </th>
                                    <th
                                        style={{
                                            color: "#004C75",
                                            paddingLeft: "20px",
                                            borderBottom: "1px solid #fff",
                                            width: "18%"
                                        }}
                                    >
                                        <form>
                                            <select
                                                style={{
                                                    fontWeight: "100",
                                                    fontFamily: "regular",
                                                    fontSize: "14px",
                                                    color: "#004C75",
                                                    border: "none",
                                                    background: "none",
                                                    // margin:"-5px"
                                                }}
                                            >
                                                <option value="Training Title">
                                                    Objective Description
                                                </option>
                                            </select>
                                        </form>
                                    </th>
                                    <th
                                        style={{
                                            color: "#004C75",
                                            paddingLeft: "20px",
                                            borderBottom: "1px solid #fff",
                                            width: "18%"
                                        }}
                                    >
                                        <form>
                                            <select
                                                style={{
                                                    fontWeight: "100",
                                                    fontFamily: "regular",
                                                    fontSize: "14px",
                                                    color: "#004C75",
                                                    border: "none",
                                                    background: "none",
                                                    // margin:"-5px"
                                                }}
                                            >
                                                <option value="Training Title">Reviewer Rating</option>
                                            </select>
                                        </form>
                                    </th>
                                    <th
                                        style={{
                                            color: "#004C75",
                                            paddingLeft: "20px",
                                            borderBottom: "1px solid #fff",
                                            width: "22%"
                                        }}
                                    >
                                        <form>
                                            <select
                                                style={{
                                                    fontWeight: "100",
                                                    fontFamily: "regular",
                                                    fontSize: "14px",
                                                    color: "#004C75",
                                                    border: "none",
                                                    background: "none",
                                                    // margin:"-5px"
                                                }}
                                            >
                                                <option value="Training Title">Appraiser Rating</option>
                                            </select>
                                        </form>
                                    </th>
                                    <th
                                        style={{
                                            color: "#004C75",
                                            paddingLeft: "20px",
                                            borderBottom: "1px solid #fff",
                                            width: "15%"
                                        }}
                                    >
                                        <form>
                                            <select
                                                style={{
                                                    fontWeight: "100",
                                                    fontFamily: "regular",
                                                    fontSize: "14px",
                                                    color: "#004C75",
                                                    border: "none",
                                                    background: "none",
                                                    // margin:"-5px"
                                                }}
                                            >

                                                <option value="Training Title">Appraiser Action</option>
                                            </select>
                                        </form>
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                style={{
                                    fontSize: "14px",
                                }}
                            >
                                {employeeData && objectiveTitleData && objectiveDescription.map((j: any) => {
                                    return (

                                        <>
                                            <tr>
                                                <td
                                                    // rowSpan={3}
                                                    style={{
                                                        color: "#004C75",
                                                        paddingLeft: "20px",
                                                        fontFamily: "regular",
                                                        fontSize: "15px",
                                                    }}

                                                >
                                                    {/*Knowledge of the job*/}
                                                </td>
                                                <td
                                                    style={{
                                                        paddingLeft: "20px",
                                                        opacity: "0.8",
                                                        fontSize: "14px",
                                                        fontFamily: "regular",
                                                    }}
                                                >
                                                     {j?.name?.objectiveTitle}
                                                </td>
                                                <td style={{ textAlign: "center" }}>
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="space-around"
                                                        alignItems="center"
                                                        spacing={2}
                                                    >
                                                        <p>
                                                            <h3
                                                                style={{

                                                                    opacity: "0.7",
                                                                    fontSize: "14px",
                                                                    fontFamily: "regular",
                                                                }}
                                                            >
                                                                {
                                                                    employeeData && employeeData.data.reviewer.objective_description
                                                                        .filter(
                                                                            (i: any) => i.name._id === j.name._id
                                                                        )
                                                                        .map((k: any) => { if (k.ratings) return k.ratings.rating })[0]
                                                                }
                                                            </h3>
                                                            <p
                                                                style={{
                                                                    fontSize: "12px",

                                                                    opacity: "0.7",
                                                                    fontFamily: "regular",
                                                                }}
                                                            >
                                                                {/*Exceeding*/}
                                                            </p>
                                                        </p>

                                                        <h3
                                                            style={{
                                                                fontSize: "12px",
                                                                textDecoration: "underline",
                                                                color: "#93DCFA",
                                                                fontWeight: "200",
                                                            }}
                                                        >
                                                            Details
                                                        </h3>
                                                    </Stack>
                                                </td>
                                                <td style={{ textAlign: "center" }}>
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="space-around"
                                                        alignItems="center"
                                                        spacing={2}
                                                    >
                                                        <p>
                                                            <h3
                                                                style={{

                                                                    opacity: "0.7",
                                                                    fontSize: "14px",
                                                                    fontFamily: "regular",
                                                                }}
                                                            >
                                                                {j.ratings && j.ratings.rating}
                                                            </h3>
                                                            <p
                                                                style={{
                                                                    fontSize: "12px",

                                                                    opacity: "0.7",
                                                                    fontFamily: "regular",
                                                                }}
                                                            >
                                                                {/*Exceeding*/}
                                                            </p>
                                                        </p>

                                                        <h3
                                                            style={{
                                                                fontSize: "12px",
                                                                textDecoration: "underline",
                                                                color: "#93DCFA",
                                                                fontWeight: "200",
                                                            }}
                                                        >
                                                            Details
                                                        </h3>
                                                    </Stack>
                                                </td>
                                                <td>
                                                    <>

                                                        {
                                                            ((employeeData && employeeData.data.reviewer.objective_description.filter(
                                                                (i: any) => i.name._id === j.name._id
                                                            ).map((k: any) => {if(k.ratings) return k.ratings._id})[0]) !== (employeeData && employeeData.data.appraisal.objective_description
                                                                .filter(
                                                                    (i: any) => i.name._id === j.name._id
                                                                ).map((k: any) => k.ratings._id)[0])) && (
                                                                <>
                                                                    <Button onClick={() => acceptHandler(j, (employeeData && employeeData.data.reviewer.objective_description.filter(
                                                                        (i: any) => i.name._id === j.name._id
                                                                    ).map((k: any) => k.ratings._id)[0]))}>Accept  </Button>
                                                                    <Button
                                                                        onClick={() => openDrawerHandler(j)}>Reject </Button>
                                                                </>
                                                            )
                                                        }


                                                    </>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}


                            </tbody>
                        </table>
                    </Root>
                </Container>
            </div>
        </React.Fragment>
    );
}
