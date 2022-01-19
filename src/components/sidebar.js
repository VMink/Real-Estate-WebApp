import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import { CgCloseO } from 'react-icons/cg'
import { Button } from './button';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
    position: fixed;
    z-index: 100000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    background-color: #000d1a;
    opacity: 0.9;
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')};

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%), rgba(0,0,0,0.6) 100%;
    }
`;

const IconContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: right;
    padding: 1rem 30px;
    z-index: 1000000001;
`;

const CloseIcon = styled(CgCloseO)`
    color: white;
    font-size: 35px;
    cursor: pointer;
    transition: .3s;

    &:hover{
        color: #cd853f;    
    }
`;

const MenuButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1000000000;
`;

const MenuButtons = styled.div`
    color: white;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuButton = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 10px;
    margin-bottom: 50px;
    border-bottom: 1px solid white;
    width: 160px;
    font-weight: 600;
    font-size: 20px;
    transition: .3s;

    &:hover{
        border-bottom: 1px solid #cd853f;
        color: #cd853f;
        transform: translateY(-2px);
    }
`;

const StyledButton = {
    border: "1px solid white",
    width: "160px",
    fontSize: "18px"
};

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <IconContainer onClick={toggle}>
                <CloseIcon/>
            </IconContainer>
            <MenuButtonsContainer>
                <MenuButtons>
                    {menuData.map((button, index) => (
                        <MenuButton to={button.link} key={index}>
                            {button.title}
                        </MenuButton>
                        
                    ))}
                </MenuButtons>
                <Button 
                        to="/contact"
                        style={StyledButton}>
                            Contact Us
                </Button>
            </MenuButtonsContainer>
        </SidebarContainer>
    )
}

export default Sidebar
