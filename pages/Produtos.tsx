import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export default function Produtos() {

    const [hoveredCatalog, setHoveredCatalog] = useState<number | null>(null);

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
        <h1 className="text-white text-center">Produtos</h1>
        <Divider></Divider>
        <Marquee
        autoFill = {true}>
        <div className="py-[10px] ">
            <div className="flex space-x-[20px] py-[10px] border-t-[1px] border-white border-b-[1px] marquee-container">
                <p className="uppercase text-white flex items-center">Brindes publicitários</p>
                <p className="uppercase text-white flex items-center">Desporto</p>
                <p className="uppercase text-white flex items-center">Têxtil</p>
                <p className="uppercase text-white flex items-center">Artigos Epi - proteção Individual</p>
            </div>
        </div>
      </Marquee>
      <div className="mx-[10%] mt-[100px]">
        {produtos.map((produto, index) => (
          <div key={index} className="min-h-screen">
            <h3 className="text-white mb-[50px]">{produto.nome}</h3>
            <div className="grid grid-cols-3 gap-[20px]">
              {produto.catalogos.map((catalogo, catIndex) => (
                <div
                  key={catIndex}
                  className="relative overflow-hidden"
                  onMouseEnter={() => setHoveredCatalog(catIndex)}
                  onMouseLeave={() => setHoveredCatalog(null)}
                >
                  <img
                    src={catalogo.img}
                    alt={catalogo.nome}
                    className="w-full h-auto mr-[20px] transition-all duration-500"
                    style={{
                      filter: hoveredCatalog === catIndex ? "blur(15px)" : "none",
                    }}
                  />
                  {hoveredCatalog === catIndex && (
                    <div className="bg-[#c4508650] absolute top-0 w-full h-full flex items-end">
                      <p className="text-white px-2">{catalogo.nome}</p>
                    </div>
                  )}
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
