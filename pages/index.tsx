import { useState } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import getProducts from '../getProducts.js'

export default function Gallery({ data }) {
  const [clientData, setClientdata] = useState([])

  const submittedValues = async (values) => {
    const params = values;

    //remove empty null undefined key value pairs
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        var value = params[key];
        if (value === null || value === undefined || value === '') {
          delete params[key];
        }
      }
    }

    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    const searchResults = await getProducts(`properties?${queryString}`)
    setClientdata(searchResults)
  }

  return (
    <>
      <Header productData={data} submittedValues={submittedValues} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {clientData.length > 0 ? <>
            {clientData.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </> : <>
            {data.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </>}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const searchResults = await getProducts('properties')

  return {
    props: {
      data: searchResults,
    },
  }
}
