import CartDetail from '../../components/CartDetail/CartDetail';

export default function NewOrderPage({ productItems, handleChangeQty, handleCheckout ,cart }) {
    return (
        <div>   
            <h1>Cart</h1>
            <CartDetail cart={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />
        </div>
    )
}