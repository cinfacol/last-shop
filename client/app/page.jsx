import { Banner, ProductsArrival, ProductsSold } from "@/components";

const Home = () => {

  return (
    <main className="overflow-hidden">
      <Banner />
      
      <ProductsArrival />
      
      <ProductsSold />
    </main>
  )
}

export default Home;
