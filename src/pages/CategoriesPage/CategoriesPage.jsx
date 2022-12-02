import { Link } from 'react-router-dom';
import './CategoriesPage.css';

export default function CategoriesPage() {

    return (
        <div>
            <h1>All Categories</h1>
            <div className='catContainer'>
                    <Link to="/categories/mens"><div className='mensCat'></div></Link>

                    <Link to="/categories/womens"><div className='womensCat'></div></Link>
            </div>
        </div>
    )
}