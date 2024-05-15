import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/image/logo-removebg-preview.png";
import Navbar from "./Navbar";


export default function Header() {
    return (
        <MainHeader>
            <NavLink to="/" className="logo">
                <img src={logo} alt="logo" />
            </NavLink>
            <Navbar />
        </MainHeader>
    );
}

const MainHeader = styled.section`
    display: flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    background-color:${({ theme }) => theme.colors.bg};
    height:12rem;
    padding: 0 4.8rem;
`;
 
