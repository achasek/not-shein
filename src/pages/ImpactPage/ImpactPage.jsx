import Carousel from 'react-bootstrap/Carousel';
import './ImpactPage.css';

export default function ImpactPage({ cart }) {
    return (
        <div className='pageContainer'>
            <div className='titleContainer'>
                <h1>Impact Page</h1>
                <p>This is where I'd like to focus on the impact of this purchase and the industry effortlessly trying to get us to buy into their destructive and short-sighted practices.</p>
                <section>
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
                </section>
            </div>
            <div className="carouselContainer">
                <Carousel className='impactCarousel'>
                    <Carousel.Item>
                        <img className='carouselImg1' src='https://static01.nyt.com/images/2019/10/13/books/review/schlossberg01/merlin_70552169_4c9a0a6c-f2cd-47b8-a8a7-e20811bd7848-superJumbo.jpg' alt='first slide'/>
                        <Carousel.Caption className='slideText'>
                            <h1>Impact slide 1</h1>
                            <p>
                                bad stuff on the enviroment and stuff
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carouselImg1' src='https://miro.medium.com/max/900/1*JAm9zjNgwPIGA1PRfxk66g.jpeg' alt='second slide'/>
                        <Carousel.Caption className='slideText'>
                            <h1>Impact slide 2</h1>
                            <p>
                                bad stuff on the workers rights and stuff
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className='carouselImg1' src='https://cpb-us-w2.wpmucdn.com/blog.nus.edu.sg/dist/1/13946/files/2020/09/fashion_pollution_tcp_blog.jpg' alt='second slide'/>
                        <Carousel.Caption className='slideText'>
                            <h1>Impact slide 3</h1>
                            <p>
                                bad stuff on the economy and stuff
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}