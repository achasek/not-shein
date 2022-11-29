import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import ProductList from '../../components/ProductList/ProductList';

export default function MensPage() {
    const [productItems, setProductItems] = useState([])

    useEffect(function() {
        async function getItems() {
            const items = await itemsAPI.getAll();
            setProductItems(items);
        }
        getItems();
    }, []);

    return (
        <div>
            <ProductList
                productItems ={productItems.filter(item => item.category.name === 'Womens')}
            />
        </div>
    )
}