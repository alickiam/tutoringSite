import React from 'react';
import './skills.css';
import SkillsImg from '../../assets/skills.png';
import ToolsImg from '../../assets/tools.png';
import StepsImg from '../../assets/steps.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Teaching Philosophy</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={SkillsImg} alt = "SkillsImg" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <p>Empower students to become confident, independent learners</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ToolsImg} alt = "ToolsImg" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <p>Focus on “working smart” with efficient study strategies and the right methodologies</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={StepsImg} alt = "StepsImg" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <p>Break down complex problems into simple, easy-to-understand steps</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills