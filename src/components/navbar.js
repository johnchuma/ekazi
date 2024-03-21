const Navbar = () => {
    return ( <div className="bg-background fixed w-screen">

        <div className="w-11/12 mx-auto flex justify-between items-center">
           <img src="/logo.png" className="h-24"/>
           <div className="flex text-primary space-x-3 py-4 ">
            {[
                {title:"Home",path:""},
                {title:"Find Jobs",path:""},
                {title:"Find Freelancers",path:""},
                {title:"Employers",path:""},
                {title:"Recruiter",path:""},
                {title:"Pricing",path:""},
            ].map((item)=>{
                return <button className="hover:text-secondary">{item.title}</button>
            })}
           </div>
           <div className="flex text-primary space-x-3 ">
            {[
                {title:"Login",path:""},
                {title:"Register",path:""},
             
            ].map((item)=>{
                return <button className="hover:text-secondary">{item.title}</button>
            })}
            <button className="py-2 px-3 bg-secondary hover:bg-primary text-white rounded">Post Job</button>
           </div>
        </div>
    </div> );
}
 
export default Navbar;