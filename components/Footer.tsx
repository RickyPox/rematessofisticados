import ReactCurvedText from 'react-curved-text';

export default function Footer() {

  return (
    <div>
        <div className="relative flex justify-center items-center  h-[500px] w-screen bg-black">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white"/>
        <div className="absolute w-[200px] h-[200px] f rounded-full bg-black"/>
            <img className="absolute z-30" src="Logo.png" alt="Logo"></img>
            <h3 className='absoulte z-10 rotate'>
            <ReactCurvedText
                width={280}
                height={280}
                cx={140}
                cy={140}
                rx={115}
                ry={115}
                startOffset={0}
                reversed={true}
                text="Vamos discutir o seu futuro "
                textProps={{ style: { textTransform: "uppercase", } }}
            ></ReactCurvedText>
            </h3>
            <div className='w-screen h-[250px] bottom-0 absolute bg-[#000000] z-20'>
                <div className='h-full flex flex-col items-center justify-center'>
                    <div className='flex space-x-[30px] text-white border-b-[1px] border-white px-[150px] py-[50px]'>
                        <h3>Produtos</h3>
                        <h3>Trabalhos</h3>
                        <h3>Serviços</h3>
                        <h3>Sobre Nós</h3>
                        <h3>Contactos</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
