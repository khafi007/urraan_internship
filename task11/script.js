const container = document.querySelector('.bubble-container');

function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        const size = Math.floor(Math.random() * 100 ) + 20;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.left = `${Math.random() * 100}%`;

        bubble.style.animationDuration = `${Math.random() * 20 + 10}s`;

        bubble.style.animationDelay = `${Math.random() * 10}s`;

        bubble.addEventListener('mouseover', () => {
            bubble.style.animationPlayState = 'paused';
        });

        bubble.addEventListener('mouseout', () => {
            bubble.style.animationPlayState = 'running';
        });

        container.appendChild(bubble);

        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

setInterval(createBubble, 1000);