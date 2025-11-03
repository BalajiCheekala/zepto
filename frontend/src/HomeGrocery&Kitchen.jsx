import { useNavigate, useParams } from "react-router-dom";

export default function GroceryPage() {
  const navigate = useNavigate();
  const { category } = useParams();

  const items = [
    {
      name: "Dairy Bread Eggs",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.hFEhE3h5h0O-cZDMXEmM9QAAAA?pid=Api&P=0&h=180",
    },
    {
      name: "Atta Rice Oil Dals",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.vAldruhD_AIqOlAVm3To4AHaHa?pid=Api&P=0&h=180",
    },
    {
      name: "Meats Fish Eggs",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.MdNa_kyBqVsfnnzayTTPKAHaE7?pid=Api&P=0&h=180",
    },
    {
      name: "Masala Dry Fruits More",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.hBeC2siYiLoJhDV4rZL_egHaHa?pid=Api&P=0&h=180",
    },
    {
      name: "Breakfast Sauces",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.dwHtPKYjl79QhC5Oasf4TAAAAA?pid=Api&P=0&h=180",
    },
    {
      name: "Packaged Food",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.KGFGCInKQUEfI9rR5BZ81QHaIn?pid=Api&P=0&h=180",
    },
  ];

  return (
    <>
      <div
        style={{
          background: "#EEEEEE",
          margin: "55px",
          borderRadius: "20px",
          marginTop: "10px",
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          padding: "15px",
          overflow: "hidden",
          gap: "20px",
        }}
      >
        <div
          style={{
            padding: "10px",
            background: "#EEEEEE",
            textAlign: "center",
          }}
          onClick={() =>
                navigate(`/Home/fresh`)
              }
        >
            <p style={{marginTop: "8px",
              color: "black",
              background: "#EEEEEE",
              textAlign : "start",
              textTransform : "capitalize",
              fontSize : "20px",fontWeight: "500",}}  >Grocery & Kitchen</p>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.JQniWkO3K2_K7Mjzrway-QHaE7?pid=Api&P=0&h=180"
            style={{
              objectFit: "cover",
              padding: "10px",
              width: "100%",
              borderRadius: "12px",
            }}
          />
          <p
            style={{
              marginTop: "8px",
              color: "black",
              background: "#EEEEEE",
              textTransform : "capitalize",
              
              fontSize : "18px",fontWeight: "500",
            }}
          >
            Fresh Fruits and Vegetables
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "15px",
            background: "#EEEEEE",
            justifyContent : "center",
            alignItems : "center"
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/Home/${item.name}`)
              }
              style={{
                background: "white",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                background: "#EEEEEE",
              }}
              
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "14px",
                  color: "black",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  background : "#EEEEEE"
                }}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
