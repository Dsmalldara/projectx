import { Link } from "react-router-dom";
import styled from "styled-components";
 export  const NavbarContainer = styled.header`
    display: flex;
    flex-direction: column;
    background-color: black;
    height: ${(props)=>(props.extendNavbar ? "100vh" : "80px")};
    width: 120%;
    margin-top:0;
    margin-left: 0;
    @media (min-width:700px){
        width:80rem;
        margin-top: -19rem;
    }
    `
export const LeftHand = styled.div`
    display: flex;
    flex: 70%;
   padding-left:60px;
   background-color: #ba2727;
`
export const RightHand = styled.div`
    display: flex;
    flex:30%;
    padding-right: 85px;
    background-color: salmon;
    @media (max-width: 700px){
        background-color: #ba2727;
    }
    
`
export const Innercontainer = styled.div`
    height: 80px;
    width:100%;
    display: flex;
`
export const OutsideContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
   @media(min-width: 700px){
    display: none;
   }
`
export const NavbarLinkComp = styled.div`
    display: flex; 
`
export const LinkTags = styled(Link)`
    display: flex;
    margin: 10px;
    color: #e7e5e0;
    font-size: x-large;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
   
   @media (max-width:700px){
    display: none;
   }
`
export const LinkTagsExtended = styled(Link)`
    display: flex;
    margin: 10px;
    color: #e7e5e0;
    font-size: x-large;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    `
export const Logo = styled.img`
   margin :10px ;
   max-width: 180px;
   height: auto;
 
`
export const NavLinks = styled.div`
    height:50px;
    width:100%;
    cursor: pointer;
    border: none;
    color:whitesmoke;
    font-size: 45px;

@media (min-width: 700px){
    display: none;
}
`