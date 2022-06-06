import {model, Schema, Types} from "mongoose";


const ObjectiveTypeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        objective_group: {
            type: Schema.Types.ObjectId,
            ref: 'ObjectiveGroup',
            required: true,
            

        }
    },
    {
        timestamps: true
    }
)


const ObjectiveType = model('ObjectiveType', ObjectiveTypeSchema);

export default ObjectiveType;
