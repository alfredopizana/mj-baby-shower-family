import Leaf from "../svgs/Leaf";
import DaisyFlower from "../svgs/DaisyFlower";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import banner from "../../assets/images/banner.png";

const HeroBanner = () => {
  gsap.registerPlugin(
    DrawSVGPlugin,
    Flip,
    GSDevTools,
    MotionPathPlugin,
    MorphSVGPlugin,
  );
  const leafRef = useRef<SVGSVGElement>(null);
  const leafRef2 = useRef<SVGSVGElement>(null);
  const daisyFlowerRef = useRef<SVGSVGElement>(null);
  const daisyFlowerTopRef = useRef<SVGSVGElement>(null);
  const daisyFlowerLeftRef = useRef<SVGSVGElement>(null);
  const scaleModifier = (scale, target) => {
    return scale;
  };

  useGSAP(() => {
    const leafTimeline = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut", repeat: -1, yoyo: true },
    });

    leafTimeline
      .from("#stem", { drawSVG: "50% 50%" }, 0)
      .to("#stem", { drawSVG: "0% 100%" }, 0);

    const startScale = 0;
    const endScale = 1;
    const start = 0.0;
    [leafRef, leafRef2].forEach((documentReference) => {
      if (documentReference.current) {
        leafTimeline
          .from(
            documentReference.current.querySelectorAll("[id^='leaf_left']"),
            {
              scale: 0,
              modifiers: {
                scaleX: scaleModifier,
                scaleY: scaleModifier,
              },
              transformOrigin: "bottom right",
              rotate: -90,
            },
            0,
          )
          .to(
            documentReference.current.querySelectorAll("[id^='leaf_left']"),
            {
              scale: 1,

              modifiers: {
                scaleX: scaleModifier,
                scaleY: scaleModifier,
              },
            },
            0,
          );

        leafTimeline
          .from(
            documentReference.current.querySelectorAll("[id^='leaf_right']"),
            {
              scale: 0,
              modifiers: {
                scaleX: scaleModifier,
                scaleY: scaleModifier,
              },
              transformOrigin: "bottom left",
              rotate: 90,
            },
            0,
          )
          .to(
            documentReference.current.querySelectorAll("[id^='leaf_right']"),
            {
              scale: 1,

              modifiers: {
                scaleX: scaleModifier,
                scaleY: scaleModifier,
              },
              repeat: -1,
            },
            0,
          );
      }
    });
    gsap.set(
      [
        daisyFlowerRef.current,
        daisyFlowerTopRef.current,
        daisyFlowerLeftRef.current,
      ],
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center",
      },
    );
    gsap.to(
      [
        daisyFlowerRef.current,
        daisyFlowerTopRef.current,
        daisyFlowerLeftRef.current,
      ],
      {
        transformOrigin: "center center",
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(2.0)",
        repeat: -1,
        repeatDelay: 0,
        yoyo: true,
      },
    );
    if (
      daisyFlowerRef.current &&
      daisyFlowerTopRef.current &&
      daisyFlowerLeftRef.current
    ) {
      // const petals = Array.from(document.querySelectorAll('g[id^="petal"]'));
      //   gsap.set(petals, {
      //     opacity: 0,
      //     scale: 1,
      //     transformOrigin: "center center",
      //   });
      //   gsap.to(petals, {
      //     transformOrigin: "center center",
      //     opacity: 1,
      //     scale: 1,
      //     stagger: 0.2,
      //     duration: 0.6,
      //     ease: "back.out(1.7)",
      //     repeat: -1,
      //     repeatDelay: 0,
      //     yoyo: true
      //   });
    }
  }); // <-- scope for selector text (optional)
  return (
    <>
      <header className="container position-relative">
        <div className="daisy-flower">
          <DaisyFlower ref={daisyFlowerRef} height="60px" width="60px" />
        </div>
        <div className="daisy-flower-top">
          <DaisyFlower ref={daisyFlowerTopRef} height="50px" width="50px" />
        </div>
        <div className="daisy-flower-left">
          <DaisyFlower ref={daisyFlowerLeftRef} height="50px" width="50px" />
        </div>
        <div className="leaf-vertical">
          <Leaf
            ref={leafRef2}
            height="400px"
            width="400px"
            style={{ transform: "rotate(0deg)", transformOrigin: "center" }}
          />
        </div>
        <div className="leaf-horizontal">
          <Leaf
            ref={leafRef}
            height="400px"
            width="400px"
            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
          />
        </div>

        <img src={banner} />
        <div className="container-fluid header-text position-absolute">
          <h1>Oh Baby!</h1>
          <p>Acompáñanos a celebrar la llegada de:</p>
          <h2>Flora Eleonor</h2>
        </div>
      </header>
    </>
  );
};
export default HeroBanner;
