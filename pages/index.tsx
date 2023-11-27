import Curiosidade from "@/components/Curiosidade";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProdutosComponent from "@/components/Produtos";
import ServicosComponent from "@/components/Servicos";
import Trabalhos from "@/components/Trabalhos";
import Marquee from "react-fast-marquee";

export default function Home() {

  return (
    <div className="w-screen relative">
      <div className="bg-black">
      <Navbar></Navbar>
      </div>
      <div className="h-screen relative flex justify-center items-center bg-black">
      <div className="circle rounded-full absolute blur-[50px]"/>
        <div className="flex flex-col space-y-[20px] relative">
          <h1 className="text-center text-white uppercase ">LOREM IPSUM <br></br> DOLOR SIT AMET</h1>
          <p className="text-white text-center px-[20px]">Empresa especializada em fardamento de trabalho, artigos de desporto e publicidades.</p>
        </div>
      </div>
      <Marquee
      autoFill = {true}>
        <div className="py-[10px] ">
          <div className="flex space-x-[20px] py-[10px] border-t-[1px] border-white border-b-[1px] marquee-container">
            <h2 className="uppercase text-white flex items-center ">Ambiciosos</h2>
            <h2 className="uppercase text-white flex items-center">Audazes</h2>
            <h2 className="uppercase text-white flex items-center">Arrojados</h2>
          </div>
        </div>
      </Marquee> 
      <ServicosComponent></ServicosComponent>
      <ProdutosComponent></ProdutosComponent>
      <div className="flex justify-center mt-[50px]">
        <Curiosidade></Curiosidade>
      </div>
      <div className="mt-[100px]">
      <Trabalhos></Trabalhos>
      </div>
      <Footer></Footer>
    </div>
  )
}
