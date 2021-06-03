import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    rollNumber: {
        type:String,
        required:true,
        unique:true
    }, 
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);

export default Student;