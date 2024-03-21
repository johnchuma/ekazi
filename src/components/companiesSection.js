const CompaniesSection = () => {
    return ( <div>
        <div className=" w-8/12 py-8 mx-auto mb-24 text-center bg-white">
                <h1 className="text-2xl font-bold text-primary">Employers</h1>
                <div className="flex px-12 space-x-10 mt-4">
                {["/company2.png","/company.png","/company2.png","/company.png","/company2.png","/company.png","/company2.png"].map((item)=>{
                    return <img className="h-16" src={item}/>
                })}
                </div>
                <button className="py-3 px-3 bg-secondary text-white rounded mt-8 hover:bg-primary">Browse all</button>


            </div>
    </div> );
}
 
export default CompaniesSection;