import Marquee from "react-fast-marquee";

export default function Divider (){
    return(
        <div className="bg-[#F9B852] ">
            <Marquee
            loop={0}
            autoFill={true}
            speed={200}>
                <div className="h-[10px]">
                    <div className="divider w-screen h-[10px] mb-[20px]"></div>
                </div>
            </Marquee>
        </div>
    )
}