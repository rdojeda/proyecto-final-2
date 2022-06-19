import express from "express";

import { collectionCartsDao as api } from "../daos/index.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allCarts = await api.getAll();
    res.json(allCarts);
  } catch (error) {
    console.log("Error:", error);
    next();
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const getCartById = await api.findById(id);
    res.json(getCartById);
  } catch (error) {
    console.log("Error:", error);
    next();
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateItem = await api.update(id);
    res.json(updateItem);
  } catch (error) {
    console.log("Error:", error);
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCart = await api.create(req.body);
    res.json(newCart);
  } catch (error) {
    console.log("Error:", error);
    next();
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteItem = await api.deleteById(id);
    res.json(deleteItem);
  } catch (error) {
    console.log("Error:", error);
    next();
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const deleteItems = await api.deleteAll();
    res.json(deleteItems);
  } catch (error) {
    console.log("Error:", error);
    next();
  }
});

export default router;
