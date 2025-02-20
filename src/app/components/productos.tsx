import Image from "next/image";

interface ProductoProps{
    image: string;
    name:string;
}

export default function Producto({image, name}: ProductoProps){
    return <div className="flex flex-col items-center gap-4">
       <Image 
        src="/gmmtvlogo.png" 
        alt="GMMTV" 
        width={150} 
        height={50} 
        priority
        />
    </div>;
    
}