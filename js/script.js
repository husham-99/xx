


// check if there is local storage colors option
let mainColors = localStorage.getItem('color_option');

if(mainColors != null){

    document.documentElement.style.setProperty('--main--color', mainColors );

    // remove active class from all color list item
    document.querySelectorAll('.colors-list li').forEach( element => {

        element.classList.remove('active');

        // add active class on element with data color == local storage item
        if(element.dataset.color === mainColors){

            // add active class
            element.classList.add('active');
        }

        


    });
    
};


// random background option
let backgroundOption = true;

// variable to control the background Interval
let backgroundInterval;

// check if thers is local storage  random background item
let backgroundLocalItem = localStorage.getItem('background_option');

// check if random background local storage is not empty
if( backgroundLocalItem !== null){

           
    if(backgroundLocalItem == 'true'){

        backgroundOption = true;


    }else{

        backgroundOption = false;

    }

    // remove active class from all spans
    document.querySelectorAll('.random-background span').forEach(element =>{

        element.classList.remove('active')



    })

    if(backgroundLocalItem  == 'true'){


        document.querySelector('.random-background .yes').classList.add('active')
    }else{

        document.querySelector('.random-background .no').classList.add('active')

    }


    
} 
    
    



// toggle open class on gear

let open = document.querySelector('.fa-gear');

let openDiv = document.querySelector('.setting-box');


open.addEventListener('click', function(){

    openDiv.classList.toggle('open')


});


// switch colors
const colorsLi = document.querySelectorAll('.colors-list li');

// loop on all list item
colorsLi.forEach(li =>{

    // click on every list item
    li.addEventListener('click', (e) =>{

        
        // set color on root
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color)

        // set color on local storage
        localStorage.setItem('color_option', e.target.dataset.color);

        // remove active class from all children
        e.target.parentElement.querySelectorAll('.active').forEach( element => {

            element.classList.remove('active');

            // add active class on target
            e.target.classList.add('active')


        })



    });



});



// switch random background option
let randomBackEl = document.querySelectorAll('.random-background span');

// loop on all spans
randomBackEl.forEach(span =>{

    // click on every span
    span.addEventListener('click', (e) =>{

        
        
        // remove active class from all span
        e.target.parentElement.querySelectorAll('.active').forEach( element => {

            element.classList.remove('active');

            // add active class on target
            e.target.classList.add('active');

            if(e.target.dataset.background == 'yes'){
                
                backgroundOption = true;
                randomizeImg ();
                localStorage.setItem("background_option", true);

            }else{

                backgroundOption = false;
                
                clearInterval(backgroundInterval);

                localStorage.setItem("background_option", false)
            }


        })



    });



});








let landingPage = document.querySelector('.landing-page');

// get array of images
let img = ['1.jpg', '2.jpg', '3.jpg' , '4.jpg', '5.jpg', '6.jpg','7.jpg' ,'8.jpg', '9.jpg', '10.jpeg', '11.jpeg', '12.jpg', '13.jpg', '14.jpg'];



// function to randomize images
function randomizeImg (){

    if(backgroundOption == true){

        backgroundInterval = setInterval(() => {

            // get random number
            let randomNumber = Math.floor(Math.random() * img.length);
            
            // change background image url
            landingPage.style.backgroundImage = 'url("images/' + img[randomNumber] +'")';
        
        },2000);


    }

}

randomizeImg ()



// select skills selector
let ourSkills = document.querySelector('.skills');
window.onscroll = function(){

    // skills offset top
    let skillsOffSetTop = ourSkills.offsetTop;

    // skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;
    
    // window height
    let windowHeight = this.innerHeight;

    // window scroll top
    let windowScrollTop = this.pageYOffset;
    
    if(windowScrollTop > (skillsOffSetTop + skillsOuterHeight - windowHeight)){

        let allSkills = document.querySelectorAll('.skill-box .skill-progress span');

        allSkills.forEach(skill =>{

            skill.style.width = skill.dataset.progress


        });

        
    };


};


