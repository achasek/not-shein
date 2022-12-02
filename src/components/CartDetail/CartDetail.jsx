import LineItem from '../LineItem/LineItem';
import './CartDetail.css';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';

export default function CartDetail({ cart, handleChangeQty, handleCheckout }) {
    if(!cart) return null;

    const lineItems = cart.lineItems.map(item =>
        <LineItem
          lineItem={item}
          isPaid={cart.isPaid}
          key={item._id}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
    );

    return (
        <div>
            <div className="section-heading">
                {cart.isPaid ?
                    <span>CART</span>
                    :
                    <span>NEW ORDER</span>
                }
                <span>{new Date(cart.updatedAt).toLocaleDateString()}</span>
            </div>
            <div>
            {lineItems.length ?
              <>
                <section className='cartCheckout'>
                  <span className='cartItemTitle'>{cart.totalQty} items</span>
                  &nbsp; | &nbsp;
                  <span className='cartItemWater'>{cart.waterTotal} gallons of water used for your order</span>
                  &nbsp; | &nbsp;
                  <span className='cartItemCarbon'>{cart.carbonTotal} kilograms of total carbon emitted for your order</span>
                  &nbsp; &nbsp;
                  {cart.isPaid ?
                    <span>TOTAL&nbsp;&nbsp;</span>
                    :
                    // <Link to='/checkout'>
                    <Button size="lg"
                    onClick={handleCheckout}
                    disabled={!lineItems.length}
                    >CHECKOUT</Button>
                    // {/* </Link> */}
                    
                  }
                </section>
                <div className='superContainer'>
                <main className='cartCartItemsContainer'>
                  {lineItems}
                </main>
                </div>
              </>
              :
              <div>Cart Empty</div>
            }
            </div>
        </div>
    )
}