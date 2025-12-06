// Authors data
const authorsData = [
    {
        name: 'Fachri Richi Pratama',
        dateOfBirth: 'Tangerang, June 23rd 2010',
        school: 'MAN 13 Jakarta Selatan',
        quote: 'With great power, comes great responsibility ',
        instagram: '@leonardo_da_rici',
        instagram_url: 'https://www.instagram.com/leonardo_da_rici/',
        image: './images/rici.jpg'
    },
    {
        name: 'Naura Nur Umaimah',
        dateOfBirth: 'Purworejo, May 18th 2010',
        school: 'MAN 13 Jakarta Selatan',
        quote: "Don't let yesterday's failure hold back today's steps",
        instagram: '@midnight_feat.nura',
        instagram_url: 'https://www.instagram.com/midnight_feat.nura/',
        image: './images/naura.jpg'
    },
    {
        name: 'Shafa Ghina Khaerunnisa',
        dateOfBirth: 'Brebes, June 6th 2010',
        school: 'MAN 13 Jakarta Selatan',
        quote: "If plan A doesn't work don't worry the alphabet has 25 more letters",
        instagram: '@blueberryyzsz',
        instagram_url: 'https://www.instagram.com/blueberryyzsz',
        image: './images/shafa.jpg'
    },
    {
        name: 'Khansa Nuralifia',
        dateOfBirth: 'Depok, January 9th 2010',
        school: 'MAN 13 Jakarta Selatan',
        quote: "My motivation is deadlines—if I’m not being chased by them, I’ll definitely fall asleep",
        instagram: '@khf_ns',
        instagram_url: 'https://www.instagram.com/khf_ns',
        image: './images/khansa.jpg'
    },
    {
        name: 'Hana Prawisya Ardiarini',
        dateOfBirth: 'Jakarta, April 23rd 2010',
        school: 'MAN 13 Jakarta Selatan',
        quote: "Never thought me and my teeth are the same, we both hate calculus.",
        instagram: '@hnna_pw',
        instagram_url: 'https://www.instagram.com/hnna_pw',
        image: './images/hana.jpg'
    },
    {
        name: 'Azjima Ahzha Syahra',
        dateOfBirth: 'Jakarta, July 30th 2010',
        school: 'MAN 13 Jakarta Selatan',
        quote: "We are stardust shaped into something that can wonder why the stars ever burned.",
        instagram: '@ajiyeema',
        instagram_url: 'https://www.instagram.com/ajiyeema',
        image: './images/azjima.jpg'
    }
];

