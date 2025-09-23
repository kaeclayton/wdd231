const cards = document.querySelector('#businessDirectory');
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');
const directoryContainer = document.querySelector('.directoryCards');

async function getDirectoryData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayBusinesses(data.members);
}

getDirectoryData();

const displayBusinesses = (members) => {
    members.forEach((member) => {
        const memberCard = document.createElement('section');
        const memberName = document.createElement('h2');
        const logo = document.createElement('img');
        const address = document.createElement('div');
        const phone = document.createElement('p');
        const website = document.createElement('a');
        const type = document.createElement('p');

        logo.setAttribute('src', member.imageFile);
        logo.setAttribute('alt', `Logo for ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('class', 'business-logo'),
        logo.setAttribute('width', 150);

        memberName.textContent = `${member.name}`;
        memberName.className = 'business-name';

        address.innerHTML = `
            <p>${member.address.street}</p>
            <p>${member.address.city}, ${member.address.state} ${member.address.zipcode}</p>
            `;
        address.className = 'business-address';
        
        phone.textContent = `${member.phone}`;
        phone.className = 'business-phone';

        website.href = member.websiteUrl;
        website.target = '_blank';
        website.textContent = member.websiteUrl;
        website.className = 'business-website';

        type.textContent = `${member.businessType}`;
        type.className = 'business-type';

        memberCard.appendChild(logo);
        memberCard.appendChild(memberName);
        memberCard.appendChild(address);
        memberCard.appendChild(phone);
        memberCard.appendChild(website);
        memberCard.appendChild(type);

        memberCard.className = 'business-card';

        cards.appendChild(memberCard);
    });

    directoryContainer.classList.add('grid-view');

    gridButton.addEventListener('click', () => {
        directoryContainer.classList.remove('list-view');
        directoryContainer.classList.add('grid-view');
        gridButton.classList.add('active');
        listButton.classList.remove('active');
    });

    listButton.addEventListener('click', () => {
        directoryContainer.classList.remove('grid-view');
        directoryContainer.classList.add('list-view');
        listButton.classList.add('active');
        gridButton.classList.remove('active');
    });

    document.addEventListener('DOMContentLoaded', () => {
        gridButton.classList.add('active');
    });
}