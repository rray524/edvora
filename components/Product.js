// import Image from 'next/image';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css'

const Product = (props) => {
    // console.log(props.product);
    const { product_name, brand_name, price, address, discription, date, time, image } = props.product;
    return (
        <div className={styles.sliderSingleProduct}>
            <div className={styles.sliderContainer}>
                <div className="product-left">
                    {image && <Image src={image} alt="product-img" height="90" width="90" className='product-img' />}
                    <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>{address.city}, <br />{address.state}</p>

                </div>
                <div className="product-right">
                    <h4 style={{ color: 'white' }}>{product_name}</h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>{brand_name}</p>
                    <h5 style={{ color: 'white' }}>$ {price}</h5>
                    <h6 style={{ color: "rgba(255, 255, 255, 0.6)" }}>Date: {new Date(date).toLocaleDateString()}</h6>

                </div>
            </div >
            <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>{discription}</p>
        </div>

    );
};

export default Product;