import { Link } from 'react-router-dom';

export default function ProductListItem({ productItem }) {
    return (
        <div>
            <Link to={`/${productItem._id}`}>
                <div>{productItem.name}</div>
                <div>{`${productItem.waterPrice} gallons of water`}</div>
                <div>{`${productItem.carbonPrice} kilograms in carbon emissions`}</div>
                <div><img src={productItem.image} alt="product"/></div>
            </Link>
        </div>
    )
}