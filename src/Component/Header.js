import React from 'react';
import { Search,Cart } from 'react-bootstrap-icons'
import "./Style/Header.css"
import { Link } from 'react-router-dom';
import  {useStateValue} from './Image/StateProvider.js';
export default function Header() {
  const [{basket} ]=useStateValue()
  
  return (<>
       
    <nav className='header'>
      <Link to="/">
        <img className='header_logo' src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png" alt='logo' />
      </Link>

      {/* search box */}
      <div className='header_search'>
        <input type="text" className='header_searchInput' />
        <Search className='header_searchIcon' />
      </div>
      {/* 1 st link */}
     

        <Link to="/login" className='header_link'>
          <div className='header_option'>
            <span className='header_option_span_one'>hello Quzi</span>
            <span className='header_option_span_two'>sign In</span>
          </div>
        </Link>
      
      {/* 2nd link */}
   
        <Link to="/" className='header_link'>
          <div className='header_option'>
            <span className='header_option_span_one'>Return</span>
            <span className='header_option_span_two'>& order</span>
          </div>
        </Link>
     
      {/* 3rd link */}
 
       <Link to="/" className='header_link'>
          <div className='header_option'>
            <span className='header_option_span_one'>your</span>
            <span className='header_option_span_two'>prime</span>
          </div>
        </Link>
  
      {/* 4th link */}
       <Link to="/checkout" className='header_link'  >
         <div className="header_option_Basket">
          {/*  */}
          <Cart className='header_cart_icon'/>
           <span className='header_basket_line_two'>{basket?.length}</span>
         </div>
       </Link>
    </nav>

  </>

  )
}
