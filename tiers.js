const tiers = new XMLHttpRequest();

tiers.open('GET', 'https://valorant-api.com/v1/competitivetiers');

tiers.onreadystatechange = () => {
    if (tiers.readyState === 4 && tiers.status === 200) {
        const data = JSON.parse(tiers.responseText);

        const tierContainer = document.querySelector('section .grid');
        const tierNameDiv = document.getElementById('tierName');
        const largeIconImg = document.getElementById('largeIcon');

        const processedTiers = new Set();

        data.data.forEach(tier => {
            tier.tiers.forEach(rank => {
                if (!processedTiers.has(rank.tierName)) {
                    
                    processedTiers.add(rank.tierName);

                    
                    const card = document.createElement('div');
                    card.classList.add('bg-gray-800', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'transform', 'hover:scale-105', 'transition-transform', 'duration-300', 'cursor-pointer');

                    const img = document.createElement('img');
                    img.src = rank.smallIcon;
                    img.alt = rank.tierName;
                    img.classList.add('w-full', 'h-40', 'object-cover');
                    card.appendChild(img);

                    const cardBody = document.createElement('div');
                    cardBody.classList.add('p-4');
                    const tierName = document.createElement('h4');
                    tierName.classList.add('text-lg', 'font-semibold', 'text-white');
                    tierName.textContent = rank.tierName;
                    cardBody.appendChild(tierName);

                    
                    card.onclick = () => {
                        tierNameDiv.textContent = rank.tierName;
                        largeIconImg.src = rank.largeIcon;
                    };

                    card.appendChild(cardBody);
                    tierContainer.appendChild(card);
                }
            });
        });
    }
};

tiers.send();
