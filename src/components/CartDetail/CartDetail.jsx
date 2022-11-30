import LineItem from '../LineItem/LineItem';

export default function CartDetail({ cart }) {
    if(!cart) return null;

    const lineItems = cart.lineItems.map(item =>
        <LineItem
          lineItem={item}
          isPaid={cart.isPaid}
          key={item._id}
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
                    <button>dummy button</button>
                    // <button
                    //   className="btn-sm"
                    //   onClick={handleCheckout}
                    //   disabled={!lineItems.length}
                    // >CHECKOUT</button>
                  }
                  <span>{cart.totalQty}</span>
                  <span>{cart.waterTotal}</span>
                  <span>{cart.carbonTotal}</span>
                </section>
              </>
              :
              <div>Cart Empty</div>
            }
            </div>
        </div>
    )
}