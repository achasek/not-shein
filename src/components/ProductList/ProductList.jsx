import ProductListItem from '../../components/ProductListItem/ProductListItem';

export default function ProductList ({ productItems }) {
    const items = productItems.length ? 
        productItems.map(item => 
        <ProductListItem
        key={item._id}
        productItem={item}
        />)
        :
        <p>Loading</p>
    
    return (
        <main>
            {items}
        </main>
    )
}