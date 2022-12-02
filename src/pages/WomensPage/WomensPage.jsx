import ProductList from '../../components/ProductList/ProductList';

export default function WomensPage({ productItems, cart }) {

    return (
        <div>
            <h1>Women's Styles</h1>
            <ProductList
                productItems ={productItems.filter(item => item.category.name === 'Womens')}
            />
        </div>
    )
}