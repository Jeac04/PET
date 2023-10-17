import React from 'react'
import '../css/mascotasperdidas.css'
;import Footer from './Footer';
const MascotasPerdidas = () => {
  return (
    <div>
      <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <h5 class="card-text">Nombre :</h5>
              <h5 class="card-text">Edad :</h5>
              <h5 class="card-text">Raza :</h5>
              <h5 class="card-text">Ultima vez Visto :</h5>
              <h5 class="card-text">-Descripción-</h5>
              <h5 class="card-text">Se perdió el :</h5>
              <div class="d-flex justify-content-between align-items-center">
                
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default MascotasPerdidas
