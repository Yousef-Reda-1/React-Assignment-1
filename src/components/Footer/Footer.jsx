import './Footer.css'



export default function Footer() {
    return (
        <footer>
            <div className="data py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3  text-white g-4">
                        <div className="col">
                            <div className="inner mb-sm-5 mb-lg-0 text-center">
                                <h3 className='mb-3'>LOCATION</h3>
                                <address className='mb-0'>
                                    2215 John Daniel Drive <br />
                                    Clark, MO 65243
                                </address>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner mb-sm-5 mb-lg-0 text-center">
                                <h3 className='mb-3'>AROUND THE WEB</h3>
                                <ul className="links d-flex justify-content-between flex-wrap">
                                    <li><link rel="stylesheet" href="" /><i className="fa-brands fa-facebook mx-1 icon"></i></li>
                                    <li><link rel="stylesheet" href="" /><i className="fa-brands fa-twitter mx-1 icon"></i></li>
                                    <li><link rel="stylesheet" href="" /><i className="fa-brands fa-linkedin-in mx-1 icon"></i></li>
                                    <li><link rel="stylesheet" href="" /><i className="fa-solid fa-globe mx-1 icon"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner mb-sm-5 mb-lg-0 text-center">
                                <h3 className='mb-3'>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright text-center text-white py-4">
                Copyright &#169;Your Website 2021
            </div>
        </footer>
    )
}
