import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    profilePicUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/indersingh/image/upload/v1593464618/App/user_mklcpl.png",
    },
    mobileNum: {
      type: String,
      default: "0123456789",
    },
    social: {
      linkedin: { type: String },
      github: { type: String },
      personalSite: { type: String },
    },
    contactInfo: {
      type: String,
    },
    newMessagePopup: {
      type: Boolean,
      default: true,
    },
    unreadMessage: {
      type: Boolean,
      default: false,
    },
    unreadNotification: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["student", "admin", "faculty", "alumni", "root"],
    },
    favouritePosts: [
      {
        post: {
          type: Schema.Types.ObjectId,
          ref: "Post",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
