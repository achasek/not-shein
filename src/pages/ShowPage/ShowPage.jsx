import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';

export default function ShowPage({ productItems, cart }) {
    let { id } = useParams() 
    const [item, setItem] = useState({})

    useEffect(function() {
        async function getItem() {
            const item = await itemsAPI.getById(id);
            setItem(item);
        }
        getItem();
    }, [id]);

    return (
        <div>
            <h1>show page</h1>
            <div>{item.name}</div>
            <div>{item.waterPrice}</div>
            <div>{item.carbonPrice}</div>
            <div><img src={item.image} alt="product"/></div>
            <button>Add to Cart</button>
        </div>
    )
}