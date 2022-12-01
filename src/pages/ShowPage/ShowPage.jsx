import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';

export default function ShowPage({ productItems, cart, handleAddToCart }) {
    let { id } = useParams() 
    const [item, setItem] = useState({})

    useEffect(function() {
        async function getItem() {
            const item = await itemsAPI.getById(id);
            console.log(item)
            setItem(item);
        }
        getItem();
    }, [id]);

    return (
        <div>
            <h1>show page</h1>
            <div>{item.name}</div>
            <div>{`${item.waterPrice} gallons of water`}</div>
            <div>{`${item.carbonPrice} kilograms of carbon emissions`}</div>
            <div><img src={item.image} alt="product"/></div>
            <button onClick={() => handleAddToCart(item._id, item.name)}>Add to Cart</button>
        </div>
    )
}