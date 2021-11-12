import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './SideBar.css'
import { SideBarData } from './SideBarData'
import { SubMenu } from './SubMenu'

const Nav = styled.div`
    background-color: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
`
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SideBarNav = styled.nav`
    background-color: #15171c;
    padding-left: 12px;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index:10;
`
const SideBarWrap = styled.nav`
    width: 100%;

`


export const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar); 

    return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
                <NavIcon>
                    <FaIcons.FaPowerOff className='logout'/>
                </NavIcon>
            </Nav>
            <SideBarNav sidebar={sidebar}>
                <SideBarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {SideBarData.map((item, index) =>{ 
                        return<SubMenu item={item} key={index} />
                    })}
                </SideBarWrap>
            </SideBarNav>
        </>
    )
}
