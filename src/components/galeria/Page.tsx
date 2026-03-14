"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Page () {

  const [title, setTitle] = useState('opacity-0')
  const [image1, setImage1] = useState('opacity-0')
  const [image2, setImage2] = useState('opacity-0')
  const [image3, setImage3] = useState('opacity-0')
  const [image4, setImage4] = useState('opacity-0')
  const [image5, setImage5] = useState('opacity-0')
  const [image6, setImage6] = useState('opacity-0')
  const [image7, setImage7] = useState('opacity-0')
  const [image8, setImage8] = useState('opacity-0')
  const [image9, setImage9] = useState('opacity-0')
  const [image10, setImage10] = useState('opacity-0')
  const [image11, setImage11] = useState('opacity-0')
  const [image12, setImage12] = useState('opacity-0')
  const [image13, setImage13] = useState('opacity-0')
  const [image14, setImage14] = useState('opacity-0')
  const [image15, setImage15] = useState('opacity-0')
  const [image16, setImage16] = useState('opacity-0')
  const [image17, setImage17] = useState('opacity-0')
  const [image18, setImage18] = useState('opacity-0')
  const [image19, setImage19] = useState('opacity-0')

  const ref = useRef(null)
  
    useEffect(() => {
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setTitle('opacity-100')
            setTimeout(() => {
              setImage1('opacity-100')
              setTimeout(() => {
                setImage2('opacity-100')
                setTimeout(() => {
                  setImage3('opacity-100')
                  setTimeout(() => {
                    setImage4('opacity-100')
                    setTimeout(() => {
                      setImage5('opacity-100')
                      setTimeout(() => {
                        setImage6('opacity-100')
                        setTimeout(() => {
                          setImage7('opacity-100')
                          setTimeout(() => {
                            setImage8('opacity-100')
                            setTimeout(() => {
                              setImage9('opacity-100')
                              setTimeout(() => {
                                setImage10('opacity-100')
                                setTimeout(() => {
                                  setImage11('opacity-100')
                                  setTimeout(() => {
                                    setImage12('opacity-100')
                                    setTimeout(() => {
                                        setImage13('opacity-100')
                                        setTimeout(() => {
                                            setImage14('opacity-100')
                                            setTimeout(() => {
                                            setImage15('opacity-100')
                                            setTimeout(() => {
                                                setImage16('opacity-100')
                                                setTimeout(() => {
                                                setImage17('opacity-100')
                                                setTimeout(() => {
                                                    setImage18('opacity-100')
                                                    setTimeout(() => {
                                                    setImage19('opacity-100')
                                                    }, 150);
                                                }, 150);
                                                }, 150);
                                            }, 150);
                                            }, 150);
                                        }, 150);
                                        }, 150);
                                  }, 150);
                                }, 150);
                              }, 150);
                            }, 150);
                          }, 150);
                        }, 150);
                      }, 150);
                    }, 150);
                  }, 150);
                }, 150);
              }, 150);
            }, 150);
          }
        },
        {
          threshold: 0.1
        }
      )
  
      if(ref.current){
        observer.observe(ref.current)
      }
  
      return () => {
        if(ref.current){
          observer.unobserve(ref.current)
        }
      }
  
    }, [])

  return (
    <div ref={ref} className="flex flex-col gap-6 w-full max-w-7xl m-auto px-2 py-20">
      <h2 className={`${title} transition-opacity duration-200 text-2xl lg:text-4xl font-semibold text-center`}>Galeria de imagenes y videos</h2>
      <div className="flex gap-8 justify-around flex-wrap">
        <div className={`${image1} transition-opacity duration-200 w-96 relative`} style={{ paddingTop: '56.25%' }}>
            <iframe
                src="https://player.mediadelivery.net/embed/617090/2df8b760-d0a8-410a-bbaa-8cf2c22d5b6d?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
                allowFullScreen
            />
        </div>
        <div className={`${image2} transition-opacity duration-200 w-96 relative`} style={{ paddingTop: '56.25%' }}>
            <iframe
                src="https://player.mediadelivery.net/play/617090/2d4c5209-224a-409d-9066-c6c8dc07ccc3"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
                allowFullScreen
            />
        </div>
        <div className={`${image3} transition-opacity duration-200 w-96 relative`} style={{ paddingTop: '56.25%' }}>
            <iframe
                src="https://player.mediadelivery.net/play/617090/adf9e4e8-7aa0-4fa0-b159-bdc2685ef953"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
                allowFullScreen
            />
        </div>
        <Image src={"/Fiesta cumpleaños.jpg"} alt={""} width={700} height={700} className={`${image4} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Fiesta cumpleaños 2.jpg"} alt={""} width={700} height={700} className={`${image5} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Fiesta.jpg"} alt={""} width={700} height={700} className={`${image6} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <div className={`${image7} transition-opacity duration-200 w-96 relative`} style={{ paddingTop: '56.25%' }}>
            <iframe
                src="https://player.mediadelivery.net/play/617090/017c25fd-b931-485b-8c86-102b9680e5c7"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
                allowFullScreen
            />
        </div>
        <div className={`${image8} transition-opacity duration-200 w-96`} style={{position:'relative', paddingTop: '56.25%'}}><iframe src="https://player.mediadelivery.net/embed/617090/a8d18eee-0166-4b90-bb37-b871fb818c9b?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style={{border:0, position:'absolute', top:0, height:'100%', width:'100%'}} allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;" allowFullScreen={true}></iframe></div>
        <div className={`${image9} transition-opacity duration-200 w-96 relative`} style={{ paddingTop: '56.25%' }}>
            <iframe
                src="https://player.mediadelivery.net/play/617090/ff2578ac-6c28-4f77-a002-be7777fe93ae"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
                allowFullScreen
            />
        </div>
        <Image src={"/Evento 1.jpg"} alt={""} width={700} height={700} className={`${image10} transition-opacity duration-200 w-96 h-96 my-auto object-cover rounded-xl`} />
        <Image src={"/Evento 2.jpg"} alt={""} width={700} height={700} className={`${image11} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Evento 3.jpg"} alt={""} width={700} height={700} className={`${image12} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <div className={`${image13} transition-opacity duration-200 w-96`} style={{position:'relative', paddingTop:'56.25%'}}><iframe src="https://player.mediadelivery.net/embed/617090/11088978-6ef3-4084-9f08-749b69217d15?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style={{border:0, position:'absolute', top:0, height:'100%', width:'100%'}} allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;" allowFullScreen={true}></iframe></div>
        <Image src={"/Evento 4.jpg"} alt={""} width={700} height={700} className={`${image14} transition-opacity duration-200 w-96 h-180 object-cover rounded-xl`} />
        <Image src={"/Evento 5.jpg"} alt={""} width={700} height={700} className={`${image15} transition-opacity duration-200 w-96 h-180 object-cover rounded-xl`} />
        <Image src={"/Evento 6.jpg"} alt={""} width={700} height={700} className={`${image16} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Foto 1.jpg"} alt={""} width={700} height={700} className={`${image17} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Foto 2.jpg"} alt={""} width={700} height={700} className={`${image18} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Foto 3.jpg"} alt={""} width={700} height={700} className={`${image19} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
      </div>
    </div>
  )
}