'use client';
import Link from "next/link";
import Barra from "../components/barra";

import { useState } from 'react';

export default function Counter() {
    const [counter, setCounter]=useState(0) //arreglo con nom de variable y una funcion, parentesis el valor inical de esa variable
    const [reiniciar, setZero]=useState(0)

    const handleSubmit=(e: React.FormEvent) =>{
        e.preventDefault();
        setCounter(counter+1);
        setZero(0);
        }

    return (
    <div>
        <Barra/> 
        <div className="fixed justify-center top-20 left-0 w-full p-4 bg-gray-100 shadow-lg flex gap-5 items-center">
            <form onSubmit={handleSubmit}>
                <h1 className="text-center text-gray-700">Contador</h1>
                <h1 className="text-center text-gray-700">{counter}</h1>
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">Incrementar</button>
                
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">Borrar</button>
                
            </form>

        </div>
        
    </div>
   


  );
}