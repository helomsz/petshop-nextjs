import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import dogImg from '../../../public/hero-dog.webp'
import catImg from '../../../public/cat-hero.png'
import Image from 'next/image'


export function Hero() {
  return (
    <section id="hero" className="bg-[#E84C3D] text-white relative overflow-hidden pt-24">

      <div>
        <Image
          src={dogImg}
          alt='Foto do cachorro'
          fill
          sizes='100vw'
          priority
          className='object-cover opacity-60 lg:hidden'
        />
        <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-14"
              data-aos="fade-down"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className=" lg:text-lg" data-aos="fade-right">
              Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
            </p>


            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target='_blank'
              href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-mediu shadow-[0_12px_30px_rgba(34,197,94,0.45)]
                transition-all duration-300 ease-out hover:bg-green-600 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(34,197,94,0.6)] active:translate-y-0">
              <WhatsappLogo className='w-5 h-5' />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-full">5%</b> de desconto na primeira compra.
              </p>

            </div>

          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt='Foto do dog'
              className='object-contain'
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>

        </article>

      </div>


    </section>
  )
}