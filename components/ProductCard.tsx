import Link from 'next/link'

export default function ProductCard({ product }) {

  return (
    <Link href={`/properties/${product._id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-8 xl:aspect-h-6">
        <img src={product.property_image} />
        <p className="text-base font-medium p-2" >{product.status}</p>
      </div>
      <div className="mt-8 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{product.title}</h3>
        <p>{product.area} Sq ft</p>
      </div>
      <div className="mt-1 flex text-sm italic text-gray-500">
        <div className="text-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </div>
        {product.location}
      </div>
      <p className="mt-1 text-sm italic text-orange-500">
        {product.type}
      </p>
      <h3>{product.price} LKR</h3>
    </Link>
  )
}
