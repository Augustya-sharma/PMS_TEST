import asyncHandler from "../middleware/asyncHandler";
import {Request, Response} from "express";
import AppraisalCalender from "../models/AppraisalCalender";
import {StatusCodes} from "http-status-codes";
import Template from "../models/Template";
import {Employee} from "../models";
import Calender from "../models/Calender";
import {BadRequestError} from "../errors";

const createAppraisalCalender = asyncHandler(async (req: Request, res: Response) => {
    const {
        template,
        calender
    } = req.body;

    const validateTemplate = await Template.findOne({_id: template});

    const weightageValidator = (a: any) => {

        return a.map((j: any) => !!j.value)

    }

    const {
        name: templateName,
        other_recommendation,
        training_recommendation,
        position,
        calendar,
        weightage
    } = validateTemplate

    // if (other_recommendation && training_recommendation && position && calendar) {
    //     throw new BadRequestError('Please fill all the required fields')
    // }

    // if (other_recommendation.length > 0 && training_recommendation.length > 0 && position.length > 0 && calendar) {
    if (other_recommendation.length <= 0 || training_recommendation.length <= 0 || position.length <= 0 || (weightageValidator(weightage.objective_description)[0] === false) || calender === undefined) {
        // throw new BadRequestError('Please fill all the required fields')
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'Please fill all the required fields ',
            wro: weightageValidator(weightage.objective_description)
        })
    }


    // const weightageValidator = (a:any) => a.map((j:any) => j.value ? true : false)  => ()


    const checkValidation = () => {
        weightageValidator(weightage.objective_group)
        weightageValidator(weightage.objective_type)
        weightageValidator(weightage.objective_description)


    }


    const len = other_recommendation.length
    // if (calender) {
    //     const {start_date, end_date} = await Calender.findById(calender);
    // }

    const name = `${templateName}  Appraisal Calendar`;


    const Acalender = await AppraisalCalender.create({
        name,
        calender,
        template
    })

    res.status(StatusCodes.CREATED).json({
        success: true,
        // wro:  weightageValidator(weightage.objective_description)
        Acalender
        // templateName,
        // calenderName
    });
})


const getAllAppraisalCalender = asyncHandler(async (req: Request, res: Response) => {

    const calenders = await AppraisalCalender.find().sort({createdAt: -1}).populate('template').populate('calender');

    res.status(StatusCodes.OK).json({
        success: true,
        data: calenders,
    });
})

const getAppraisalCalenderById = asyncHandler(async (req: Request, res: Response) => {

    const calender = await AppraisalCalender.findById(req.params.id);

    if (!calender) {
        return res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            error: "No calender found",
        });
    }

    res.status(StatusCodes.OK).json({
        success: true,
        data: calender,
    });
})

const updateAppraisalCalender = asyncHandler(async (req: Request, res: Response) => {

    const calender = await AppraisalCalender.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!calender) {
        return res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            error: "No calender found",
        });
    }

    res.status(StatusCodes.OK).json({
        success: true,
        data: calender,
    });
})

// const deleteAppraisalCalender = asyncHandler(async (req: Request, res: Response) => {
//
//     const calender = await AppraisalCalender.findByIdAndDelete(req.params.id);
//
//     if (!calender) {
//         return res.status(StatusCodes.NOT_FOUND).json({
//             success: false,
//             error: "No calender found",
//         });
//     }
//
//     res.status(StatusCodes.OK).json({
//         success: true,
//         data: calender,
//     });
// })



