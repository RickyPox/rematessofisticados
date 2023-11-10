import {motion} from "framer-motion"


export default function ServicosComponent (){
    return(
        <div className="grid grid-cols-2 gap-[10px] md:flex justify-around py-[30px] px-[30px] md:space-x-[20px] bg-black">
            <div className="relative">
                <img src="/Bordados.png" className="md:rounded-[30px] rounded-[10px]"></img>
                <motion.svg className="absolute top-0 left-0 right-0 m-auto w-[90%]" width="257" height="24" viewBox="0 0 257 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        d="M5 17.214C14.474 9.72845 43.9786 -2.07832 86.2055 10.5791C138.989 26.4008 138.312 -2.1804 179.592 10.5791C220.871 23.3386 234.405 21.2971 252 6.49606" stroke="#F67867" stroke-width="10" stroke-linecap="round"/>
                </motion.svg>
                <h2 className="text-white uppercase absolute top-0 left-0 right-0 text-center px-[10px]">Bordados</h2>
            </div>

            <div className="relative">
                <img src="/DFT.png" className="md:rounded-[30px] rounded-[10px] h-full"></img>
              <motion.svg className="absolute top-0 left-0 right-0 m-auto w-[90%]" width="314" height="70" viewBox="0 0 314 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d="M5.68359 64.69C6.15615 60.437 11.8728 57.1939 14.8919 55.1117C26.43 47.1544 39.5893 41.3951 52.6705 36.4896C90.2399 22.4011 131.782 12.5379 172.008 17.3331C186.751 19.0906 201.361 21.3004 216.241 21.7317C232.565 22.2049 248.802 21.3602 265.078 20.2929C271.043 19.9018 277.66 20.0678 283.494 18.6486C293.014 16.333 300.51 11.1763 308.324 5.4939" stroke="#C45087" stroke-width="10" stroke-linecap="round"/>
                </motion.svg>

                <h2 className="text-white uppercase absolute top-0 left-0 right-0 text-center px-[10px]">Impressão DFT</h2>
            </div>

            <div className="relative">
                <img src="/Sublimacao.png" className="md:rounded-[30px] rounded-[10px]"></img>
                <motion.svg className="absolute top-0 left-0 right-0 m-auto h-[90%] " width="193" height="557" viewBox="0 0 193 557" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d="M72.2051 193.637C83.7079 199.05 98.8806 197.131 110.278 192.266C130.434 183.663 152.768 171.142 154.367 146.35C155.715 125.457 141.744 119.226 123.528 116.576C115.745 115.444 104.567 117.737 109.365 128.531C111.139 132.524 123.325 133.788 127.031 134.395C135.78 135.826 145.076 134.449 153.758 133.329C167.523 131.552 176.678 121.225 181.856 108.962C189.261 91.423 189.627 73.9975 179.8 57.3344C166.615 34.9763 148.861 17.4601 125.66 5.85938" stroke="#935EAB" stroke-width="10" stroke-linecap="round"/>
                    <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d="M114.694 338.924C114.694 387.794 106.508 432.847 80.428 475.226C66.7598 497.437 49.6878 518.563 29.7906 535.534C21.9441 542.227 16.3698 551.373 5.04297 551.373" stroke="#935EAB" stroke-width="10" stroke-linecap="round"/>
                </motion.svg>
                <h2 className="text-white uppercase absolute top-0 left-0 right-0 text-center px-[10px]">Impressão Sublimação</h2>
            </div>

            <div className="relative">
                <img src="/Serigrafia.png" className="md:rounded-[30px] rounded-[10px]"></img>
                <motion.svg className="absolute top-0 left-0 right-0 m-auto  w-[90%]" width="305" height="100" viewBox="0 0 305 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d="M166.874 13.7405C145.868 4.41276 120.681 4.28685 97.1911 5.59073C82.498 6.4063 67.4586 8.89692 53.5199 12.6011C38.8544 16.4983 21.0858 22.7679 11.315 32.5669C-3.11932 47.0428 9.60796 63.172 25.277 73.1426C37.4736 80.9036 52.265 85.2162 67.4182 88.1046C90.9498 92.5899 115.274 93.5914 139.396 94.347C162.273 95.0636 185.263 95.1411 208.154 94.8176C229.421 94.5172 252.884 93.6668 273.087 87.9064C282.501 85.2223 291.546 80.3942 296.74 73.5885C301.325 67.5808 300.463 59.7509 297.888 53.3254C288.755 30.5456 255.131 17.978 227.822 12.2543C189.282 4.17644 147.149 3.16301 107.774 7.94402" stroke="#2D9CCA" stroke-width="10" stroke-linecap="round"/>
                </motion.svg>

                <h2 className="text-white uppercase absolute top-0 left-0 right-0 text-center px-[10px]" >Serigrafia</h2>
            </div>
            
        </div>
    )
}