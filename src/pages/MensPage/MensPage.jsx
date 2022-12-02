import ProductList from '../../components/ProductList/ProductList';

export default function MensPage({ productItems, cart }) {

    console.log(productItems)
    return (
        <div>
            <h1>Men's Styles</h1>
            <ProductList
                productItems ={productItems.filter(item => item.category.name === 'Mens')}
            />
        </div>
    )
}