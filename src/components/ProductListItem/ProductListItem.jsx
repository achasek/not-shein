export default function ProductListItem({ productItem }) {
    return (
        <div>
            <div>{productItem.name}</div>
            <div>{productItem.waterPrice}</div>
            <div>{productItem.carbonPrice}</div>
            <div><img src={productItem.image} alt="product"/></div>
            <button>Add to Cart</button>
        </div>
    )
}