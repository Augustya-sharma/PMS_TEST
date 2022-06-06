import {useState, createContext, useContext, useEffect} from "react";
import ReactDOM from "react-dom";

import {
    useCreateEmployeeAppraisalMutation,
    useGetEmployeeAppraisalQuery,
    useGetFeedBackQuery,
    useGetRatingScaleQuery,
    useGetOtherRecommendationQuery,
    useGetTrainingRecommendationQuery, useUpdateEmployeeAppraisalMutation
    // @ts-ignore
} from "../service";
import {useParams} from "react-router-dom";
import _ from "lodash";

const NormalizerContext = createContext(undefined)

export function useNormalizerContext() {
    return useContext(NormalizerContext)
}


function useProvidedNormalizerContext() {

    const {employee_id} = useParams()
    const {feedback_id} = useParams()

    console.log(employee_id, 'employee_id')
    const {data: oData, isLoading: oLoad} = useGetOtherRecommendationQuery('')

    const {data: tData} = useGetTrainingRecommendationQuery('')

    const {data: fData} = useGetFeedBackQuery('')
    const {data: ratingData} = useGetRatingScaleQuery('')
    const {data: empData} = useGetEmployeeAppraisalQuery(employee_id)
    console.log(empData, 'eeeee')

    const [updateMutation, isLoading] = useUpdateEmployeeAppraisalMutation()

    const [otherRecommendation, setOtherRecommendation] = useState<any>([])
    const [otherRecommendationComments, setOtherRecommendationComments] = useState<any>('')
    const [appraiserTrainingRecommendation, setAppraiserTrainingRecommendation] = useState<any>([])
    const [reviewerTrainingRecommendation, setReviewerTrainingRecommendation] = useState<any>([])
    const [appraiserTrainingRecommendationComments, setAppraiserTrainingRecommendationComments] = useState<any>('')
    const [reviewerTrainingRecommendationComments, setReviewerTrainingRecommendationComments] = useState<any>('')
    const [appraiserOtherRecommendation, setAppraiserOtherRecommendation] = useState<any>([])
    const [reviewerOtherRecommendation, setReviewerOtherRecommendation] = useState<any>([])
    const [appraiserFeedback, setAppraiserFeedback] = useState<any>([])
    const [reviewerFeedback, setReviewerFeedback] = useState<any>([])
    const [appraiserAreaOfImprovement, setAppraiserAreaOfImprovement] = useState<any>([])
    const [reviewerAreaOfImprovement, setReviewerAreaOfImprovement] = useState<any>([])
    const [trainingSelectValue, setTrainingSelectValue] = useState<any>([])
    const [trainingRecommendation, setTrainingRecommendation] = useState<any>([])
    const [trainingRecommendationComments, setTrainingRecommendationComments] = useState<any>('')
    const [trainingRecommendationFormValues, setTrainingRecommendationFormValues] = useState<any>([])


    const [objectiveType, setObjectiveType] = useState<any>([])
    const [objectiveDescription, setObjectiveDescription] = useState<any>([])

    const [overAllRating, setOverAllRating] = useState<any>(0)


    const [overallFeed, setOverallFeed] = useState<any>([])
    const [areaImprovement, setAreaImprovement] = useState<any>([{
        id: Date.now(),
        value: "",
        specific_actions: [{value: ""}, {value: ""}, {value: ""}],
    }])

    const [area, setarea] = useState<any>([{
        id: Date.now(),
        value: "",
        specific_actions: [{value: ""}, {value: ""}, {value: ""}],
    }])


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


    useEffect(() => {
        if (empData) {

            setOtherRecommendation(() => {
                const checked = empData.data.normalizer.other_recommendation.map((i: any) => {

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

                })

                // console.log(checked, 'checked')
                const newArr = [...notChecked, ...checked]
                // console.log(newArr, 'newArr')
                // @ts-ignore
                let uniqueObjArray = [...new Map(newArr.map((item) => [item["_id"], item])).values()];
                console.log(newArr.map((j: any) => j.name._id), 'empData.data.appraisal_template.other_recommendation')
                // let uniqueObjArray = _.uniqBy(newArr, "_id");
                console.log(uniqueObjArray, 'uniqueObjArray')
                return uniqueObjArray
            })
            setOtherRecommendationComments(() => {
                return empData.data.normalizer.other_recommendation_comments
            })
            setTrainingSelectValue(empData.data.appraisal_template.training_recommendation)
            setTrainingRecommendation(() => {
                return empData.data.normalizer.training_recommendation
            })
            setTrainingRecommendationComments(() => {
                return empData.data.normalizer.training_recommendation_comments
            })

            setAppraiserTrainingRecommendation(() => {
                return empData.data.appraisal.training_recommendation
            })
            setAppraiserTrainingRecommendationComments(() => {
                return empData.data.appraisal.training_recommendation_comments
            })
            setAppraiserOtherRecommendation(() => {
                return empData.data.appraisal.other_recommendation
            })
            setAppraiserFeedback(() => {
                return empData.data.appraisal.feedback_questions
            })
            setAppraiserAreaOfImprovement(() => {
                return empData.data.appraisal.area_of_improvement
            })
            setReviewerOtherRecommendation(() => {
                return empData.data.reviewer.other_recommendation
            })
            setReviewerTrainingRecommendation(() => {
                return empData.data.reviewer.training_recommendation
            })
            setReviewerTrainingRecommendationComments(() => {
                return empData.data.reviewer.training_recommendation_comments
            })
            setReviewerAreaOfImprovement(() => {
                return empData.data.reviewer.area_of_improvement
            })
            setReviewerFeedback(() => {
                return empData.data.reviewer.feedback_questions
            })

        }
    }, [empData])

    useEffect(() => {
        if (empData) {
            setObjectiveType(empData.data.reviewer.objective_type)
        }
    }, [empData])


    useEffect(() => {
        if (empData) {
            setarea(empData.data.normalizer.area_of_improvement)
            // console.log(empData.data.appraisal.area_of_improvement, 'areaImprovement')
        }


    }, [empData])


    useEffect(() => {
        if (empData) {
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

            setObjectiveDescription(empData.data.normalizer.objective_description.map((j: any) => {
                return {
                    ...j,
                    objective_type: getObjectiveTypeValue(j.name.objective_type)

                }
            }))
        }
    }, [empData, objectiveType])

    useEffect(() => {
        if (objectiveDescription.length > 0 && empData) {
            const objectiveDescriptionMapped = objectiveDescription.map((i: any) => {
                // if (i.ratings) {
                console.log(i.objective_type, 'objective_type')
                const sum = (i.value * i.objective_type) / 10000
                const newSum = sum * i?.ratings?.rating
                console.log(sum, 'newSum')
                return newSum
                // }


            })
            console.log(_.sum(objectiveDescriptionMapped), 'objectiveDescriptionMapped')
            setOverAllRating(() => {
                return _.sum(objectiveDescriptionMapped).toFixed(2)
            })

        }
    }, [objectiveDescription, empData])

    useEffect(() => {
        if (overAllRating) {
            updateMutation({
                "normalizer.normalizer_rating": overAllRating,
                id: employee_id
            })
        }
    }, [empData, overAllRating])

    return {
        otherRecommendation,
        setOtherRecommendation,
        otherRecommendationComments,
        setOtherRecommendationComments,
        trainingRecommendation,
        setTrainingRecommendation,
        trainingRecommendationComments,
        setTrainingRecommendationComments,
        appraiserTrainingRecommendation,
        setAppraiserTrainingRecommendation,
        tData,
        fData,
        updateMutation,
        checkboxHandler,
        checkboxIdHandler,
        employee_id,
        trainingSelectValue,
        trainingRecommendationFormValues,
        setTrainingRecommendationFormValues,
        appraiserOtherRecommendation,
        setAppraiserOtherRecommendation,
        reviewerOtherRecommendation,
        setReviewerOtherRecommendation,
        reviewerTrainingRecommendation,
        appraiserFeedback,
        setAppraiserFeedback,
        reviewerFeedback,
        setReviewerFeedback,
        areaImprovement,
        setAreaImprovement,
        appraiserAreaOfImprovement,
        setAppraiserAreaOfImprovement,
        reviewerAreaOfImprovement,
        setReviewerAreaOfImprovement,
        isLoading,
        area,
        setarea,
        overallFeed,
        setOverallFeed,
        empData,
        ratingData
    }
}

export default function ProvidedNormalizerContextProvider(props: any) {
    const data = useProvidedNormalizerContext()
    const {children} = props
    return (
        // @ts-ignore
        <NormalizerContext.Provider value={data}>
            {children}
        </NormalizerContext.Provider>
    )

}
