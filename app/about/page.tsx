import Link from "next/link";

export default function About() {
  return (
    <>
       {/* navbar */}
        <div className="bg-white-200 container-fluid w-full flex justify-between p-4">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/065/754/945/small_2x/vibrant-letter-s-colorful-abstract-art-paint-splatter-png.png" alt="" style={{ height: "30px", width: "40px" }} />
          <div>
            <Link href={'/'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Home</button></Link>
            <Link href={'/about'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">About</button></Link>
            <Link href={'/skills'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Skills</button></Link>
            <Link href={'/projects'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Projects</button></Link>
            <Link href={'/contact'}> <button className="bg-violet-800 text-white p-2 ms-2 font-bold hover:bg-pink-700 ">Contact</button></Link>
          </div>
        </div>

      <div className="bg-violet-800 justify-around items-center pt-7 min-h-170 grid lg:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-center">
          <img src="https://static.vecteezy.com/system/resources/previews/036/885/313/original/blue-profile-icon-free-png.png" alt="" className="lg:w-86 md:w-57 w-40 " />
        </div>

        <div className="text-white flex justify-center items-center flex-col px-4">
          <h1 className="font-bold text-4xl">About me</h1>
          <h6 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, perspiciatis. Porro ipsa aut ullam, atque eum veniam dolorum fuga accusantium!</h6>
          <h3 className="text-2xl  font-bold lg:mt-10 mt-4">My Journey/Experience</h3>
          <h3 className="text-xl">⌂ Mern stack web development course</h3>
          <h3 className="text-xl">⌂ Bachelor of science in computer science</h3>
        </div>
      </div>
    </>
  )
}

