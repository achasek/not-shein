import LineItem from '../LineItem/LineItem';
import './CartDetail.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'

export default function CartDetail({ cart, handleChangeQty, handleCheckout }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
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

    function handleClick() {
      handleCheckout();
      handleShow()
    }

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
                    <Button size="lg"
                    onClick={handleClick}
                    disabled={!lineItems.length}
                    >CHECKOUT</Button>
                    
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Checked Out
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Thank You! Stripe Payment Coming Soon</h2>
                </Modal.Body>
            </Modal>
        </div>
    )
}