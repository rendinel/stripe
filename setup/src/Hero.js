import React from 'react'
import phoneImg from './images/phone.svg'
//{3} we import useGlobalContext inside the hero so we can access all the data
import { useGlobalContext } from './context'
const Hero = () => {
  // {3} we import the closeSubmenu so we can access it
  const { closeSubmenu } = useGlobalContext()

  return (
    // 9 the moment the mouse g on the hero section we close the submenu
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments,send payouts,and
            manage their business online
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero
