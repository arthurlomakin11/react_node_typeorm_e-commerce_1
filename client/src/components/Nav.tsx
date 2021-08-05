import { Link } from "react-router-dom"

function Nav(){
    return (
        <ul>
            <li>
                <Link to="/" >Головна</Link>
            </li>
            <li>
                <Link to="/products">Продукція</Link>
            </li>
        </ul>
    )
}

export default Nav