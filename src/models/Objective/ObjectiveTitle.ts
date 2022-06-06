import {model, Schema, Types} from "mongoose";


const ObjectiveTitleSchema = new Schema(
    {
        objective_title: {
            type: String,
            required: true,
            unique: true
        },
        objective_definition: {
            type: String,
            required: true,
            // unique: true
        }
    },
    {
        timestamps: true
    }
)


const ObjectiveTitle = model('ObjectiveTitle', ObjectiveTitleSchema);

export default ObjectiveTitle;
