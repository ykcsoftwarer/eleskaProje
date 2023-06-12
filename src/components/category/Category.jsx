import {AiOutlinePlusCircle} from 'react-icons/ai'

const Category = ({slides}) => {
   const image='https://picsum.photos/300/300'
   
  return (
    <div className='w-full mt-10'>
        <div className='md:w-[80%] lg:w-[66%] mx-auto'>
            <div className='flex item-center mb-10 flex-col sm:flex-row sm:justify-center'>
                    <div className='left md:basis-1/2 lg:basis-1/3 flex flex-col justify-center p-2'>
                        <h3 className='font-semibold text-2xl leading-10 p-3'>
                            Zengin Kategoriler
                        </h3>
                        <p className='leading-7 p-5'>
                            Geniş menümüzle herkesindamak zevkine düşkünseçenekler bulunur. Özenle seçilmiş, şeflerimiz tarafından hazırlanan özel tariflerimizi deneyin. 
                        </p>
                        <button className='border-2 border-solid border-gray-500 w-[200px] py-2 mt-4 font-semibold hover:bg-red-300 duration-200'>
                            HIZLI SİPARİŞ
                        </button>
                    </div>
                    <div className='right hidden sm:inline-block md:basis-1/2 lg:basis-1/3 flex justify-center '>
                        <img src={image} alt="" className='rounded-full' />
                    </div>
            </div>
            <div className='flex justify-center flex-wrap'>
            {
            slides.map((slide, index)=>{
                return(
                    <div className='category-card' key={index}>
                        <a href="#">
                           <div className='category-card-image' style={{backgroundImage:`url(${slide.image})`}}></div>
                        </a>
                       <div className='slider-content'>
                        <p className='slider-card-title'>
                                <a href="#">{slide.title} </a>
                            </p>
                           
                       </div>
                    </div>
                )
            })
            }
            </div>
        </div>
       
    </div>
  )
}

export default Category