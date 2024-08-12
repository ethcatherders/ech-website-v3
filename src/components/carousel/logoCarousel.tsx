import Image from 'next/image'
import EEA from '../../../public/assets/logos/eea-logo.webp'
import ESP from '../../../public/assets/logos/esp-logo.svg'
import Gitcoin from '../../../public/assets/logos/gitcoin-logo.png'
import Octant from '../../../public/assets/logos/octant-logo.svg'

export default function LogoCarousel() {

  const logos = [
    // Moloch DAO,
    { src: ESP, alt: 'Ethereum Support Program' },
    // Fellowship of Ethereum Magicians,
    { src: EEA, alt: 'Enterprise Ethereum Alliance' },
    { src: Gitcoin, alt: 'Gitcoin' },
    { src: Octant, alt: 'Octant' },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}