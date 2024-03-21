const FeaturedJobs = () => {
    return ( <div>
         <div  className="bg-white py-16">
    <h1 className="font-bold text-primary text-center text-3xl mb-5">Featured jobs</h1>
    <div className="grid grid-cols-3 w-8/12 mx-auto gap-4">
        {["","","","","",""].map((item)=>{
            return <div className="px-4  py-4 border border-slate-300 rounded text-sm text-slate-500">
            <div className="flex justify-between p-4">
                <img className="h-8" src="/company.png"/>
                <button className="bg-secondary text-white rounded-full px-3 text-sm py-1  ">Full Time</button>
            </div>
            <h1 className="text-secondary font-bold text-base">Laboratory Technician Supervisor (1)</h1>
            <p className="text-primary text-sm mb-2">Exact Manpower Consulting Ltd</p>
            <p>Job Type: Full Time</p>
            <p>Location: Tanzania: Dar es Salaam Dar Es Salaam</p>
            <p><span className="font-bold text-primary">Deadline:</span> Sun, 14 Apr 2024</p>
            <p>Industry: Electrical And Electronics</p>
            <div className="flex justify-between text-base border-t border-slate-300 mt-3 py-2">
                <div className="flex text-primary">Show</div>
                <div className="flex items-center">
                    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-secondary">
  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
</svg>
</div>
                    <div>148</div>
                </div>
                <div className="flex items-center">
                    <div> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-secondary">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>

                    </div>
                    <div>0</div>
                </div>
            </div>
        </div>
        })}
    </div>
    <div className="flex justify-center">
   <button className="py-3 px-3 bg-secondary text-white rounded mt-8 hover:bg-primary">Browse all</button>

   </div>
    </div>
    </div> );
}
 
export default FeaturedJobs;