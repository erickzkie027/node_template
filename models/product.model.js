import { format } from "mysql2";
import DatabaseModel from "./database.model.js";

class ProductModel extends DatabaseModel{
    constructor(){
        super();
    }

    fetchAllProducts = async () => {
        return await this.executeQuery("SELECT * FROM products");
    }

    fetchProduct = async (product_id) => {
        const fetch_product_query = format("SELECT * FROM products WHERE id = ?", [product_id]);
        console.log('fetch_product_query', fetch_product_query)

        return await this.executeQuery(fetch_product_query);
    }
}

export default ProductModel;