// create popup with the images
let ourGallery = document.querySelectorAll('.gallery img');
ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // create overlay element 
        let overlay = document.createElement('div');

        // add class to overlay
        overlay.className = 'popup-overlay';

        // append overlay to the body 
        document.body.appendChild(overlay);

        // create the popup
        let popupBox = document.createElement('div');

        //add class to the popup box
        popupBox.className = 'popup-box';

        //add alternative text
        if(img.alt !== null){

            // create heading
            let imgHeading = document.createElement('h3');

            // create text for heading
            let imgText = document.createTextNode(img.alt);

            // append the text to the heading
            imgHeading.appendChild(imgText);

            // append the heading to the popup box
            popupBox.appendChild(imgHeading);

        }

        //create the image
        let popupImage = document.createElement('img');

        //set image sorce
        popupImage.src = img.src;

        // add image to popup box
        popupBox.appendChild(popupImage);

        // append popupBox to the body
        document.body.appendChild(popupBox);

        //create the close ispan
        let closeButton = document.createElement('span');

        // create the close button text;
        let closeButtonText = document.createTextNode('X');

        // append text to close button
        closeButton.appendChild(closeButtonText);

        // add class to close button
        closeButton.className = 'close-button';

        // add close button to popup box
        popupBox.appendChild(closeButton);



    });


});


// close popup
document.addEventListener('click' , function(e){

    if(e.target.className == 'close-button'){

        // remove the current popup
        e.target.parentNode.remove();

        // remove overlay
        document.querySelector('.popup-overlay').remove();
    }



});


// select all bullets
let allBullets = document.querySelectorAll('.nav-bullets .bullet');


// select all links
let allLinks = document.querySelectorAll('.links a');




function scroll(elements){

    
    // loop on all links
    elements.forEach(ele =>{

        ele.addEventListener('click', (e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({


                behavior: "smooth"

            })



        });


    });


}

scroll(allBullets);
scroll(allLinks);


function handleActive(ev){

    // remove active class from all children
    ev.target.parentElement.querySelectorAll('.active').forEach(element =>{

        element.classList.remove('active');


    });

    ev.target.classList.add('active');

}


let bulletsSpan = document.querySelectorAll('.bullets-option span');

let bulletsContainer = document.querySelector('.nav-bullets');

let bulletLocalItem = localStorage.getItem('bullets-option');

if(bulletLocalItem !== null){

    bulletsSpan.forEach(span =>{

        span.classList.remove('active')

    });

    if(bulletLocalItem === 'block'){

        bulletsContainer.style.display = 'block';
        document.querySelector('.bullets-option .yes').classList.add('active')
    }else{

        bulletsContainer.style.display = 'none';
        document.querySelector('.bullets-option .no').classList.add('active')

    }
    
}



bulletsSpan.forEach(span =>{

    span.addEventListener('click' , (e) =>{

                    

        if(span.dataset.display === 'yes'){

            bulletsContainer.style.display = 'block';

            localStorage.setItem('bullets-option', 'block' )


        }else{

            bulletsContainer.style.display = 'none';

            localStorage.setItem('bullets-option', 'none' )
        }

        handleActive(e)

    });

    
    



});



// reset button
document.querySelector('.reset-options').addEventListener('click', function(){

    // localStorage.clear();
    localStorage.removeItem('bullets-option');
    localStorage.removeItem('background_option');
    localStorage.removeItem('color_option');


    // reload window
    window.location.reload();


});



// toggle menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector('.links'); 

toggleBtn.addEventListener('click', function(e)  {
    e.stopPropagation();

    // toggle class "menu-active" on button
    this.classList.toggle('menu-active');

    // toggle class "open" on links
    tLinks.classList.toggle('open');

});



// click anywhere outside menu and toggle button
document.addEventListener('click', function(e){

    if(e.target !== toggleBtn && e.target !== tLinks){

        if(tLinks.classList.contains("open")){


            tLinks.classList.remove('open');

            toggleBtn.classList.remove('menu-active')

        }
    }


})


// stop propagation on the menu
tLinks.onclick = function(e){

    e.stopPropagation();


}




