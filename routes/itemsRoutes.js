import express from "express";
import {
  deleteItemRoutes,
  getItemsRoutes,
  postItemRoutes,
  putItemRoutes,
} from "../controllers/controllers.js";
const route = express.Router();

route.get("/getallitems", getItemsRoutes);
route.post("/postitem", postItemRoutes);
route.put("/putitem/:id", putItemRoutes);
// Delete item by ID
route.delete("/deleteitem/:id", deleteItemRoutes);

export default route;
