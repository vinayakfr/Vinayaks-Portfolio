import Footer from '~/components/footer';
import Navbar from '~/components/navbar';

function Resume() {
  return (
    <div>
      <Navbar/>
      <div>
        <h1 className='text-center text-5xl xl:text-8xl font-bold bg-gradient-to-tr from-zinc-950 via-rose-600 to-zinc-950 text-transparent bg-clip-text'>Resume</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Resume;
