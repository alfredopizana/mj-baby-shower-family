import './App.css'
import HeroBanner from './components/HeroBanner'
import EventDetail from './components/EventDetail'
import CustomButton from './components/CustomButton'
import ImageButton from './components/ImageButton'
import liverpoolLogo from './assets/images/liverpool.png'
import amazonLogo from './assets/images/amazon.png'
import { Image } from 'react-bootstrap'

import eventDetailImage from './assets/images/event-details-divider.png'
import { ExternalLink, Gift } from 'lucide-react'

function App() {
  return (
    <>
      <link
        itemProp="thumbnailUrl"
        href="https://baby-shower-self.vercel.app/cover_image.jpeg"
      />
      <span
        itemProp="thumbnail"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <link
          itemProp="url"
          href="https://baby-shower-self.vercel.app/cover_image.jpeg"
        />
      </span>
      <HeroBanner />
      <div className="event-details-divider text-center">
        <img src={eventDetailImage} />
      </div>
      <section className="container">
        <h2>Detalles del Evento:</h2>
        <div className="d-flex flex-column flex-md-row text-center event-details">
          <EventDetail
            title="¿Cuándo?"
            text="Sabado 5 de Julio, 2025<br/>a partir de 3:00pm"
            styleName="when"
            link="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250705T210000Z%2F20250706T040000Z&location=https%3A%2F%2Fwww.google.com.mx%2Fmaps%2Fplace%2FJardines%2Bde%2Blos%2BCerezos%2B1840%2C%2BJardines%2Bdel%2BVergel%2C%2B45130%2BZapopan%2C%2BJal.%2F%4020.7530663%2C-103.3729022%2C17z%2Fdata%3D%214m6%213m5%211s0x8428aff7141b05cd%3A0x322d8c6f1030fe5b%218m2%213d20.7531566%214d-103.3720546%2116s%252Fg%252F11swtdnrsw%3Fentry%3Dttu%26g_ep%3DEgoyMDI1MDYxMC4wIKXMDSoASAFQAw%253D%253D&text=Baby%20Shower%20Mar%C3%ADa%20Julieta"
            buttonText="Agregar a mi calendario"
            icon="calendar"
          />
          <EventDetail
            title="¿En dónde?"
            text="Jardines de los Cerezos 1840"
            styleName="where"
            link="https://www.google.com.mx/maps/place/Jardines+de+los+Cerezos+1840,+Jardines+del+Vergel,+45130+Zapopan,+Jal./@20.7530663,-103.3729022,17z/data=!4m6!3m5!1s0x8428aff7141b05cd:0x322d8c6f1030fe5b!8m2!3d20.7531566!4d-103.3720546!16s%2Fg%2F11swtdnrsw?entry=ttu&g_ep=EgoyMDI1MDYxMC4wIKXMDSoASAFQAw%3D%3D"
            buttonText="Jardines de los Cerezos 1840, Jardines del Vergel, Zapopan."
            icon="map"
          />
        </div>
        <CustomButton
          link="https://docs.google.com/forms/d/e/1FAIpQLSecxE8krPrgJUkDsi4cOrNR-qaVRUZAXFY2fSg7vC9b3iYbGQ/viewform"
          text="Confirmar asistencia"
          buttonVariant=""
          buttonClass="rsvp btn-primary "
          icon="none"
        />
      </section>

      <div className="parallax"></div>

      <div className="container-fluid baby-registry py-5">
        <div>
          <h2 className="text-center amber">
            Mesa de Regalos <Gift />
          </h2>
        </div>
        <p className="w-80 text-center">
          Su presencia es el mejor regalo que podríamos recibir. Pero si desean
          tener un detalle, hemos preparado las siguientes mesas de regalos para
          su comodidad:
        </p>
        <div className="d-flex flex-column flex-md-row text-center justify-content-center gap-3">
          <a
            className="baby-registry-card"
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51702236"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="baby-registry-card-header">
              <p className="card-text">Mesa de Regalos Liverpool</p>
              <ExternalLink />
            </div>
            <div className="baby-registry-card-image">
              <img
                src={liverpoolLogo}
                className="card-img-top"
                alt="Mesa de Regalos Liverpool"
              />
            </div>
            <div className="baby-registry-card-body">
              <p className="card-text">Ir a la mesa de Regalos</p>
            </div>
          </a>

          <a
            className="baby-registry-card"
            href="https://www.amazon.com.mx/baby-reg/carlosandres-diaz-agosto-2025-zapopan/1W6T4K8K8C2TH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="baby-registry-card-header">
              <p className="card-text">Mesa de Regalos Amazon</p>
              <ExternalLink />
            </div>
            <div className="baby-registry-card-image">
              <img
                src={amazonLogo}
                className="card-img-top"
                alt="Mesa de Regalos Liverpool"
              />
            </div>
            <div className="baby-registry-card-body">
              <p className="card-text">Ir a la mesa de Regalos </p>
            </div>
          </a>
        </div>        
      </div>
      <hr className="w-75 separator" />
      <section className="container questions">
        <h2>¿Preguntas?</h2>
        <p className="text-center">
          Comunícate con nosotros a los números:
          <br />
          <em>
            <small>
              Click en los siguientes links para mandarnos un mensaje directo
              por whatsapp
            </small>
          </em>
          <CustomButton
            link="https://api.whatsapp.com/send?phone=3334030204"
            text="33 3403 0204 (Carlos)"
            buttonVariant="outline-dark"
            buttonClass="mt-4"
            icon="whatsapp"
          />
          <CustomButton
            link="https://api.whatsapp.com/send?phone=3315347563"
            text="33 1534 7563 (Paty)"
            buttonVariant="outline-dark"
            buttonClass="mt-4"
            icon="whatsapp"
          />
        </p>
      </section>
      {/* <Image src={footer} className="w-100" /> */}

      <footer>
        <p>
          ¡Esperamos celebrar contigo! Gracias por ser parte de este día tan
          especial. | 2025 Carlos & Paty
        </p>
      </footer>
    </>
  )
}

export default App
