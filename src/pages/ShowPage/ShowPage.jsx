import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './ShowPage.css';

export default function ShowPage({ productItems, cart, handleAddToCart }) {
    let { id } = useParams() 
    const [item, setItem] = useState({})
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(function() {
        async function getItem() {
            const item = await itemsAPI.getById(id);
            console.log(item)
            setItem(item);
        }
        getItem();
    }, [id]);

    function handleClick() {
        handleAddToCart(item._id, item.name);
        handleShow()
    }

    return (
        <div className="showCardContainer">
            <Card className="showCard">
                <div>
                    <Card.Title className='showTitle'><div>{item.name}</div></Card.Title>
                    <Card.Body><div>{`${item.waterPrice} total gallons of water used to produce this`}</div>
                    <div>{`${item.carbonPrice} total kilograms of carbon emitted to produce this`}</div></Card.Body>
                    <Button className='showBtn' onClick={handleClick}>Add to Cart</Button>
                    <Card.Img variant='bottom' src={item.image} alt="product"/>
                </div>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Added item:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>{item.name} to cart!</h2>
                </Modal.Body>
            </Modal>
        </div>
    )
}