const startAppraisal = asyncHandler(async (req: Request, res: Response) => {

    const {template} = await AppraisalCalender.findById(req.params.id);

    const update = await AppraisalCalender.findByIdAndUpdate(req.params.id, {
        status: 'active'
    }, {
        new: true,
        runValidators: true,
    });

    console.log(template)


    const {weightage, position, training_recommendation, other_recommendation} = await Template.findById(template);


    const getName = (arr: any) => {
        return arr.map((e: any) => e.name)
    }

    const getNameRec = (arr: any) => {
        return arr.map((item: any) => {
            return {
                name: item.name,
                isChecked: false
            }

        })
    }


    const appraisal = {
        objective_group: weightage.objective_group,
        objective_type: weightage.objective_type,
        objective_description: weightage.objective_description,
        training_recommendation: getNameRec(training_recommendation),
        other_recommendation: getNameRec(other_recommendation),
    }


    const employee = await Employee.updateMany({_id: {$in: getName(position)}},
        {
            $set: {
                appraisal_template: appraisal,
                reviewerIsChecked: false,
                reviewerIsDisabled: true,
                normalizerIsChecked: false,
                normalizerIsDisabled: true,
                appraiserIsDisabled: true,
                appraiserIsChecked: false,
                appraisal: {
                    appraiser_status: 'pending',
                    status: 'in-progress',
                    objective_group: weightage.objective_group,
                    objective_type: weightage.objective_type,
                    objective_description: weightage.objective_description,
                    appraiser_rating: 0,
                    training_recommendation: [],
                    other_recommendation: [],
                    other_recommendation_comments: '',
                    training_recommendation_comments: '',
                    feedback_questions: [],
                    area_of_improvement: []

                },
                reviewer: {
                    status: 'in-progress',
                    reviewer_status: 'pending',
                    objective_group: weightage.objective_group,
                    objective_type: weightage.objective_type,
                    objective_description: weightage.objective_description,
                    reviewer_rating: 0,
                    reviewer_rejected_value: [],
                    training_recommendation: [],
                    other_recommendation: [],
                    other_recommendation_comments: '',
                    training_recommendation_comments: '',
                    feedback_questions: [],
                    area_of_improvement: []

                },
                normalizer: {
                    status: 'in-progress',
                    objective_group: weightage.objective_group,
                    objective_type: weightage.objective_type,
                    objective_description: weightage.objective_description,
                    normalizer_status: 'pending',
                    normalizer_rating: 0,
                    normalizer_rejected_value: [],
                    training_recommendation: [],
                    other_recommendation: [],
                    other_recommendation_comments: '',
                    training_recommendation_comments: '',
                    feedback_questions: [],
                    area_of_improvement: [],

                }
            },

        },
        {multi: true});

    // const template = await Template.findById(req.body.templateId);

    res.status(StatusCodes.OK).json({
        // success: true,
        // data: position,
        // appraisal,
        // position,
       data: weightage.objective_description,
        employee
    });
})


const deleteAppraisalCalender = asyncHandler(async (req: Request, res: Response) => {
    const {template} = await AppraisalCalender.findById(req.params.id);

    const update = await AppraisalCalender.findByIdAndUpdate(req.params.id, {
        status: 'active'
    }, {
        new: true,
        runValidators: true,
    });

    console.log(template)


    const {weightage, position, training_recommendation, other_recommendation} = await Template.findById(template);


    const getName = (arr: any) => {
        return arr.map((e: any) => e.name)
    }

    const getNameRec = (arr: any) => {
        return arr.map((item: any) => {
            return {
                name: item.name,
                isChecked: false
            }

        })
    }


    const appraisal = {
        objective_group: [],
        objective_type: [],
        objective_description: [],
        training_recommendation: [],
        other_recommendation: []
    }

    const employee = await Employee.updateMany({_id: {$in: getName(position)}},
        {
            $set: {
                reviewerIsChecked: false,
                reviewerIsDisabled: false,
                normalizerIsChecked: false,
                normalizerIsDisabled: false,
                appraisal_template: appraisal,
                appraisal: {
                    status: 'not-started',
                    objective_group: [],
                    objective_type: [],
                    objective_description: [],
                    training_recommendation: [],
                    other_recommendation: [],
                    appraiser_rating: 0,
                    appraisal_acceptance: false,
                },


            },

        },
        {multi: true});

    // const template = await Template.findById(req.body.templateId);
    const calender = await AppraisalCalender.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({
        // success: true,
        // data: position,
        // appraisal,
        // position,
        employee
    });


})


export {
    createAppraisalCalender,
    deleteAppraisalCalender,
    getAppraisalCalenderById,
    getAllAppraisalCalender,
    updateAppraisalCalender,
    startAppraisal
}
