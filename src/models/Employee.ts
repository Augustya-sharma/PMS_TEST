import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'
import Template, {TemplateSchema} from "./Template";
import {string} from 'joi';


export interface Employee {
    EmployeeCode: string
    EmployeeName: string
    EmployeePosition: string
    EmployeeEmail: string
    EmployeeMobile: string
    EmployeeDepartment: string
    EmployeeSection: string
    EmployeeSubSection: string
    EmployeeAppraiserName: string
    EmployeeLineManagerName: string
    EmployeeReviewerName: string
    EmployeePAStatus: string
    EmployeePerformanceLevel: string
    EmployeePotentialLevel: string
    EmployeeNineBoxGridClassification: string
    EmployeeWorkLocation: string
    EmployeeAppraiserRating: string
    EmployeeNormalizerRating: string
    EmployeeReviewerRating: string
    EmployeeAppraiserOverallFeedback: string
    EmployeeAppraiserJustification: string
    EmployeeRecommendedAction: string
    EmployeeAppraiserRecommendationRemarks: string
    EmployeeAreasofImprovement: string
    EmployeeKeyStrengthsandQualities: string
    EmployeeAppraiserTrainingRecommendation: string
    EmployeeReviewerOverallFeedback: string
    EmployeeReviewerJustification: string
    EmployeeReviewerRecommendationRemarks: string
    EmployeeNormalizerJustification: string
    EmployeeNormalizerOverallFeedback: string
    EmployeeNormalizerRecommendationRemarks: string
    EmployeeSelfRating: string

    EmployeePreviousRating: string
    EmployeeAppraiserCode: string
    EmployeeReviewerCode: string
    EmployeeNormalizerCode: string
    EmployeeLineManagerCode: string
    EmployeeNormalizerName: string
    EmployeeLineManagerPosition: string
    EmployeeDivision: string
    EmployeePassword: string
    EmployeeGrade: string
    EmployeeDateofJoining: Date
    LastAppraisalDate: string
    LastModifiedDate: string
    FinalRating: string
}

