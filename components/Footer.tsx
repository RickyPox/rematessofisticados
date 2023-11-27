import ReactCurvedText from 'react-curved-text';

export default function Footer() {

  return (
    <div>
        <div className="relative flex justify-center items-center  h-[400px] w-screen bg-[#1F1F1F]">
        <div className="absolute w-[250px] h-[250px] rounded-full bg-white"/>
        <div className="absolute w-[180px] h-[180px] rounded-full bg-[#1F1F1F]"/>
            <img className="absolute z-30" src="Logo.png" alt="Logo"></img>
            <h3 className='absoulte z-10 rotate'>
            <ReactCurvedText
                width={240}
                height={240}
                cx={120}
                cy={120}
                rx={100}
                ry={100}
                startOffset={0}
                reversed={true}
                text="Vamos discutir o seu futuro "
                textProps={{ style: { textTransform: "uppercase", } }}
            ></ReactCurvedText>
            </h3>
            <div className='w-screen h-[200px] bottom-0 absolute bg-[#131313] z-20'>
                <div className='h-full flex flex-col items-center justify-center mt-[50px] bg-[#131313]'>
                    <div className='grid grid-cols-2 gap-[0px] md:gap-0  md:flex justify-center items-center md:flex-row md:space-x-[30px] text-white border-b-[1px] border-white px-[50px] py-[20px]'>
                        <h3>Produtos</h3>
                        <h3>Trabalhos</h3>
                        <h3>Serviços</h3>
                        <h3>Sobre Nós</h3>
                        <h3>Contactos</h3>
                    </div>

                    <div className='flex space-x-[20px] md:space-x-[50px] items-center justify-center mt-[50px]'>
                        <div className='w-[25px]'>
                            <img  src="/LinkedIn.png"></img>
                        </div>
                        <div className='w-[25px]'>
                            <img  src="/Instagram.png"></img>
                        </div>
                        <div className='w-[25px]'>
                            <img  src="/Facebook.png"></img>
                        </div>
                        <div className='w-[25px]'>
                            <img  src="/Behance.png"></img>
                        </div>
                        <div className='w-[25px]'>
                            <img  src="/Youtube.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
