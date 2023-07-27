import getAllProducts from '@/lib/getAllProducts'
import Link from 'next/link'


export const metadata = {
  title: 'Productos',
  description: 'Lista general de productos',
}

export default async function Products() {
  const productsData = getAllProducts()

  const products = await productsData

  console.log('Hello')

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {products?.map(product => {
        return (
          <>
            <p key={product.id}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </p>
            <br />
          </>
        )
      })}
    </section>
  )
  return content
}
