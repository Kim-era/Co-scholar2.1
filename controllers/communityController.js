import { createPost, getAllPosts, getPostsByCategory } from "../models/communityModel.js";

// Get all posts
export const fetchPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get posts by category
export const fetchPostsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const posts = await getPostsByCategory(category);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a post
export const addPost = async (req, res) => {
  try {
    const author = req.user || { id: null, name: "Anonymous" };
    const id = await createPost(req.body, author);
    res.status(201).json({ id, ...req.body });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
