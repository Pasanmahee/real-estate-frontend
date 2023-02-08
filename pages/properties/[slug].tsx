import getProducts from '../../getProducts.js'

export default function Product({ product }) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <img
            alt="property"
            width={640}
            height={560}
            src={product.property_image}
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.title}
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              {product.price} LKR
            </h1>
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Description
            </div>
            <p className="max-w-xl">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const searchResults = await getProducts(`properties/${params.slug}`)
  const propertyProduct = searchResults

  return {
    props: {
      product: propertyProduct,
    },
  }
}

export async function getStaticPaths() {
  const propertyProducts = await getProducts('properties')

  let fullPaths = []

  for (let product of propertyProducts) {
    fullPaths.push({ params: { slug: product._id } })
  }

  return {
    paths: fullPaths,
    fallback: 'blocking',
  }
}
