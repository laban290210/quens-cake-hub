import React, {useState} from 'react'
import {AiOutlineLeftCircle, AiOutlineRightCircle} from "react-icons/ai"
import {RxDotFilled} from "react-icons/rx"

const ImgSlider = () => {
    const slides = [
      {
        url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80',
      },
      {
        url: 'https://wallpapercave.com/wp/wp4017398.jpg',
      },
      {
        url: 'https://wallpapercave.com/wp/wp4017410.jpg',
      },

      {
        url: 'https://wallpapercave.com/wp/wp4017461.jpg',
      },
      {
        url: 'https://wallpapercave.com/wp/wp4017496.jpg',
      },
      {
        url: 'https://wallpapercave.com/wp/wp4017456.jpg'
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
      const isFirstSlide =currentIndex ===0;
      const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1 ;
      setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
      const isLastSlide = currentIndex ===slides.length-1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex)
    }
  
  return (
    <div className=' max-w-[1500px] h-[650px]  mt-0 py-2 ml-2 mr-2 group object-cover '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-black'
      >
        
        
      </div>
      <div class=' hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[40%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <AiOutlineLeftCircle onClick={prevSlide} size={30} />
      </div>

      <div class=' hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[40%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <AiOutlineRightCircle onClick={nextSlide}  size={30}/> 
      </div>
      <div class=' flex top-2 justify-center py-2'>
        {slides.map((slide, slideIndex)=>(
          <div
          key={slideIndex}
          onClick={()=> goToSlide(slideIndex)}
          class=' text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImgSlider
