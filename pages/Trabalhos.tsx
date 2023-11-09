import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";

export default function Trabalhos() {
return (
<div>

    <h1 className="text-white text-center">Trabalhos</h1>
    <div className=" bg-white">
        <Marquee autoFill={true}>
        <div className="flex space-x-[20px] py-[10px] marquee-container">
            <img src="Placeholder.png" className="w-[100px] h-[100px]"></img>
            <img src="Placeholder.png" className="w-[100px] h-[100px]"></img>
            <img src="Placeholder.png" className="w-[100px] h-[100px]"></img>
        </div>
        </Marquee>
    </div>
    <div className="flex flex-col mx-[300px] mt-[100px] space-y-[10px]">
        <div className="flex space-x-[10px]">
            <div className="w-full h-full">
                <img className="w-full h-full" src="Placeholder.png"></img>
            </div>
            <div className="flex flex-col space-y-[10px] w-1/3">
                <div className=" h-1/2">
                    <img className="w-full h-full" src="Placeholder.png"></img>
                </div>
                <div className=" h-1/2">
                    <img className="w-full h-full" src="Placeholder.png"></img>
                </div>
            </div>
        </div>
        <div className="flex space-x-[10px]">
            <div className="flex flex-col space-y-[10px] w-1/3">
                <div className=" h-1/2">
                    <img className="w-full h-full" src="Placeholder.png"></img>
                </div>
                <div className=" h-1/2">
                    <img className="w-full h-full" src="Placeholder.png"></img>
                </div>
            </div>
            <div className="w-full h-full">
                <img className="w-full h-full" src="Placeholder.png"></img>
            </div>
        </div>

    </div>
    <Footer></Footer>
</div>
);
}
