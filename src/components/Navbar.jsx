import dayjs from 'dayjs';
import {navLinks,navIcons} from '../constants/index.js';


const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="Logo"></img>
            <p className="font-bold">Ayush top 1%</p>
       
        <ul>
            {
               navLinks.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                })
            }


        </ul>
         </div>
         <div>
            <ul>
                {
                    navIcons.map((item) => {
                        return <li key={item.id}><img src={item.img} className="icon-hover" alt={item.id}></img></li>
                    })


                }

            </ul>
            <time>
                {dayjs().format('ddd MMM D h:mm A')}
            </time>

         </div>

    </nav>
  
   
  );
}

export default Navbar;