import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './ProductListItem.css'

export default function ProductListItem({ productItem }) {
    return (
        <Card style={{ width: '20rem'}} className='indexCard'>
            <div>
                <Link to={`/${productItem._id}`} className="indexLink">
                    <Card.Img variant="top" src={productItem.image} alt="product"/>
                    <Card.Body className='indexCardBody'>
                        <Card.Title><div className="indexCardTitle">{productItem.name}</div></Card.Title>
                        <Card.Text><div className="indexCardWater">{`${productItem.waterPrice} gallons of water`}</div>
                        <div className="indexCardCarbon">{`${productItem.carbonPrice} kilograms in carbon emissions`}</div></Card.Text>
                    </Card.Body>
                </Link>
            </div>
        </Card>
    )
}