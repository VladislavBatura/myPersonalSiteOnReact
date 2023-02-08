import React from 'react';
import { NavbarItem } from './NavbarItem/NavbarItem';
import './Navbar.css';

export default class Navbar extends React.Component{
    render(){
        return <ul>
            <NavbarItem title='Home'/>
            <NavbarItem title='About'/>
        </ul>
    };
}