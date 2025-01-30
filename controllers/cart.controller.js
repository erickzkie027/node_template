import CartModel from "../models/cart.model.js";
const user_id = 1;

class CartController {

    cart = async (req, res) => {
        const carts = await new CartModel().fetchAllCarts(user_id);
        
        res.render("cart", { carts });
    }

    add = async (req, res) => {
        let response_data = { status: false, result: {}, error: "" };

        try{
            let cart_data = req.body;
            cart_data.user_id = user_id;

            let [user_cart] = await new CartModel().fetchCartRecord(cart_data.user_id, cart_data.product_id);

            if(user_cart !== undefined){
                let new_quantity = (cart_data.is_cart_update) ? parseInt(cart_data.quantity) : parseInt(user_cart.quantity) + parseInt(cart_data.quantity);

                const update_cart = await new CartModel().updateCart({ quantity: new_quantity }, user_cart.id);
            }
            else{
                const create_cart = await new CartModel().addCart(cart_data);
            }

            response.status = true;
        }
        catch(error){
            response_data.error = error;
        }

        res.redirect("/cart");
    }

    delete = async (req, res) => {
        let response_data = { status: false, result: {}, error: "" };

        try{
            const carts = await new CartModel().deleteCart(req.body.cart_id);
        }
        catch(error){
            response_data.error = error;
        }

        res.redirect("/cart");
    }
    

    checkout = async (req, res) => {
        let response_data = { status: false, result: {}, error: "" };

        try{
            const carts = await new CartModel().deleteCart(0);
        }
        catch(error){
            response_data.error = error;
        }

        res.redirect("/cart");
    }
    
    
    
}

export default new CartController;