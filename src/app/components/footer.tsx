import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6 text-white bg-slate-800/65 border-4 border-white ">
    <div >
<p className="text-center mb-2 text-sm hover:text-white">@Niba Khan. All rights reserved.</p>
<p className="text-center mb-2 text-sm hover:text-white">Assignment No 07.</p>
<p className="text-center mb-2 text-sm hover:text-white">Contact me via</p>
</div>

<div className="flex justify-center space-x-4 mb-6 animate-pulse">
            <a
              href="https://www.linkedin.com/in/niba-farooq"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="LinkedIn" height={24} width={24} />
            </a>
          
            <a
              href="https://github.com/Niba-khan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="Instagram" height={24} width={24} />
            </a>
          </div >
     </footer>
  );
};
