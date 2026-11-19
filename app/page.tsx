import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
     {/* navbar */}
     <div className = "bg-white-200 container-fluid w-full flex justify-between p-3">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/065/754/945/small_2x/vibrant-letter-s-colorful-abstract-art-paint-splatter-png.png" alt="" style={{height:"30px", width:"40px"}} />
<div>
<button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Home</button>
      <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Home</button>
      <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Home</button>
      <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Home</button>
</div>
      
     </div>
    </div>
    </>
  );
}
