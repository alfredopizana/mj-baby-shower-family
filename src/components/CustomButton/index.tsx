import { Calendar, MapPin } from 'lucide-react'
import { Button } from 'react-bootstrap'

interface CustomButtonProps {
  text: string
  link: string
  buttonVariant: string
  buttonClass: string
  icon: string
}

const iconMap = {
  map: <MapPin size={20} />,
  calendar: <Calendar size={20} />,
  none: '',
}

const CustomButton = ({
  text,
  link,
  buttonVariant,
  buttonClass,
  icon,
}: CustomButtonProps) => {
  return (
    <Button
      target="_blank"
      href={link}
      variant={buttonVariant}
      className={buttonClass}
    >
      {iconMap[icon as keyof typeof iconMap]}
      {text}
    </Button>
  )
}
export default CustomButton
