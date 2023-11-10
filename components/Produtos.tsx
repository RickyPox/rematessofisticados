import Marquee from "react-fast-marquee"

export default function ProdutosComponent () {
    return(
        <div>
            <div className="w-screen bg-[#F9B852] py-[5%] relative flex items-center justify-center productHoverTrigger">
                <Marquee
                className="productStrokeText"
                 autoFill = {true}
                 speed={300}>
                    <h1 className="mx-[10px]">Brindes</h1>
                </Marquee>
                <h1 className="text-center uppercase text-black productText">Brindes</h1>
            </div>

            <div className="w-screen bg-[#F67867] py-[5%] relative flex items-center justify-center productHoverTrigger">
            <Marquee
                className="productStrokeText"
                 autoFill = {true}
                 speed={300}>
                    <h1 className="mx-[10px]">Epiworkteam</h1>
                </Marquee>
                <h1 className="text-center uppercase text-black productText">Epiworkteam</h1>
            </div>

            <div className="w-screen bg-[#50086D] py-[5%] relative flex items-center justify-center productHoverTrigger">
            <Marquee
                className="productStrokeText"
                 autoFill = {true}
                 speed={300}>
                    <h1 className="mx-[10px]">Têxtil</h1>
                </Marquee>
                <h1 className="text-center uppercase text-black productText">Têxtil</h1>
            </div>

            <div className="w-screen bg-[#935EAB] py-[5%] relative flex items-center justify-center productHoverTrigger">
            <Marquee
                className="productStrokeText"
                 autoFill = {true}
                 speed={300}>
                    <h1 className="mx-[10px]">Desporto</h1>
                </Marquee>
                <h1 className="text-center uppercase text-black productText">Desporto</h1>
            </div>

            <div className="w-screen bg-[#2D9CCA] py-[5%] relative flex items-center justify-center productHoverTrigger">
            <Marquee
                className="productStrokeText"
                 autoFill = {true}
                 speed={300}>
                    <h1 className="mx-[10px]">Velilla</h1>
                </Marquee>
                <h1 className="text-center uppercase text-black productText">Velilla</h1>
            </div>

        </div>
    )
}