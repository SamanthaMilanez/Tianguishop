import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Whyus from "./_components/Whyus";
import Collection from "./_components/Collection";
import ProductSection from "./_components/ProductSection";
import CategorySection from "./_components/CategorySection";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_utils/GlobalApi";

export default async function Home() {

 

  const categoryList= await GlobalApi.getCategoryList();

  return (
    <>
      <div>
        <Hero/>
       <div>
        <CategorySection/>
       </div>
      </div>
      <div className="p-5 py-5 px-8 md:px-28">
        <ProductSection/>
      </div>
    </>
  );
}