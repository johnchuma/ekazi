const Footer = () => {
    return ( <div className="bg-white py-12">
        <div className="w-8/12 mx-auto flex justify-between ">
            <div className="">
            <h1 className="text-primary  text-xl">Subscribe to receive job notifications.</h1>
              <p>Join our weekly Newsletter</p>
            </div>
            <div className="flex space-x-2">
            <div className="  "><input placeholder="Email address" className="w-full border-slate-400 rounded"/></div>
                  <div>
                <button className="py-2 px-3 bg-secondary text-white rounded hover:bg-primary">Subscribe</button>
                  </div>
            </div>
              
        </div>
        <div className="w-8/12 mx-auto grid grid-cols-11 py-16 ">
            <div className="col-span-4">
              <img className="h-24" src="/logo.png"/>
              <p>eKazi is An Online Recruitment Management Platform Designed for Employers/Recruiters, Job Seekers and Freelancers.</p>
            </div>
            <div className="col-span-2">
              <h1 className="font-bold text-lg mb-2 text-slate-600">ABOUT</h1>
             <div className="flex flex-col space-y-1 text-primary">
             {[
                {title:"About us",path:""},
                {title:"My Account",path:""},
                {title:"Contact",path:""},
                {title:"Terms of use",path:""}
            ].map((item)=>{
                return <a className="hover:text-secondary cursor-pointer">{item.title}</a>
              })}
             </div>
            </div>
            <div className="col-span-3">
              <h1 className="font-bold text-lg mb-2 text-slate-600">FOR FREELANCERS</h1>
             <div className="flex flex-col space-y-1">
             {[
                {title:"Browser freelancers",path:""},
                {title:"Hire Me",path:""},
                {title:"Post Projects",path:""}
            ].map((item)=>{
                return <a>{item.title}</a>
              })}
             </div>
            </div>
            <div className="col-span-2">
              <h1 className="font-bold text-lg mb-2 text-slate-600">FOR EMPLOYERS</h1>
              <h1>Browse jobs</h1>
             <div className="flex flex-col space-y-1 text-primary">
             {[
                {title:"Post jobs",path:""}
            ].map((item)=>{
                return <a>{item.title}</a>
              })}
             </div>
             
                
                
             <h1>Tel hotline</h1>
             <div className="flex flex-col space-y-1 text-primary">
             {[
                {title:"+255 677 400 206",path:""},
                {title:"+255 677 400 205",path:""},
                {title:"+255 677 014 718",path:""},

            ].map((item)=>{
                return <a className="hover:text-secondary cursor-pointer">{item.title}</a>
              })}
             </div>
            </div>
              
        </div>
        <div className="bg-primary py-6 mb-6 text-center">
            <h1 className="text-white font-bold">© 2024. All rights reserved</h1>
        </div>
    </div> );
}
 
export default Footer;