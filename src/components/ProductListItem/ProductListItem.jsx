import { Link } from 'react-router-dom';

export default function ProductListItem({ productItem }) {
    return (
        <div>
            <Link to={`/${productItem._id}`}>
                <div>{productItem.name}</div>
                <div>{productItem.waterPrice}</div>
                <div>{productItem.carbonPrice}</div>
                <div><img src={productItem.image} alt="product"/></div>
            </Link>
        </div>
    )
}