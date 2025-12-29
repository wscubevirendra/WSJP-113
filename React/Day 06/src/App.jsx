import React from 'react'
import Card from './components/Card'
import Product from './product'

export default function App() {
  return (
    <div className='container-xl'>
      <div className="row gy-4">
        {
          Product.map((data, index) => {
            console.log(data)
            return (
              <Card key={index} title={data.title} image={data.image} price={data.price} />
            )
          })
        }

      </div>
    </div>
  )
}
