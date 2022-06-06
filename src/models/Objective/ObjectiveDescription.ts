import {model, Schema} from "mongoose";


const ObjectiveDescriptionSchema = new Schema(
    {
        description: {
            type: String,
            // unique: true,
        },
        // detailed_description: {
        //     type: String,
        //     // unique: true,
        // },
        //
        // criteria: {
        //     type: String,
        //     enum: ['Rating', 'Choices', 'Text']
        // },
        objective_type: {
            type: Schema.Types.ObjectId,
            ref: 'ObjectiveType',
            // required: true
        },
        objective_title: {
            type: Schema.Types.ObjectId,
            ref: 'ObjectiveTitle',
            // required: true
        },
        objectiveTitle : {
            type: String,
        },


        level_1: {
            level_definition: {
                type:String,

            },
            behavioral_objective: [{
                type:String
            }],
        },
        level_2: {
            level_definition: {
                type:String,

            },
            behavioral_objective: [{
                type:String
            }],
        },
        level_3: {
            level_definition: {
                type:String,

            },
            behavioral_objective: [{
                type:String
            }],
        },
        level_4: {
            level_definition: {
                type:String,
            },
            behavioral_objective: [{
                type:String
            }],
        },

    },
    {
        timestamps: true
    }
)


const ObjectiveDescription = model('ObjectiveDescription', ObjectiveDescriptionSchema);

export default ObjectiveDescription;
