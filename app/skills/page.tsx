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
      <h1 className="lg:text-5xl text-4xl font-bold text-amber-100 text-center bg-violet-800 lg:pt-18 pt-14 lg:pb-1 pb-4">My technical skills</h1>

      <div className="min-h-134 bg-violet-800 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">

        {/* frontend skills main div */}
        <div className="flex justify-center items-center">
          <div className="w-98 border-4 border-amber-100 p-2 m-2 flex items-center flex-col text-amber-50 rounded-2xl  lg:min-h-90 md:min-h-80 lg:pb-1 md:pb-1 pb-8 lg:text-xl text-md shadow-amber-50 shadow "><h1 className="lg:text-3xl text-2xl font-bold pt-4 ">Frontend-skills</h1><ul className="list-disc">
            <li className="pt-4">HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Bootstrap</li>
            <li>TailWind CSS</li>
          </ul></div>
        </div>

        {/* backend skills main div */}
        <div className="flex justify-center items-center">
          <div className="w-98 border-4 border-amber-100 p-2 m-2 flex items-center flex-col text-amber-50 rounded-2xl lg:min-h-90 md:min-h-80 lg:pb-1 md:pb-1 pb-8 lg:text-xl text-md shadow-amber-50 shadow"><h1 className="lg:text-3xl text-2xl font-bold pt-4">Backend-skills</h1><ul className="list-disc">
            <li className="pt-4">Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul></div></div>

        {/* tools and others main div */}
        <div className="flex justify-center items-center">
          <div className="w-98 border-4 border-amber-100 p-2 m-2 flex items-center flex-col text-amber-50 rounded-2xl lg:min-h-90 md:min-h-80 lg:pb-1 md:pb-1 pb-8 lg:text-xl text-md shadow-amber-50 shadow"><h1 className="lg:text-3xl text-2xl font-bold pt-4">Tools and others</h1><ul className="list-disc">
            <li className="pt-4">Git</li>
            <li>GitHub</li>
            <li>VsCode</li>
            <li>FontAwesome</li>
            <li>Cloudinary</li>
          </ul></div></div>

      </div>
    </>
  )
}
