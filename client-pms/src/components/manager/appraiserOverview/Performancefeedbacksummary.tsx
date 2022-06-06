import React, { useEffect } from 'react';
import { useState } from 'react';
import { styled } from "@mui/material/styles";
import Divider from '@mui/material/Divider';
import { TextField, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Blueadd from '../../../assets/appraiser/Reviewericons/Blueadd.svg'
import Blueminus from '../../../assets/appraiser/Reviewericons/Blueminus.svg';
import Bluenegative from '../../../assets/appraiser/Reviewericons/Bluenegative.svg';
import Blueplus from '../../../assets/appraiser/Reviewericons/Blueplus.svg'
import Stack from '@mui/material/Stack';
import { useAppraisalContext } from "../../../context/appraiserOverviewContext";
import { Feedback } from '@mui/icons-material';
import _, { cloneDeep } from "lodash";


const PerformanceFeedbackSummary = styled("div")({
    marginLeft: "25px",
    paddingTop: '20px',
    color: '#008E97',
    fontSize: '18px',
    fontFamily: "regular"
});
const Overallfeedback = styled("div")({
    marginLeft: "25px",
    marginTop: '20px',
    color: 'rgb(51 51 51/70%)',
    fontSize: '13px',

});
const Divide = styled('div')({
    marginTop: '18px',
    marginLeft: '25px',
    marginRight: '20px',
});
const Tf1 = styled("div")({
    width: "100%",
    marginLeft: "25px",
    marginTop: "5px",
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
    '& .MuiInputBase-input': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',


    },
    '& label.Mui-focused': {
        color: 'green',
    },
    // '&.MuiOutlinedInput-notchedOutline': {

    //     border: ` 1px solid red`,
    //     '&:focus': {

    //         border: ` 1px solid red`,
    //     },
    // },
    // '&.MuiOutlinedInput-root': {

    //     border: "1px solid red",
    //     '& fieldset': {
    //         border: "1px solid red",
    //       },

    // }

});
const TextField1 = styled(TextField)({
    width: "96%",
    marginLeft: "25px",
    marginTop: "5px",
    backgroundColor: '#FFFFFF',
    opacity: "70%",
    '& .MuiInputBase-input': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
    },
    '& label.Mui-focused': {
        //color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#EBEBEB',
        },
        '&:hover fieldset': {
            borderColor: '#E7EEEE',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#EBEBEB',
        },
    },
});


const TextField2 = styled(TextField)({
    width: "90%",
    marginLeft: "25px",
    marginTop: "5px",
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    opacity: "70%",
    '& .MuiInputBase-input': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
        //opacity: 0.5
    },
    '& .MuiInputLabel-root': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
        //opacity: 0.5
    },
    '& label.Mui-focused': {
        //color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#EBEBEB',
            // backgroundColor: '#FFFFFF',
            color: '#333333',
            fontSize: '13px',
            fontWeight: '400',
            textTransform: 'none',
            // opacity: 0.5
        },
        '&:hover fieldset': {
            borderColor: '#E7EEEE',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#EBEBEB',
        },
    },
});
const TextField3 = styled(TextField)({
    width: "91%",
    marginTop: "5px",
    borderColor: '#EBEBEB',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    // backgroundColor: '#FFFFFF',
    opacity:"70%",
    '& .MuiInputBase-input': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
        // opacity: 0.5
    },
    '& .MuiInputLabel-root': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
        //opacity: 0.5
    },
    '& label.Mui-focused': {
        //color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#EBEBEB',
            // backgroundColor: '#FFFFFF',
            color: '#333333',
            fontSize: '13px',
            fontWeight: '400',
            textTransform: 'none',
            // opacity: 0.5
        },
        '&:hover fieldset': {
            borderColor: '#E7EEEE',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#EBEBEB',
        },
    },
});
const Areasofimprovement = styled("div")({
    marginLeft: "25px",
    marginTop: '10px',
    color: 'rgb(51 51 51/70%)',
    fontSize: '13px',
    //opacity: 0.7
});
const Tf3 = styled("div")({
    width: "604px",
    marginLeft: "25px",
    marginTop: "5px",
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
    '& .MuiInputBase-input': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
        opacity: 0.5
    },
    '& .MuiInputLabel-root': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
        opacity: 0.5
    },

});
const SpecificActions = styled("div")({
   
   
    marginTop: '10px',
    color: 'rgb(51 51 51/70%)',
    fontSize: '13px',
    position:"absolute",
    left:"50.5%"

});
const Tf4 = styled("div")({
    width: "585px",
    marginTop: "5px",
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
    '& .MuiInputBase-input': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
        opacity: 0.5
    },
    '& .MuiInputLabel-root': {
        color: '#333333',
        fontSize: '13px',
        fontWeight: '400',
        textTransform: 'none',
        opacity: 0.5
    },

});

