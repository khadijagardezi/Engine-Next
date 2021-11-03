import ShopBox from "./ShopBox";
import Styles from '../styles/Shop.module.css'
const ShopNow = () => {
    return ( 
       <div className={Styles.container}>
           <ShopBox />
           <ShopBox />
           <ShopBox />
       </div>
     );
}
 
export default ShopNow;