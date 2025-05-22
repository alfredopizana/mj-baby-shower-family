import { useState } from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner'
import EventDetail from './components/EventDetail'
import CustomButton from './components/CustomButton'
import ImageButton from './components/ImageButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      <EventDetail title="¿Cuándo?" text='Sabado Julio 12, 2025<br/>a partir de 2:30pm' styleName='when' link="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250712T203000Z%2F20250713T020000Z&location=https%3A%2F%2Fmaps.app.goo.gl%2Ft63jB4Ae3Xozdua29&text=Baby%20Shower%20Flora" buttonText='Agregar a mi calendario' icon="calendar" />
      <EventDetail title='¿En dónde?' text='Terraza Berath' styleName='where' link='https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250712T203000Z%2F20250713T020000Z&location=https%3A%2F%2Fmaps.app.goo.gl%2Ft63jB4Ae3Xozdua29&text=Baby%20Shower%20Flora' buttonText='Sta. Fe 553, La Tuzania, Zapopan.' icon="map" />     
    </div>
    <CustomButton link="https://forms.gle/7GkCuJEFUfvxXPFn9" text="Confirmar asistencia" buttonVariant="" buttonClass='rsvp' icon="none"/>
  </section>  

  <div className="container py-2">
    <div className="parallax"></div>
  </div>

  <div className="container-fluid baby-registry">
    <p className="w-80 text-center">Su presencia es el mejor regalo que podríamos recibir. Pero si desean tener un detalle,
      hemos preparado las siguientes mesas de regalos para su comodidad</p>
    <div className="d-flex flex-column flex-md-row text-center justify-content-center">
      <ImageButton containerClass='' src='https://placehold.co/50' link='https://www.amazon.com.mx/baby-reg/jesusalfredopizaa-espinosa-sofy-hdz-septiembre-2025-zapopan/3OTNG2VC888U9'/>
      <ImageButton containerClass='' src='https://placehold.co/50' link='https://www.amazon.com.mx/baby-reg/jesusalfredopizaa-espinosa-sofy-hdz-septiembre-2025-zapopan/3OTNG2VC888U9'/>      
    </div>
  </div>

  <section className="container questions mt-3 mt-md-5 pb-0">
    <h2>¿Preguntas?</h2>
    <p className="text-center">Comunicate con nosotros a los números <br />
      <CustomButton link="https://api.whatsapp.com/send?phone=3316982226" text="33 1698 2226" buttonVariant="btn-link" buttonClass='' icon=""/>
      <a href="https://api.whatsapp.com/send?phone=3316982226" target="_blank">33 1698 2226</a> (Alfredo) ó <a href="https://api.whatsapp.com/send?phone=3316930366" target="_blank">33 1693 0366</a> (Sofy)</p>
  </section>
  <div className="">
    <img className="w-100" src="/assets/images/footer_2.png" />
  </div>

  <footer>
    <p>¡Esperamos celebrar contigo! Gracias por ser parte de este día tan especial. | 2025 Alfred & Sofy</p>
  </footer>
    </>
  )
}

export default App
