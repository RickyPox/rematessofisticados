export default function Curiosidade (){
    return (
        <div className="flex flex-col md:flex-row bg-[#D9D9D9] rounded-[30px] p-[5%] mx-[10%] w-[70%] space-y-[50px] md:space-y-[0px]">
            <div className="flex flex-col md:w-1/2 items-center space-y-[50px]">
                <div className="w-full flex justify-between">
                    <div>
                        <h2 className="text-[#935EAB]">+400</h2>
                        <h3>Clientes</h3>
                    </div>
                    <div>
                        <h2 className="text-[#935EAB]">+400</h2>
                        <h3>Trabalhos</h3>
                    </div>
                </div>
                <div className="w-full flex justify-between ">
                    <div>
                        <h2 className="text-[#935EAB]">+400</h2>
                        <h3>Membros</h3>
                    </div>
                    <div>
                        <h2 className="text-[#935EAB]">+400</h2>
                        <h3>Produtos</h3>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col md:space-y-[50px] md:items-end">
                <h2 className="md:text-right">Curiosidade</h2>
                <p className=" justify-end md:w-2/3 md:text-right">Um texto interessante com alguma curiosidade aleatória sobre a empresa.</p>
            </div>
        </div>
    )
}