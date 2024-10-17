import React from 'react'
import black from './assets/blackfridayimage.jpg'
import './head.css'
import black2 from './assets/blackfri.avif'
import { useState } from 'react'

export default function Head() {

    const [bar1, setBar1] = useState(false)
    const [bar2, setBar2] = useState(false)
    const [bar3, setBar3] = useState(false)

    function bar1change() {
        setBar1(true)
        setBar2(false)
        setBar3(false)
    }

    function bar2change() {
        setBar1(false)
        setBar2(true)
        setBar3(false)
    }

    function bar3change() {
        setBar1(false)
        setBar2(false)
        setBar3(true)
    }


    return (
        <>
            <div className='ml-2'>

                <div className='p-6 ml-3 lg:ml-[18vw] '>
                    <h1 className="text-5xl font-bold text-blue-600">
                        Blog<span className='text-orange-500'>.</span>
                    </h1>

                    <img src={black2} alt="" className='lg:w-[55vw] lg:h-[35vw] md:w-[75vw] md:h-[50vw] ml-16 clip-custom' />
                </div>
                <div className='bg-blue-500 md-lg:pt-20 lg:w-1/2 lg:h-1/3 lg:pb-10 relative lg:left-56 lg:bottom-20 lg:pt-16 lg:pl-6 lg:pr-4 w-9/12 md:pt-28 md:pr-10 smm:pt-12 h-[30vw] bottom-24 left-0 pt-16 pl-11 pr-5   clip-custom2'>
                    <h1 className='text-xl font-bold text-gray-100 smm:text-lg'>Preparing for Peak Season: Black Friday, Cyber Monday, Christmas and Beyond </h1>
                    <p className='text-sm text-gray-100 mt-3 smm:text-xs sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore laborum autem. Praesentium suscipit vitae maiores, accusamus molestias et, quibusdam laudantium, id temporibus natus quia voluptatibus ?</p>
                </div>

                <div className='bg-blue-300 w-80 h-16 relative left-60 clip-custom p-5 smm:left-[28vw]  lg:left-[37vw]'>

                    {bar1 ?
                        <>
                            <a className='text-blue-900 font-semibold underline decoration-orange-600 decoration-4 m-2 cursor-pointer'>All</a>
                        </>
                        : <a className='text-blue-900 m-2 cursor-pointer' onClick={bar1change}>All</a>}

                    {bar2 ?
                        <>
                            <a className='text-blue-900 font-semibold underline decoration-orange-600 decoration-4 m-3 cursor-pointer' onClick={bar2change}>Articles</a>
                        </> : <a className='text-blue-900 m-3 cursor-pointer' onClick={bar2change}>Articles</a>}

                    {bar3 ?
                        <>
                            <a className='text-blue-900 m-1 font-semibold underline decoration-orange-600 decoration-4 cursor-pointer' onClick={bar3change}>Product Updates</a>
                        </> : <a className='text-blue-900 m-1 cursor-pointer' onClick={bar3change}>Product Updates</a>}
                </div>
            </div>
        </>
    )
}
