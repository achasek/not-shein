import LineItem from '../LineItem/LineItem';
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
                {lineItems}
                <section>
                  {cart.isPaid ?
                    <span>TOTAL&nbsp;&nbsp;</span>
                    :
                    // <Link to='/checkout'>
                      <button
                        className="btn-sm"
                        onClick={handleCheckout}
                        disabled={!lineItems.length}
                      >CHECKOUT</button>
                    // {/* </Link> */}
                    
                  }
                  &nbsp; &nbsp;
                  <span>{cart.totalQty}</span>
                  &nbsp; &nbsp;
                  <span>{cart.waterTotal} gallons of water used for your order</span>
                  &nbsp; &nbsp;
                  <span>{cart.carbonTotal} kilograms of total carbon emitted for your order</span>
                </section>
              </>
              :
              <div>Cart Empty</div>
            }
            </div>
        </div>
    )
}