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
                EcoWrap offers numerous benefits that make it a sustainable choice:
                <br><br>
                <strong>Environmental Impact:</strong> Being fully edible and biodegradable, EcoWrap eliminates plastic waste and reduces environmental pollution.
                <br><br>
                <strong>Nutritional Value:</strong> The packaging is made from nutritious ingredients that add value to the product, supporting a healthier lifestyle.
                <br><br>
                <strong>Zero Waste Solution:</strong> Consumers can eat the packaging along with the product, achieving a true zero-waste experience.
                <br><br>
                <strong>Local Sourcing:</strong> Ingredients are sourced from local Indonesian resources, supporting local farmers and communities.
                <br><br>
                <strong>Innovation:</strong> EcoWrap represents cutting-edge packaging technology that combines sustainability with practicality.
            </p>
        `
    },
    tools: {
        title: 'Tools and Ingredients',
        content: `
            <p>
                <strong>Main Ingredients:</strong>
                <br>
                - Natural plant-based materials from local Indonesian sources
                <br>
                - Edible binders and preservatives derived from natural sources
                <br>
                - Spirulina (for the Tempe Chips version)
                <br><br>
                <strong>Production Tools:</strong>
                <br>
                - Precision molding equipment for consistent packaging shape
                <br>
                - Food-grade processing machines
                <br>
                - Quality control testing equipment
                <br>
                - Sustainable packaging machinery
                <br><br>
                <strong>Quality Standards:</strong>
                <br>
                All materials meet international food safety standards and are certified for consumption.
            </p>
        `
    },
    buyer: {
        title: 'Benefits for Buyers',
        content: `
            <p>
                <strong>Cost-Effective:</strong> While premium in quality, EcoWrap offers value for money by eliminating the need for separate waste disposal.
                <br><br>
                <strong>Health-Conscious:</strong> The edible packaging adds nutritional value, making it perfect for health-conscious consumers.
                <br><br>
                <strong>Environmentally Responsible:</strong> Support sustainable practices and contribute to a cleaner planet with every purchase.
                <br><br>
                <strong>Convenient:</strong> No need to dispose of packaging. Simply consume it along with your snack!
                <br><br>
                <strong>Premium Experience:</strong> Enjoy a unique and innovative product that reflects your values and lifestyle.
                <br><br>
                <strong>Supporting Local:</strong> Your purchase supports local Indonesian farmers and communities.
            </p>
        `
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
        
        const targetHash = link.getAttribute('href').substring(1); // Remove '#'
        
        // If home is clicked, scroll to hero section
        if (targetHash === 'home') {
            contentTitle.textContent = pages[targetHash].title;
            contentText.innerHTML = pages[targetHash].content;
            setTimeout(() => {
            const offset = 150;
            const elementPosition = contentSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }, 10);
            return;
        }
        
        // Update content for other pages
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

        

                // Scroll to content section with offset
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
