import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const Card = ({slides}) => {
    const sliderLeft = ()=>{
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const sliderRight = ()=>{
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <div id="main-slider-container">
        <MdChevronLeft size={40} className="slider-icon left" onClick={sliderLeft} />

        
        <div id="slider">
            {
            slides.map((slide, index)=>{
                return(
                    <div className='slider-card' key={index}>
                        <div className='slider-card-image' style={{backgroundImage:`url(${slide.image})`}}></div>
                       <div className='slider-content'>
                        <p className='slider-card-title'>
                                {slide.title} 
                            </p>
                            <button className='slider-card-button flex flex-row justify-center items-center'>
                                <span className='mx-2'>ADD</span>
                                <AiOutlinePlusCircle />
                            </button>
                       </div>
                    </div>
                )
            })
            }
        </div>
        <MdChevronRight size={40} className="slider-icon right" onClick={sliderRight} />
    </div>
  )
}

export default Card