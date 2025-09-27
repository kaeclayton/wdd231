import { initNavigation } from "./navigation.mjs";
import { displayHomeBusinesses } from "./home-businesses.mjs";
import { initWeather } from "./weather.mjs";
import { initDates } from "./dates.mjs";

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - starting initialization');

    initNavigation();
    console.log('Navigation initialized');

    initDates();
    console.log('Dates initialized');

    const homeBusinessContainer = document.querySelector('#home-business-spotlight');
    console.log('Business container:', homeBusinessContainer);

    if (homeBusinessContainer) {
        displayHomeBusinesses(homeBusinessContainer, 3);
        console.log('Business display function called');
    }

    initWeather();
    console.log('Weather initialization called');
});

window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
});