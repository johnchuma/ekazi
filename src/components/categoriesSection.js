import { useState } from "react";
import { categories, companies, locations } from "../utils/data";

const CategoriesSection = () => {

    const [selectedCategory, setSelectedCategory] = useState(0)

    return ( <div>
        <div className="bg-white">
        <div className="w-8/12 mx-auto py-8">
        <div className="flex">
         {[{title:"By Job categories"},{title:"By companies industries"},{title:"By Companies"},{title:"By Locations"}].map((item,index)=>{
            return <div onClick={()=>{
                setSelectedCategory(index)
            }} className={` font-semibold border px-8 py-2 cursor-pointer  ${index==selectedCategory?"text-slate-400  border-slate-100":"text-primary border-slate-200"}`}>{item.title}</div>
          })}
         </div>

         <div className="py-4  px-8 grid grid-cols-3 border border-slate-200 rounded mt-3">
             { selectedCategory==0&&
             categories.map((item)=>{
               return <h1 className="font-bold text-primary cursor-pointer hover:text-secondary">{item.title}({item.count})</h1>
             })}
             {selectedCategory==1&&
             categories.map((item)=>{
               return <h1 className="font-bold text-primary cursor-pointer hover:text-secondary">{item.title}({item.count})</h1>
             })}
             { selectedCategory==2&&
             companies.map((item)=>{
               return <h1 className="font-bold text-primary cursor-pointer hover:text-secondary">{item.title}({item.count})</h1>
             })}
             { selectedCategory==3&&
             locations.map((item)=>{
               return <h1 className="font-bold text-primary cursor-pointer hover:text-secondary">{item.title}({item.count})</h1>
             })}
         </div>
        </div>
         
      </div>
    </div> );
}
 
export default CategoriesSection;