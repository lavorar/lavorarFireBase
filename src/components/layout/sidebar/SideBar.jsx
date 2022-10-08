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
const SideBar = (props) => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Inicio", src: <HomeRoundedIcon fontSize={open ? "large" : "medium"} /> },
        { title: "Explorar", src: <ExploreRoundedIcon fontSize={open ? "large" : "medium"} /> },
        { title: "Mi Perfil", src: <PersonRoundedIcon fontSize={open ? "large" : "medium"} />, gap: true },

    ];

    return (
        <div className="flex bg-gray-200 dark:bg-gray-900">
            <div
                className={` ${open ? "w-72" : "w-24 "
                    } hidden md:block bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white-ghost h-full p-5 z-20 fixed pt-8  duration-300`}
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
                        <li
                            key={index}
                            className={`flex rounded-md p-2 group cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white-ghost text-md items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}
                                } `}
                        >
                            <div className={`cursor-pointer  duration-300  text-gray-900  dark:text-white-ghost`}>
                                <IconWithButton                                    
                                >
                                    {Menu.src}
                                </IconWithButton>
                            </div>

                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>

                        </li>
                    ))}
                </ul>
            </div>
            <div className={` ${open ? 'md:pl-72 ':'md:pl-24'} 
                 duration-300 h-screen flex-1 m-3`}>
                <Header>

                </Header>
                {/* <AppHeader /> */}
                <App> </App>
            </div>
        </div >
    );
};
export default SideBar;
