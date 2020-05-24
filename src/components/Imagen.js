import React from 'react'

const Imagen = ({ imagen }) => {

  // extraer imagen con destructuring
  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  return (
    <div className="col-12 col-sm-10 col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">Me gusta {likes}</p>
          <p className="card-text">Visitas {views}</p>
        </div>
        <div className="card footer">
          <a
            href={largeImageURL}
            target="_blanck"
            rel="noopener noreferrer"
            className="btn btn-small btn-info btn-block"

          >ver imagen</a>
        </div>
      </div>
    </div>
   );
}

export default Imagen;