import { Banner, ProductsArrival, ProductsSold } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      
      <ProductsArrival />
      
      <ProductsSold />
    </main>
  )
}
