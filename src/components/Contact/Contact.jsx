import './contact.css'

export default function Contact() {
    return (
        <main className="contact overflow-auto">
            <h1>contact section</h1>
            <div className="container px-5">
                <form action="" className='mx-auto'>
                    <input type="text" placeholder='userName' name='userName' />
                    <input type="number" placeholder='userAge' name='age' />
                    <input type="email" placeholder='userEmail' name='email' />
                    <input type="password" placeholder='userPassword' name='password' />
                    <button type="submit">send message</button>
                </form>
            </div>
        </main>
    )
}
