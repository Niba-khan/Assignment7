import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-800/50 text-white flex justify-between items-center p-8">
      <h1 className="text-2xl font-bold">Assignment No: 07</h1>
      <div className="flex gap-8 text-2xl">
        <Link href="/">Home</Link>
        <Link href="/clientSide">Client-Side Data</Link>
       <Link href="/serverSide">Server-Side Data</Link>
      </div>
    </nav>
  );
};

export default Navbar;
