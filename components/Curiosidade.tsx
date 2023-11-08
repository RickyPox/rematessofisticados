export default function Curiosidade (){
    return (
        <div className="flex bg-[#D9D9D9] w-1/2 h-[450px] rounded-[30px] p-[70px]">
            <div className="flex flex-col w-1/2 items-center justify-between">
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
                <div className="w-full flex justify-between">
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
            <div className="w-1/2 flex flex-col space-y-[50px] items-end">
                <h2 className="text-right">Curiosidade</h2>
                <p className=" justify-end w-2/3 text-right">Um texto interessante com alguma curiosidade aleatória sobre a empresa.</p>
            </div>
        </div>
    )
}