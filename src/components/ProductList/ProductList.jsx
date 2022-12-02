import ProductListItem from '../../components/ProductListItem/ProductListItem';
import './ProductList.css';

export default function ProductList ({ productItems }) {
    const items = productItems.length ? 
        productItems.map(item => 
        <ProductListItem
        key={item._id}
        productItem={item}
        />)
        :
        <p>Loading...</p>
    
    return (
        <div className='mainContainer'>
            <main className='indexList'>
                {items}
            </main>
        </div>
    )
}