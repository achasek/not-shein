import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        // update links with icons later
        <nav className='navBar'>
            <Link to="/favorites" className='linkOne'>Favorites</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new" className='linkTwo'>Cart</Link>
            &nbsp; | &nbsp;
            <span className='welcome'>Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut} className='linkThree'>Log Out</Link>
        </nav>
    )
}