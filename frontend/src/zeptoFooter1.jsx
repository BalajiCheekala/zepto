import "./zeptoFooter1.css";

function PopularSearches() {
  const products = [
    "Avocado","Strawberry","Pomegranate","Beetroot","Ash gourd",
    "Bottle gourd","Lady finger","Potato","Lemon","Dalchini",
    "Fennel seeds","Blueberry","Papaya","Dragon fruit","Mushroom","Lettuce"
  ];

  const brands = [
    "Yakult","My Muse","Aashirvaad Atta","Too Yumm","Lays",
    "Figaro Olive Oil","Nandini Milk","Amul","Mother Dairy Near Me",
    "Fortune Oil","Superyou","Durex Condoms","Ferns and Petals"
  ];

  const categories = [
    "Grocery","Cigarettes","Chips","Curd","Hukka flavour","Paan shop near me",
    "Eggs price","Cheese slice","Fresh fruits","Fresh vegetables",
    "Refined oil","Butter price","Paneer price"
  ];

  const categories2 = [
  "Fruits & Vegetables","Atta, Rice, Oil & Dals","Masala & Dry Fruits","Sweet Cravings","Frozen Food & Ice Creams","Baby Food","Dairy, Bread & Eggs", "Cold Drinks & Juices","Munchies","Meats, Fish & Eggs","Breakfast & Sauces","Tea, Coffee & More","Biscuits","Makeup & Beauty","Bath & Body","Cleaning Essentials","Home Needs","Electricals & Accessories",
"Hygiene & Grooming","Health & Baby Care","Homegrown Brands","Paan Corner"];


  const renderButtons = (items) => (
    items.map((item, idx) => <button key={idx}>{item} | </button>)
  );

  const renderButtons2 = (items) => (
    items.map((item, idx) => <button key={idx}>{item}</button>)
  );

  return (
    <>
      <hr />
      <div className="popularSearches">
        <h5>Popular Searches</h5>
        <div className="searchGroup">
          <strong>Products:</strong> {renderButtons(products)}
        </div>
        <div className="searchGroup">
          <strong>Brands:</strong> {renderButtons(brands)}
        </div>
        <div className="searchGroup">
          <strong>Categories:</strong> {renderButtons(categories)}
        </div>
      </div>

      <div className="categories2">
        <h5>Categories</h5>
        <div className="categoriesGrp">
            {renderButtons2(categories2)};
        </div>

      </div>
      <hr />
    </>
  );
}

export default PopularSearches;
