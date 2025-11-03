import "./zeptoProductHighlights.css";

function ProductInfo(props){
    return (
        <div className="ProductHighLights">
            <h5 className="highlightsHeading">Highlights</h5>
            <p data-label="brand  ">{props.Brand}</p>
            <p data-label="productType  ">{props.productType}</p>
            <p data-label="dietaryPreference">{props.DietaryPreferance}</p>
            <p data-label="weight ">{props.weight}</p>
            <p data-label="unit ">1 Pack</p>
        </div>
    );
}

export default ProductInfo;