// Function to generate authors HTML
function generateAuthorsHTML() {
    return authorsData.map(author => `
        <div class="author-card">
            <img src="${author.image}" alt="${author.name}" class="author-image">
            <div class="author-info">
                <h3>${author.name}</h3>
                <div class="author-detail">
                    <strong>Born in:</strong> ${author.dateOfBirth}
                </div>
                <div class="author-detail">
                    <strong>Student at:</strong> ${author.school}
                </div>
                <div class="author-quote">
                    "${author.quote}"
                </div>
                <div class="author-instagram">
                    <a href="${author.instagram_url}" target="_blank">${author.instagram}</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Page content data
const pages = {
    home: {
        title: 'About EcoWrap',
        content: `
            <p>
                EcoWrap is an eco-friendly packaging innovation that is edible, made from natural ingredients sourced from local Indonesian resources.
                Unlike conventional plastic packaging that is difficult to decompose and contributes to environmental pollution, EcoWrap is designed to be fully consumable or naturally biodegradable, making it a promising solution to support a zero-waste concept.
                Tempe chips are a type of snack made from thinly sliced tempeh that is fried until crispy.
                Tempeh itself is a fermented soybean product rich in protein, fiber, as well as various vitamins and minerals.
                <br><br>
                EcoWrap on Spirulina Tempe Chips is an innovative collaboration that combines environmentally friendly edible packaging technology with Indonesia's functional snack.
                This combination offers a new experience in enjoying a snack that is not only delicious but also more responsible for the planet.
                Together, EcoWrap and Spirulina Tempe Chips create a harmony of sustainability, nutrition, and innovation in one lightweight, practical product that supports a better future.
            </p>
        `
    },
    benefits: {
        title: 'Benefits',
        content: `
            <p>
                We chose this topic as the focus of our research because the development of EcoWrap emphasizes the formulation of local biopolymers such as agar, combined with appropriate plasticizers and additives (such as beeswax) to produce a strong, flexible, and safe edible film. In addition, this study aims to evaluate the stability and performance of EcoWrap during storage when used as functional food packaging. By understanding its physical qualities, durability, and effectiveness in protecting the product, this research is expected to provide an alternative solution that is not only innovative but also sustainable for the modern food industry.
            </p>
        `
    },
    tools: {
        title: 'Tools and Ingredients',
        content: `
            <div class="list-container">
                <div class="list-element">
                    <h3>Edible Wrapper</h3>
                    <p>
                        <b>Ingredients:</b><br>
                        1. Tapioca flour<br>
                        2. Gelatin powder<br>
                        3. Clean water<br>
                        4. Coconut oil<br>
                        5. Spirulina powder<br>
                        6. Fine salt<br>
                        7. Honey<br>
                        8. Beeswax<br>
                        <br>
                        <b>Tools:</b><br>
                        1. Small non-stick pot<br>
                        2. Measuring spoons<br>
                        3. Silicone spatula<br>
                        4. Small stove<br>
                        5. Flat baking tray<br>
                        6. Parchment paper<br>
                        7. Electric oven<br>
                        8. Small knife<br>
                        9. Food-safe brush<br>
                        10. Airtight container<br>
                    </p>
                </div>
                <div class="list-element">
                    <h3>Spirulina Tempe Chips</h3>
                    <p>
                        <b>Ingredients:</b><br>
                        1. Fresh tempeh<br>
                        2. Tapioca flour<br>
                        3. Wheat flour<br>
                        4. Clean water<br>
                        5. Fine salt<br>
                        6. Garlic powder<br>
                        7. Spirulina powder<br>
                        8. Honey<br>
                        9. Coconut oil<br>
                        <br>
                        <b>Tools:</b><br>
                        1. Knife<br>
                        2. Cutting board<br>
                        3. Large bowl<br>
                        4. Mixing spoon<br>
                        5. Flat baking tray<br>
                        6. Electric oven<br>
                        7. Spatula<br>
                        8. Tongs<br>
                        9. Airtight jar<br>
                    </p>
                </div>
            </div>
        `
    },
    buyer: {
        title: 'Benefits for buyer',
        content: `
            <p>
                The Spirulina Tempe Chips with EcoWrap product offers various health benefits for consumers by combining two nutrient-dense ingredients: tempeh and spirulina. Tempeh, as the main ingredient, provides complete plant-based protein, fiber, B vitamins, and antioxidants that help maintain energy, repair cells, and support digestive health. The addition of spirulina further enhances the nutritional value of the product by supplying micronutrients such as iron, magnesium, beta-carotene, essential amino acids, and powerful antioxidants that help boost immunity, reduce inflammation, and promote skin health.
                <br><br>
                In addition, the edible EcoWrap offers extra advantages because it is made from natural, safe-to-consume ingredients, supports zero-waste principles, and minimizes exposure to chemicals found in conventional plastic packaging. This combination makes the product not only delicious and practical but also nourishing and environmentally friendly.
            </p>
        `
    },
    authors: {
        title: 'Authors Profile',
        get content() {
            return `<div class="authors-grid">${generateAuthorsHTML()}</div>`;
        }
    }
};

// Get DOM elements
const contentTitle = document.getElementById('content-title');
const contentText = document.getElementById('content-text');
const navLinks = document.querySelectorAll('.nav-link');
const contentSection = document.getElementById('content-section');

// Handle navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetHash = link.getAttribute('href').substring(1);
        
        if (targetHash === 'home') {
            contentTitle.textContent = pages[targetHash].title;
            contentText.innerHTML = pages[targetHash].content;
            setTimeout(() => {
                const offset = 200;
                const elementPosition = contentSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }, 10);
            return;
        }
        
        if (pages[targetHash]) {
            contentTitle.textContent = pages[targetHash].title;
            contentText.innerHTML = pages[targetHash].content;
            setTimeout(() => {
                const offset = 200;
                const elementPosition = contentSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }, 10);
        }
    });
});

// Handle browser back/forward buttons
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    
    if (hash === 'home') {
        setTimeout(() => {
            const offset = 200;
            const elementPosition = contentSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }, 10);
    } else if (pages[hash]) {
        contentTitle.textContent = pages[hash].title;
        contentText.innerHTML = pages[hash].content;
        setTimeout(() => {
            const offset = 200;
            const elementPosition = contentSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }, 10);
    }
});
