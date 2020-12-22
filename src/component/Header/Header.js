import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import './Header.css'



class LinkList extends React.Component {
    render() {
        return (
          <ul className='navUl'>
            <li className='navLi'>
              <NavLink to="/Popular" className="btn-default" activeClassName="btn-active">Popular</NavLink>
            </li>
            <li className='navLi'>
              <NavLink to="/Battle" className="btn-default" activeClassName="btn-active">Battle</NavLink>
            </li>
          </ul>
        );
    }
}


// 头部
class Header extends React.Component{
    render(){
        const {pagesClick,nowpages}=this.props;
        
        return(
          <nav className='nav'>
            <LinkList pagesClick={pagesClick} nowpages={nowpages} /> 
          </nav>
        )
    }
}
export default Header;