import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AlumniSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    currentCompany: {
      type: String,
    },

    yearOfPassing: {
      type: String,
      required: true,
    },
    jobRole:{
        type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Alumni = mongoose.model("Alumni", AlumniSchema);

export default Alumni;
