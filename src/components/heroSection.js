const HeroSection = () => {
    return ( <div>
        <div className="w-8/12 mx-auto min-h-screen bg-no-repeat" style={{backgroundImage:"url(banner.jpg)"}}>
        <div className=" grid grid-cols-12 py-24" >
            <div className=" col-span-7">
            <h1 className="text-primary text-5xl font-bold">
            A place where <span className="text-secondary">employers </span> 
               meets potential candidates
            </h1>
            <p className="text-2xl font-bold text-slate-500 mt-4">Set your career in motion with eKazi.</p>
            </div>
           
        </div>
        <div className=" grid grid-cols-12 gap-x-4 " >
                <div className=" col-span-4 "><input placeholder="What are you looking for ?" className="w-full rounded border-slate-400"/></div>
                <div className=" col-span-4 "><select className="w-full border-slate-400 rounded">
                    <option>Category</option>
                    <option>Employers</option>
                    <option>Jobs</option>
                    <option>Featured freelancers</option>
                    </select></div>
                <button className="py-2 px-3 bg-secondary text-white rounded hover:bg-primary">Search</button>


            </div>

            <div className="bg-background grid grid-cols-3 py-4 my-24">
            {[{title:"1206",description:"Employers have recruited with us"},
            {title:"1206",description:"Registered users"},    
            {title:"1206",description:"Job posts"},    
        ].map((item)=>{
                return <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-orange-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    <h1 className="text-xl font-bold text-primary">{item.title}</h1>
                    <h1 className="text-lg  text-primary">{item.description}</h1>
                </div>
            })}
            </div>
        </div>
    </div> );
}
 
export default HeroSection;