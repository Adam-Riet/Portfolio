import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
    const [text, setText] = useState("");
    const fullText = `
const you = { name: 'Future Employer', needWebDeveloper: true };
const candidate = {
    name: 'Adam',
    skills: ['React', 'JavaScript', 'CSS', 'HTML'],
    yearsExperience: <1,
    passion: 'Developing creative, efficient solutions',
};

function shouldHireMe(you, me) {
    if (you.needWebDeveloper && me.skills.includes('React')) {
        console.log(\`Hello \${you.name}, my name is \${me.name}. I think we could work well together!\`);
        return true;
    }
    return false;
}

console.log(shouldHireMe(you, candidate));
`;

    useEffect(() => {
        let timer = setInterval(() => {
            setText((prevText) => {
                return fullText.substring(0, prevText.length + 1);
            });
        }, 30); 

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <pre className="console-line">{text}<span className="console-cursor"></span></pre>
        </div>
    );
};

export default TypingEffect;