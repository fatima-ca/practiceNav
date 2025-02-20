import Link from "next/link";
import Barra from "./components/barra";

export default function Home() {
  return (
    <div>
        <Barra/> 
    
        <div className="fixed top-20 w-full p-4 bg-gray-100 shadow-lg flex gap-5 items-center">
        <p className="text-center text-gray-700">Bienvenid@</p>
        </div>

    </div>
  );
}
