const client = new XMLHttpRequest();

client.open('GET', 'https://valorant-api.com/v1/agents');

client.onreadystatechange = () => {
    if (client.readyState === 4) {
        const data = JSON.parse(client.responseText);

        const iconContainer = document.getElementById('icon-container');
        const displayName = document.getElementById('display-name');
        const description = document.getElementById('description');
        const fullPortraitImg = document.getElementById('full-portrait-img');

        
        data.data.forEach(agent => {
            const img = document.createElement('img');
            img.src = agent.displayIcon;
            img.alt = agent.displayName;
            img.className = 'cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out rounded-lg shadow-lg';
            img.onclick = () => {
                displayName.textContent = agent.displayName;
                description.textContent = agent.description;
                fullPortraitImg.src = agent.fullPortraitV2;
                fullPortraitImg.alt = `Retrato completo de ${agent.displayName}`;
            };
            iconContainer.appendChild(img);
        });
    }
};

client.send();

