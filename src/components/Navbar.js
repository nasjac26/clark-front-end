import { NavLink, useNavigate } from "react-router-dom";

function Navbar( { user, setUser } ) {
const navigate = useNavigate();

    // function handleLogoutClick() {
    //     fetch("/logout", { method: "DELETE" }).then((r) => {
    //         if (r.ok) {
    //         setUser(null);
    //     }
    //     });
    // navigate('/');
    // }

    function showLoginButton() {
        return (
        <NavLink className="btn btn-secondary m-3" to="/signin">Login</NavLink>
        );
    } 
    function showLogoutButton() {
        return (
        <button type="button" className="btn btn-secondary m-3" >Logout</button>  
        );
    }

    function showSignupButton() {
        return (
            <NavLink className="btn btn-secondary m-3" to="/signup">Signup</NavLink>
        );
        }

    function showProfileButton() {
        return (
            <NavLink className="btn btn-secondary m-3 nav-item" to="/profile">Log a Game Session!</NavLink>
        )
    }




    
    
    
    return ( 

        <div className="container-fluid">
            <div className="navbar justify-content-center navbar-light bg-dark">
                <NavLink className="btn btn-outline-warning m-3" to="/">Clark E Hair</NavLink>
                <NavLink className="btn btn-secondary m-3" to="/products">Shop</NavLink>              
                {user ? showProfileButton() : null}
                {!user ? showSignupButton() : null}
                {!user ? showLoginButton() : showLogoutButton()}
                <NavLink className="btn btn-secondary m-3" to="/admin-tools">Admin Tools</NavLink>              

            </div>
        </div>

    );
    }

export default Navbar;