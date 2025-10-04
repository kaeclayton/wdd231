import { initNavigation } from "./navigation.mjs";
import { displayHomeBusinesses } from "./home-businesses.mjs";
import { initWeather } from "./weather.mjs";
import { initDates } from "./dates.mjs";
import { initModals } from "./modal.mjs";
import { initThankYou } from "./thankyou.mjs";
import { initPlaces } from "./places.mjs";
import { initVisit } from "./visit.mjs";

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - starting initialization');

    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
        console.log('Timestamp set to:', timestampField.value);
    }

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

    initModals();
    console.log('Modals initialized');

    const userDataDiv = document.querySelector('#user-data');
    if (userDataDiv) {
        initThankYou();
        console.log('Thank you page initialized');
    }

    const discoverPlaces = document.querySelector('#places');
    if (discoverPlaces) {
        initPlaces();
        console.log('Places initialized')
    }

    const visitMessage = document.querySelector('#visit-message');
    if (visitMessage) {
        initVisit();
        console.log('Visit message initialized')
    }
});

window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
});