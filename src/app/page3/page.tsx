
'use client';
import React from "react";
import Barra from "../components/barra";



export default function Signup() {
    const handleSubmit=(e: React.FormEvent) =>{
        e.preventDefault();
        alert("funciona");
        }

  return (
    <div className="">
        <Barra/> 
        
        <div className="flex justify-center">
           <form onSubmit={handleSubmit} className="space-y-4">
            <div className="fixed flex justify-center top-20 p-4 bg-pink-100 shadow-lg flex gap-5 items-center">
                <div className="mb-4">
                    <label className="block text-center text-pink-500 font-bold mb-4" htmlFor="name">Sign up</label>

                    <label className="block text-pink-700 font-bold mb-2" htmlFor="name">Nombre</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Ingresa tu nombre"/>
                        <div className="mb-4">

                    <label className="block text-pink-700 font-bold mb-2" htmlFor="email">E-mail</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                    placeholder="Ingresa tu correo electrónico"/>

                    <label className="block text-pink-700 font-bold mb-2" htmlFor="email">Contraseña</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"/>
                        </div>

                    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">Enviar</button>


                </div>
            </div>
            </form> 
        </div>
    </div>
   


  );
}