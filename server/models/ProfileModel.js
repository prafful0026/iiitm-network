import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },

    bio: { type: String},

    social: {
      facebook: { type: String },
      twitter: { type: String },
      youtube: { type: String },
      instagram: { type: String },
      github: { type: String },
    },

    contactInfo:{
      type:String
    }
  },
  { timestamps: true }
);


const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;