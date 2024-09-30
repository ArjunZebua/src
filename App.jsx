import { ShoppingCart } from "lucide-react";
import Clote from "./Clote"; // Import komponen Clote

function App() {
  // Initial data
  const data = [
    {
      gambar: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/17/84e1e8ba-8239-4234-81fc-428d7b863d51.jpg",
      merk: "T-shirt: kaos",
      harga: "Rp 100000",
      warna: "Putih",
    },
    {
      gambar: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/17/3efffa9c-b6e5-4f91-baf7-7e01b72c65b0.jpg",
      merk: "Baju kaos hard time white",
      harga: "Rp 130000",
      warna: "Putih",
    },
    {
      gambar: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/17/fafb3f40-3a3d-40b2-8f9d-134dd016bc00.jpg",
      merk: "Baju kaos hard time black",
      harga: "Rp 150000",
      warna: "Hitam",
    },
    {
      gambar: "https://down-id.img.susercontent.com/file/id-11134207-7quky-lhwv95hp873o45_tn",
      merk: "Sweater/jumper",
      harga: "Rp 140000",
      warna: "Abu-abu",
    },
    {
      gambar: "https://www.stoneycreek.co.nz/image/catalog/product_images/corporate/mens/shirts/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy.jpg",
      merk: "Shirt",
      harga: "Rp 165000",
      warna: "Navy",
    },
    {
      gambar: "https://oldnavyprod.a.bigcontent.io/v1/static/240501_25-M1202_G_DP_Jumpsuits_0501",
      merk: "clothes",
      harga: "Rp 190000",
      warna: "Biru",
    },
    {
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDY9X5MiaTTdgP3KGcXNjnoveH4IbqGuSRw&s",
      merk: "Coat",
      harga: "Rp 200000",
      warna: "Hijau",
    },
    {
      gambar: "https://wharton.ph/cdn/shop/products/384-0038BLACK1WB.jpg?v=1634229641",
      merk: "Air Jordan",
      harga: "Rp 205000",
      warna: "Hitam",
    },
    {
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuoc0t7HAyR0ysZYLbox5eXihyjdccV8whg&s",
      merk: "jacket hoodie",
      harga: "Rp 120000",
      warna: "Coklat",
    },
    {
      gambar: "https://assets.manufactum.de/p/068/068675/68675_01.jpg/ladies-trench-coat-etaproof.jpg?profile=pdsmain_1500",
      merk: "coat",
      harga: "Rp 105000",
      warna: "Merah",
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Clothes Shop</h1>
        <div className="cart-icon">
          <ShoppingCart size={24} color="red" />
        </div>
      </header>

      <div className="container">
        <div className="grid">
          {data.map((d, index) => (
            <Clote
              key={index}
              gambar={d.gambar}
              merk={d.merk}
              harga={d.harga}
              warna={d.warna}
              onHeartClick={() => console.log("Like clicked for item:", d.merk)}
              onMessageClick={() => prompt()}
              onInfoClick={() => alert("Info clicked!")}
            />
          ))}
        </div>
      </div>

      

      <footer className="footer">
        <p>© UTS REACT 2024 . All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
