function Overlay() {

    return(
        <div className="absolute shrink-0  grid grid-rows-3 md:grid-cols-2 md:grid-rows-2 min-w-full min-h-full">

            <div className="flex w-full justify-start flex-wrap items-start p-5">
                <div className="flex flex-wrap content-center ">
                    <div className="p-2">
                        <img src='/iclogo.svg' className="w-20" alt="Iron Crow Studio logo"/>
                    </div>
                    <div className="p-2 self-center">
                        <h1 className="font-merriweather text-left font-bold text-7xl text-white [text-shadow:_0px_0px_5px_rgb(0_0_0_/_100%)]">
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

            <div className="flex md:justify-start md:col-span-1 md:items-end items-center justify-center col-span-2 order-4 md:order-3 ">
                <div className=" grid grid-cols-1 p-5">
                    
                        <button 
                            onClick={() => {window.location = "mailto:james@ironcrowstudio.ca"}} 
                            className="p-3 m-2 text-4xl font-sans flex justify-start items-center text-white" 
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 m-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            Contact
                        </button>
                        <button 
                            onClick={() => {window.location = "https://www.instagram.com/ironcrowstudio/"}} 
                            className="p-3 m-2 text-4xl font-sans flex justify-start items-center text-white " 
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 m-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            Gallery
                        </button>
                </div>
            </div>

            <div className="flex justify-center order-3 md:order-4 col-span-2 md:col-span-1 items-center md:items-end md:justify-end ">
                <div className="font-serif text-xl text-center md:text-end p-5 text-white w-5/6 [text-shadow:_0px_0px_5px_rgb(0_0_0_/_100%)]" >
                    We specialize in crafting custom CNC cut steel signs and handmade decorative metalwork that is both 
                    functional and beautiful. Whether you're looking for a personalized sign for your business or a 
                    unique piece of metal art for your home, we've got you covered. Browse our portfolio and contact us today to start bringing your vision to life.
                </div>
            </div>
            
            <div className="self-end col-span-2 order-last text-white/50 h-10 p-2 text-center font-serif ">
                Iron Crow Studio © 2023 | Website by James Elias
            </div>

        </div>
    );
}
export default Overlay;