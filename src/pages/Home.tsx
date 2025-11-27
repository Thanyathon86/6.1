import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 px-6 py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center">เนื้อหาหลักของหน้าเว็บ</h1>
      <p className="text-black mt-4 text-center max-w-xl">
        นี่คือส่วนเนื้อหาของหน้าเว็บที่ใช้ Navigation Bar
        ลองปรับขนาดหน้าจอเพื่อดูการทำงานของ Responsive Navbar
      </p>
    </div>
  );
};

export default Home;