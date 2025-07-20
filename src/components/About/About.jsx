import React from 'react'
import './About.css'


export default function About() {
    return (
        <main className='about d-flex justify-content-center align-items-center'>
            <div className="container text-center">
                <h1>about component</h1>
                <div className="text-content row row-cols-1 row-cols-md-2 g-4 text-white mt-5 pt-3 text-start">
                    <div className="col">
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the
                            complete source files including HTML, CSS, and JavaScript as well as optional SASS
                            stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col">
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the
                            complete source files including HTML, CSS, and JavaScript as well as optional SASS
                            stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
