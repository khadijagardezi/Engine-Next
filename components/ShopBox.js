import Styles from '../styles/Shop.module.css'
const ShopBox = () => {
    return (
        <div>
            <div className={Styles.container}>
                <div className={Styles.flex}>
                    <h4 className={Styles.main}>Men</h4>
                    <button className={Styles.btn}>Shop now</button>
                </div>
            </div>
        </div>
    );
}

export default ShopBox;