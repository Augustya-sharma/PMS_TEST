import {model, Schema} from "mongoose";
import OtherRecommendation from "./Recommendation/OtherRecommendation";
import TrainingRecommendation from "./Recommendation/TrainingRecommendation";


const TemplateSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        status: {
            type: String,
            enum: ["not started", "in progress", "completed", "accepted", "rejected"],
            default: "not started"
        },

        weightage: {
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
                isChecked: {
                    type: Boolean,
                    default: false
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
                isChecked: {
                    type: Boolean,
                    default: false
                },
                value: {
                    type: Number,
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
                comments: {
                    type: String,
                },
                ratings: {
                    type: Schema.Types.ObjectId,
                    ref: "Ratings",
                },
            }],
        },
        position: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: "Employee"
            },
            isChecked: {
                type: Boolean,
                default: false
            }
        }],
        calendar: {
            type: Schema.Types.ObjectId,
            ref: 'Calender',
        },
        training_recommendation: [{
            name: {
                type: Schema.Types.ObjectId,
                ref: 'TrainingRecommendation'
            },
            isChecked: {
                type: Boolean,
                default: false
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

        }],
    },
    {timestamps: true}
);

export {TemplateSchema}
export default model("Template", TemplateSchema);
