import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FacultySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    designation: {
      type: String,
      required: true,
    },
    honour: {
      type: String,
      required: true,
    },
    department:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Faculty = mongoose.model("Faculty", FacultySchema);

export default Faculty;
