const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let navBar = Array.from(document.querySelectorAll('a'));
let logo = document.getElementById("logo-img");
let mainHeader = document.querySelector('h1');
let button = document.querySelector('button');
let headerImg = document.getElementById('cta-img');
let heading4 = document.querySelectorAll('h4');
let paragraph = document.querySelectorAll('p');
let middleImg = document.getElementById('middle-img')
let nav = document.querySelector('nav')



//navBar
let count = 1;
navBar.map(item => {
  item.textContent = siteContent['nav'][`nav-item-${count}`]
  item.style.color = 'green';
  count++;
})

// navBar[0].textContent = siteContent['nav'][`nav-item-1`]
// navBar[1].textContent = siteContent['nav'][`nav-item-2`]
// navBar[2].textContent = siteContent['nav'][`nav-item-3`]
// navBar[3].textContent = siteContent['nav'][`nav-item-4`]
// navBar[4].textContent = siteContent['nav'][`nav-item-5`]
// navBar[5].textContent = siteContent['nav'][`nav-item-6`]


// logo
logo.src = siteContent['nav']['img-src']
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// mainHeader
mainHeader.textContent = siteContent['cta']['h1']

// button
button.textContent = siteContent['cta']['button']

//img DOM IS AWESOME
headerImg.src = siteContent['cta']['img-src']
// headerImg.setAttribute('src', siteContent['cta']['img-src'])

// main-content
heading4[0].textContent = siteContent['main-content']['features-h4']
heading4[1].textContent = siteContent['main-content']['about-h4']
heading4[2].textContent = siteContent['main-content']['services-h4']
heading4[3].textContent = siteContent['main-content']['product-h4']
heading4[4].textContent = siteContent['main-content']['vision-h4']

paragraph[0].textContent = siteContent['main-content']['features-content']
paragraph[1].textContent = siteContent['main-content']['about-content']
paragraph[2].textContent = siteContent['main-content']['services-content']
paragraph[3].textContent = siteContent['main-content']['product-content']
paragraph[4].textContent = siteContent['main-content']['vision-content']

middleImg.src = siteContent['main-content']['middle-img-src']
// middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// contact
heading4[5].textContent = siteContent['contact']['contact-h4']
paragraph[5].textContent = siteContent['contact']['address']
paragraph[6].textContent = siteContent['contact']['phone']
paragraph[7].textContent = siteContent['contact']['email']

// footer
paragraph[8].textContent = siteContent['footer']['copyright']

// prepend()
let newAnchorHome = document.createElement('a')
newAnchorHome.textContent = 'Home'
newAnchorHome.href = '#';
newAnchorHome.style.color = 'green'
nav.prepend(newAnchorHome)
console.log(newAnchorHome)

// appendChild()
let newAnchorTestimonials = document.createElement('a')
newAnchorTestimonials.href = '#';
newAnchorTestimonials.textContent = 'Testimonials';
newAnchorTestimonials.style.color = 'green';
nav.appendChild(newAnchorTestimonials);
console.log(newAnchorTestimonials);

