import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";

export default function Servicos() {
const servicos = [
{
    nome: "Bordados",
    cor: "F9B852",
    imgs: ["/Placeholder.png", "/PlaceholderVertical.png"],
    texto:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
},
{
    nome: "Estampagem",
    cor: "F67867",
    imgs: ["/Placeholder.png", "/PlaceholderVertical.png"],
    texto:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
},
{
    nome: "Serigrafía",
    cor: "C45087",
    imgs: ["/Placeholder.png", "/PlaceholderVertical.png"],
    texto:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
},
];

return (
<div>
    <h1 className="text-white text-center mt-[50px] text-[30px] uppercase">
    Serviços
    </h1>
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
    <div className=" flex flex-col space-y-[15px] px-[10px] mt-[50px] md:hidden">
    <div className="grid grid-cols-2 gap-[10px]">
        {servicos.map((servico, index) => (
        <div key={index} className="items-center">
            <div
            className={`bg-[#${servico.cor}] flex w-full justify-center items-center py-[10px]`}
            >
            <h2 className="text-white">{servico.nome}</h2>
            </div>
        </div>
        ))}
    </div>
    <div className="flex flex-col space-y-[5px]">
        <div className="flex space-x-[5px]">
        <img className="w-1/3" src={servicos[0].imgs[0]}></img>
        <img className="w-2/3" src={servicos[0].imgs[0]}></img>
        </div>
        <div className="flex space-x-[5px]">
        <img className="w-2/3" src={servicos[0].imgs[0]}></img>
        <img className="w-1/3" src={servicos[0].imgs[0]}></img>
        </div>
        <p className="text-white text-[16px]">{servicos[0].texto} </p>
    </div>
    </div>
        {/* Bigger Screens */}
    <div className=" mt-[100px] md:grid grid-cols-3 gap-[10px] justify-center hidden px-[10%]">
    <div className="flex flex-col space-y-[10px]">
        {servicos.map((servico, index) => (
        <div key={index} className="flex space-x-[10px] items-center">
            <div
            className={`w-[2px] h-[90%] bg-[#${servico.cor}] rounded-full`}
            />
            <div
            className={`bg-[#${servico.cor}] flex justify-center items-center w-full py-[10%]`}
            >
            <h2 className="text-white px-[20px] ">{servico.nome}</h2>
            </div>
        </div>
        ))}
    </div>

        <div className="flex flex-col">
        <div className="flex space-x-[10px] ">
            <div className="flex flex-col space-y-[10px]">
            <img className="h-1/2" src={servicos[0].imgs[0]}></img>
            <img className="h-1/2" src={servicos[0].imgs[0]}></img>
            </div>
            <div className="h-full">
                <img className="h-full" src={servicos[0].imgs[0]}></img>
            </div>
        </div>
        <p className="text-white text-[16px] mt-[15px]">{servicos[0].texto} </p>
        </div>
        <div className="h-full">
            <img className="h-full" src={servicos[0].imgs[0]}></img>
        </div>

    </div>
</div>
);
}
