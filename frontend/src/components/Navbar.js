
import { Link } from 'react-router-dom'
import ChangePassword from './changePassword';
const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>
                        Home Page
                    </h1>
                </Link>
                <button onClick={() => window.location.href = `/changePassword`}>Account</button>
            </div>
        </header>
    )
}


export default Navbar