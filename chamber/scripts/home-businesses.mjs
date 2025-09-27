import { getBusinessData, createBusinessCard } from "./businesses.mjs";

export function displayHomeBusinesses(container, limit = 3) {
    getBusinessData().then(members => {
        const featured = members.slice(0, limit);
        featured.forEach(member => {
            const card = createBusinessCard(member, 'small');
            container.appendChild(card);
        });
    });
}