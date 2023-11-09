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
    <h1 className="text-white text-center">Serviços</h1>
    <div className=" bg-white">
        <Marquee autoFill={true}>
        <div className="flex space-x-[20px] py-[10px] marquee-container">
            <h2 className="uppercase flex items-center">Bordados</h2>
            <h2 className="uppercase flex items-center">Desporto</h2>
            <h2 className="uppercase flex items-center">Têxtil</h2>
            <h2 className="uppercase flex items-center">
            Artigos Epi - proteção Individual
            </h2>
        </div>
        </Marquee>
    </div>
    <div className="mx-[150px] mt-[100px] flex space-x-[10px] justify-center">
        <div className="flex flex-col w-1/3 space-y-[10px]">
        {servicos.map((servico, index) => (
            <div key={index} className="flex space-x-[50px] items-center">
            <div className={`w-[5px] h-[90%] bg-[#${servico.cor}] rounded-full`}/>
                <div className={`bg-[#${servico.cor}] flex justify-center items-center w-full py-[90px]`}>
                    <h2 className="text-white">{servico.nome}</h2>
                </div>
                
                

            </div>
        ))}
        </div>
        <div className="flex space-x-[5px]">
        <div className="flex flex-col space-y-[15px]">
            <div className="flex space-x-[5px]">
            <div className="flex flex-col space-y-[5px]">
                <img
                className="w-[200px] h-[200px]"
                src={servicos[0].imgs[0]}
                ></img>
                <img
                className="w-[200px] h-[200px]"
                src={servicos[0].imgs[0]}
                ></img>
            </div>
            <img
                className="w-[405px] h-[405px]"
                src={servicos[0].imgs[0]}
            ></img>
            </div>
            <p className="text-white max-w-[610px]">{servicos[0].texto}</p>
        </div>
        <img className="w-[405px] h-full" src={servicos[0].imgs[0]}></img>
        </div>
    </div>
    <Footer></Footer>
    </div>
);
}
