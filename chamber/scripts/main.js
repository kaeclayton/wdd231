import { initNavigation } from "./navigation.mjs";
import { displayHomeBusinesses } from "./home-businesses.mjs";
import { initWeather } from "./weather.mjs";
import { initDates } from "./dates.mjs";

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDates();
    initDirectory();
    initWeather();

    const homeBusinessContainer = document.querySelector('#home-business-spotlight');
    if (homeBusinessContainer) {
        displayHomeBusinesses(homeBusinessContainer, 3);
    }
    
    const weatherContainer = document.querySelector('#weather-container');
    if (weatherContainer) {
        initWeather();
    }
});
