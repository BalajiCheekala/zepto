import { useNavigate, useParams } from "react-router-dom";

export default function SnacksPage() {
  const navigate = useNavigate();
  const { category } = useParams();

  const items = [
    {
      name: "cafe",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.g_EYshV4TBrKFonMmN2KEgHaE7?pid=Api&P=0&h=180",
    },
    {
      name: "Tea Coffee More",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.txinxzFx1uM8z7YABgqpLQHaDt?pid=Api&P=0&h=180",
    },
    {
      name: "Ice Creams More",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.MHeZD8D3ZRVmwa8Y9kIMmgHaE8?pid=Api&P=0&h=180",
    },
    {
      name: "Frozen Food",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.rg78hJFMzqK3X3OtORj1ngHaFj?pid=Api&P=0&h=180",
    },
    
    {
      name: "Sweet Cravings",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.GcEJv_CyTSAeSBpTMS0-LQHaE7?pid=Api&P=0&h=180",
    },
    {
      name: "Cold Drinks Juices",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.tVImqXjtQWJOvI1jH0cFegHaE7?pid=Api&P=0&h=180",
    },
    {
      name: "Munchies",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.M4Ob_4CmEKseWdoq3HM0TwHaHa?pid=Api&P=0&h=180",
    },
    {
      name: "Biscuits",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.SbOVa6BsqeY_wI4WWQlNZAHaHa?pid=Api&P=0&h=180",
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
        //   display: "grid",
        //   gridTemplateColumns: "300px 1fr",
          padding: "15px",
          overflow: "hidden",
          gap: "20px",
        }}
      >
         <p style={{marginTop: "8px",
              color: "black",
              background: "#EEEEEE",
              textAlign : "start",
              textTransform : "capitalize",
              fontSize : "20px",fontWeight: "500",}}  >Snacks & Drinks</p>
        {/* <div
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
        </div> */}

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
