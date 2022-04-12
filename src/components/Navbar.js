import { NavLink, useNavigate } from "react-router-dom";

function Navbar( { user, setUser } ) {
const navigate = useNavigate();
const url = `https://clarks-backend.herokuapp.com/logout`

    function handleLogoutClick() {
        fetch(url, { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null);
            
        }
        });
        navigate('/');
        window.location.reload();
    }

    function showLoginButton() {
        return (
        <NavLink className="nav-link text-secondary" to="/signin" setUser={ setUser }>Login</NavLink>
        );
    } 
    function showLogoutButton() {
        return (
        <NavLink className="nav-link text-secondary" to="/" onClick={handleLogoutClick} >Logout</NavLink>  
        );
    }

    function showAdminTools() {
        return (
        <NavLink className="nav-link text-secondary" to="/admin-tools">Admin Tools</NavLink>
        );

    }

    return ( 

        <div className="container-fluid">
            <div className="navbar justify-content-center navbar-light d-flex">
                <div className="container d-flex justify-content-center">
                    <a className="navbar-brand" href="/">
                        <img src="https://i.ibb.co/qsWm9xR/white-logo.png" alt="" width="53.88" height="69.12"></img>
                    </a>
                </div>
                <div className="container d-flex justify-content-center">
                    {/* Disabled until ready to sell */}
                    {/* <NavLink className="nav-link" to="/products">Shop Hair Extensions</NavLink> */}
                    <NavLink className="nav-link text-secondary" to="/tools">Shop Tools</NavLink>        
                    {/* {!user.admin === true ? null : showAdminTools()} */}
                    <NavLink className="nav-link text-secondary" to="/classes">Education</NavLink>
                    {/* {!user ? showLoginButton() : showLogoutButton()} */}
                    <a class="bi bi-basket"></a>
                    <a href="#" class="snipcart-checkout nav-link text-secondary">Cart</a>

                </div>
            </div>
        </div>

    );
    }

export default Navbar;
