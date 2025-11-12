export default function NavButton({name, cssClass, link, ifClick}){

    return(
        <button
        className={cssClass}
        onClick = {ifClick}
        >
        <a href = {link}> {name} </a>
        </button>
    );
}