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
            <div className="flex space-x-[50px] justify-center">
                <div className="flex flex-col space-y-[50px]">
                    <img src="/Placeholder.png"></img>
                    <img src="/Placeholder.png"></img>
                </div>
                <div className="flex flex-col justify-end">
                    <img src="/PlaceholderVertical.png"></img>
                </div>
                <div className="flex flex-col space-y-[50px]">
                    <img src="/Placeholder.png"></img>
                    <img src="/Placeholder.png"></img>
                </div>
            </div>
        </div>
    )
}