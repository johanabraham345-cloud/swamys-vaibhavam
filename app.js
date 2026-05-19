const menuData = [
    // Pulav Varieties
    { name: "Mushroom Pulav", price: 180, category: "Pulav Varieties", ingredients: "Basmati rice, fresh mushrooms, Indian spices, herbs." },
    { name: "Paneer Pulav", price: 190, category: "Pulav Varieties", ingredients: "Basmati rice, paneer cubes, green peas, whole spices." },
    { name: "Vaibhavam Pulav", price: 220, category: "Pulav Varieties", ingredients: "Basmati rice, mixed vegetables, paneer, mushrooms, cashew nuts, signature spices." },

    // Starters
    { name: "French Fries", price: 110, category: "Starters", ingredients: "Crispy potato strips, salt, served with ketchup." },
    { name: "French Fries with Cheese", price: 150, category: "Starters", ingredients: "Crispy potato strips loaded with melted cheese sauce." },
    { name: "Gobi 65", price: 140, category: "Starters", ingredients: "Cauliflower florets marinated in spicy batter and deep-fried." },
    { name: "Mushroom 65", price: 150, category: "Starters", ingredients: "Button mushrooms coated in spicy flour mix and deep-fried." },
    { name: "Paneer 65", price: 160, category: "Starters", ingredients: "Cottage cheese cubes tossed in spicy 65 masala." },
    { name: "Golden Fried Mushroom", price: 170, category: "Starters", ingredients: "Crispy batter-fried mushrooms served golden brown." },
    { name: "Mushroom Pepper Fry", price: 170, category: "Starters", ingredients: "Mushrooms sautéed with onions, curry leaves, and freshly cracked black pepper." },
    { name: "Gobi Sesame Roasted", price: 170, category: "Starters", ingredients: "Roasted cauliflower tossed with sesame seeds and soy-based sauce." },
    { name: "Garlic Roasted Mushroom", price: 170, category: "Starters", ingredients: "Mushrooms pan-roasted with generous amounts of minced garlic and butter." },
    { name: "Dragon Paneer", price: 170, category: "Starters", ingredients: "Spicy and sweet crispy paneer tossed in fiery dragon sauce." },
    { name: "Dragon Mushroom", price: 170, category: "Starters", ingredients: "Crispy mushrooms tossed in sweet and spicy chili sauce with cashews." },

    // Soup
    { name: "Veg Clear Soup", price: 90, category: "Soup", ingredients: "Clear vegetable broth with finely diced carrots, beans, and cabbage." },

    // Main Course (Curries & Gravies)
    { name: "Aloo Gobi", price: 170, category: "Main Course", ingredients: "Potatoes and cauliflower cooked in onion-tomato masala." },
    { name: "Gobi Fry", price: 180, category: "Main Course", ingredients: "Dry preparation of cauliflower with South Indian spices." },
    { name: "Tomato Masala", price: 170, category: "Main Course", ingredients: "Tangy and spicy gravy made with ripe tomatoes and herbs." },
    { name: "Green Peas Masala", price: 170, category: "Main Course", ingredients: "Green peas simmered in a rich and creamy onion-tomato gravy." },
    { name: "Dal Tadka", price: 150, category: "Main Course", ingredients: "Yellow lentils tempered with ghee, cumin, garlic, and dried red chilies." },
    { name: "Gobi Butter Masala", price: 180, category: "Main Course", ingredients: "Cauliflower simmered in a rich, buttery tomato gravy." },
    { name: "Paneer Butter Masala", price: 210, category: "Main Course", ingredients: "Paneer cubes in a rich, creamy, slightly sweet tomato and cashew gravy." },
    { name: "Kadai Paneer", price: 210, category: "Main Course", ingredients: "Paneer tossed with bell peppers, onions, and freshly ground kadai masala." },
    { name: "Kadai Mushroom", price: 210, category: "Main Course", ingredients: "Mushrooms cooked with bell peppers in a spicy, rustic kadai gravy." },
    { name: "Navratan Kurma", price: 210, category: "Main Course", ingredients: "Nine varieties of vegetables and fruits in a rich, creamy, mild white gravy." },
    { name: "Mushroom Kolhapuri", price: 210, category: "Main Course", ingredients: "Very spicy preparation of mushrooms in traditional Kolhapuri masala." },
    { name: "Mushroom Do Pyaza", price: 210, category: "Main Course", ingredients: "Mushrooms cooked with double the amount of onions in a semi-dry gravy." },
    { name: "Mushroom Handi Biryani / Gravy", price: 210, category: "Main Course", ingredients: "A special mixed mushroom preparation served in a traditional handi." },
    { name: "Paneer Bhurji / Tikka Gravy", price: 210, category: "Main Course", ingredients: "Scrambled paneer or roasted paneer tikka in a spiced tomato-onion base." },

    // Chinese (Dry & Semi-Gravy)
    { name: "Gobi Manchurian", price: 170, category: "Chinese", ingredients: "Crispy cauliflower florets tossed in a tangy Manchurian sauce." },
    { name: "Gobi Chilli", price: 170, category: "Chinese", ingredients: "Cauliflower florets tossed with soy sauce, green chilies, and bell peppers." },
    { name: "Babycorn Manchurian", price: 180, category: "Chinese", ingredients: "Crispy baby corn in a classic Indo-Chinese Manchurian sauce." },
    { name: "Chilli Babycorn", price: 180, category: "Chinese", ingredients: "Spicy, crispy baby corn stir-fried with capsicum and green chilies." },
    { name: "Mushroom Manchurian", price: 190, category: "Chinese", ingredients: "Fried mushrooms coated in sweet, tangy, and slightly spicy sauce." },
    { name: "Chilli Mushroom", price: 190, category: "Chinese", ingredients: "Mushrooms stir-fried with spicy chili sauce, soy, and peppers." },
    { name: "Paneer Manchurian", price: 200, category: "Chinese", ingredients: "Cottage cheese cubes tossed in savory Manchurian sauce." },
    { name: "Chilli Paneer", price: 200, category: "Chinese", ingredients: "Classic Indo-Chinese dish of paneer tossed with spicy chilies and bell peppers." },
    { name: "Schezwan Paneer", price: 220, category: "Chinese", ingredients: "Paneer cubes tossed in fiery, garlic-heavy homemade Schezwan sauce." },
    { name: "Schezwan Mushroom", price: 220, category: "Chinese", ingredients: "Mushrooms cooked in a spicy, garlicky Schezwan pepper sauce." },

    // Vaibhavam Specials
    { name: "Ghee Podi Idli", price: 110, category: "Vaibhavam Specials", ingredients: "Mini idlis tossed in pure ghee and spicy gunpowder (podi)." },
    { name: "Mushroom Masala Dosa", price: 160, category: "Vaibhavam Specials", ingredients: "Crispy dosa stuffed with spicy mushroom masala." },
    { name: "Chocolate Dosa", price: 120, category: "Vaibhavam Specials", ingredients: "Kid's favorite dosa spread with rich melted chocolate." },
    { name: "Gobi Manchurian Dosa", price: 150, category: "Vaibhavam Specials", ingredients: "Fusion dosa stuffed with Indo-Chinese Gobi Manchurian." },
    { name: "Chilli Mushroom Dosa", price: 160, category: "Vaibhavam Specials", ingredients: "Crispy crepe folded over spicy Chilli Mushroom." },
    { name: "Chilli Paneer Dosa", price: 160, category: "Vaibhavam Specials", ingredients: "Dosa filled with spicy and tangy Chilli Paneer." },
    { name: "Paneer Manchurian Dosa", price: 160, category: "Vaibhavam Specials", ingredients: "Indo-Chinese fusion: Dosa with Paneer Manchurian filling." },
    { name: "Mushroom Manchurian Dosa", price: 160, category: "Vaibhavam Specials", ingredients: "Crispy crepe filled with tangy Mushroom Manchurian." },
    { name: "Paneer Butter Masala Dosa", price: 170, category: "Vaibhavam Specials", ingredients: "A decadent combination of crispy dosa and rich Paneer Butter Masala." },
    { name: "Cheese Onion Butter Rava Dosa", price: 170, category: "Vaibhavam Specials", ingredients: "Crispy semolina dosa loaded with cheese, butter, and chopped onions." },
    { name: "Cheese Gobi Manchurian Dosa", price: 200, category: "Vaibhavam Specials", ingredients: "Gobi Manchurian dosa heavily topped with melted cheese." },
    { name: "Cheese Chilli Mushroom Dosa", price: 210, category: "Vaibhavam Specials", ingredients: "Spicy Chilli Mushroom dosa with a gooey cheese layer." },
    { name: "Cheese Mushroom Manchurian Dosa", price: 210, category: "Vaibhavam Specials", ingredients: "Mushroom Manchurian dosa combined with melted cheese." },
    { name: "Cheese Schezwan Noodles Dosa", price: 220, category: "Vaibhavam Specials", ingredients: "Dosa stuffed with spicy Schezwan noodles and topped with cheese." },
    { name: "Triple Rice / Noodles", price: 220, category: "Vaibhavam Specials", ingredients: "A massive combo of Hakka noodles, fried rice, and Schezwan gravy." },
    { name: "Cheesy Mushroom Masala Dosa", price: 200, category: "Vaibhavam Specials", ingredients: "Classic mushroom masala dosa enhanced with melted cheese." },
    { name: "Cheese Cold Coffee", price: 130, category: "Vaibhavam Specials", ingredients: "A unique cold coffee blend with a rich, savory-sweet cheese foam." },

    // Beverages
    { name: "Black Tea", price: 15, category: "Beverages", ingredients: "Freshly brewed black tea leaves." },
    { name: "Tea", price: 25, category: "Beverages", ingredients: "Traditional Kerala-style milk tea." },
    { name: "Lemon Tea", price: 30, category: "Beverages", ingredients: "Black tea infused with fresh lemon juice and a hint of mint." },
    { name: "Filter Coffee", price: 30, category: "Beverages", ingredients: "Authentic South Indian filter coffee brewed with chicory." },
    { name: "Milk Coffee", price: 30, category: "Beverages", ingredients: "Instant coffee blended with hot milk." },
    { name: "Hot Milk", price: 25, category: "Beverages", ingredients: "Plain boiled pure milk." },
    { name: "Horlicks", price: 40, category: "Beverages", ingredients: "Malted milk hot beverage." },
    { name: "Boost", price: 40, category: "Beverages", ingredients: "Chocolate malt hot beverage." },
    { name: "Hot Badam Milk", price: 40, category: "Beverages", ingredients: "Hot milk blended with crushed almonds, saffron, and cardamom." },
    { name: "Masala Tea", price: 35, category: "Beverages", ingredients: "Milk tea brewed with ginger, cardamom, and clove." },
    { name: "Lemon Juice", price: 35, category: "Beverages", ingredients: "Freshly squeezed lemon juice with water and sugar." },
    { name: "Fresh Lime Soda", price: 50, category: "Beverages", ingredients: "Fresh lime juice mixed with chilled club soda (sweet or salted)." },
    { name: "Mint Lime", price: 45, category: "Beverages", ingredients: "Refreshing lime juice blended with fresh mint leaves." },
    { name: "Watermelon Juice", price: 60, category: "Beverages", ingredients: "Freshly pressed watermelon juice." },
    { name: "Mango Juice", price: 65, category: "Beverages", ingredients: "Sweet and thick fresh mango juice." },

    // Shakes & Mojitos
    { name: "Vanilla Shake", price: 100, category: "Shakes", ingredients: "Vanilla ice cream blended with cold milk." },
    { name: "Sharjah Shake", price: 100, category: "Shakes", ingredients: "Kerala's famous banana milkshake with peanuts and horlicks/boost." },
    { name: "Strawberry Shake", price: 110, category: "Shakes", ingredients: "Strawberry crush and ice cream blended with milk." },
    { name: "Chiku Shake", price: 120, category: "Shakes", ingredients: "Fresh sapota (chiku) blended with milk and sugar." },
    { name: "Chocolate Shake", price: 120, category: "Shakes", ingredients: "Rich chocolate syrup and ice cream milkshake." },
    { name: "Butterscotch Shake", price: 120, category: "Shakes", ingredients: "Butterscotch ice cream shake with praline crunch." },
    { name: "Pista Shake", price: 120, category: "Shakes", ingredients: "Pistachio flavored rich milkshake." },
    { name: "Oreo Shake", price: 130, category: "Shakes", ingredients: "Crushed Oreo cookies blended with vanilla ice cream and milk." },
    { name: "Mango Shake", price: 120, category: "Shakes", ingredients: "Fresh mango pulp blended with chilled milk." },
    { name: "Pomegranate Shake", price: 130, category: "Shakes", ingredients: "Fresh pomegranate arils blended into a rich shake." },
    { name: "Cold Coffee with Ice Cream", price: 120, category: "Shakes", ingredients: "Iced blended coffee topped with a scoop of vanilla ice cream." },
    { name: "Tender Coconut Shake", price: 130, category: "Shakes", ingredients: "Fresh tender coconut meat and water blended with milk." },
    { name: "Badam Shake", price: 120, category: "Shakes", ingredients: "Rich almond milkshake flavored with saffron." },
    { name: "Virgin Mint Mojito", price: 120, category: "Shakes", ingredients: "Muddled mint and lime topped with chilled soda and ice." },

    // Dosas & Tiffins
    { name: "Plain Uttapam", price: 70, category: "Dosas & Tiffins", ingredients: "Thick, soft savory pancake made from rice and lentil batter." },
    { name: "Ghee Sambar Button Idli (12 Pcs)", price: 100, category: "Dosas & Tiffins", ingredients: "12 miniature idlis submerged in hot sambar and drizzled with ghee." },
    { name: "Idli Vada", price: 70, category: "Dosas & Tiffins", ingredients: "Classic combo of two soft steamed idlis and one crispy medu vada." },
    { name: "Masala Dosa", price: 85, category: "Dosas & Tiffins", ingredients: "Crispy rice crepe filled with spiced potato masala." },
    { name: "Ghee Uttapam", price: 100, category: "Dosas & Tiffins", ingredients: "Thick rice pancake roasted with pure ghee." },
    { name: "Butter Roast", price: 105, category: "Dosas & Tiffins", ingredients: "Crispy plain dosa roasted generously with butter." },
    { name: "Onion Roast", price: 100, category: "Dosas & Tiffins", ingredients: "Crispy dosa topped with finely chopped onions." },
    { name: "Ghee Podi Dosa", price: 120, category: "Dosas & Tiffins", ingredients: "Crispy dosa smeared with spicy gunpowder and ghee." },
    { name: "Onion Uttapam", price: 105, category: "Dosas & Tiffins", ingredients: "Thick pancake topped with chopped onions and green chilies." },
    { name: "Ghee Roast Dosa", price: 120, category: "Dosas & Tiffins", ingredients: "Classic thin and crispy dosa roasted in pure ghee." },
    { name: "Ghee Masala Dosa", price: 130, category: "Dosas & Tiffins", ingredients: "Crispy ghee-roasted dosa filled with potato masala." },
    { name: "Butter Masala Dosa", price: 135, category: "Dosas & Tiffins", ingredients: "Crispy butter-roasted dosa filled with potato masala." },
    { name: "Cheese Dosa", price: 125, category: "Dosas & Tiffins", ingredients: "Crispy dosa loaded with grated melted cheese." },
    { name: "Ghee Onion Rava Dosa", price: 130, category: "Dosas & Tiffins", ingredients: "Crispy semolina dosa with onions, roasted in ghee." },
    { name: "Cheese Onion Rava Dosa", price: 160, category: "Dosas & Tiffins", ingredients: "Semolina dosa with onions and generous cheese topping." },
    { name: "Ghee Paper Roast", price: 180, category: "Dosas & Tiffins", ingredients: "Extra-large, paper-thin, super crispy dosa roasted in ghee." },

    // Lunch, Rice & Noodles
    { name: "Meals", price: 130, category: "Meals & Rice", ingredients: "Traditional Kerala vegetarian meals with rice, sambar, avial, thoran, rasam, and buttermilk." },
    { name: "Vaibhavam Special Thali", price: 200, category: "Meals & Rice", ingredients: "An elaborate premium thali with North and South Indian delicacies." },
    { name: "North Indian Thali", price: 200, category: "Meals & Rice", ingredients: "Roti/Naan, paneer gravy, dal, pulao, raita, and a sweet." },
    { name: "Curd Rice", price: 110, category: "Meals & Rice", ingredients: "Soft cooked rice mixed with yogurt and tempered with mustard seeds and curry leaves." },
    { name: "Lemon Rice", price: 110, category: "Meals & Rice", ingredients: "Tangy rice flavored with lemon juice, peanuts, and turmeric." },
    { name: "Tomato Rice / Pulav", price: 110, category: "Meals & Rice", ingredients: "Spicy and tangy rice cooked with fresh tomatoes and herbs." },
    { name: "Veg Rice", price: 120, category: "Meals & Rice", ingredients: "Simple stir-fried rice with mixed vegetables." },
    { name: "Jeera Rice", price: 120, category: "Meals & Rice", ingredients: "Basmati rice tempered with cumin seeds and ghee." }
];

