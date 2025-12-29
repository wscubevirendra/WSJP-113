import React from 'react'

export default function MoviesCard({ movies }) {
    return (
        <div className="container mt-5">
          
            <div className="row text-light text-center">
                {
                    movies.map((data) => {
                        return (
                            <div key={data.id} className="col-md-3 shadow mb-4">
                                <img src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`} alt="Image 1" className="img-fluid rounded" />
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}
