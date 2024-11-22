import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className ="navbar navbar-expand-lg bg-body-tertiary">
            <div className="cibtauber">
                <Link className="navbar-brand" to ="/">CRUD</Link>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <Link to ="/add">Add User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;