// 1. Navbar Scroll Effect & Mobile Toggle
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        navbar.classList.add('scrolled');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        if (window.scrollY <= 50) navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// 2. Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); 
}
initHeroSlider();

// 3. Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
            element.classList.add('active');
        } else {
            // Remove class when out of view so it re-animates every time
            element.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', reveal);
reveal();

// 4. Menu Tabs and Rendering with Modal
const categories = [...new Set(menuData.map(item => item.category))];
const tabContainer = document.getElementById('tabContainer');
const menuGrid = document.getElementById('menuGrid');
const seeMoreBtn = document.getElementById('seeMoreBtn');

// Modal Elements
const modal = document.getElementById('itemModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalPrice = document.getElementById('modalPrice');
const modalIngredients = document.getElementById('modalIngredients');

let currentCategoryItems = [];
let itemsDisplayed = 0;
const INITIAL_ITEMS_TO_SHOW = 6;

function openModal(item) {
    modalTitle.textContent = item.name;
    modalCategory.textContent = item.category;
    modalPrice.textContent = `₹${item.price}`;
    modalIngredients.textContent = item.ingredients;
    
    // Format name for asset image path: "Mushroom Pulav" -> "mushroom-pulav.jpg"
    const imageFilename = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-') + '.jpg';
                         
    // First try to load from assets. If it fails, load a solid placeholder
    modalImage.src = `assets/${imageFilename}`;
    
    modalImage.onerror = function() {
        this.onerror = null; // Prevent infinite loop
        this.src = "https://via.placeholder.com/600x400/2C4C3B/FFFFFF?text=" + encodeURIComponent(item.name);
    };
    
    modal.classList.add('show');
}

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

function renderMenu(category, append = false) {
    if (!append) {
        menuGrid.innerHTML = '';
        currentCategoryItems = category === 'All' 
            ? menuData 
            : menuData.filter(item => item.category === category);
        itemsDisplayed = 0;
    }
    
    const itemsToRender = currentCategoryItems.slice(itemsDisplayed, itemsDisplayed + INITIAL_ITEMS_TO_SHOW);
        
    itemsToRender.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        // Add staggered animation delay
        menuItem.style.animation = `staggeredFadeIn 0.5s ease-out forwards`;
        menuItem.style.animationDelay = `${index * 0.1}s`;
        menuItem.style.opacity = '0';
        
        menuItem.innerHTML = `
            <div class="item-info">
                <h4>${item.name}</h4>
                <p>${item.category}</p>
            </div>
            <div class="item-price">₹${item.price}</div>
        `;
        
        // Add click event for modal
        menuItem.addEventListener('click', () => openModal(item));
        
        menuGrid.appendChild(menuItem);
    });

    itemsDisplayed += itemsToRender.length;

    if (itemsDisplayed < currentCategoryItems.length) {
        seeMoreBtn.style.display = 'block';
    } else {
        seeMoreBtn.style.display = 'none';
    }
}

seeMoreBtn.addEventListener('click', () => {
    renderMenu(null, true);
});

function initTabs() {
    // 'All' tab
    const allBtn = document.createElement('button');
    allBtn.className = 'tab-btn active';
    allBtn.textContent = 'All';
    allBtn.onclick = (e) => handleTabClick(e, 'All');
    tabContainer.appendChild(allBtn);
    
    // Category tabs
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'tab-btn';
        btn.textContent = cat;
        btn.onclick = (e) => handleTabClick(e, cat);
        tabContainer.appendChild(btn);
    });
}

function handleTabClick(e, category) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    menuGrid.style.opacity = 0;
    setTimeout(() => {
        renderMenu(category);
        menuGrid.style.opacity = 1;
    }, 300);
}

initTabs();
renderMenu('All');

// 5. Booking Form Mock Submit
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = 'Booking Confirmed!';
    btn.style.backgroundColor = '#2C4C3B'; 
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
        e.target.reset();
    }, 3000);
});
