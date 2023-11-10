import Link from "next/link"
import { useState } from "react";

export default function Navbar(){
    
    const navigation = [
        {
            name: "Produtos",
            href:"Produtos"
        },
        {
            name: "Serviços",
            href:"Servicos"
        },
        {
            name: "Trabalhos",
            href:"Trabalhos"
        },
        {
            name: "Contactos",
            href:"Contactos"
        },
]
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
};
    return(
        <nav>
            <div className="md:flex hidden justify-center items-center space-x-[100px] py-[50px] fixed z-40 w-screen">
                <img src="Logo.png"></img>
                <div className="flex space-x-[50px]">
                {navigation.map((nav) =>(
                    <h3 className="text-white font-normal"><Link href={nav.href}>{nav.name}</Link></h3>
                ))}
                </div>
            </div>

            {/* Mobile */}
            <div className="bg-black fixed top-0 left-0 z-[100]">
                <button onClick={handleMenuToggle} className="text-white">
                        <img src="/Menu.svg" 
                        className="w-[50px] h-[50px] m-[10px]"  alt="menu"/>
                    </button>
                <div className={`${isMenuOpen ? 'w-screen h-screen ' : 'bg-none w-0 h-screen'}  transition-all duration-250`}>
                    <div className={`${isMenuOpen ? 'flex items-center justify-center' : 'hidden'}`}>
                        <div className="flex flex-col items-center justify-center space-y-[50px] px-[10px] mt-[50px]">
                        <Link href="/"><img src="Logo.png"></img></Link>
                        {navigation.map((nav) =>(
                        <h3 className="text-white font-normal"><Link href={nav.href}>{nav.name}</Link></h3>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}