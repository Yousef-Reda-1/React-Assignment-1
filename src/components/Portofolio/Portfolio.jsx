import './Portfolio.css'
import houseImage from '../../assets/poert1.png'
import cakeImage from '../../assets/port2.png'
import tenantImage from '../../assets/port3.png'
import { useState } from 'react'


export default function Portfolio() {

    const [currentImageSource, setCurrentImageSource] = useState(null)
    const [displayMode, setDisplayMode] = useState('none')

    function showImage(event) {
        if (event.target.firstChild.tagName === 'IMG') {
            setCurrentImageSource(event.target.firstChild.src)
            setDisplayMode('flex')
        }
    }

    function changeDisplayMode(){
        setDisplayMode('none')
    }

    function stopPropagation(event) {
        event.stopPropagation();
    }

    return (
        <main className='Portfolio overflow-auto' >
            <div className="overlay justify-content-center align-items-center" style={{ display: `${displayMode}` }} onClick={changeDisplayMode}>
                <div className="image-holder">
                    <img src={currentImageSource} className='w-100' onClick={stopPropagation} />
                </div>
            </div>
            <h1>portfolio component</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5" onClick={showImage}>
                    <div className="col">
                        <div className="inner rounded-3 overflow-hidden">
                            <img src={houseImage} alt="house image" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner rounded-3 overflow-hidden">
                            <img src={cakeImage} alt="house image" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner rounded-3 overflow-hidden">
                            <img src={tenantImage} alt="house image" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner rounded-3 overflow-hidden">
                            <img src={houseImage} alt="house image" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner rounded-3 overflow-hidden">
                            <img src={cakeImage} alt="house image" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner rounded-3 overflow-hidden">
                            <img src={tenantImage} alt="house image" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
