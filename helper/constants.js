"use client"

import { RiRobotFill } from "react-icons/ri";
import LogoWhite from '@/public/icons/logo-white.svg';
import LogoWhiteFull from '@/public/icons/full-logo-white.svg';
import LogoFull from '@/public/icons/full-logo.svg';
import axios from "axios";

export const THEME = {
    PRIMARY: '#0066FF',
    SECONDARY: '#5D9DFE'
}

export const menuItems = [

    {
        id: 1,
        name: 'AI Assistant',
        Icon: RiRobotFill,
        link: '/informabot'
    }

]

export const ICONS = {
    LogoWhite, LogoWhiteFull, LogoFull
}

export const API = axios.create({
    baseURL: process.env.INSTANCE_API,
});

export const CLOUD_PATH = process.env.CDN_LINK;

export const snakeCaseToTitleCase = (text) => {

    return text
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        
}

export const getRandomColor = () => {
    // Generate a random number between 0 and 16777215 (decimal) and convert it to a hex string
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Ensure the hex string is 6 characters long by padding with zeros if necessary
    return `#${randomColor.padStart(6, '0')}`;
}

export const getColors = (length) => {

    const colors = ['red', 'green', 'blue', 'pink', 'purple', 'teal', 'yellow', 'lime', 'amber', 'cyan', 'violet', 'fuchsia', 'rose', 'orange'];

    if(length <= 14) {

        return colors.slice(0, length);
        
    } else {

        const newColors = [ ...colors, ...colors, ...colors ];

        return newColors.slice(0, length);

    }

}