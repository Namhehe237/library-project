import { useOktaAuth } from "@okta/okta-react";
import { NavLink } from "react-router-dom";
import { SpinnerLoading } from "../utils/SpinnerLoading";

export const NavBar = () => {
    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) {
        return <SpinnerLoading />
    }

    const handleLogout = async () => oktaAuth.signOut();

    console.log(authState);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
            <div className='container-fluid'>
                <span className='navbar-brand'>Nam hehe</span>
                <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarNavDropdown">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/home'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/search'>Search Books</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {!authState.isAuthenticated ?
                            <li className="nav-item m-1">
                                <a href="/login" type="button" className="btn btn-outline-light">Sign in</a>
                            </li>
                            :
                            <li>
                                <button className="btn btn-outline-light" onClick={handleLogout}>Log out</button>
                            </li>
                        }
                    </ul>
                  
                </div>
            </div>
        </nav>
    );
}