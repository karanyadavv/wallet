import Greeting from "../../../components/Greeting";
import  Chart from "../../../components/Chart";

export default function() {
    return <div>
        <div className="text-4xl text-white pt-8 mb-8 font-bold">
            <Greeting />  
        </div>
        <div className="flex flex-col text-white bg-[#191919]  rounded-lg ml-2 md:w-[80vw] h-[70vh] mt-8 ">
            <p className="text-[#64748b] text-xs p-4 pb-0 strong">Portfolio value</p>
            <p className="text-white text-2xl pl-4 pr-4 font-bold">&#8377;280.00</p>
            <div className="pl-6 mt-4 ">
            <Chart />
            </div>
            
        </div>
    </div>
}