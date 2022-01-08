// creating_section_4

const main=document.getElementsByTagName("main")[0];
const sectionFour = document.createElement("section");
sectionFour.id= "section4";
sectionFour.dataset.nav="section 4";
main.appendChild(sectionFour);
const divInside =document.createElement("div");
divInside.className="landing__container";
sectionFour.appendChild(divInside);
const heading = document.createElement("h2");
heading.textContent="section 4";
const paragraph=document.createElement("p");
paragraph.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
divInside.append(heading,paragraph);

// end-section-4

// Build menu

const navBarList=document.querySelector("#navbar__list");
const sections=Array.from(document.getElementsByTagName("section"));
for(i=1;i<=sections.length;i++){
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent=`section${i}`;
    link.href=`#section${i}`; //this line is important as scrollintoview and many functions need href,thank you
    link.className="menu__link ";
    listItem.appendChild(link);
    navBarList.appendChild(listItem);
    


// Scroll to section on link click

    link.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior:'smooth'
    });

// Set clicked section as active
    active(this);

//set link menu link as active
[...document.querySelectorAll("a")].forEach(function(e){
    e.classList.remove("active");
})
link.classList.add("active");
});
// set section as active when scrolling
let section=document.querySelector(link.getAttribute('href'));
document.addEventListener('scroll', function () {
    if( isInViewport(section)){
        active(link);
        [...document.querySelectorAll("a")].forEach(function(e){
            e.classList.remove("active");
        });
        link.classList.add("active");
    }
})
};

//go to top button

const goTop=document.querySelector(".fa-arrow-alt-circle-up");
goTop.style.cssText="font-size:70px;position:fixed;bottom:5%;right:5%;color:rgba(136,203,171,1);cursor:pointer;display:none;background-color:white;border-radius:50%;";
document.body.appendChild(goTop);
document.addEventListener('scroll',function(){

// calculating vertical scroll relative to document
    const scrollTop = window.scrollY;
	const docHeight = document.documentElement.clientHeight;
	const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop) / (docHeight - winHeight);
	const scrollPercentRounded = Math.round(scrollPercent*100);
    if(scrollPercentRounded > 10){
        goTop.style.display = "block";
    }
    else{
        goTop.style.display = "none";
    }
})
//on click scroll to top

goTop.onclick=function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
}
//functions


//checks position relative to viewport

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)*1.5 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//active section
function active(link){
[...document.querySelectorAll("section")].forEach(function(e){
    e.classList.remove("your-active-class");
})
document.querySelector(link.getAttribute('href')).className="your-active-class";
}
