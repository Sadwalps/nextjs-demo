import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        {/* navbar */}
        <div className="bg-white-200 container-fluid w-full flex justify-between p-4">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/065/754/945/small_2x/vibrant-letter-s-colorful-abstract-art-paint-splatter-png.png" alt="" style={{ height: "30px", width: "40px" }} />
          <div>
            <Link href={'/'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Home</button></Link>
            <Link href={'/about'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">About</button></Link>
            <Link href={'/skills'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Skills</button></Link>
            <Link href={'/contact'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Contact</button></Link>
          </div>
        </div>

        {/* Hero section */}
        <div className="bg-violet-800 h-167 flex justify-center items-center">
          <div className="text-amber-50 text-center" >
            <h1 className=" text-6xl ">Welcome</h1>
            <h3 className="text-4xl pt-2">Hi I'm a full stack developer</h3>
            <h4 className="text-2xl mt-2" >I build responsive, fast, and user-friendly web applications using modern technologies like React and the MERN stack</h4>
            <div className="flex justify-around pt-5">
              <button className="py-3 px-2 bg-amber-50 text-violet-800 text-xl font-bold hover:text-amber-50 hover:bg-violet-600 hover:shadow-amber-50">Expolre portfolio</button>
             <Link href={'/contact'}> <button className="py-3 px-7 bg-amber-50 text-violet-800 text-xl font-bold hover:text-amber-50 hover:bg-violet-600 hover:shadow-amber-50">Contact</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