const EmployeeSchema = new Schema({
    employeeCode: {
        type: String,
    },
    name: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,

    },
    department: {
        type: String,

    },
    division: {
        type: String,

    },
    password: {
        type: String,
    },
    grade: {
        type: String,
    },
    date_of_joining: {
        type: Date,
    },
    position: {
        type: String,
    },
    line_manager_1: {
        type: String,
    },
    line_manager_2: {
        type: String,
    },
    last_appraisal_date: {
        type: String,
    },
    last_modified_date: {
        type: String,
    },
    final_rating: {
        type: String,
    },
    appraisal_status: {
        type: String,
        enum: ["appraiser", "normalizer", "reviewer", "self-rating"],
    },

    rejected: {
        name: {
            type: Schema.Types.ObjectId,
            ref: "ObjectiveDescription",

        }
    },

    appraisal_template: {
        objective_group: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveGroup",
                required: true
            },
            value: {
                type: Number,
            },
        }],
        objective_type: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveType",
                required: true
            },
            value: {
                type: Number,
            },
        }],
        objective_description: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveDescription",
                required: true
            },
            value: {
                type: Number,
            },
            ratings: {
                type: Schema.Types.ObjectId,
                ref: "Ratings",
            },
            level_1_isChecked: {
                type: Boolean,
                default: false
            },
            level_2_isChecked: {
                type: Boolean,
                default: false
            },
            level_3_isChecked: {
                type: Boolean,
                default: false
            },
            level_4_isChecked: {
                type: Boolean,
                default: false
            },


        }],
        training_recommendation: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'TrainingRecommendation',
                required: true
            }
        }],
        other_recommendation: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'OtherRecommendation'
            },
            isChecked: {
                type: Boolean,
                default: false
            },
        }],

    },

    appraisal: {

        appraiser_status: {
            type: String,
            default: 'pending'
        },
        appraisal_acceptance: {
            type: Boolean,
        },

        status: {
            type: String,
            enum: ["not-started", "in-progress", "completed", "self-rating"],
            default: "not started"
        },
        appraiser_rating: {
            type: Number,
            default: 0
        },
        objective_group: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveGroup",
                required: true
            },
            value: {
                type: Number,
            },
        }],
        objective_type: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveType",
                required: true
            },
            value: {
                type: Number,
            },
        }],
        objective_description: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveDescription",
                required: true
            },
            value: {
                type: Number,
            },
            ratings: {
                type: Schema.Types.ObjectId,
                ref: "RatingScaleDescription",
            },
            rating_value: {
                type: Number,
            },
            comments: {
                type: String,
            },
            level_1_isChecked: {
                type: Boolean,
                default: false
            },
            level_2_isChecked: {
                type: Boolean,
                default: false
            },
            level_3_isChecked: {
                type: Boolean,
                default: false
            },
            level_4_isChecked: {
                type: Boolean,
                default: false
            },


        }],
        training_recommendation: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'TrainingRecommendation'
            },
            training_name: {
                type: String,
            },
            justification: {
                type: String,
            },
            comments: {
                type: String,
                default: ''
            },
        }],
        other_recommendation: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'OtherRecommendation'
            },
            isChecked: {
                type: Boolean,
                default: false
            },
            comments: {
                type: String,
                default: ''
            },
        }],

        other_recommendation_comments: {
            type: String,
            default: ''
        },
        training_recommendation_comments: {
            type: String,
            default: ''
        },

        feedback_questions: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'FeedBackQuestionaire'
            },
            value: {
                type: String,
                default: ""
            },
        }],

        area_of_improvement: [{
            value: {
                type: String,
                default: ""
            },
            specific_actions: [{
                value: {
                    type: String,
                    default: ""
                },
            }],
        }],
    },

    // "specific_actions": [{
    //     "value": "test1",
    //     "value": "test2",
    //     "value": "test3"
    //
    // }]
    reviewerIsChecked: {
        type: Boolean,
        default: false
    },
    reviewerIsDisabled: {
        type: Boolean,
        default: true
    },
    appraiserIsChecked: {
        type: Boolean,
    },
    appraiserIsDisabled: {
        type: Boolean,
        default: true
    },
    normalizerIsChecked: {
        type: Boolean,
        default: false
    },
    normalizerIsDisabled: {
        type: Boolean,
        default: true
    },


    reviewer: {
        isChecked: {
            type: Boolean,
            default: false
        },
        reviewer_acceptance: {
            type: Boolean,
        },

        reviewer_status: {
            type: String,
            default: 'pending'
        },

        reviewer_rating: {
            type: Number,
            default: 0
        },
        reviewer_rejected_value: [{
            value: {
                type: String,
            },
            isChecked: {
                type: Boolean,
                default: false
            },
        }],

        // reviewer_rejected_value: [{
        //     value: {type: string}
        // }],

        objective_group: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveGroup",
                required: true
            },
            value: {
                type: Number,
            },
        }],
        objective_type: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveType",
                required: true
            },
            value: {
                type: Number,
            },
        }],
        objective_description: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveDescription",
                required: true
            },
            value: {
                type: Number,
            },
            ratings: {
                type: Schema.Types.ObjectId,
                ref: "RatingScaleDescription",
            },
            comments: {
                type: String,
            },
            level_1_isChecked: {
                type: Boolean,
                default: false
            },
            level_2_isChecked: {
                type: Boolean,
                default: false
            },
            level_3_isChecked: {
                type: Boolean,
                default: false
            },
            level_4_isChecked: {
                type: Boolean,
                default: false
            },


        }],
        training_recommendation: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'TrainingRecommendation'
            },
            training_name: {
                type: String,
            },
            justification: {
                type: String,
            },

        }],
        other_recommendation_comments: {
            type: String,
            default: ''
        },
        training_recommendation_comments: {
            type: String,
            default: ''
        },

        other_recommendation: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'OtherRecommendation'
            },
            isChecked: {
                type: Boolean,
                default: false
            },

        }],

        area_of_improvement: [{
            value: {
                type: String,
                default: ''
            },
            specific_actions: [{
                value: {
                    type: String,
                    default: ''
                },
            }],

            comments: {
                type: String,
            },
        }],

        feedback_questions: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'FeedBackQuestionaire'
            },
            value: {
                type: String,
                default: ""
            },
        }],
    },

    normalizer: {
        isChecked: {
            type: Boolean,
            default: false
        },
        normalizer_status: {
            type: String,
            default: 'pending'

        },
        normalizer_acceptance: {
            type: Boolean,
        },
        normalizer_rating: {
            type: Number,
            default: 0
        },
        normalizer_rejected_value: [{
            value: {
                type: String,
            },
            isChecked: {
                type: Boolean,
                default: false
            },
        }],
        objective_group: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveGroup",
                required: true
            },
            value: {
                type: Number,
            },
        }],
        objective_type: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveType",
                required: true
            },
            value: {
                type: Number,
            },
        }],
        objective_description: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "ObjectiveDescription",
                required: true
            },
            value: {
                type: Number,
            },
            ratings: {
                type: Schema.Types.ObjectId,
                ref: "RatingScaleDescription",
            },
            comments: {
                type: String,
            },
            level_1_isChecked: {
                type: Boolean,
                default: false
            },
            level_2_isChecked: {
                type: Boolean,
                default: false
            },
            level_3_isChecked: {
                type: Boolean,
                default: false
            },
            level_4_isChecked: {
                type: Boolean,
                default: false
            },


        }],
        training_recommendation: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'TrainingRecommendation'
            },
            training_name: {
                type: String,
            },
            justification: {
                type: String,
            },
        }],
        other_recommendation: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'OtherRecommendation'
            },
            isChecked: {
                type: Boolean,
                default: false
            }
        }],
        other_recommendation_comments: {
            type: String,
            default: ''
        },
        training_recommendation_comments: {
            type: String,
            default: ''
        },

        feedback_questions: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'FeedBackQuestionaire'
            },
            value: {
                type: String,
                default: ""
            },
        }],

        area_of_improvement: [{
            value: {
                type: String,
                default: ''
            },
            specific_actions: [{
                value: {
                    type: String,
                    default: ''
                },
            }],
        }],

    }

})

export default model('Employee', EmployeeSchema)
