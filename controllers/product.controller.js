import ProductModel from "../models/product.model.js";

class ProductController {
    index = async (req, res) => {
        const products = await new ProductModel().fetchAllProducts();

        res.render("index", { products });
    }

    show = async (req, res) => {
        const [product] = await new ProductModel().fetchProduct(req.params.id);
        
        res.render("show", { product });
    }

}

export default new ProductController;