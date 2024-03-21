const GetConnectedSection = () => {
    return ( <div>
         <div className="bg-white py-24">
        <div className="flex justify-center">
            <h1 className="text-secondary font-semibold text-4xl ">Get connected</h1>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-3 py-24">
            {[{title:"Hire candidate",description:"Find the potential candidate from eKazi"},
            {title:"Get hired",description:"Receive new jobs directly from recruiters"},    
            {title:"Explore careers",description:"See personalized job and career recommendations"},    
        ].map((item)=>{
                return <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-secondary">
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
 
export default GetConnectedSection;