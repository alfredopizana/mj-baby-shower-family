import Leaf from '../svgs/Leaf'
import DaisyFlower from '../svgs/DaisyFlower'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { Flip } from 'gsap/Flip'
import { GSDevTools } from 'gsap/GSDevTools'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

import banner from '../../assets/images/banner.png'
import Flowers from '../svgs/flowers'

const HeroBanner = () => {
  gsap.registerPlugin(
    DrawSVGPlugin,
    Flip,
    GSDevTools,
    MotionPathPlugin,
    MorphSVGPlugin,useGSAP
  )
  const flowersRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<SVGSVGElement>(null)
  const containerRotatedRef = useRef<SVGSVGElement>(null)
//     const leafRef = useRef<SVGSVGElement>(null)
//   const leafRef2 = useRef<SVGSVGElement>(null)
//   const daisyFlowerRef = useRef<SVGSVGElement>(null)
//   const daisyFlowerTopRef = useRef<SVGSVGElement>(null)
//   const daisyFlowerLeftRef = useRef<SVGSVGElement>(null)
const scaleModifier = (scale, target) => {
  return scale
}

useGSAP(( ) => {

  const leafTimeline = gsap.timeline({
    defaults: { duration: 2, ease: 'power1.inOut', repeat: -1, yoyo: true },
  })

  leafTimeline
    .from('[id^="stem"]', { drawSVG: '50% 50%' }, 0)
    .to('[id^="stem"]', { drawSVG: '0% 100%' }, 0)

  const startScale = 0
  const endScale = 1
  const start = 0.0
 
      leafTimeline
        .from(
          "#leaf_h > [id^='leaf_left']",
          {
            scale: 0,
            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            transformOrigin: 'bottom right',
            rotate: -90,
          },
          0
        )
        .to(
          "#leaf_h > [id^='leaf_left']",
          {
            scale: 1,

            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
          },
          0)
        

      leafTimeline
        .from(
          "#leaf_h >[id^='leaf_right']",
          {
            scale: 0,
            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            transformOrigin: 'top left',
            rotate: 90,
          },
          0
        )
        .to(
          "#leaf_h >[id^='leaf_right']",
          {
            scale: 1,

            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            repeat: -1,
          },
          0
        )

        leafTimeline
        .from(
          "#leaf_v > [id^='leaf_left']",
          {
            scale: 0,
            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            transformOrigin: 'bottom right',
            rotate: -90,
          },
          0
        )
        .to(
          "#leaf_v > [id^='leaf_left']",
          {
            scale: 1,

            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
          },
          0)
        

      leafTimeline
        .from(
          "#leaf_v >[id^='leaf_right']",
          {
            scale: 0,
            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            transformOrigin: 'bottom left',
            rotate: 90,
          },
          0
        )
        .to(
          "#leaf_v >[id^='leaf_right']",
          {
            scale: 1,

            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            repeat: -1,
          },
          0
        )


  gsap.from(
    [
      "#daisy_flower_1",
      "#daisy_flower_2",
      "#daisy_flower_3",
      "#yellow_flower",
      "#pink_flower",
    ],
    {
      opacity: 0,
      scale: 0.1,
      transformOrigin: 'center center',
    }
  )
  gsap.to(
    [
      "#daisy_flower_1",
      "#daisy_flower_2",
      "#daisy_flower_3",
      "#yellow_flower",
      "#pink_flower",
    ],
    {
      transformOrigin: 'center center',
      opacity: 1,
      scale: 1,
      duration: 2.0,
      ease: 'back.out(2.0)',
      repeat: -1,
      repeatDelay: 0,
      yoyo: true,
    }
  )

},{ scope: containerRef,
   dependencies: [flowersRef]
}) 

useGSAP(( ) => {

  const leafTimeline = gsap.timeline({
    defaults: { duration: 2, ease: 'power1.inOut', repeat: -1, yoyo: true },
  })

  leafTimeline
    .from('[id^="stem"]', { drawSVG: '50% 50%' }, 0)
    .to('[id^="stem"]', { drawSVG: '0% 100%' }, 0)

  const startScale = 0
  const endScale = 1
  const start = 0.0
 
      leafTimeline
        .from(
          "#leaf_h > [id^='leaf_left']",
          {
            scale: 0,
            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            transformOrigin: 'bottom right',
            rotate: -90,
          },
          0
        )
        .to(
          "#leaf_h > [id^='leaf_left']",
          {
            scale: 1,

            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
          },
          0)
        

      leafTimeline
        .from(
          "#leaf_h >[id^='leaf_right']",
          {
            scale: 0,
            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            transformOrigin: 'top left',
            rotate: 90,
          },
          0
        )
        .to(
          "#leaf_h >[id^='leaf_right']",
          {
            scale: 1,

            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            repeat: -1,
          },
          0
        )

        leafTimeline
        .from(
          "#leaf_v > [id^='leaf_left']",
          {
            scale: 0,
            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            transformOrigin: 'bottom right',
            rotate: -90,
          },
          0
        )
        .to(
          "#leaf_v > [id^='leaf_left']",
          {
            scale: 1,

            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
          },
          0)
        

      leafTimeline
        .from(
          "#leaf_v >[id^='leaf_right']",
          {
            scale: 0,
            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            transformOrigin: 'bottom left',
            rotate: 90,
          },
          0
        )
        .to(
          "#leaf_v >[id^='leaf_right']",
          {
            scale: 1,

            modifiers: {
              scaleX: scaleModifier,
              scaleY: scaleModifier,
            },
            repeat: -1,
          },
          0
        )


  gsap.from(
    [
      "#daisy_flower_1",
      "#daisy_flower_2",
      "#daisy_flower_3",
      "#yellow_flower",
      "#pink_flower",
    ],
    {
      opacity: 0,
      scale: 0.1,
      transformOrigin: 'center center',
    }
  )
  gsap.to(
    [
      "#daisy_flower_1",
      "#daisy_flower_2",
      "#daisy_flower_3",
      "#yellow_flower",
      "#pink_flower",
    ],
    {
      transformOrigin: 'center center',
      opacity: 1,
      scale: 1,
      duration: 2.0,
      ease: 'back.out(2.0)',
      repeat: -1,
      repeatDelay: 0,
      yoyo: true,
    }
  )

},{ scope: containerRotatedRef,
   dependencies: [flowersRef]
}) 
  return (
    <>
      <header className="banner position-relative d-flex justify-content-center align-content-center align-items-center">
        <div className='background-animation'>

        
          <div className="flowers" ref={containerRef}>
            <Flowers ref={flowersRef}></Flowers>
          </div>
          <div className="flowers flowers-rotated" ref={containerRotatedRef}>
            <Flowers ref={null}></Flowers>
          </div>
        </div>
        <div className="banner-content">
          
          <div className="container-fluid header-text ">
            <h1>Oh Baby!</h1>
            <p>Acompáñanos a celebrar la llegada de:</p>
            <h2>Flora Eleonor</h2>
          </div>
        </div>
      </header>
    </>
  )
}
export default HeroBanner
