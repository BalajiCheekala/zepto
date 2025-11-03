import "./zeptoHeader.css"
import SearchBar from "./zeptoSearchBar";
import LoginCart from "./zeptoLoginCart";
import Logo from "./zeptoLogo";


function ZeptoHeader(){
    return (
     <>
        <div className="Header">
            <div className="Logo">
            <Logo />
            </div>
            <div className="SearchBar">
            <SearchBar />
            </div>
            <div className="LoginCart">
            <LoginCart />
            </div>
        </div>
        <hr></hr>
        </>


    );
}

export default ZeptoHeader