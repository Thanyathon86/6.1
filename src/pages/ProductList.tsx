import React from "react";
import ProductCard from "../assets/component/ProductCard";

const ProductList: React.FC = () => {
  const products = [
    {
      imageUrl: "https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg",
      title: "สินค้าตัวอย่าง 1",
      description: "รายละเอียดสินค้าอย่างสั้นๆ และข้อมูลสำคัญของสินค้า",
      price: 29.99,
    },
    {
      imageUrl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
      title: "สินค้าพรีเมียม 2",
      description: "สินค้าคุณภาพดี ให้ฟีลลิ่งระดับพรีเมียม",
      price: 79.5,
    },
    {
      imageUrl: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
      title: "สินค้าพรีเมียม 3",
      description: "เมาส์เกมมิ่ง คุณภาพสูง ดีไซน์ล้ำสมัย",
      price: 33.33,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="max-w-7xl w-full">
        <h1 className="text-2xl font-bold mb-6">รายการสินค้าของเรา</h1>

        <div className="flex flex-wrap gap-6">
          {products.map((p, index) => (
            <ProductCard
              key={index}
              imageUrl={p.imageUrl}
              title={p.title}
              description={p.description}
              price={p.price}
              onAddToCart={() => alert(`เพิ่ม ${p.title} ลงในตะกร้าแล้ว!`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
