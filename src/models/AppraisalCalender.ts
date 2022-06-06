import {model, Schema} from "mongoose";

const AppraisalCalenderSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
    status: {
      type: String,
      enum: ['active', 'inactive'],
    },
        template: {
            type: Schema.Types.ObjectId,
            ref: "Template",
        },
        calender: {
            type: Schema.Types.ObjectId,
            ref: "Calender",
        }
    },
    {timestamps: true});

export default model("AppraisalCalender", AppraisalCalenderSchema);