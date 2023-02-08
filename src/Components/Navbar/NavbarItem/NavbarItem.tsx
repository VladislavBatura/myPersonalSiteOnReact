import React from 'react';
import './NavbarItem.css';

interface NavbarItemProps{
    title:string;
}

export function NavbarItem(props: NavbarItemProps){
    return(
        <li>
            <a>{props == null ? 'I\'m null' : props.title ?? 'Title is null'}</a>
        </li>
    );
}