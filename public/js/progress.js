document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 30; i++) {
        let percentText = document.getElementById(`percent-${i}`);
        let progress = document.getElementById(`bar-${i}`);
        let percent = Math.floor(Math.random() * 100) + 1;
        
        percentText.innerText = `${percent}%`;
        updateProgressBar(i, percent, progress);
    }

    const codeButtons = document.querySelectorAll('.code-btn');
    codeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            showCode(parseInt(type));
        });
    });

    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const codeElement = document.getElementById(targetId);
            
            navigator.clipboard.writeText(codeElement.innerText)
                .then(() => {
                    this.textContent = '¡Copiado!';
                    this.classList.add('copied');
                    setTimeout(() => {
                        this.textContent = 'Copiar';
                        this.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => console.error('Error al copiar: ', err));
        });
    });
});

function updateProgressBar(type, percent, progressElement) {
    switch(type) {
        case 1: progressElement.style.transform = `rotate(${percent * 3.6}deg)`; break;
        case 2: progressElement.style.clipPath = `circle(${percent}% at 50% 50%)`; break;
        case 3: progressElement.style.borderBottomWidth = `${percent}px`; break;
        case 4: progressElement.style.width = `${percent}px`; break;
        case 5: progressElement.style.transform = `scale(${percent/100})`; break;
        case 6: progressElement.style.transform = `scale(${percent/100 + 0.5})`; break;
        case 7: progressElement.style.opacity = percent/100; break;
        case 8: progressElement.style.borderWidth = `${(percent/20) + 2}px`; break;
        case 9: progressElement.style.transform = `scale(${percent/100 + 0.5})`; break;
        case 10: progressElement.style.height = `${percent}px`; break;
        case 11: progressElement.style.transform = `scale(${percent/100})`; break;
        case 12: 
            progressElement.style.width = `${percent}px`;
            progressElement.style.boxShadow = `0 0 ${percent/10}px #00ffff, 0 0 ${percent/5}px #00ffff`;
            break;
        case 13: progressElement.style.width = `${percent}px`; break;
        case 14: progressElement.style.opacity = percent/100; break;
        case 15: progressElement.style.borderWidth = `${(percent/25) + 2}px`; break;
        case 16: progressElement.style.height = `${percent}px`; break;
        case 17: progressElement.style.width = `${percent}px`; break;
        case 18: progressElement.style.opacity = 0.5 + (percent/200); break;
        case 19: progressElement.style.gap = `${percent/10}px`; break;
        case 20: progressElement.style.boxShadow = `${percent/5}px 0 0 10px #fc466b`; break;
        case 21: break; // Handled by CSS
        case 22: progressElement.style.filter = `blur(${(percent/12) + 1}px)`; break;
        case 23: progressElement.style.width = `${percent}px`; break;
        case 24: progressElement.style.borderWidth = `${(percent/25) + 2}px`; break;
        case 25: progressElement.style.transform = `scale(${percent/100 + 0.5})`; break;
        case 26: progressElement.style.borderWidth = `${(percent/33) + 1}px`; break;
        case 27: 
            progressElement.style.width = `${percent}px`;
            progressElement.style.filter = `blur(${(percent/25) + 1}px)`;
            break;
        case 28: progressElement.style.transform = `scale(${percent/100})`; break;
        case 29: break; // Handled by CSS
        case 30: 
            let speed = 3 - (percent/50);
            progressElement.style.animationDuration = `${speed}s`;
            break;
    }
}

