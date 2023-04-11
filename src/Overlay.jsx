function Overlay() {

    return(
        <div className="absolute grid grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 h-screen w-screen">

            <div className="flex justify-start flex-wrap items-start ">
                <div className="flex flex-wrap content-center ">
                    <div className="p-2">
                        <img src='/iclogo.svg' className="w-20" alt="Iron Crow Studio logo"/>
                    </div>
                    <div className="p-2 self-center">
                        <h1 className="font-merriweather text-left font-bold text-7xl text-white">
                            Iron Crow Studio
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex text-white items-start justify-end p-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Domain, MB</span>
            </div>

            <div className="flex sm:justify-start sm:col-span-1 sm:items-end items-center justify-center col-span-2 order-4 sm:order-3">
                <div className=" grid grid-cols-1 p-5">
                        <button onClick={() => {window.location = "mailto:james@ironcrowstudio.ca"}} className="p-3 m-2 bg-white w-48 text-xl font-sans font-bold" >Contact</button>
                        <button onClick={() => {window.location = "https://www.instagram.com/ironcrowstudio/"}} className="p-3 m-2 bg-white w-48 text-xl font-sans font-bold" >Gallery</button>
                </div>
            </div>

            <div className="flex justify-center order-3 sm:order-4 col-span-2 sm:col-span-1 items-center sm:items-end sm:justify-end">
                <div className="font-serif text-xl text-center sm:text-end p-5 text-white w-5/6">
                    We specialize in crafting custom CNC cut steel signs and handmade decorative metalwork that are both 
                    functional and beautiful. Whether you're looking for a personalized sign for your business or a 
                    unique piece of metal art for your home, we've got you covered. Browse our portfolio and contact us today to start bringing your vision to life.
                </div>
            </div>
            
            <div className="self-end col-span-2 order-last text-white/50 h-10 p-2 text-center font-serif">
                Iron Crow Studio © 2023 | Website by James Elias
            </div>

        </div>
    );
}
export default Overlay;