import Image from 'next/image'
import img from '../public/hero.jpg'
import FilterForm from './FilterForm'

export default function Header({ productData, submittedValues }) {

  const submitValues = (values) => {
    submittedValues(values)
  }

  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              priority
              fill
              className="h-full w-full object-cover"
              src={img}
              placeholder="blur"
              alt="Property"
            />
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h3 className="mt-1 text-center font-bold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-4xl">
              <span className="block text-white">Looking To Buy or Rent a Property?</span>
              <span className="block text-orange-500">Find Your Dream Home</span>
            </h3>
            <div className="mx-auto mt-10  sm:flex  sm:justify-center">
              <FilterForm productDataVal={productData} submitValues={submitValues}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
