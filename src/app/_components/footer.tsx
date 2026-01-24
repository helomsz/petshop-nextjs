
import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'
import { PawPrint, Menu, X } from "lucide-react"

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
  return (
    
    <section className="bg-[#FDF6ec] py-20 text-black relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
      <div className='container mx-auto px-4'>

        <div className='border-b border-white/20 pb-8'>
          <h4 className='text-3xl font-bold mb-8 text-left'>Marcas que trabalhamos</h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md p-4 rounded-2xl flex items-center justify-center border border-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-10
  mt-12 mb-12'>
          <div>
            <div className='flex items-center gap-2'>
                <PawPrint className="w-7 h-7 text-black" />
                <h3 className='text-2xl font-bold mb-2'>Petshop Dev</h3>
            </div>
            <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
            <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-mediu shadow-[0_12px_30px_rgba(34,197,94,0.45)]
                transition-all duration-300 ease-out hover:bg-green-600 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(34,197,94,0.6)] active:translate-y-0">
            Contato via WhatsApp
            </a>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: heloisa@petshop.com</p>
            <p>Telefone: (XX) 1231831238</p>
            <p>Rua X, centro, Campinas | SP</p>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
              <a
                href="#"
                target='_blank'
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
              
                <FacebookLogo className='w-7 h-7' />
              </a>
              <a
                href="#"
                target='_blank'
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
              
                <InstagramLogo className='w-6 h-6' />
              </a>
              <a
                href="#"
                target='_blank'
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]" >
                <YoutubeLogo className='w-6 h-6' />
              </a>
            </div>
          </div>

        </footer>

      </div>
    </section>
  )
}