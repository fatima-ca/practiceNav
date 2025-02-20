import Link from "next/link";
import Barra from "../components/barra";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Barra/> 

        <div min-h-screen flex-col items-center>
        <div className="grid grid-cols-3 gap-0">
        <div className="flex flex-col items-center gap-4">
            <Image 
            src="/nlg.jpg" 
            alt="GMMTV" 
            width={200} 
            height={200} 
            priority
            />
            <p className="text-center text-gray-700"> Serie TOTS</p>
        </div>

        <div className="flex flex-col items-center gap-4">
            <Image 
            src="/tts.jpg" 
            alt="GMMTV" 
            width={200} 
            height={200} 
            priority
            />
            <p className="text-center text-gray-700"> Serie NLMG </p>
        </div>
        </div>
        </div>

    </div>

  );
}