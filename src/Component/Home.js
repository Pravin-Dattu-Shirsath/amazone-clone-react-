import React from 'react'
import Product from './Product'
import "./Style/Home.css"

export default function Home() {

  
  return (
    <div className='home'>
    <img src='https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg' className='home_image'/>
   
  
   <div className='home_row'>
   <Product
     id="1"
     title="red shoes "
     price={999} 
     rating={5}
     image="https://rukminim2.flixcart.com/image/332/398/kqb8pzk0/shoe/x/d/p/9-cb-2-1258-red-1259-bk-saimon-black-red-original-imag4chgf4wyjcrb.jpeg?q=50"
    />
     <Product
     id="2"
     title="Redmi 9A Sport (Carbon Black, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery"
     price={6979} 
     rating={5}
     image="https://m.media-amazon.com/images/I/81T4O-rEI+L._SX679_.jpg"
    />
   </div>
   <div className='home_row'>
   <Product
     id="3"
     title="Zhiyun Smooth Q3, 3-Axis Handheld Smartphone Gimbal Stabilizer (with 2 Years ZHIYUN India Official Warranty) for iPhone, Android Smartphone YouTube Vlog Live Video Record"
     price={7499} 
     rating={5}
     image="https://m.media-amazon.com/images/I/61EkTNymrBS._SX522_.jpg"
    />
     
   </div>
   <div className='home_row'>
   <Product
     id="4"
     title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO "
     price={14999} 
     rating={5}
     image="https://m.media-amazon.com/images/I/71Z+l05eSIS._SX522_.jpg"
    />
     <Product
     id="5"
     title="Mi 108 cm (43 inches) Horizon Edition Full HD Android LED TV 4A "
     price={25000} 
     rating={5}
     image="https://m.media-amazon.com/images/I/71Cf27AHBEL._SX522_.jpg"
    />
    <Product
     id="1"
     title="HP Victus Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M"
     price={999} 
     rating={5}
     image="https://m.media-amazon.com/images/I/71h7F81EBoS._SX679_.jpg"
    />

   </div>
  
    </div>
  )
}
