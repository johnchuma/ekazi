import { useState } from "react";
import { categories, companies, locations } from "../utils/data";
import HeroSection from "../components/heroSection";
import CompaniesSection from "../components/companiesSection";
import CategoriesSection from "../components/categoriesSection";
import FeaturedJobs from "../components/featuredJobs";
import FeaturedCandidates from "../components/featuredCandidates";
import GetConnectedSection from "../components/getConnectedSection";

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(0)
    return ( <div className="bg-background">
            <HeroSection/>
            <CompaniesSection/>
            <CategoriesSection/>
            <FeaturedJobs/>
            <FeaturedCandidates/>
            <GetConnectedSection/>
            </div> );
}
 
export default HomePage;