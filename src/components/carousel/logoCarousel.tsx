import Image from 'next/image'
import EEA from '../../../public/assets/logos/eea-logo.webp'
import ESP from '../../../public/assets/logos/esp-logo.svg'
import Gitcoin from '../../../public/assets/logos/gitcoin.svg'
import Octant from '../../../public/assets/logos/octant-logo.svg'
import Optimism from '../../../public/assets/logos/op-logo.png'
import EthStaker from '../../../public/assets/logos/ethstaker-logo.svg'
import MolochDAO from '../../../public/assets/logos/molochdao-logo2.png'
import FEM from '../../../public/assets/logos/eth-magicians.png'

export default function LogoCarousel() {

  const logos = [
    { src: ESP, alt: 'Ethereum Support Program' },
    { src: EthStaker, alt: 'EthStaker' },
    { src: FEM, alt: 'Felloship of Ethereum Magicians' },
    // { src: EEA, alt: 'Enterprise Ethereum Alliance' },
    { src: Gitcoin, alt: 'Gitcoin' },
    { src: Octant, alt: 'Octant' },
    { src: Optimism, alt: 'Optimism' },
    { src: MolochDAO, alt: 'MolochDAO' },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-[250px] animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-[250px] animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}