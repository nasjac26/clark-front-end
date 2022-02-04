import { NavLink, useNavigate } from "react-router-dom";

function Navbar( { user, setUser } ) {
const navigate = useNavigate();
const url = "http://localhost:3001/logout"

    function handleLogoutClick() {
        fetch(url, { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null);
        }
        });
        navigate('/');
    }

    function showLoginButton() {
        return (
        <NavLink className="btn btn-secondary m-3" to="/signin" setUser={ setUser }>Login</NavLink>
        );
    } 
    function showLogoutButton() {
        return (
        <button type="button" className="btn btn-secondary m-3" onClick={handleLogoutClick} >Logout</button>  
        );
    }

    function showSignupButton() {
        return (
            <NavLink className="btn btn-secondary m-3" to="/signup">Signup</NavLink>
        );
        }
    function showAdminTools() {
        return (
        <NavLink className="btn btn-secondary m-3" to="/admin-tools">Admin Tools</NavLink>
        );

    }

    return ( 

        <div className="container-fluid">
            <div className="navbar justify-content-center navbar-light bg-dark">
                <NavLink className="btn btn-outline-warning m-3" to="/">Clark E Hair</NavLink>
                {/* Disabled until ready to sell */}
                {/* <NavLink className="btn btn-secondary m-3" to="/products">Shop Hair Extensions</NavLink> */}
                <NavLink className="btn btn-secondary m-3" to="/tools">Shop Tools</NavLink>              
                {!user ? showSignupButton() : null}
                {!user ? showLoginButton() : showLogoutButton()}
                {!user.admin === true ? null : showAdminTools()}
            </div>
        </div>

    );
    }

export default Navbar;