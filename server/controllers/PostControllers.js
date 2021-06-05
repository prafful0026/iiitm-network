import Post from "../models/PostModel.js";

//CREATE POST

const createPost = async (req, res) => {
  try {
    const { postCategory, postTitle, postDesc } = req.body;
    const postData = {
      user: req.userId,
      postTitle: postTitle.toUpperCase(),
      postDesc,
      postCategory,
    };
    const newPost = new Post(postData);
    await newPost.save();
    // await newPost.populate("user")
    const fetchPost=await Post.findOne({_id:newPost._id}).populate("user")
    if (newPost) res.status(200).json(fetchPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

//GET POST BY CATEGORY

const getPostByCategory = async (req, res) => {
  try {
    const posts = await Post.find({
      postCategory: req.params.postCategory,
    }).populate("user").sort({ createdAt: -1 });

    if (!posts) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "server error" });
  }
};
export { createPost, getPostByCategory };
