import Link from "next/link"

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

    return(
        <div className=" flex justify-center items-center space-x-[100px] py-[50px] fixed z-40 w-screen">
            <img src="Logo.png"></img>
            <div className="flex space-x-[50px]">
            {navigation.map((nav) =>(
                <h3 className="text-white font-normal"><Link href={nav.href}>{nav.name}</Link></h3>
            ))}
            </div>
        </div>
    )
}