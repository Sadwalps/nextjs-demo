import Link from "next/link";


export default function Skills() {
  return (
    <>
      {/* navbar */}
      <div className="bg-white-200 container-fluid w-full flex justify-between p-4 ">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/065/754/945/small_2x/vibrant-letter-s-colorful-abstract-art-paint-splatter-png.png" alt="" style={{ height: "30px", width: "40px" }} />
        <div>
          <Link href={'/'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Home</button></Link>
          <Link href={'/about'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">About</button></Link>
          <Link href={'/skills'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Skills</button></Link>
          <Link href={'/contact'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Contact</button></Link>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-amber-100 text-center bg-violet-800 pt-18">My technical skills</h1>

      <div className="min-h-138 bg-violet-800 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-center">
          <div className="w-130 border-4 border-amber-100 p-2 m-2 flex items-center flex-col text-amber-50 rounded-2xl  lg:min-h-90 md:min-h-80"><h1 className="text-2xl font-bold pt-4">Frontend-skills</h1><ul className="list-disc">
            <li className="pt-4">HTML5</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT.JS</li>
            <li>NEXT.JS</li>
            <li>BOOTSTRAP</li>
            <li>TAILWIND CSS</li>
          </ul></div>
        </div>
        <div className="flex justify-center items-center"> <div className="w-130 border-4 border-amber-100 p-2 m-2 flex items-center flex-col text-amber-50 rounded-2xl lg:min-h-90 md:min-h-80"><h1 className="text-2xl font-bold pt-4">Backend-skills</h1><ul className="list-disc">
          <li className="pt-4">NODE.JS</li>
          <li>EXPRESS.JS</li>
          <li>MONGODB</li>
        </ul></div></div>


      </div>
    </>
  )
}
