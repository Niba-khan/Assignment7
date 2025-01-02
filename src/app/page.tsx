import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
    <div className="py-6 px-8 bg-white shadow-black/50 shadow-2xl rounded-lg">
      <h1 className="text-center text-[#732df5] text-4xl font-black p-2 motion-safe:animate-bounce">
        Data Fetching: Client Side & Server Side Rendering
      </h1>
      <Image
        src="/images/img.jpg"
        alt="Image"
        width={500}
        height={500}
        className="mx-auto  shadow-[#732df5] shadow-xl"
      />
      <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
        <Link href="/clientSide-data-fetch">
          <button className="text-white h-16 w-52 bg-[#732df5] border border-gray-300 rounded-lg hover:motion-safe:animate-ping">
            Client Side Rendering
          </button>
        </Link>
        <Link href="/serverSide-data-fetch">
          <button className="text-white h-16 w-52 hover:motion-safe:animate-ping bg-[#732df5] border border-gray-300 rounded-lg">
            Server Side Rendering
          </button>
        </Link>
      </div>
    </div>
  </div>
  
 
  );
}
