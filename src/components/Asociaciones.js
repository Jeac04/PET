import React from 'react'
import Footer from './Footer';
import PetRoma from '../imagenes/PetRoma.jpeg';
const Asociaciones = () => {
  return (
    <main class="container">
  <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">Asociaciones y Rescatistas</h1>
      <p class="lead my-3">En esta sección se muestran a las Asociaciones y Rescatistas comprometidos a ayudar a Mascotas en situacion de calle u otra atención que se requiera.</p>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Pet Roma</h3>
          <div class="mb-1 text-body-secondary">Tapachula, Chiapas.</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
          </a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src={PetRoma} class="bd-placeholder-img" width="250" height="250"></img>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Ángeles Peluditos</h3>
          <div class="mb-1 text-body-secondary">Tapachula, Chiapas.</div>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
          </a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </main>

  )
}

export default Asociaciones;
