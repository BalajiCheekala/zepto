
import { useNavigate } from "react-router-dom";

export default function ExploreItems() {
    const navigate = useNavigate();
  const products = [
    {
      name: "Party Needs",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.3g7njNboGaiQPnSaxLjuZQHaHa?pid=Api&P=0&h=180",
    },
    {
      name: "foundation",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.86e2NlxLeJrn_DC8FkvLbAHaFj?pid=Api&P=0&h=180",
    },
    {
      name: "Soft Toys",
      image:
        "https://tse4.mm.bing.net/th/id/OIP._W_9iMhSjCGih12sEEi6lgHaHN?pid=Api&P=0&h=180",
    },
    {
      name: "Juicers & Mixers",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.DzTUgaBWkidSW6blevjRYwHaHY?pid=Api&P=0&h=180",
    },
    {
      name: "Pooja & Worship Needs",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.fk3OZOo-TfyQN3scGTGF3wHaFY?pid=Api&P=0&h=180",
    },
    {
      name: "lips makeup",
      image:
        "https://up.yimg.com/ib/th/id/OIP.bELDRJubM5yEAirbSwDw-wHaJM?pid=Api&rs=1&c=1&qlt=95&w=82&h=102",
    },
    {
      name: "organic vegetables",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.-o4U2wpM5wIqqVMOyup1UgHaE7?pid=Api&P=0&h=180",
    },
    {
      name: "Sports & Fitness",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.NYSE9uR3Ly3AonjrQJsC-wHaHa?pid=Api&P=0&h=180",
    },
    {
      name: "Kettles and egg boiler",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.FWNxT81gay1FpZYjFJOnXgHaHa?pid=Api&P=0&h=180",
    },
    {
      name: "gifting ideas",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.cP20EL7F30N1kbDnZiSxaAHaHZ?pid=Api&P=0&h=180",
    },
  ];

  return (
    <>
      <div
        style={{
          background: "#D9E9CF",
          margin: "55px",
          borderRadius: "20px",
          marginTop: "10px",
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          padding: "15px",
          gap: "100px",
          color: "#1F7D53",
        }}
      >
        <div style={{ padding: "20px",background :"#D9E9CF" }}>
          <p style={{ fontFamily: "Arial" ,background :"#D9E9CF"}}>MORE TO LOVE</p>
          <h1 style={{ fontFamily: "Arial",background :"#D9E9CF" }}>Explore more &</h1>
          <h1 style={{ fontFamily: "Arial",background :"#D9E9CF" }}>uncover hidden</h1>
          <h1 style={{ fontFamily: "Arial",background :"#D9E9CF" }}>gems</h1>
        </div>

        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "15px",
            
            paddingRight: "10px",
            background :"#D9E9CF"
          }}
        >
          {products.map((p, index) => (
            <div
              key={index}
              style={{
                background: "#D9E9CF",
                borderRadius: "12px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={()=>navigate(`Home/subs/${p.name}`)}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  background : "#D9E9CF"
                }}
              />
              <p style={{ marginTop: "8px", fontSize: "14px", color: "#1F7D53" ,background: "#D9E9CF",fontWeight : "light" }}>
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
