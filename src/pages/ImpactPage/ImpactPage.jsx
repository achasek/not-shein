import Carousel from 'react-bootstrap/Carousel';
import './ImpactPage.css';

export default function ImpactPage({ cart }) {
    return (
        <div className='pageContainer'>
            <div className='titleContainer'>
                <div className="infographic-title"><span className="inner-title"><strong>Fast</strong>Fashion:<br /><span>the hidden</span><strong>costs</strong></span></div>
                <ul className="infographic">
                    <li className="item item1 et_pb_lightbox_image">
                    <span className="lowercase">Water wasted </span>
                        <span className="uppercase">{cart.waterTotal} gallons</span>
                    </li>
                    <li className="item item2 et_pb_lightbox_image">
                        <span className="lowercase">Carbon emitted</span>
                        <span className="uppercase">{cart.carbonTotal}kg</span>
                    </li>
                    <li className="item item3 et_pb_lightbox_image">
                        <span className="lowercase">This is just </span>
                        <span className="uppercase">1 order</span>
                    </li>
                    <li className="item item4 et_pb_lightbox_image">
                        <span className="lowercase">How about </span>
                        <span className="uppercase">globally?</span>
                    </li>
                    <li className="item item5 et_pb_lightbox_image">
                        <span className="lowercase">Gallons of water </span>
                        <span className="uppercase">21 trillion</span>
                    </li>
                    <li className="item item6 et_pb_lightbox_image">
                        <span className="lowercase">Carbon emitted </span>
                        <span className="uppercase">1.08 trillion kg</span>
                    </li>
                    <li className="item item7 et_pb_lightbox_image">
                        <span className="lowercase">textile worker </span>
                        <span className="uppercase">pay</span>
                    </li>
                    <li className="item item8 et_pb_lightbox_image">
                        <span className="lowercase">on average?</span>
                        <span className="uppercase">$67/month</span>
                    </li>
                </ul>
                {/* <section>
                      {cart.totalQty === 1 ? 
                      <span>{cart.totalQty} item</span>
                      :
                      <span>{cart.totalQty} items</span>
                      }
                      &nbsp; | &nbsp;
                      <span>{cart.waterTotal} gallons of water used for your order</span>
                      &nbsp; | &nbsp;
                      <span>{cart.carbonTotal} kilograms of total carbon emitted for your order</span>
                      &nbsp; &nbsp;
                </section> */}
            </div>
            <div className="carouselContainer">
            <div className="infographic-title"><span className="inner-title"><strong>Fast</strong>Fashion:<br /><span>the </span><strong>reality</strong></span></div>
                <Carousel className='impactCarousel'>
                    <Carousel.Item>
                        <img className='carouselImg1' src='https://static01.nyt.com/images/2019/10/13/books/review/schlossberg01/merlin_70552169_4c9a0a6c-f2cd-47b8-a8a7-e20811bd7848-superJumbo.jpg' alt='first slide'/>
                        <Carousel.Caption className='slideText'>
                            <h1>Colossal Waste</h1>
                            <p>
                                Less than 1% of clothes produced in fast fashion are recycled. Under 10% of fast-fasion mogul Shein's products last over a month on their site despite being mass produced anyway.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carouselImg1' src='https://miro.medium.com/max/900/1*JAm9zjNgwPIGA1PRfxk66g.jpeg' alt='second slide'/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carouselImg1' src='https://cpb-us-w2.wpmucdn.com/blog.nus.edu.sg/dist/1/13946/files/2020/09/fashion_pollution_tcp_blog.jpg' alt='second slide'/>
                        <Carousel.Caption className='slideText'>
                            <h1>Polluted Water</h1>
                            <p>
                                The source of 35% of all microplastics present in our water come from these synthetic fibers.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='triangle'>

            </div>
            <div className='chartContainer'>
            <div className="infographic-title"><span className="inner-title"><strong>Fast</strong>Fashion:<br /><span>the demand for</span><strong>synthetic materials</strong></span></div>
                <div className='chart'>
                    <img className='chartImg' src='https://www.hawthornintl.com/wp-content/uploads/2017/08/natural-vs-synthetic-fibres.jpg' alt='statistics' />
                </div>
            </div>
            <div className='footer'>
                <h3>@Not Shein</h3>
            </div>
        </div>
    )
}