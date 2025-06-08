import CustomButton from '../CustomButton'

interface EventDetailProps {
  title: string
  text: string
  styleName: string
  link: string
  buttonText: string
  icon: string
}

const EventDetail = ({
  title,
  text,
  styleName,
  link,
  buttonText,
  icon,
}: EventDetailProps) => {
  return (    
    <div
      className={
        'card w-100 event-detail ' +
        styleName
      }
    >
      <div className='card-body d-flex flex-column justify-content-between'>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <CustomButton
          link={link}
          text={buttonText}
          buttonVariant="outline-dark"
          buttonClass=""
          icon={icon}
        />
      </div>
    </div>
  )
}
export default EventDetail
