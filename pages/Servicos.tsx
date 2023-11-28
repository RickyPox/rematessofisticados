import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export default function Servicos() {
const servicos = [
{
    nome: "Bordados",
    cor: "F9B852",
    imgs: ["/Placeholder.png", "/Placeholder.png", "/Placeholder.png", "/PlaceholderVertical.png"],
    texto:"Texto Bordados"
},
{
    nome: "Estampagem",
    cor: "F67867",
    imgs: ["/Placeholder.png", "/Placeholder.png", "/Placeholder.png", "/PlaceholderVertical.png"],
    texto:
    "Texto Estampagem",
},
{
    nome: "Serigrafía",
    cor: "C45087",
    imgs: ["/Placeholder.png", "/Placeholder.png", "/Placeholder.png", "/PlaceholderVertical.png"],
    texto:
    "Texto Serigrafia",
},
];

const [servicoSelecionado, setServicoSelecionado] = useState(servicos[0]);

return (
<div>
    <Navbar></Navbar>
    <h1 className="text-white text-center uppercase ">
    Serviços
    </h1>
    <Divider></Divider>
    <div className=" bg-white">
    <Marquee autoFill={true}>
        <div className="flex space-x-[20px] py-[10px] marquee-container">
        <h2 className="uppercase flex items-center text-[16px]">
            Bordados
        </h2>
        <h2 className="uppercase flex items-center text-[16px]">
            Desporto
        </h2>
        <h2 className="uppercase flex items-center text-[16px]">Têxtil</h2>
        <h2 className="uppercase flex items-center text-[16px]">
            Artigos Epi - proteção Individual
        </h2>
        </div>
    </Marquee>
    </div>
    {/* Mobile */}
    <div className=" flex flex-col space-y-[15px] px-[10px] mt-[50px] md:hidden mb-[50px]">
    <div className="grid grid-cols-2 gap-[10px]">
        {servicos.map((servico, index) => (
        <div key={index} className="items-center "
        >
            <div
            className={`flex w-full justify-center items-center py-[10px] cursor-pointer`}
            style={{ backgroundColor: servico.cor === servicoSelecionado.cor ? `#${servico.cor}`:'transparent' }}
            onClick={() => setServicoSelecionado(servico)}
            >
            <h2 className="text-white">{servico.nome}</h2>
            </div>
        </div>
        ))}
    </div>
    <div className="flex flex-col space-y-[5px]">
        <div className="flex space-x-[5px]">
        <img className="w-1/3" src={servicoSelecionado.imgs[0]}></img>
        <img className="w-2/3" src={servicoSelecionado.imgs[1]}></img>
        </div>
        <div className="flex space-x-[5px]">
        <img className="w-2/3" src={servicoSelecionado.imgs[2]}></img>
        <img className="w-1/3" src={servicoSelecionado.imgs[3]}></img>
        </div>
        <p className="text-white text-[16px]"> {servicoSelecionado.texto}</p>
    </div>
    </div>
        {/* Bigger Screens */}
    <div className=" mt-[100px] md:grid grid-cols-3 gap-[10px] justify-center hidden px-[10%] mb-[50px]">
    <div className="flex flex-col space-y-[10px]">
      
        {servicos.map((servico, index) => (
        <div key={index} className="flex space-x-[10px] items-center">
            <div
            className={`w-[2px] h-[90%] rounded-full line`}
            style={{ backgroundColor:`#${servico.cor}` }}
            />
            <div
            className={`flex justify-center items-center w-full py-[10%] cursor-pointer`}
            style={{ backgroundColor: servico.cor === servicoSelecionado.cor ? `#${servico.cor}`:'transparent', border:`solid 2px #${servico.cor}` }}
            onClick={() => setServicoSelecionado(servico)}
            >
            <h2 className="text-white px-[20px] ">{servico.nome}</h2>
            </div>
        </div>
        ))}
    </div>

        <div className="flex flex-col">
        <div className="flex space-x-[10px] ">
            <div className="flex flex-col space-y-[10px]">
            <img className="h-1/2" src={servicoSelecionado.imgs[0]}></img>
            <img className="h-1/2" src={servicoSelecionado.imgs[1]}></img>
            </div>
            <div className="h-full">
                <img className="h-full" src={servicoSelecionado.imgs[2]}></img>
            </div>
        </div>
        <p className="text-white text-[16px] mt-[15px]">{servicoSelecionado.texto} </p>
        </div>
        <div className="h-full">
            <img className="h-full" src={servicoSelecionado.imgs[3]}></img>
        </div>

    </div>
    <Footer></Footer>
</div>
);
}
