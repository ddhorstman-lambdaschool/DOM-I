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

/* Task 1 and Task 2
   Updated HTML with contents of siteContent
 */
//logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//navbar
let navLinks = document.querySelectorAll("nav a");
for(let i = 0; i < navLinks.length; i++){
  navLinks[i].textContent=siteContent["nav"]["nav-item-"+(i+1)];
}
//call to action
document.querySelector('.cta h1').textContent=siteContent["cta"]["h1"];
document.querySelector('.cta button').textContent=siteContent["cta"]["button"];
document.getElementById("cta-img").src=siteContent["cta"]["img-src"];

//main content
let topContentH4 = document.querySelectorAll('.top-content h4');
let topContentP = document.querySelectorAll('.top-content p');
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];
document.getElementById("middle-img").src=siteContent["main-content"]["middle-img-src"];
let bottomContentH4 = document.querySelectorAll('.bottom-content h4');
let bottomContentP = document.querySelectorAll('.bottom-content p');
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

//contact
let contact = document.querySelectorAll(".contact *");
let contactContent = siteContent["contact"];
let i = 0;
for(property in contactContent){
  contact[i].textContent = contactContent[property];
  i++;
}

//footer
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];

/**## Task 3: Add new content
* [ ] Change the color of the navigation text to be green.
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
* [ ] Check your work by looking at the [original html](original.html) in the browser
 */
document.querySelectorAll('nav a').forEach(x => x.style.color="green");
let firstNav = document.createElement('a');
let lastContent = document.createElement('a');
lastContent.textContent = "Us";
firstNav.textContent = "Our";
document.querySelector('nav').appendChild(lastContent).parentElement.prepend(firstNav);
