import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './button';
import { FaBars } from 'react-icons/fa';  

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: fixed;
    width: 100%;
    z-index: 100;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-weight: bolder;
`;

const MenuBars = styled(FaBars)`
    display:  none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        cursor: pointer;
        color: white;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;


const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to="/">TU LOGO</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((tag, index) => (
                    <NavMenuLinks to={tag.link} key={index}>
                        {tag.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar