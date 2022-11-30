import CartDetail from '../../components/CartDetail/CartDetail';

export default function NewOrderPage({ productItems, cart }) {
    return (
        <div>   
            <h1>Cart</h1>
            <CartDetail cart={cart} />
        </div>
    )
}