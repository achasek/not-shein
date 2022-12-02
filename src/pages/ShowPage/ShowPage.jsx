import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ShowPage.css';

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
        <div className="showCardContainer">
            <Card className="showCard">
                <div>
                    <Card.Title className='showTitle'><div>{item.name}</div></Card.Title>
                    <Card.Body><div>{`${item.waterPrice} gallons of water`}</div>
                    <div>{`${item.carbonPrice} kilograms of carbon emissions`}</div></Card.Body>
                    <Button className='showBtn' onClick={() => handleAddToCart(item._id, item.name)}>Add to Cart</Button>
                    <Card.Img variant='bottom' src={item.image} alt="product"/>
                </div>
            </Card>
        </div>
    )
}