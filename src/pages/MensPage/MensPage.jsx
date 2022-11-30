// maybe render these mens, womens, and other options conditionally upon whether a hamburger icon in the nav is clicked?
// import { useState, useEffect } from 'react';
// import * as itemsAPI from '../../utilities/items-api';
// import * as ordersAPI from '../../utilities/orders-api';
import ProductList from '../../components/ProductList/ProductList';

export default function MensPage({ productItems, cart }) {
    // const [productItems, setProductItems] = useState([])
    // const [cart, setCart] = useState(null)

    // useEffect(function() {
    //     async function getItems() {
    //         const items = await itemsAPI.getAll();
    //         setProductItems(items);
    //     }
    //     getItems();

    //     async function getCart() {
    //         const cart = await ordersAPI.getCart();
    //         setCart(cart);
    //     }
    //     getCart();
    // }, []);

    return (
        <div>
            <ProductList
                productItems ={productItems.filter(item => item.category.name === 'Mens')}
            />
        </div>
    )
}