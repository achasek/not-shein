import { Link } from 'react-router-dom'
// import { useEffect } from 'react'

export default function CategoriesPage() {
    
    // function loadProducts() {
    //     fetch('https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US')
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    // }
    
    // useEffect(() => {loadProducts()})

    return (
        <>
            <h1>All Categoires</h1>
            <div>
                <Link to="/categories/mens">Shop Mens</Link>
            </div>
            <div>
                <Link to="/categories/womens">Shop Womens</Link>
            </div>
        </>
    )
}