const cards = document.querySelector('#businessDirectory');

async function getDirectoryData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayBusinesses(data.members);
}

getDirectoryData();