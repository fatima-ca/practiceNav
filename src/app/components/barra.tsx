import Link from "next/link";

export default function Barra() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-10">
    <img src="/img/beams.jpg" alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
    <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    <div className="relative bg-white shadow-xl ring-1 ring-gray-200/5">
  
      <nav className="px-6 py-2 sm:flex sm:items-center sm:justify-between">
        <section className="flex justify-between">
          <img src="/gmmtvlogo.png" className="h-6" alt="GMMTV" /> 
        </section>
        
        <div className="flex flex-col items-start mt-3 gap-2 sm:flex-row sm:m-0">
          <Link href="/" className="text-gray-600 hover:bg-gray-200 text-left px-4 rounded hover:text-gray-900">Home</Link>
          <Link href="/page3" className="text-gray-600 hover:bg-gray-200 text-left px-4 rounded hover:text-gray-900">Formulario</Link>
          <Link href="/page1" className="text-gray-600 hover:bg-gray-200 text-left px-4 rounded hover:text-gray-900">Page 1</Link>
          <Link href="/page2" className="text-gray-600 hover:bg-gray-200 text-left px-4 rounded hover:text-gray-900">Page 2</Link>
          <Link href="/page4" className="text-gray-600 hover:bg-gray-200 text-left px-4 rounded hover:text-gray-900">Page 4</Link>
        </div>
      </nav>
      
    </div>
  </div>
  );
}