function showCode(type) {
    document.getElementById('component-number').innerText = type;
    const htmlContent = document.getElementById('html-content');
    const cssContent = document.getElementById('css-content');
    const jsContent = document.getElementById('js-content');

    htmlContent.innerText = `<div class="progress-container type-${type}">
    <div class="progress-content">
        <div class="progress" id="bar-${type}"></div>
        <span class="percentage" id="percent-${type}">0%</span>
    </div>
</div>`;

    const cssStyles = {
        1: `.type-1 .progress {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid transparent;
    border-top-color: #ff6b6b;
    animation: spin 2s linear infinite;
}`,
        2: `.type-2 .progress {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid #1e90ff;
    clip-path: circle(50%);
}`,
        3: `.type-3 .progress {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #ff9800;
}`,
        4: `.type-4 .progress {
    width: 100px;
    height: 20px;
    background: linear-gradient(90deg, #ff416c, #ff4b2b);
    animation: wave 1.5s infinite alternate;
}`,
        5: `.type-5 .progress {
    width: 60px;
    height: 60px;
    background-color: #ffeb3b;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}`,
        6: `.type-6 .progress {
    width: 30px;
    height: 30px;
    background: #00c896;
    border-radius: 50%;
    animation: bubble 2s infinite alternate;
}`,
        7: `.type-7 .progress {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 10%, transparent 40%);
    animation: pulse 2s infinite;
}`,
        8: `.type-8 .progress {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px dashed #00ffcc;
    animation: spin 3s linear infinite;
}`,
        9: `.type-9 .progress {
    width: 50px;
    height: 50px;
    background: radial-gradient(circle, #ff9800, #ff3d00);
    animation: pulse 1.5s infinite alternate;
}`,
        10: `.type-10 .progress {
    width: 5px;
    height: 50px;
    background: linear-gradient(#ff0000, #ff6b6b);
    animation: spin 1s linear infinite;
}`,
        11: `.type-11 .progress {
    width: 60px;
    height: 60px;
    background: gold;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}`,
        12: `.type-12 .progress {
    width: 80px;
    height: 10px;
    background: #00ffff;
    border-radius: 5px;
    box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
    animation: neonPulse 1.5s infinite alternate;
}`,
        13: `.type-13 .progress {
    width: 90px;
    height: 15px;
    background: linear-gradient(90deg, #83a4d4, #b6fbff, #83a4d4);
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
    border-radius: 7px;
}`,
        14: `.type-14 .progress {
    width: 60px;
    height: 60px;
    background: rgba(63, 94, 251, 0.7);
    transform-style: preserve-3d;
    animation: rotate3d 4s infinite linear;
    position: relative;
}`,
        15: `.type-15 .progress {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #ff00cc;
    border-bottom-color: #3333ff;
    animation: dualSpin 2s linear infinite;
}
.type-15 .progress::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-left-color: #33ccff;
    border-right-color: #ff3366;
    animation: dualSpin 3s linear infinite reverse;
}`,
        16: `.type-16 .progress {
    width: 80px;
    height: 80px;
    background: #4095c6;
    border-radius: 0 0 50% 50%;
    animation: liquid 2s infinite alternate;
    transform-origin: center bottom;
}`,
        17: `.type-17 .progress {
    width: 100px;
    height: 20px;
    background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
    border-radius: 10px;
}`,
        18: `.type-18 .progress {
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    animation: float 3s infinite alternate;
}`,
        19: `.type-19 .progress {
    width: 80px;
    height: 20px;
    display: flex;
    gap: 5px;
    justify-content: center;
}
.type-19 .progress::before {
    content: '';
    width: 15px;
    height: 15px;
    background: #39ff14;
    animation: pixelMove 1.5s infinite alternate;
}
.type-19 .progress::after {
    content: '';
    width: 15px;
    height: 15px;
    background: #39ff14;
    animation: pixelMove 1.5s infinite alternate-reverse;
}`,
        20: `.type-20 .progress {
    width: 80px;
    height: 80px;
    background: #121212;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #fc466b;
    animation: eclipse 3s infinite alternate;
}`,
        21: `.type-21 .progress {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    height: 60px;
}
.type-21 .progress::before, 
.type-21 .progress::after {
    content: '';
    width: 6px;
    height: 40px;
    background: #ff00ff;
    animation: soundWave 0.8s infinite alternate;
}
.type-21 .progress::after {
    animation-delay: 0.4s;
}`,
        22: `.type-22 .progress {
    width: 90px;
    height: 90px;
    background: radial-gradient(circle, #5f2c82, #49a09d);
    border-radius: 50%;
    filter: blur(8px);
    animation: nebula 5s infinite alternate;
}`,
        23: `.type-23 .progress {
    height: 2px;
    background: #5e72eb;
    position: relative;
    animation: circuit 2s infinite linear;
    box-shadow: 0 0 10px #5e72eb, 0 0 20px #5e72eb;
    max-width: 90px;
}
.type-23 .progress::before,
.type-23 .progress::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #5e72eb;
    border-radius: 50%;
    top: -4px;
    box-shadow: 0 0 10px #5e72eb, 0 0 20px #5e72eb;
}
.type-23 .progress::before { left: 0; animation: circuitDot 2s infinite; }
.type-23 .progress::after { right: 0; animation: circuitDot 2s infinite 1s; }`,
        24: `.type-24 .progress {
    width: 80px;
    height: 80px;
    border: 4px solid transparent;
    border-top-color: #8a2be2;
    border-radius: 50%;
    animation: spiral 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}`,
        25: `.type-25 .progress {
    width: 50px;
    height: 50px;
    background: #ff2e63;
    border-radius: 50%;
    animation: heartbeat 1.5s infinite;
}`,
        26: `.type-26 .progress {
    width: 80px;
    height: 80px;
    border: 2px dashed #0ff;
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    animation: rotate3d 3s infinite linear;
}`,
        27: `.type-27 .progress {
    width: 100px;
    height: 60px;
    background: linear-gradient(90deg, #71B280, #134E5E);
    filter: blur(4px);
    animation: aurora 3s infinite alternate;
    border-radius: 30px;
}`,
        28: `.type-28 .progress {
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, #7303c0, #ec38bc, #fdeff9);
    border-radius: 50%;
    animation: quantum 4s infinite alternate;
}`,
        29: `.type-29 .progress {
    width: 60px;
    height: 80px;
    background: transparent;
    position: relative;
    overflow: hidden;
}
.type29 .progress::before,
.type-29 .progress::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 40px;
    background: #ffcc00;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
}
.type-29 .progress::before { top: 0; }
.type-29 .progress::after { 
    bottom: 0;
    transform: rotate(180deg);
    animation: hourglassFill 3s infinite;
}`,
        30: `.type-30 .progress {
    width: 90px;
    height: 90px;
    position: relative;
}
.type-30 .progress::before,
.type-30 .progress::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: #2196F3;
    border-radius: 50%;
    animation: neural 2s infinite;
}
.type-30 .progress::after {
    background: #00BCD4;
    animation-delay: 1s;
}`
    };

    const jsCode = {
        1: `const progress = document.getElementById('bar-1');
const percentText = document.getElementById('percent-1');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.transform = \`rotate(\${percent * 3.6}deg)\`;`,
        2: `const progress = document.getElementById('bar-2');
const percentText = document.getElementById('percent-2');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.clipPath = \`circle(\${percent}% at 50% 50%)\`;`,
        3: `const progress = document.getElementById('bar-3');
const percentText = document.getElementById('percent-3');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.borderBottomWidth = \`\${percent}px\`;`,
        4: `const progress = document.getElementById('bar-4');
const percentText = document.getElementById('percent-4');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.width = \`\${percent}px\`;`,
        5: `const progress = document.getElementById('bar-5');
const percentText = document.getElementById('percent-5');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.transform = \`scale(\${percent/100})\`;`,
        6: `const progress = document.getElementById('bar-6');
const percentText = document.getElementById('percent-6');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.transform = \`scale(\${percent/100 + 0.5})\`;`,
        7: `const progress = document.getElementById('bar-7');
const percentText = document.getElementById('percent-7');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.opacity = percent/100;`,
        8: `const progress = document.getElementById('bar-8');
const percentText = document.getElementById('percent-8');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.borderWidth = \`\${(percent/20) + 2}px\`;`,
        9: `const progress = document.getElementById('bar-9');
const percentText = document.getElementById('percent-9');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.transform = \`scale(\${percent/100 + 0.5})\`;`,
        10: `const progress = document.getElementById('bar-10');
const percentText = document.getElementById('percent-10');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.height = \`\${percent}px\`;`,
        11: `const progress = document.getElementById('bar-11');
const percentText = document.getElementById('percent-11');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.transform = \`scale(\${percent/100})\`;`,
        12: `const progress = document.getElementById('bar-12');
const percentText = document.getElementById('percent-12');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.width = \`\${percent}px\`;
progress.style.boxShadow = \`0 0 \${percent/10}px #00ffff, 0 0 \${percent/5}px #00ffff\`;`,
        13: `const progress = document.getElementById('bar-13');
const percentText = document.getElementById('percent-13');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.width = \`\${percent}px\`;`,
        14: `const progress = document.getElementById('bar-14');
const percentText = document.getElementById('percent-14');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.opacity = percent/100;`,
        15: `const progress = document.getElementById('bar-15');
const percentText = document.getElementById('percent-15');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.borderWidth = \`\${(percent/25) + 2}px\`;`,
        16: `const progress = document.getElementById('bar-16');
const percentText = document.getElementById('percent-16');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.height = \`\${percent}px\`;`,
        17: `const progress = document.getElementById('bar-17');
const percentText = document.getElementById('percent-17');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.width = \`\${percent}px\`;`,
        18: `const progress = document.getElementById('bar-18');
const percentText = document.getElementById('percent-18');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.opacity = 0.5 + (percent/200);`,
        19: `const progress = document.getElementById('bar-19');
const percentText = document.getElementById('percent-19');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.gap = \`\${percent/10}px\`;`,
        20: `const progress = document.getElementById('bar-20');
const percentText = document.getElementById('percent-20');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.boxShadow = \`\${percent/5}px 0 0 10px #fc466b\`;`,
        21: `const progress = document.getElementById('bar-21');
const percentText = document.getElementById('percent-21');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
// Animation handled by CSS`,
        22: `const progress = document.getElementById('bar-22');
const percentText = document.getElementById('percent-22');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.filter = \`blur(\${(percent/12) + 1}px)\`;`,
        23: `const progress = document.getElementById('bar-23');
const percentText = document.getElementById('percent-23');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.width = \`\${percent}px\`;`,
        24: `const progress = document.getElementById('bar-24');
const percentText = document.getElementById('percent-24');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.borderWidth = \`\${(percent/25) + 2}px\`;`,
        25: `const progress = document.getElementById('bar-25');
const percentText = document.getElementById('percent-25');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.transform = \`scale(\${percent/100 + 0.5})\`;`,
        26: `const progress = document.getElementById('bar-26');
const percentText = document.getElementById('percent-26');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.borderWidth = \`\${(percent/33) + 1}px\`;`,
        27: `const progress = document.getElementById('bar-27');
const percentText = document.getElementById('percent-27');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.width = \`\${percent}px\`;
progress.style.filter = \`blur(\${(percent/25) + 1}px)\`;`,
        28: `const progress = document.getElementById('bar-28');
const percentText = document.getElementById('percent-28');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
progress.style.transform = \`scale(\${percent/100})\`;`,
        29: `const progress = document.getElementById('bar-29');
const percentText = document.getElementById('percent-29');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
// Animation handled by CSS`,
        30: `const progress = document.getElementById('bar-30');
const percentText = document.getElementById('percent-30');
let percent = 75;
percentText.innerText = \`\${percent}%\`;
let speed = 3 - (percent/50);
progress.style.animationDuration = \`\${speed}s\`;`
    };

    cssContent.innerText = cssStyles[type];
    jsContent.innerText = jsCode[type];

    document.querySelector('.code-display').style.display = 'block';
    document.querySelector('.code-display').scrollIntoView({ behavior: 'smooth' });
}