const Addmore = styled('div')({
    color: '#008E97',
    fontSize: '12px',
    marginLeft: '7px',

});
const Divide1 = styled('div')({
    marginLeft: '25px',
    marginRight: '20px',
    marginTop: "15px",

});

const Performancefeedbacksummary = (props: any) => {
    const [action, setAction] = useState<any>([])
    console.log(action, 'action')

    const [improvementList, setImprovementList] = useState([])
    const [specificActionList, setSpecificActionList] = useState([
        { specificAction: "action1", id: 1, improvement: "improvement1" },
        { specificAction: "action2", id: 2, improvement: "improvement1" },
        { specificAction: "action3", id: 3, improvement: "improvement1" },
        { specificAction: "action4", id: 4, improvement: "improvement2" },
        { specificAction: "action5", id: 5, improvement: "improvement2" },
        { specificAction: "action6", id: 6, improvement: "improvement2" },
        { specificAction: "action7", id: 7, improvement: "improvement3" },
        { specificAction: "action8", id: 8, improvement: "improvement4" },
        { specificAction: "action9", id: 9, improvement: "improvement4" },
    ])
    const [overallFeedback, setOverallFeedback] = useState<any>([])


    //@ts-ignore
    const { fData, overallFeed, setOverallFeed, isLoading, empData, feedbackLoading, areaImprovement, setAreaImprovement, area, setarea } = useAppraisalContext()

    console.log(improvementList, 'improvementList')
    console.log(overallFeed, 'overallFeed')
    // const [area, setarea] = useState<any>([{
    //     "value": "",
    //     "specific_actions": [
    //         {
    //             "value": "test"
    //         },
    //         {
    //             "value": ""
    //         }
    //     ]
    // }])
    // const [area, setarea] = useState<any>([{
    //     id: Date.now(),
    //     value: "",
    //     specific_actions: [{ value: "" }, { value: "" }, { value: "" }],
    // }])
    //



    console.log(area, 'area state')

    const handleSpecificAdd = (e: any) => {
        const { name, value } = e.target
        console.log(name, 'name value')

        // @ts-ignore
        setarea((prevState: any) => {
            // console.log(prevState, 'prevState')
            const { specific_actions: test } = prevState[0]
            // console.log(prevState[0], 'prevState[0]')
            // console.log(specific_actions, 'prevState')
            // console.log(prevState[0].specific_actions.push({value: ""}))

            // console.log(prevState.map((item: any) => {
            //     console.log(item, 'item')
            //
            //     item.specific_actions.push({value: ""})
            // }))
            // console.log(  ...prevState[0].specific_actions.map((item: any) => {
            //     // console.log(item, 'item')
            //     return {
            //         ...item,
            //         value: ""
            //     }
            // }),'prevState[0]')
            //
            // const spec = prevState.map((item: any) => {
            //     console.log(item, 'item')
            //     item.specific_actions.push({value: ""})
            // })
            //
            // return [...prevState, ...spec]

            // return [
            //     // ...prevState,
            //      ...prevState[0].specific_actions.map((item: any) => {
            //          console.log(item, 'item')
            //          return {
            //              ...item,
            //              value: "",
            //          }
            //      })
            // ]


            // return  prevState.map((item: any) => {
            //     return {
            //         ...item,
            //         specific_actions:  prevState[0].specific_actions.specific_actions.push({value: ""})
            //     }
            // })

            // return [
            //     {
            //         // specific_actions: [{value: ""}],
            //
            //         // specific_actions: [{value: ""}]
            //     }]
            return prevState.map((item: any) => {
                console.log(item, 'item')
                return {
                    value: item.value,
                    specific_actions: [...item.specific_actions, { value: "" }]
                }
            })
            // return [{
            //     value: "",
            //     specific_actions: [{value: "test"}, {value: "test2"}],
            // }]
        })

        // setSpecificActionList([...specificActionList, {specificAction: ""}])
    }




    const handleSpecificRemove = (index: any) => {
        const newAreaList = [...area]
        newAreaList.splice(index, 1)
        setarea(newAreaList)
    }

    const handleSpecificChange = (e: any, index: number) => {
        const { name, value } = e.target
        const newSpecificActionList = [...specificActionList]
        // @ts-ignore
        newSpecificActionList[index][name] = value
        setSpecificActionList(newSpecificActionList)
    }

    const handleImprovementAdd = () => {
        console.log('clicked')
        // setImprovementList([...improvementList, {improvement: ""}])
        // setarea([...area, {value: "", specific_actions: []}])
        return setarea((prevState: any) => {
            console.log(...prevState, 'area item')

            const toSpread = {
                id: Date.now(),
                value: "",
                specific_actions: [{ value: "" }, { value: "" }, { value: "" }],
            }

            const newArea = [...prevState, toSpread]
            console.log(newArea, 'newArea')

            return newArea

            newArea.push({
                id: Date.now(),
                value: "",
                specific_actions: [{ value: "test2" }, { value: "test2" }, { value: "test2" }],
            }, {
                id: Date.now(),
                value: "",
                specific_actions: [{ value: "test2" }, { value: "test2" }, { value: "test2" }],
            })
            // return prevState.map((k: any) => {
            //     console.log(k, 'area item')
            //     const l = _.cloneDeep(k)
            //     const newOne = {
            //         id: 1,
            //         value: "",
            //         specific_actions: [{value: "11"}, {value: ""}, {value: ""}]
            //     }
            //     console.log(k,
            //         {value: "",
            //         specific_actions: [{value: "11"}, {value: ""}, {value: ""}]}, 'created')
            //     return {
            //         ...k,
            //
            //     }
            // })
            // return    prevState.push({
            //        id: Date.now(),
            //        value: "",
            //        specific_actions: [{value: ""},{value: ""},{value: ""}],
            //    })

            // return [...prevState, {value: "", specific_actions: [{value: ""},{value: ""},{value: ""}], id:Date.now()}]
        })
    }





    const handleImprovementRemove = (index: any) => {
        const newImprovementList = [...improvementList]
        newImprovementList.splice(index, 1)
        setImprovementList(newImprovementList)
    }

    const handleImprovementChange = (e: any, index: number) => {
        const { name, value } = e.target
        const newImprovementList = [...improvementList]
        // @ts-ignore
        newImprovementList[index][name] = value
        setImprovementList(newImprovementList)
    }

    // useEffect(()=>{
    //     setPerformanceSpecific(specificActionList);
    //     setPerformanceImprovement(improvementList)
    // },[specificActionList,improvementList])

    // useEffect(() => {
    //     if (fData) {
    //         setOverallFeedback(fData.data)
    //     }
    // }, [fData])


    useEffect(() => {
        setOverallFeed(pre(overallFeedback))
    }, [overallFeedback])



    const pre = (arr: any) => {
        return arr.map((i: any) => {
            return {
                name: i.name._id,
                value: i.value
            }
        })

    }


    useEffect(() => {

        if (fData && empData) {
            setOverallFeedback(() => {
                const filter = fData.data.map((i: any) => {
                    return empData.data.appraisal.feedback_questions.filter((j: any) => {
                        if (j.name) {
                            return i.name === j.name.name
                        }

                        // console.log({
                        //     name: i.name,
                        //     value: j.value
                        // }, 'setOverallFeed')
                        // if (i.name === j.name.name) {
                        //     return {
                        //         name: i.name,
                        //         value: j.value
                        //     }
                        // }
                    })
                })

                console.log(filter.flat(), 'filter')
                if (filter.flat().length > 0) {
                    return filter.map((j: any) => j.map((a: any) => {
                        console.log({
                            name: a.name.name,
                            value: a.value
                        }, 'setOverallFeed')
                        return {
                            name: a.name,
                            value: a.value
                        }
                    })).flat()

                } else {
                    return fData.data.map((i: any) => {
                        return {
                            name: i,
                            value: ""
                        }
                    })
                }

                // return  filter.map((k: any) => {
                //     return {
                //         name: k.name.name,
                //         value: k.value
                //     }
                // })
                // .map((i: any) => {
                //     empData.data.appraisal.feedback_questions.map((j: any) => {
                //         if (i === j.name) {
                //             const res =  {
                //                 name: i,
                //                 value: j.value
                //             }
                //             console.log(res, 'res')
                //             return res
                //         }
                //         console.log(empData.data.appraisal.feedback_questions.map((j: any) => {
                //             if (i === j.name.name) {
                //                 const res =  {
                //                     name: i,
                //                     value: j.value
                //                 }
                //                 console.log(res, 'res')
                //                 return res
                //             }}),'works')
                //
                //         // console.log({
                //         //     name: i,
                //         //     value: j
                //         // },'works')
                //         // return {
                //         //     name: i,
                //         //     value: j.value
                //         // }
                //     })
                // })
            })
        }
    }, [fData, empData])



    useEffect(() => {
        if (area) {
            setAreaImprovement(area)
        }
    }, [area])

    // useEffect(() => {
    //     if(areaImprovement) {
    //         setImprovementList(areaImprovement)
    //     }
    //
    // },[])


    // useEffect(() => {
    //     if (improvementList && areaImprovement) {
    //         setarea(improvementList)
    //     }
    // },[improvementList, areaImprovement])

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (feedbackLoading) {
        return <div>Loading...</div>
    }

    console.log(empData, 'EEEEEEEEEE')

    const filterSpecificAction = (name: any) => {
        return specificActionList.filter((i: any) => i.improvement === name)
    }


    if (overallFeed.length === 0) {
        return <div>Loading...</div>
    }



    return (
        <div>
            <PerformanceFeedbackSummary>
                Performance Feedback Summary
            </PerformanceFeedbackSummary>
            {overallFeed && overallFeedback && overallFeedback.map((j: any, mapIndex: any) => {

                return (
                    <>
                        <Overallfeedback>{j.name.name}</Overallfeedback>
                        <TextField1 multiline
                            rows={2}
                            // name={j.name}
                            key={j._id}
                            value={overallFeed && overallFeedback && overallFeed[mapIndex].value}
                            onChange={(e) => {
                                setOverallFeedback(
                                    overallFeedback.map((i: any, ix: any) =>
                                        ix === mapIndex
                                            ? {
                                                ...i,
                                                value: e.target.value,
                                            }
                                            : i
                                    )
                                )
                            }} />
                    </>
                )
            })}
            <Divide><Divider /></Divide>
            <Box sx={{ flexGrow: 1 }}>
                <Stack 
                
                direction="row"
       justifyContent="space-between"
         alignItems="center"
      >
                <Areasofimprovement>
                    Area(s) of improvement (if any)
                </Areasofimprovement>
                <SpecificActions >
                            Specific Actions(s)
                        </SpecificActions>
                        </Stack>
                {area && area.map((singleImprovementList: any, index: any) => (
                    <Grid container spacing={2}>
                        <Grid item xs={6}>

                            <TextField2
                                placeholder="Add area(s) of Improvement"
                                multiline rows={5}
                                name="improvement"
                                key={index}
                                value={area[index].value}
                                // value={singleImprovementList.area}
                                // onChange={(e) => handleImprovementChange(e, index)}
                                onChange={(e) => {

                                    setarea(
                                        area.map((previousState: any, ix: any) => {
                                            console.log(area, 'areaaaaaa')
                                            if (ix === index) {
                                                return {
                                                    ...previousState,
                                                    value: e.target.value

                                                }

                                            }
                                            return previousState

                                        }))
                                }}

                            />
                            {/* <Tf3>
                                <TextField fullWidth multiline rows={5}
                                label='Add area(s) of Improvement'
                                name="improvement"
                                key={index}
                                value={singleImprovementList.improvement}
                                onChange={(e) => handleImprovementChange(e, index)}
                            ></TextField>
                            </Tf3> */}
                            {improvementList.length !== index &&
                                // (<IconButton onClick={() => handleImprovementRemove(index)}><RemoveIcon /></IconButton>)
                                (<Stack
                                    direction="row"
                                    alignItems="center"
                                    width='100px'
                                    marginLeft='25px'
                                    marginTop='18px'
                                    spacing={0}
                                >
                                    <IconButton onClick={() => handleSpecificRemove(index)}> <img
                                        // onClick={handleImprovementAdd}
                                        src={Bluenegative} alt='icon' />
                                        <Addmore> Remove</Addmore>
                                    </IconButton>
                                </Stack>)
                            }
                        </Grid>       
                        
                       
                        <Grid item xs={5}>

                            {area.map((i: any, mapIndex: number) => {
                                console.log(i, 'consolesssss')

                                return (
                                    <>
                                        {(index === mapIndex) && area && i.specific_actions.map((j: any, index1: any) => {
                                            console.log(j, 'console')
                                            return (
                                                // <TextField3 fullWidth multiline rows={1}
                                                //                    size="small"
                                                //                    placeholder='Add specific action(s)'
                                                //                    name="specificAction"
                                                //                    key={index}
                                                //                    value={j.value}
                                                //                    onChange={(e) => handleSpecificChange(e, index)}/>

                                                <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    spacing={1}
                                                >

                                                    <TextField3 fullWidth multiline rows={1}
                                                        size="small"

                                                        placeholder='Add specific action(s)'
                                                        name="specificAction"
                                                        // key={index}
                                                        value={area[index].specific_actions[index1].value}


                                                        onChange={(e) => {
                                                            setarea(
                                                                area.map((previousState: any, ix: any) => {
                                                                    console.log(area, 'bbbbbbbb')
                                                                    if (ix === index) {
                                                                        console.log(ix, 'bbbbbbbb')
                                                                        return {
                                                                            ...previousState,
                                                                            specific_actions: previousState.specific_actions.map((previousState1: any, ix1: any) => {
                                                                                console.log(ix1, 'bbbbbbbb')
                                                                                if (ix1 === index1) {
                                                                                    console.log(ix1, 'bbbbbbbb')
                                                                                    return {
                                                                                        ...previousState1,
                                                                                        value: e.target.value
                                                                                    }
                                                                                }
                                                                                return previousState1
                                                                            })
                                                                        }
                                                                    }
                                                                    return {
                                                                        ...previousState,
                                                                        // value: e.target.value
                                                                    }
                                                                }

                                                                    //     ix === index
                                                                    //         ? {
                                                                    //             ...i,
                                                                    //             values: e.target.value,
                                                                    //         }
                                                                    //         : i
                                                                )
                                                            )
                                                        }}
                                                    // value={area[index].specific_actions[index1].value}
                                                    />


                                                    {specificActionList.length - 1 === index && specificActionList.length < 6 &&
                                                        (
                                                            <IconButton onClick={handleSpecificAdd}><img src={Blueadd}
                                                                alt='icon' /></IconButton>)

                                                    }


                                                </Stack>
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </Grid>

                    </Grid>
                ))}
            </Box>
            <Stack
                direction="row"
                alignItems="center"
                width='100px'
                marginLeft='25px'
                marginTop='18px'
                spacing={0}
            >
                <IconButton onClick={handleImprovementAdd} >
                    <img src={Blueplus} alt='icon' />
                    <Addmore > Add More</Addmore>
                </IconButton>
            </Stack>

            <Divide1><Divider /></Divide1>
        </div>
    )
}

export default Performancefeedbacksummary;
