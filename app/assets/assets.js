import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import front_end_programming from './front-end-programming.png';
import web_development from './web-development.png';
import ux from './ux.png';
import database from './database.png';
import work_1 from './public/work-1.png';
import work_2 from './public/work-2.png';
import work_3 from './public/work-3.png';
import work_4 from './public/work-4.png';
import download_icon_black from './download-icon-black.png';
import react from './react.svg';
import nodejs from './nodejs.png';
import express from './express.png';
import mysql from './mysql.png';
import javascript from './javascript.png';
import html from './html.png';
import css from './css.png';
import php from './php.png';
import nextjs from './nextjs.png';

// Note: Add these logo files to your assets folder for the tech stack
// You can download free logos from:
// - https://www.vectorlogo.zone/
// - https://simpleicons.org/
// - https://devicon.dev/
// Required files: nodejs.png, express.png, mysql.png, javascript.png, html.png, css.png, php.png, nextjs.png

export const assets = {
    download_icon_black,
    front_end_programming,
    web_development,
    ux,
    database,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    work_1,
    work_2,
    work_3,
    work_4,
    react,
    nodejs,
    express,
    mysql,
    javascript,
    html,
    css,
    php,
    nextjs,
};

export const workData = [
    {
        title: 'HireMeNow',
        description: 'Individual Project',
        bgImage: assets.work_1,
        link: 'https://github.com/Ashan37/HireMeNow.git'
    },
    {
        title: 'NovaScript',
        description: 'Group Project',
        bgImage: assets.work_2,
    },
    {
        title: 'BiverseHotel',
        description: 'Individual Project',
        bgImage: assets.work_3,
    },
    {
        title: 'BizOra',
        description: 'Individual Project(Ongoing)',
        bgImage: assets.work_4,
    },
]

export const serviceData = [
    { icon: assets.front_end_programming, title: 'Frontend development', description: 'Frontend development focuses on building responsive and interactive user interfaces that provide a seamless user experience across devices.', link: '' },
    { icon: assets.web_development, title: 'Backend Development', description: 'Backend development involves creating robust server-side logic, APIs, and application workflows to ensure smooth functionality and data processing.', link: '' },
    { icon: assets.ux, title: 'UI/UX design', description: 'Focuses on creating intuitive interfaces and seamless user experiences that enhance usability and engagement.', link: '' },
    { icon: assets.database, title: 'Database management', description: 'Database management ensures efficient storage, retrieval, and security of data, supporting scalable and reliable applications.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript,Java, PHP, React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BSc. Hons. in Computing & Information Systems ' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.react,       // React.js
    assets.nodejs,      // Node.js
    assets.express,     // Express
    assets.mongodb,     // MongoDB
    assets.mysql,       // MySQL
    assets.javascript,  // JavaScript
    assets.html,        // HTML
    assets.css,         // CSS
    assets.php,         // PHP
    assets.nextjs,      // Next.js
];