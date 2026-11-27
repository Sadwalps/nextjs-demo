import Link from "next/link";

export default function skills() {
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

            <div className="min-h-170 bg-violet-800">
                <h1 className="lg:text-5xl text-4xl font-bold text-amber-100 text-center bg-violet-800 lg:pt-18 pt-12 lg:pb-1 pb-4">My Projects</h1>
                

            </div>
        </>
    )
}
