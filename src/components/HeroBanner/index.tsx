import Leaf from "../svgs/Leaf";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

const HeroBanner = () => {
    gsap.registerPlugin(useGSAP,DrawSVGPlugin);
    const leafRef = useRef<SVGSVGElement>(null);

    useGSAP(
        () => {
          // use selectors...
          //gsap.to("#stem", { rotation: "+=360", duration: 3 });
          gsap.from("#stem", {drawSVG:"50% 50%", duration: 1, ease:"power1.inOut"});
          gsap.to("#stem",  {drawSVG:"0% 100%", duration: 1, ease:"power1.inOut"});
        },
        
      ); // <-- scope for selector text (optional)
  return (
    <Leaf ref={leafRef}/>
  );
}
export default HeroBanner;