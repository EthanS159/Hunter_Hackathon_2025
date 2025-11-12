import './navigation.css'
export default function Navigation(){


    return(
        <nav className = "navigation">
            <li className = "nav-item">
                <button className = "nav-link" href="#">Link1</button>
            </li>

            <li className = "nav-item">
                <button className = "nav-link" href="#">Link2</button>
            </li>

            <li className = "nav-item">
                <button className = "nav-link" href="#">Link3</button>
            </li>
        </nav>
    );
}