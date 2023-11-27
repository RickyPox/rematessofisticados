import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Produtos() {
const produtos = [
    {
    nome: "Escrita",
    catalogos: [
        {
        nome: "Catálogo 1",
        img: "Catalogo1.png",
        pdf: ""
        },
        {
        nome: "Catálogo 2",
        img: "Catalogo2.png",
        pdf:"",
        },
        {
        nome: "Catálogo 3",
        img: "Catalogo3.png",
        pdf:"",
        },
        
    ],
    },
    {
    nome: "Artigos EPI - Proteção Individual",
    catalogos: [
        {
        nome: "Catálogo 4",
        img: "Catalogo1.png",
        pdf:"",
        },
        {
        nome: "Catálogo 5",
        img: "Catalogo2.png",
        pdf:"",
        },
        {
        nome: "Catálogo 6",
        img: "Catalogo3.png",
        pdf:"",
        },
    ],
    },
];

return (
    <div className="flex flex-col">
        <Navbar></Navbar>
        <h1 className="text-white text-center pt-[200px]">Produtos</h1>
        <img className="w-screen h-[10px] mb-[10px] mt-[30px]" src="Divider.png"></img>
        <Marquee
        autoFill = {true}>
        <div className="py-[10px] ">
            <div className="flex space-x-[20px] py-[10px] border-t-[1px] border-white border-b-[1px] marquee-container">
                <h2 className="uppercase text-white flex items-center">Brindes publicitários</h2>
                <h2 className="uppercase text-white flex items-center">Desporto</h2>
                <h2 className="uppercase text-white flex items-center">Têxtil</h2>
                <h2 className="uppercase text-white flex items-center">Artigos Epi - proteção Individual</h2>
            </div>
        </div>
      </Marquee>
    <div className="mx-[10%] mt-[100px]">
        {produtos.map((produto, index) => (
        <div key={index} className="h-screen">
            <h3 className="text-white mb-[50px]">{produto.nome}</h3>
            <div className="grid grid-cols-3 gap-[20px]">
            {produto.catalogos.map((catalogo, catIndex) => (
                <div key={catIndex} >
                <img
                    src={catalogo.img}
                    alt={catalogo.nome}
                    className="w-full h-auto mr-[20px]"
                />
                <h3 className="text-white">{catalogo.nome}</h3>
                </div>
            ))}
            </div>
        </div>
        ))}
    </div>
    <Footer></Footer>
    </div>
);
}
