import { Link } from "react-router-dom";

function Navigation(){

    return <>
        <ul>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="addlocal">Add To Local Storage</Link></li>
            <li><Link to="/user/:id/:name">User with id and name</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/newProduct">AddProduct</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
    </>
}
export default Navigation;