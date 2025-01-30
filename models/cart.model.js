import { format } from "mysql2";
import DatabaseModel from "./database.model.js";

class CartModel extends DatabaseModel{
    constructor(){
        super();
    }

    fetchCartRecord = async (user_id, product_id) => {
        const fetch_carts_query = format("SELECT * FROM user_cart_products WHERE user_id =? AND product_id =?", [user_id, product_id]);
        return await this.executeQuery(fetch_carts_query);
    }

    fetchAllCarts = async (user_id) => {
        const fetch_carts_query = format("SELECT user_cart_products.id AS cart_id, user_cart_products.*, products.*  FROM user_cart_products INNER JOIN products ON products.id = user_cart_products.product_id WHERE user_id =?", [user_id]);
        return await this.executeQuery(fetch_carts_query);
    }

    addCart = async (cart_data) => {
        return await this.executeQuery(format("INSERT INTO user_cart_products SET ?", [cart_data]));
    }

    updateCart = async (cart_data, cart_id) => {
        return await this.executeQuery(format("UPDATE user_cart_products SET ? WHERE id =?", [cart_data, cart_id]));
    }

    deleteCart = async (cart_id) => {
        if(cart_id == 0) {
            return await this.executeQuery(format("DELETE FROM user_cart_products"));
        }

        return await this.executeQuery(format("DELETE FROM user_cart_products WHERE id =?", [cart_id]));
    }
}

export default CartModel;