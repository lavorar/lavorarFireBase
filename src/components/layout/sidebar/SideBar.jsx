import { useState } from "react";
import App from "../../../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import AppHeader from "../header/AppHeader"
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import IconWithButton from "../elements/IconWithButton"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import {useAuth} from '../../../context/authContext';
import {useNavigate} from 'react-router-dom';


const SideBar = (props) => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate('/')
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Inicio", src: <HomeRoundedIcon fontSize={'medium'} />, always: true, href: '/'},
        { title: "Explorar", src: <ExploreRoundedIcon fontSize={'medium'} />, always: true },
        { title: "Mi Perfil", src: <PersonRoundedIcon fontSize={'medium'} />, always: user ? true : false, gap: true },
        { title: "Guardado", src: <BookmarkOutlinedIcon fontSize={'medium'} />, always: user ? true : false },
        { title: "Mis Trabajos", src: <WorkRoundedIcon fontSize={'medium'} />, always: user ? true : false },
        { title: "Horario y Agenda", src: <EventAvailableRoundedIcon fontSize={'medium'} />, always: user ? true : false },
        { title: "Ayuda", src: <HelpRoundedIcon fontSize={'medium'} />, always: true },
        { title: "Ganancias", src: <AddchartRoundedIcon fontSize={'medium'} />, always: user ? true : false , gap: true },
        { title: "Estadisticas", src: <TrendingUpRoundedIcon fontSize={'medium'} />, always: user ? true : false },

    ];

    return (
        <div className="flex md:flex-col bg-gray-100 dark:bg-gray-900">
            <div
                className={` ${open ? "w-64" : "w-24 "
                    } hidden md:block bg-transparent border-0 border-r border-gray-500 dark:border-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white-ghost h-full p-5 z-20 fixed pt-8  duration-300`}
            >
                <div
                    className={`absolute cursor-pointer group -right-4 top-[4em] 
                            rounded-full  ${!open && "rotate-180"}`}>
                    <IconWithButton
                        onClick={() => setOpen(!open)}
                        label="close"
                        hoverBackgroundColor={'#e5e7eb'}
                        backgroundColor={'#d1d5db'}
                        color={(theme) => theme.palette.grey[900]}
                        icon={<ArrowBackIosNewRoundedIcon />}
                    >
                        <ArrowBackIosNewRoundedIcon />
                    </IconWithButton>
                </div>
                <div className="flex gap-x-4 ml-1 items-center ">
                    <img
                        src="./src/assets/Lavorar-logo-negativo.svg"
                        className={`cursor-pointer duration-500 ${open ? "w-16" : "w-11 "
                            } ${open && "rotate-[360deg] "
                            }`}
                    />

                    <h1
                        className={`text-orange-brand origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Lavorar
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        Menu.always ?
                        <li
                            key={index}
                            className={`flex rounded-md p-2 group cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white-ghost text-md items-center gap-x-2
                        ${Menu.gap ? "mt-9" : "mt-2"}
                                } `}
                        >
                            <div 
                            onClick={() => {Menu.href ? navigate(Menu.href) : ''}}
                            className={`cursor-pointer  duration-300  text-gray-900  dark:text-white-ghost`}>
                                <IconWithButton                                    
                                >
                                    {Menu.src}
                                </IconWithButton>
                            </div>

                            <span className={`${open? 'block' : "hidden" } whitespace-nowrap origin-left duration-700`}>
                                {Menu.title}
                            </span>

                        </li>
                        :
                        <div  key={index}>
                        </div>
                    ))}
                </ul>
            </div>
            <div className={` ${open ? 'md:pl-52 ':'md:pl-24'} 
                  duration-700 min-w-full h-screen  md:flex-1 `}>
                <Header>

                </Header>
                <App> </App>
                {/* <AppHeader /> */}
            </div>
        </div >
    );
};
export default SideBar;
