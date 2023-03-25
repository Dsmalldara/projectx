import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from'./logo1.svg'
import {MdCancel} from 'react-icons/md'
import {BiListUl}  from 'react-icons/bi'

import { NavbarContainer,LeftHand, RightHand, Innercontainer, OutsideContainer, NavbarLinkComp, LinkTags, Logo, NavLinks, LinkTagsExtended } from '../../styles/Navbar.module';
const Navbar = () => {
  const [extendNavbar,setExtendNavbar ] = useState(false)
  return (
  <NavbarContainer extendNavbar={extendNavbar}>
     <Innercontainer>
   <LeftHand>
  <NavbarLinkComp>
  <LinkTags to="/"> Home</LinkTags>
  <LinkTags to="/"> Product</LinkTags>
  <LinkTags to="/"> Services</LinkTags>
  <LinkTags to="/"> Contact us</LinkTags>
  </NavbarLinkComp>
  <NavLinks onClick={()=>{setExtendNavbar((curr)=>!curr)}}>
    {extendNavbar ?<MdCancel/>:<BiListUl/>  }  
  </NavLinks>
   </LeftHand>
   <RightHand>
   <Logo src={logo}></Logo>
   </RightHand>
   </Innercontainer>

{extendNavbar &&(
     <OutsideContainer >
     <LinkTagsExtended to="/"> Home</LinkTagsExtended>
    <LinkTagsExtended to="/Products"> Product</LinkTagsExtended>
    <LinkTagsExtended to="/Services"> Services</LinkTagsExtended>
    <LinkTagsExtended to="/Contact Us"> Contact us</LinkTagsExtended>
     </OutsideContainer>)
}
   </NavbarContainer>
  )
}

export default Navbar;