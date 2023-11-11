export default function Trabalhos (){
    return(
        <div>
            <div className="flex justify-center">
                <button>
                    <h2 className="uppercase text-white p-[10px] border border-white rounded-[15px]">
                        Ver trabalhos
                    </h2>
                </button>
            </div>
            <div className="flex space-x-[5%] justify-center">
                <div className="flex flex-col space-y-[5%]">
                    <div className="imgContainer">
                        <img src="/Placeholder.png"></img>
                    </div>
                    <div className="imgContainer">
                        <img src="/Placeholder.png"></img>
                    </div>
                </div>
                <div className="flex flex-col justify-end imgContainer">
                    <img src="/PlaceholderVertical.png"></img>
                </div>
                <div className="flex flex-col space-y-[5%]">
                <div className="imgContainer">
                    <img src="/Placeholder.png"></img>
                </div>
                <div>
                    <img src="/Placeholder.png"></img>
                </div>
                </div>
            </div>
        </div>
    )
}