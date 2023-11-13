import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contactos(){
    return (
        <div className="bg-black">
        <Navbar></Navbar>
            <h1 className="text-white text-center pt-[200px]">Contactos</h1>
            <img className="w-screen h-[10px] mb-[10px] mt-[30px]" src="Divider.png"></img>
            <div className="relative flex flex-col justify-center items-center space-y-[50px]">
            <div className="p-[30px] bg-white w-full ">
                <iframe className="w-full h-[800px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.1489353043635!2d-8.888002423445432!3d39.80365089272437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd220d60fc5f8f33%3A0x2a9d967deafce3ea!2sRemate%20Sofisticado!5e0!3m2!1spt-PT!2spt!4v1699501743992!5m2!1spt-PT!2spt" loading="lazy"></iframe>
            </div>
            <div className="md:absolute z-30 bottom-0 right-0 md:translate-y-[20%] flex md:flex-row flex-col pointer-events-none">
                    <div className="bg-[#1D1D1D]/70 min-w-[300px] p-[30px] flex flex-col space-y-[30px]">
                        <div>
                            <p className="text-white">Morada:</p>
                            <p className="text-white text-right">Rua Central 145B</p>
                        </div>    
                        <div>
                            <p className="text-white">Localidade:</p>
                            <p className="text-white text-right">Coucinheira</p>
                        </div>  
                        <div>
                            <p className="text-white">Código Postal:</p>
                            <p className="text-white text-right">2430-768</p>
                        </div>  
                        <div>
                            <p className="text-white">Cidade:</p>
                            <p className="text-white text-right">Leiria, Portugal</p>
                        </div>  
                    </div>
                    <div className="bg-white/70  p-[30px] flex justify-center items-center">
                        <div className="bg-black/70 p-[10%] flex flex-col space-y-[30px]">
                            <p className="text-white">Telemóvel: 919 613 639</p>
                            <p className="text-white">Loja: 244 119 702</p>
                            <p className="text-white">Email: rematesofisticado@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[90px]">
            <Footer></Footer>
            </div>
        </div>
    )
}