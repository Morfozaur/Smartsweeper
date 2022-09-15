import React from 'react';
import {screenSetter} from "../../redux/actions/allActions";
import {useDispatch} from "react-redux";

const About = () => {
    const dispatch = useDispatch();
    return (
        <div className='about gui'>
            <h2 className={'about__logo about__text'}>Smart<span className={'about__logo about__logo--span about__text'}>Sweeper</span></h2>
            <h3 className={'about__text about__text--title'}>REACT PORTFOLIO PROJECT</h3>
            <p className={'about__text about__text--paragraph'}>SmartSweeper is a classic minesweeper with a twist. Players can choose one of four types of gameplay and one of four types of mine detection.</p>
            <p className={'about__text about__text--paragraph'}>The entire interface is designed only with React components and CSS styling, without any static graphic files.</p>
            <h3 className={'about__text about__text--title'}>Technologies & Packages</h3>
            <ul className={'about__list'}>
                <li className={'about__text about__text--list'}>React</li>
                <li className={'about__text about__text--list'}>React-Redux</li>
                <li className={'about__text about__text--list'}>Redux-Thunk</li>
                <li className={'about__text about__text--list'}>Tone.js</li>
                <li className={'about__text about__text--list'}>classNames</li>
                <li className={'about__text about__text--list'}>Sass</li>
                <li className={'about__text about__text--list'}>BEM</li>
            </ul>
            <div className="button__screen" onClick={()=>dispatch(screenSetter('start'))}>Back</div>
        </div>
    );
}

export default About;