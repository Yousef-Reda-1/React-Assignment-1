
import './Home.css'
import homeImage from '../../assets/avataaars.svg'


export default function Home() {
    return (
        <main className='home d-flex justify-content-center align-items-center '>
            <div className="container text-center">
                <div className="image-container">
                    <img className=' w-25' src={homeImage} alt="developer image" />
                </div>
                <h1 className='text-white text-uppercase mt-4'>start Framework</h1>
                <p className='text-white mt-5 text-center pt-2'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            {/* <div className="content">
                </div> */}
        </main>
    )
}
