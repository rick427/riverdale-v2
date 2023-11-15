import Layout from "@/components/base/Layout";
import Hero from "@/components/ui/Home/Hero";
import Search from "@/components/ui/Home/Search";
import Explore from "@/components/ui/Home/Explore";
import Featured from "@/components/ui/Home/Featured";
import RentProperties from "@/components/ui/Home/Rent";
import SaleProperties from "@/components/ui/Home/Sale";
import Testimonials from "@/components/ui/Home/Testimonials";

export default function page() {
  return (
    <Layout>
      <Hero/>
      <Search/>
      <Featured/>
      <Explore/>
      <RentProperties/>
      <SaleProperties/>
      <Testimonials/>
    </Layout>
  )
}
