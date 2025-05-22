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
        'w-100 w-md-50 event-detail d-flex flex-column justify-content-between ' +
        styleName
      }
    >
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
  )
}
export default EventDetail
