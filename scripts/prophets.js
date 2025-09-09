const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const prophetCard = document.createElement('section');
        const prophetName = document.createElement('h2');
        const info = document.createElement('p');
        const portrait = document.createElement('img');
    
        prophetName.textContent = `${prophet.name} ${prophet.lastname}`;

        info.innerHTML = `
            <p>Born: ${prophet.birthdate}</p>
            <p>Birth Place: ${prophet.birthplace}</p>
            `;
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        prophetCard.appendChild(prophetName);
        prophetCard.appendChild(info);
        prophetCard.appendChild(portrait);
        cards.appendChild(prophetCard);
    });
}

