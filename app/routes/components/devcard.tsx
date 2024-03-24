import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

function Devcard() {
  return (
    <div>
      <Tilt className='py-14'>
            <div className='w-[730px] h-[350px] rounded bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 font-serif shadow-3xl'>
              <p className="text-end py-3 px-4 select-none">Developer</p>
              <div className="text-center py-24 select-none">
                <h1 className='text-3xl'>Vinayak Srivastava</h1> 
                <p className="italic opacity-50">With Great Powers comes Great Responsibilty</p>
              </div>
              <div className="grid grid-flow-col grid-rows-1 px-2">
                <p className='text-xl'>Email: vinayak.sri@yahoo.com</p>
                  <ul className="flex flex-row place-content-end gap-2 px-3 py-3">
                    <li><a href='https://www.instagram.com/idkvinayak/'><FaInstagram size={20}/></a></li>
                    <li><a href='https://www.linkedin.com/in/vinayaksrivsatava/'><FaLinkedinIn size={20}/></a></li>
                    <li><a href='https://github.com/vinayakfr'><FaGithub size={20}/></a></li>
                  </ul>
              </div>
            </div>
          </Tilt>
    </div>
  )
}


export default Devcard