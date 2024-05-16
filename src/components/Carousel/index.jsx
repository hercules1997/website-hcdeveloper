// Import Swiper React components
import { Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import { CardProjects } from './style.carousel'

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      autoplay={{ delay: 2000 }} // Define o delay entre os slides em milissegundos
      loop={true} // Faz com que os slides façam loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <CardProjects style={{ background: '#0d01b9' }}></CardProjects>
      <CardProjects style={{ background: '#4d1cd4' }}></CardProjects>
      <CardProjects style={{ background: '#4272f7' }}></CardProjects>
      <CardProjects style={{ background: '#839ae2' }}></CardProjects>
    </Swiper>
  )
}
