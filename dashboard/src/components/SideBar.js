import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './SideBar.css'
import { SideBarData, SideBarDataProfessor, SideBarDataAluno } from './SideBarData'
import { SubMenu } from './SubMenu'

import StoreContext from './store/Context';

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
    color: #624CD3;
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


export const SideBar = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const { session, setSession } = useContext(StoreContext);
    
    const showSidebar = () => setSidebar(!sidebar); 


    const sideItensFunc = () => {
        switch(props.tipo){
            case 'instituicao':
                return SideBarData;
                break;
            case 'professor':
                return SideBarDataProfessor;
                break;
            case 'aluno':
                return SideBarDataAluno;
                break;
        }
    }

    const sideItens = sideItensFunc();


    return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
                <div className='div-saudacao'>
                    <p className='p-saudacao'>Olá, {session.usuario}!</p>
                </div>
                <NavIcon >
                    <FaIcons.FaPowerOff onClick={() => setSession(null)} className='logout'/>
                </NavIcon>
            </Nav>
            <SideBarNav sidebar={sidebar}>
                <SideBarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {sideItens.map((item, index) =>{ 
                        return<SubMenu item={item} key={index} />
                    })}
                </SideBarWrap>
            </SideBarNav>
        </>
    )
}
