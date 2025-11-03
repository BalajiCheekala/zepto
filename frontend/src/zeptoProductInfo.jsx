import "./zeptoProductInfo.css";

function ProductInfo(props) {
  return (
    <div className="ProductInfo">
      <h4 className="ProductInfoInformation">Information</h4>

      <p data-label="informationDisclaimer">
        <span>{props.informationDisclaimer}</span>
      </p>
      <p data-label="customerCareDetails">
        <span>{props.customerCareDetails}</span>
      </p>
      <p data-label="sellerName">
        <span>{props.sellerName}</span>
      </p>
      <p data-label="sellerAddress">
        <span>{props.sellerAddress}</span>
      </p>
      <p data-label="sellerLicenseNo">
        <span>{props.sellerLicenseNo}</span>
      </p>
      <p data-label="countryOfOrigin">
        <span>{props.countryOfOrigin}</span>
      </p>
      <p data-label="shelfLife">
        <span>{props.shelfLife}</span>
      </p>
    </div>
  );
}

export default ProductInfo;
