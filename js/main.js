//start fixed navbar
window.addEventListener("scroll", function () {
    let header = this.document.querySelector(".landing-home .navbar");
    header.classList.toggle("sticky", window.scrollY > 100);

})

//end fixed navbar

//start active navbar
let links = document.querySelectorAll(".navbar .nav-item .nav-link");
let arraylinks = Array.from(links);
arraylinks.forEach(e => {
    e.addEventListener("click", function (ele) {
        arraylinks.forEach(e => {
            e.classList.remove("active");
        });
        ele.currentTarget.classList.add("active");
    });
});
//end active navbar


//start button to top
let btn = document.querySelector(".button");
window.onscroll = function ()
{
    if (window.scrollY >= 300) {
        btn.style.display = "block";
    } else
    {
        btn.style.display = "none";
        }
    }
btn.onclick = function ()
{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
//end button to top


//start Aos animation

  AOS.init();

//end Aos animation



// ***********grid issu fix************** //

// start active links

let buttons = document.querySelectorAll(".btn");
buttons.forEach(e => {
    e.addEventListener("click", function (ele) {
        buttons.forEach(e => {
            e.classList.remove("active");
        });
        ele.currentTarget.classList.add("active");
    })
})

//end active links


// Get all image-divs for each categorieas and covert them into array.
const buildingImagesContainer = [
  ...document.querySelectorAll('[name=building]'),
];
const commercialImagesContainer = [
  ...document.querySelectorAll('[name=commercial]'),
];
const interiorImagesContainer = [
  ...document.querySelectorAll('[name=interior]'),
];
const residentialImagesContainer = [
  ...document.querySelectorAll('[name=residential]'),
];
// Get category buttons
const allBtn = document.getElementById('all');
const buildingBtn = document.getElementById('building');
const commercialBtn = document.getElementById('commercial');
const interiorBtn = document.getElementById('interior');
const residentialBtn = document.getElementById('residential');

allBtn.addEventListener('click', (e) => {
  showBuildingImgaesContainer();
  showCommercialImagesContainer();
  showInteriorImagesContainer();
  showResidentialImagesContainer();
});
buildingBtn.addEventListener('click', (e) => {
  removeCommercialImagesContainer();
  removeInteriorImagesContainer();
  removeResidentialImagesContainer();
  showBuildingImgaesContainer();
});

commercialBtn.addEventListener('click', (e) => {
  removeBuildingImgaesContainer();
  removeInteriorImagesContainer();
  removeResidentialImagesContainer();
  showCommercialImagesContainer();
});
interiorBtn.addEventListener('click', (e) => {
  removeBuildingImgaesContainer();
  removeCommercialImagesContainer();
  removeResidentialImagesContainer();
  showInteriorImagesContainer();
});
residentialBtn.addEventListener('click', (e) => {
  removeBuildingImgaesContainer();
  removeCommercialImagesContainer();
  removeInteriorImagesContainer();
  showResidentialImagesContainer();
});

// Utility Funcitons
// Removing functions
function removeBuildingImgaesContainer() {
  buildingImagesContainer.forEach((item) => {
    item.classList.add('hidden'); // hide all other categories
  });
}
function removeInteriorImagesContainer() {
  interiorImagesContainer.forEach((item) => {
    item.classList.add('hidden'); // hide all other categories
  });
}

function removeResidentialImagesContainer() {
  residentialImagesContainer.forEach((item) => {
    item.classList.add('hidden'); // hide all other categories
  });
}
function removeCommercialImagesContainer() {
  commercialImagesContainer.forEach((item) => {
    item.classList.add('hidden'); // hide all other categories
  });
}
// Showing functions
function showBuildingImgaesContainer() {
  buildingImagesContainer.forEach((item) => {
    item.classList.remove('hidden'); // hide all other categories
  });
}
function showInteriorImagesContainer() {
  interiorImagesContainer.forEach((item) => {
    item.classList.remove('hidden'); // hide all other categories
  });
}

function showResidentialImagesContainer() {
  residentialImagesContainer.forEach((item) => {
    item.classList.remove('hidden'); // hide all other categories
  });
}
function showCommercialImagesContainer() {
  commercialImagesContainer.forEach((item) => {
    item.classList.remove('hidden'); // hide all other categories
  });
}

//#######################################################
// Data image
const imagesData = {
  building: [
    {
      url: '../images/buliding 1.avif',
    },
    {
      url: '../images/building 2.avif',
    },
  ],
  commercial: [
    {
      url: '../images/commerical 1.avif',
    },
    {
      url: '../images/commerical 2.avif',
    },
  ],
  residential: [
    {
      url: '../images/resdi.avif',
    },
  ],
  interior: [
    {
      url: '../images/home interior 1.avif',
    },
  ],
};
// ***********grid issu fix************** //
//end lasted project


//start info engineer

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// nd info engineer




  