import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";
import { v4 as uuid } from 'uuid';
//CREATE POST

const createPost = async (req, res) => {
  try {
    const { postCategory, postTitle, postDesc, picUrl } = req.body;
    const postData = {
      user: req.userId,
      postTitle: postTitle.toUpperCase(),
      postDesc,
      postCategory,
      picUrl,
    };
    const newPost = new Post(postData);
    await newPost.save();
    // await newPost.populate("user")
    const fetchPost = await Post.findOne({ _id: newPost._id }).populate("user");
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
    })
      .populate("user")
      .sort({ createdAt: -1 });

    if (!posts) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "server error" });
  }
};

//GET POST BY ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.postId,
    }).populate("user").populate("comments.user");;

    if (!post) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "server error" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { userId } = req;
    const { postId } = req.params;

    const post = await Post.findOne({ _id: postId });
    if (!post) return res.status(404).send("post not found");

    const user = await User.findById(userId);

    if (post.user.toString() != userId) {
      if (user.role === "root") {
        await post.remove();
        return res.status(200).json({ message: "post deleted successfully" });
      } else {
        return res.status(401).json({ message: "unauthorized user" });
      }
    } else {
      await post.remove();
      return res.status(200).json({ message: "post deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

//LIKE A POST

const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "No Post found" });
    }

    const user = await User.findOne({ _id: userId });

    const isLiked =
      post.likes.filter((like) => like.user.toString() === userId).length > 0;

    if (isLiked) {
      const index = post.likes
        .map((like) => like.user.toString())
        .indexOf(userId);
      const postIndex = user.favouritePosts
        .map((post) => post.post.toString())
        .indexOf(postId);
      if (postIndex >= 0) await user.favouritePosts.splice(postIndex, 1);
      await user.save();
      await post.likes.splice(index, 1);

      await post.save();

      return res.status(200).json({ message: "Post disliked", isLiked });
    }

    await post.likes.unshift({ user: userId });
    await user.favouritePosts.unshift({ post: postId });
    await user.save();
    await post.save();

    return res.status(200).json({ message: "Post liked", isLiked });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Server error` });
  }
};

const getFavouritePosts = async (req, res) => {
  try {
    const { userId } = req;
    const user = await User.findOne({ _id: userId }).populate(
      "favouritePosts.post"
    );
    await user.populate("favouritePosts.post.user").execPopulate();
    let postToBeSent = [];
    user.favouritePosts.map((post) => {
      post.post &&
        postToBeSent.push({
          _id: post.post._id,
          postTitle: post.post.postTitle,
          postDesc: post.post.postDesc,
          picUrl: post.post.picUrl,
          likes: post.post.likes,
          createdAt: post.post.createdAt,
          user: {
            _id: post.post.user._id,
            name: post.post.user.name,
            profilePicUrl: post.post.user.profilePicUrl,
          },
        });
    });
    return res.status(200).json(postToBeSent);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Server error hhrth h56eh ` });
  }
};
const getPostByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    let posts = [];
    posts = await Post.find({ user: userId })
      .populate("user")
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Server error` });
  }
};
const createComment=async (req, res) => {
  try {
    const { postId } = req.params;

    const { userId } = req;
    const { text } = req.body;

    if (!text || text.length < 1)
      return res.status(401).send({message:"Comment should be atleast 1 character"});

    const post = await Post.findById(postId);

    if (!post) return res.status(404).send({message:"Post not found"});
    
    const user = await User.findById(userId)
    const newComment = {
      _id: uuid(),
      text,
      user: userId,
      date: Date.now()
    };

    await post.comments.unshift(newComment);
    await post.save();

    return res.status(200).json({...newComment,user:user});
  } catch (error) {
    console.error(error);
    return res.status(500).send({message:`Server error`});
  }
};


export {
  deletePost,
  createPost,
  getPostByCategory,
  likePost,
  getFavouritePosts,
  getPostByUserId,
  getPostById,
  createComment
};
