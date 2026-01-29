import {
  createResource,
  getAllResources,
  getResourceById,
} from "../models/LibraryModel";

import User from "../models/userModel";

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    await User.createUser(name, email);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const [users] = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add resource
export const addResource = async (req, res) => {
  try {
    const id = await createResource(req.body, req.user.id);
    res.status(201).json({ id, ...req.body });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all
export const getResources = async (req, res) => {
  const resources = await getAllResources();
  res.json(resources);
};

// Get one
export const getSingleResource = async (req, res) => {
  const resource = await getResourceById(req.params.id);

  if (!resource) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(resource);
};
