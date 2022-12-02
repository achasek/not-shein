import './LineItem.css';
import Card from 'react-bootstrap/Card'

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
        <div className='cartItemCardContainer'>
            <Card className='cartItemCard'>
                <div>
                    <Card.Img variant='top' src={lineItem.item.image}/>
                    <Card.Title className='cartItemTitle'>
                        <div>{lineItem.item.name}</div>
                    </Card.Title>
                    <Card.Body><div>{lineItem.extWaterPrice} gallons of water</div>
                    <div>{lineItem.extCarbonPrice} kilograms of carbon emissions</div></Card.Body>
                    <hr></hr>
                    <div className='cartQtyBtns'>
                        {!isPaid &&
                            <button
                                onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
                            >−</button>
                        }
                    <span className='cartQty'>{lineItem.qty}</span>
                        {!isPaid &&
                            <button 
                                onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
                            >+</button>
                        }
                    </div>
                </div>
            </Card>
        </div>
    )
}