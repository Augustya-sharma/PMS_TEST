import {model, Schema} from "mongoose";


const ObjectiveGroupSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },

    },
    {
        timestamps: true
    }
)


const ObjectiveGroup = model('ObjectiveGroup', ObjectiveGroupSchema);

export default ObjectiveGroup;
