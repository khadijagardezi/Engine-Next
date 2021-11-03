import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return(
       <div className={Styles.logo}>
           <Image src="/assets/engine.png" width={200} height={50}/>
       </div>
    )
}
export default Navbar;