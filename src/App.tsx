import './App.css'
import HeroBanner from './components/HeroBanner'
import EventDetail from './components/EventDetail'
import CustomButton from './components/CustomButton'
import ImageButton from './components/ImageButton'
import liverpoolLogo from './assets/images/liverpool.png'
import amazonLogo from './assets/images/amazon.png'
// import footer from './assets/images/footer.png'
import { Image } from 'react-bootstrap'

function App() {
  return (
    <>
      <HeroBanner />
      <section className="container event-details">
        <h2>Detalles del Evento:</h2>
        <div className="d-flex flex-column flex-md-row text-center">
          <EventDetail
            title="¿Cuándo?"
            text="Sabado 12 de Julio, 2025<br/>a partir de 2:30pm"
            styleName="when"
            link="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250712T203000Z%2F20250713T020000Z&location=https%3A%2F%2Fmaps.app.goo.gl%2Ft63jB4Ae3Xozdua29&text=Baby%20Shower%20Flora"
            buttonText="Agregar a mi calendario"
            icon="calendar"
          />
          <EventDetail
            title="¿En dónde?"
            text="Terraza Berath"
            styleName="where"
            link="https://maps.app.goo.gl/t63jB4Ae3Xozdua29"
            buttonText="Sta. Fe 553, La Tuzania, Zapopan."
            icon="map"
          />
        </div>
        <CustomButton
          link="https://forms.gle/7GkCuJEFUfvxXPFn9"
          text="Confirmar asistencia"
          buttonVariant=""
          buttonClass="rsvp btn-primary "
          icon="none"
        />
      </section>

      <div className="parallax"></div>

      <div className="container-fluid baby-registry">
        <p className="w-80 text-center">
          Su presencia es el mejor regalo que podríamos recibir. Pero si desean
          tener un detalle, hemos preparado las siguientes mesas de regalos para
          su comodidad
        </p>
        <div className="d-flex flex-column flex-md-row text-center justify-content-center">
          <ImageButton
            containerClass=""
            src={liverpoolLogo}
            link="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51654538"
          />
          <ImageButton
            containerClass=""
            src={amazonLogo}
            link="https://www.amazon.com.mx/baby-reg/jesusalfredopizaa-espinosa-sofy-hdz-septiembre-2025-zapopan/3OTNG2VC888U9"
          />
        </div>
      </div>

      <section className="container questions">
        <h2>¿Preguntas?</h2>
        <p className="text-center">
          Comunícate con nosotros a los números:
          <CustomButton
            link="https://api.whatsapp.com/send?phone=3316982226"
            text="33 1698 2226 (Alfredo)"
            buttonVariant="btn-link"
            buttonClass=""
            icon="message"
          />
          <CustomButton
            link="https://api.whatsapp.com/send?phone=3316930366"
            text="33 1693 0366 (Sofy)"
            buttonVariant="btn-link"
            buttonClass=""
            icon="message"
          />
        </p>
      </section>
      {/* <Image src={footer} className="w-100" /> */}

      <footer>
        <p>
          ¡Esperamos celebrar contigo! Gracias por ser parte de este día tan
          especial. | 2025 Alfred & Sofy
        </p>
      </footer>
    </>
  )
}

export default App
