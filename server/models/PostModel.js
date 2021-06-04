import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },

    postTitle: { type: String, required: true },
    postDesc: { type: String, required: true },

    location: { type: String },

    picUrl: { type: String },

    postCategory: {
      type: String,
      required: true,
      enum: ["student", "placement", "college", "general"],
    },
    likes: [{ user: { type: Schema.Types.ObjectId, ref: "User" } }],

    comments: [
      {
        _id: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: "User" },
        text: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
