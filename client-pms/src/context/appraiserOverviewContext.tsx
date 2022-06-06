import {useState, createContext, useContext, useEffect} from "react";
import ReactDOM from "react-dom";

import {
    useCreateEmployeeAppraisalMutation,
    useGetEmployeeAppraisalQuery,
    useGetFeedBackQuery,
    useGetOtherRecommendationQuery,
    useGetTrainingRecommendationQuery, useUpdateEmployeeAppraisalMutation, useGetSingleFeedBackQuery
    // @ts-ignore
} from "../service";
import {useParams} from "react-router-dom";
import _ from "lodash";

const AppraisalContext = createContext(undefined)

export function useAppraisalContext() {
    return useContext(AppraisalContext)
}


function useProvidedAppraisalContext() {

    const {employee_id} = useParams()
    const {feedback_id} = useParams()
    const [fieldError, setFieldError] = useState(false)
    const [open, setOpen] = useState(false)

    console.log(employee_id, 'employee_id')
    const {data: oData} = useGetOtherRecommendationQuery('')

    const {data: tData} = useGetTrainingRecommendationQuery('')

    const {data: fData} = useGetFeedBackQuery('')
    const {data: singleFeedback, isLoading: feedbackLoading} = useGetFeedBackQuery(feedback_id)
    const {data: empData, isLoading} = useGetEmployeeAppraisalQuery(employee_id)

    const [updateMutation] = useUpdateEmployeeAppraisalMutation()

    const [otherRecommendation, setOtherRecommendation] = useState<any>([])
    const [trainingRecommendation, setTrainingRecommendation] = useState<any>([])
    const [trainingSelectValue, setTrainingSelectValue] = useState<any>([])
    const [trainingRecommendationFormValues, setTrainingRecommendationFormValues] = useState<any>([])
    const [objectiveDescription, setObjectiveDescription] = useState<any>([])
    const [objectiveType, setObjectiveType] = useState<any>([])
    const [overAllRating, setOverAllRating] = useState<any>(0)
    const [statusSort, setstatusSort] = useState<any>('')
 

    const [overallFeed, setOverallFeed] = useState<any>([])
    const [areaImprovement, setAreaImprovement] = useState<any>([{
        id: Date.now(),
        value: "",
        specific_actions: [{value: ""}, {value: ""}, {value: ""}],
    }])

    const [area, setarea] = useState<any>([{
        id: Date.now(),
        value: "",
        specific_actions: [{ value: "" }, { value: "" }, { value: "" }],
    }])



    console.log(objectiveDescription, 'empData')


    const checkboxHandler = (checkbox: any[]) => {
        if (checkbox) {
            const res = checkbox.filter((i: any) => {
                return i.isChecked === true;
            });
            return res;
        }
    };

    const checkboxIdHandler = (res: any[]) => {
        console.log(res, '``res````')
        if (res) {
            const check = res.map((i: any) => {
                return {
                    name: i._id,
                    isChecked: i.isChecked,
                };
            });
            return check;
        }
    };


    const errorHandler = () => {
        (trainingRecommendationFormValues && trainingRecommendationFormValues.map((i: any) => {
            console.log(i, 'iiiiiiiiiii')
            setFieldError(false)

            if (i.name != "" && i.training_name === "" && i.justification === "") {
                setFieldError(true)

            } else if (i.name === "" && i.training_name != "" && i.justification != "") {
                setFieldError(false)
            } else {
                setFieldError(false)
            }

        }))
    }


    useEffect(() => {
        if (empData) {
            setObjectiveType(empData.data.appraisal.objective_type)
        }
    }, [empData])


    useEffect(() => {
        if (empData && objectiveType) {
            setOtherRecommendation(() => {
                const checked = empData.data.appraisal.other_recommendation.map((i: any) => {
                    return {
                        ...i.name,
                        _id: i.name._id,
                        isChecked: i.isChecked,
                    };
                });

                const notChecked = empData.data.appraisal_template.other_recommendation.map((i: any) => {
                    return {
                        ...i.name,
                        _id: i.name._id,
                        isChecked: i.isChecked,
                    };
                });

                console.log(checked, 'checked')
                const newArr = [...notChecked, ...checked]
                console.log(newArr, 'newArr')
                // @ts-ignore
                let uniqueObjArray = [...new Map(newArr.map((item) => [item["_id"], item])).values()];
                console.log(newArr.map((j: any) => j.name._id), 'empData.data.appraisal_template.other_recommendation')
                // let uniqueObjArray = _.uniqBy(newArr, "_id");
                console.log(uniqueObjArray, 'uniqueObjArray')
                return uniqueObjArray
            })
            setTrainingSelectValue(empData.data.appraisal_template.training_recommendation)
            setTrainingRecommendation(() => {
                return empData.data.appraisal.training_recommendation
            })

            const getObjectiveTypeValue = (id: any) => {
                if (objectiveType && id) {
                    const res = objectiveType.find((item: any) => {
                        return item.name._id === id
                    })
                    // console.log(res.value, 'res')
                    if (res) {
                        return res.value
                    }
                }
            }

            setObjectiveDescription(empData.data.appraisal.objective_description.map((j: any) => {
                return {
                    ...j,
                    objective_type: getObjectiveTypeValue(j.name.objective_type)

                }
            }))


        }
    }, [empData, objectiveType])

    useEffect(() => {
        if (empData) {
            setarea(empData.data.appraisal.area_of_improvement)
            // console.log(empData.data.appraisal.area_of_improvement, 'areaImprovement')
        }


    }, [empData])


    useEffect(() => {
        if (objectiveDescription && empData && objectiveType) {


            const filtered = objectiveType.map((i: any) => {
                // console.log(i.name._id, 'objectiveType')
                return objectiveDescription.filter((j: any) => {
                    console.log(j.name, 'objectiveType')
                    return i.name._id === j.name.objective_type
                })
            })
            console.log(filtered, 'filtered')
            return filtered
        }

    }, [objectiveDescription, empData, objectiveType])


    useEffect(() => {
        if (objectiveDescription.length > 0 && empData && objectiveType) {
            const objectiveDescriptionMapped = objectiveDescription.map((i: any) => {
                // if (i.ratings) {
                // console.log(i.objective_type, 'objective_type')
                    const sum = (i.value * i.objective_type) / 10000
                    const newSum = sum * i?.ratings?.rating
                    console.log(i.value, 'newSum')
                    return newSum
                // }


            })
            console.log(_.sum(objectiveDescriptionMapped), 'objectiveDescriptionMapped')
            setOverAllRating(() => {
                return _.sum(objectiveDescriptionMapped).toFixed(2)
            })

        }
    }, [objectiveDescription,empData,objectiveType])

    useEffect(() => {
        if (overAllRating) {
            updateMutation({
                "appraisal.appraiser_rating": overAllRating,
                id: employee_id
            })

        }

    }, [empData, overAllRating])

    const handleClick = () => {
        setOpen(true);
      };


    return {
        otherRecommendation,
        setOtherRecommendation,
        trainingRecommendation,
        setTrainingRecommendation,
        tData,
        fData,
        updateMutation,
        checkboxHandler,
        checkboxIdHandler,
        employee_id,
        trainingSelectValue,
        trainingRecommendationFormValues,
        setTrainingRecommendationFormValues,
        overallFeed,
        setOverallFeed,
        isLoading,
        overAllRating,
        singleFeedback,
        feedbackLoading,
        fieldError,
        errorHandler,
        empData,
        areaImprovement,
        setAreaImprovement,
        area, setarea,
        handleClick,
        statusSort,
        setstatusSort
    }
}

export default function ProvidedAppraisalContextProvider(props: any) {
    const data = useProvidedAppraisalContext()
    const {children} = props
    return (
        // @ts-ignore
        <AppraisalContext.Provider value={data}>
            {children}
        </AppraisalContext.Provider>
    )

}
