const FeaturedCandidates = () => {
    return ( <div>
         <div className="  mx-auto bg-background ">
    <div className="bg-background w-8/12 mx-auto  py-16 ">
    <h1 className="font-bold text-primary text-center text-3xl mb-5">Featured candidates</h1>
    <div className="grid grid-cols-3 gap-4">
        {["","","","","",""].map((item)=>{
            return <div className="px-4  py-4 border border-slate-300 rounded bg-white text-sm text-slate-500">
           <div className="grid grid-cols-12 gap-4 items-center">
            <div className=" col-span-4">
                <img className="w-full aspect-square " src="/candidate.jpg"/>
            </div>
            <div className="col-span-8 text-primary">
                <h1 className="font-bold">BRIGHTOM GODSON</h1>
                <p>Customer Service</p>
                <p>Kigoma</p>
                <p className="text-sm text-secondary">Available for Job vacancies</p>

            </div>

           </div>
           
            <div className="flex justify-between text-base border-t border-slate-300 mt-3 py-2 ">
                <div className="flex text-primary">View profile</div>
                <div className="flex text-primary">Hire me</div>

                <div className="flex items-center">
                <div>Rating</div>

                    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-secondary">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
</svg>

</div>
                </div>
                <div className="flex items-center">
                    <div> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-secondary">
  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
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
 
 </div>
    </div> );
}
 
export default FeaturedCandidates;