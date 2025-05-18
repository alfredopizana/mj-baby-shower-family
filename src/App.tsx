import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroBanner from './components/HeroBanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroBanner/>
      <header className="position-relative">
      <img src="/assets/images/banner.png" />
    <div className="container-fluid header-text position-absolute">
      <h1>Oh Baby!</h1>
      <p>Acompáñanos a celebrar la llegada de:</p>
      <h2>Flora Eleonor</h2>
    </div>
  </header>

  <section className="container event-details">
    <h2>Detalles del Evento:</h2>
    <div className="d-flex flex-column flex-md-row text-center">
      <div className="w-100 w-md-50 event-detail when">
        <h3>¿Cuándo?</h3>
        <p>Sabado Julio 12, 2025</p>
        <p>a partir de 2:00pm</p>
        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250712T203000Z%2F20250713T020000Z&location=https%3A%2F%2Fmaps.app.goo.gl%2Ft63jB4Ae3Xozdua29&text=Baby%20Shower%20Flora"
          target="_blank" rel="noopener noreferrer" title="Save Event in Google Calendar">Agregar a mi calendario</a>
      </div>
      <div className="w-100 w-md-50 event-detail where">
        <h3>¿En dónde?</h3>
        <p>Terraza Berath</p>
        <p><a href="https://maps.app.goo.gl/t63jB4Ae3Xozdua29" target="_blank">Sta. Fe 553, La Tuzania Ejidal, 45138
            Zapopan, Jal.</a></p>
      </div>
    </div>
    <a href="https://forms.gle/7GkCuJEFUfvxXPFn9" target="_blank" className="w-100" type="button">Confirmar asistencia</a>
  </section>

  <div className="container-fluid baby-registry">
    <p className="w-80 text-center">Su presencia es el mejor regalo que podríamos recibir. Pero si desean tener un detalle,
      hemos preparado las siguientes mesas de regalos para su comodidad</p>
    <div className="d-flex flex-column flex-md-row text-center">
      <div className="w-100 w-md-50  d-flex align-items-end">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/liverpool.png" />
        </a>
      </div>
      <div className="w-100 w-md-50  d-flex align-items-start">
        <a href="" target="_blank">
          <img src="/assets/images/amazon.png" />
        </a>
      </div>
    </div>
  </div>

  <section className="container questions">
    <h2>¿Preguntas?</h2>
    <p className="text-center">Comunicate con nosotros a los números <a
        href="https://api.whatsapp.com/send?phone=3316982226" target="_blank">33 1698 2226</a> (Alfredo) ó <a
        href="https://api.whatsapp.com/send?phone=3316930366" target="_blank">33 1693 0366</a> (Sofy)</p>
  </section>

  <footer>
    <p>¡Esperamos celebrar contigo! Gracias por ser parte de este día tan especial. | 2025 Alfred & Sofy</p>
  </footer>
    </>
  )
}

export default App
