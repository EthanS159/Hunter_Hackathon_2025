import { useEffect } from 'react';
import './navigation.css'
import NavButton from './Button';


export default function Navigation(){

    useEffect(() => {
        alert(`New route: ${location.pathname}`);
    }, [window.location.pathname]);

    return(

        <nav className = "navigation">
            <li className = "nav-item">
                <NavButton
                name = "Home"
                cssClass = "homeTab nav-button"
                link = "home"
                />
            </li>
            <li className = "nav-item">
                <NavButton
                name = "My Story"
                cssClass = "myStoryTab nav-button"
                link = "my-story"
                />
            </li>
            <li className = "nav-item">
                <NavButton
                name = "Portfolio"
                cssClass = "portfolioTab nav-button"
                link = "portfolio"
                />
            </li>
        </nav>

    );
}