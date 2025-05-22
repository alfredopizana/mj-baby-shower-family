import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

interface CustomButtonProps {  
  text: string;
  link:string;
  buttonVariant:string;
  buttonClass:string;
}

const CustomButton = ({ text, link, buttonVariant,buttonClass } : CustomButtonProps) => {    
  return (
   <Button target="_blank" href={link} variant={buttonVariant} className={buttonClass}><FontAwesomeIcon icon="signal" />{text}</Button>       
  );
}
export default CustomButton;