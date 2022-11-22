import * as userService from '../../utilities/users-service'

// only users should be able to see their own favorites. pass user down here
export default function FavoritesPage({ user }) {

    async function handleCheckToken() {
        const expDate = await userService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>Favorites</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}