import "./zeptoLogo.css";

function ZeptoLogo() {
  return (
    <div className="zeptoHeader">
      <div className="zeptoLogoText">zepto</div>

      <div className="superSaver">
        <div className="toggle">
        <div className="toggleCircle"></div>
         <div className="toggleText">
          <span className="super">SUPER</span>
          <span className="saver">SAVER</span>
        </div>
          
        </div>
      </div>

      <div className="selectLocation">
        <span>Select Location</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default ZeptoLogo;
