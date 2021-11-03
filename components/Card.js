import Image from "next/image";
import Styles from '../styles/Card.module.css'

const Card = () => {
    return ( 
        <div className={Styles.container}>
          {['Men', 'Women', 'Kids'].map((path) => {
          return (
              <div key={path}>
                  <Image src={`/${path}.png`} width={500} height={750}/>
              </div>
          )
          })}  
        </div>
     );
}
 
export default Card;