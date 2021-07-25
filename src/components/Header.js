import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Tooltip from '@material-ui/core/Tooltip';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import FeedbackIcon from '@material-ui/icons/Feedback';
import './Header.css';
import { useHistory } from 'react-router-dom';




function Header() {

    const history = useHistory();

    function goToHome() {
        history.push("/");
    }
    function goToDocs() {
        history.push("/documents");
    }
    function goToBenefits() {
        history.push("/benefits");
    }
    function goToFeedback() {
        history.push("/feedback");
    }
    function goToNews() {
        history.push("/news");
    }
    function goToContact() {
        history.push("/contact");
    }

    window.onresize = doALoadOfStuff;

    function doALoadOfStuff() {
        // console.log(window.innerWidth);

        if (window.innerWidth >= 600) {
            document.querySelector('.header__middle').style.display = "flex";
            // window.location.reload();
        } else {
            document.querySelector('.header__middle').style.display = "none";
        }
    }
    

    const handleDark =() => {
        const sun = document.getElementById('light');
        const moon = document.getElementById('dark');
        // let nav = document.getElementById('nav');

        sun.classList.remove("changeSunIn");
        sun.classList.add("changeSunOut");
        document.body.style.backgroundColor = "var(--black)";
        // nav.style.backgroundColor = "var(--first-color)";
        document.documentElement.style.setProperty('--white', '#BAB8B8');
        document.documentElement.style.setProperty('--main-text-color', 'white');
        document.documentElement.style.setProperty('--transperent-bg', '#353535c8');
        document.documentElement.style.setProperty('--fourth-color', '#808080');
        document.documentElement.style.setProperty('--second-color', '#140547');
        setTimeout(() => {
            moon.classList.add("changeMoonIn");
            sun.style.display="none";
            moon.style.display="inline";
        }, 200);

        return false;
    };

    const handleLight = () => {
        const sun = document.getElementById('light');
        const moon = document.getElementById('dark');
        // let nav = document.getElementById('nav');

        moon.classList.remove("changeMoonIn");
        moon.classList.add("changeMoonOut");
        document.body.style.backgroundColor = "var(--main-background)";
        // nav.style.backgroundColor = "var(--second-color)";
        document.documentElement.style.setProperty('--white', 'white');
        document.documentElement.style.setProperty('--main-text-color', 'black');
        document.documentElement.style.setProperty('--transperent-bg', '#ffffffcc');
        document.documentElement.style.setProperty('--fourth-color', '#835bf1');
        document.documentElement.style.setProperty('--second-color', '#541ded');
        setTimeout(() => {
            sun.style.display="inline";
            moon.style.display="none";
            sun.classList.add("changeSunIn");
        }, 200);

        return false;
    };

    const handleListExpand = () => {
        let openList = document.getElementById('listExpand');
        let closeList = document.getElementById('closeList');
        let nav = document.getElementById('nav');
        let icons = document.getElementById('middleIcons');

        // shown the list on small screen.
        nav.classList.add('dropManu');
        nav.classList.remove('dropManuUp');
        nav.style.height = "100vh";
        openList.style.display = "none";
        closeList.style.display = "inline";
        icons.style.display = "flex";
    };
    const handleListClose = () => {
        let openList = document.getElementById('listExpand');
        let closeList = document.getElementById('closeList');
        let nav = document.getElementById('nav');
        let icons = document.getElementById('middleIcons');

        // shown the list on small screen.
        nav.classList.add('dropManuUp');
        nav.classList.remove('dropManu');
        nav.style.height = "8vh";
        openList.style.display = "inline";
        closeList.style.display = "none";
        icons.style.display = "none";
    };

    return (
        <div id="nav" className="header">
            <div className="header__sub">
                <div className="header__subRight">
                    <div className="list">
                        <IconButton id="listExpand" onClick={handleListExpand}>
                            <DehazeIcon className="nav__icons"/>
                        </IconButton>
                        <IconButton id="closeList" onClick={handleListClose}>
                            <CloseIcon className="nav__icons"/>
                        </IconButton>
                    </div>
                    <div className="header__logo">
                        <IconButton onClick={goToHome}>
                            <Avatar alt="Logo" src={window.location.origin + '/images/logo.png'} />
                        </IconButton>
                    </div>
                </div>
                <div id="middleIcons" className="header__middle">
                    <div className="header__nav">
                        <IconButton onClick={goToHome}>
                            <Tooltip title="HOME">
                                <HomeIcon className="nav__icons"/>
                            </Tooltip>
                        </IconButton>
                        <IconButton onClick={goToBenefits}>
                            <Tooltip title="HOW WILL HELP!">
                                <WorkIcon className="nav__icons"/>
                            </Tooltip>
                        </IconButton>
                        <IconButton onClick={goToContact}>
                            <Tooltip title="CONTACT">
                                <ContactMailIcon className="nav__icons"/>
                            </Tooltip>
                        </IconButton>
                    </div>
                    <div className="header__user">
                        <IconButton onClick={goToNews}>
                            <Tooltip title="GET OUR NEWS & OFFERS">
                                <NotificationsActiveIcon className="nav__icons"/>
                            </Tooltip>
                        </IconButton>
                        <IconButton onClick={goToDocs}>
                            <Tooltip title="INVESTMENT SERVICES">
                                <AssignmentIcon className="nav__icons"/>
                            </Tooltip>
                        </IconButton>
                        <IconButton onClick={goToFeedback}>
                            <Tooltip title="FEEDBACK">
                                <FeedbackIcon className="nav__icons"/>
                            </Tooltip>
                        </IconButton>
                    </div>
                </div>
                <div className="header__subLeft">
                    <div className="header__darkMood">
                        <IconButton id="light" onClick={handleDark}> 
                            <Tooltip title="LIGHT MODE">
                                <WbSunnyIcon className="nav__icons"/>
                            </Tooltip>
                        </IconButton>
                        <IconButton id="dark" onClick={handleLight}>
                            <Tooltip title="DARK MODE">
                                <NightsStayIcon className="nav__icons"/>
                            </Tooltip>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
