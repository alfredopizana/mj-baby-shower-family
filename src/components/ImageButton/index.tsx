import { Button, Image  } from "react-bootstrap";

interface ImageButtonProps { 
  link:string
  src:string;
  containerClass:string;
}

const ImageButton = ({  link, src, containerClass } : ImageButtonProps) => {    
  return (
    <div className={containerClass}>
        <Button target="_blank" href={link}  variant="link">
            <Image src={src} />
        </Button> 
    </div>         
  );
}
export default ImageButton;