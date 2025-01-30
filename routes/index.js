/* Vendors */
import { Router } from "express";

/* Controllers */
import productController from "../controllers/product.controller.js";
import cartController from "../controllers/cart.controller.js";

const router = Router();

router.get("/", productController.index);
router.get("/product/:id", productController.show);

router.get("/cart", cartController.cart);
router.post("/cart/add", cartController.add);
router.post("/cart/delete", cartController.delete);
router.post("/cart/checkout", cartController.checkout);



export default router;