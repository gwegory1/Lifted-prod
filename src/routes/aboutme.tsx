import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div className="about-me-container">
            <div className="about-header">
                <h1>About Me</h1>
                <div className="divider"></div>
            </div>
            
            <div className="about-content">
                <div className="profile-image-container">
                    <img src="/profile-image.jpg" alt="Profile" className="profile-image" />
                </div>
                
                <div className="bio-section">
                    <h2>Hi, I'm John Doe</h2>
                    <p>
                        I'm a passionate web developer with over 5 years of experience creating 
                        modern, responsive websites and applications. My journey in web development 
                        started when I built my first HTML page back in college.
                    </p>
                    
                    <p>
                        I specialize in React, TypeScript, and Node.js, and I'm always eager to 
                        learn new technologies. When I'm not coding, you can find me hiking, 
                        reading sci-fi novels, or experimenting with new recipes.
                    </p>
                    
                    <div className="skills-section">
                        <h3>Skills</h3>
                        <ul className="skills-list">
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="contact-section">
                <h3>Get In Touch</h3>
                <div className="contact-links">
                    <a href="mailto:john@example.com">Email</a>
                    <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;