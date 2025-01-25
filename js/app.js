        /*=============== SHOW MENU ===============*/
        const showMenu = (toggleId, navId) =>{
            const toggle = document.getElementById(toggleId),
                  nav = document.getElementById(navId)
         
            toggle.addEventListener('click', () =>{
                // Add show-menu class to nav menu
                nav.classList.toggle('show-menu')
                // Add show-icon to show and hide menu icon
                toggle.classList.toggle('show-icon')
            })
         }
         
         showMenu('nav-togg_le','nav-me-nu')



         /*Carousel**/

         let nextDom = document.getElementById('carousel__next');
         let prevDom = document.getElementById('carousel_prev');
         let carouselDom = document.querySelector('.container__carousel');
         let listItemDom = document.querySelector('.carousel__list');
         let thumbnailDom = document.querySelector('.thumbnail');
     
         nextDom.onclick = function(){
             showSlider('carousel__next');
         }
         prevDom.onclick = function(){
             showSlider('carousel_prev');
         }
         let timeRunning = 3000;
         let runTimeOut;
     
     
         function showSlider(type){
             let itemSlider = document.querySelectorAll('.carousel__item');
             let itemThumbnail = document.querySelectorAll('.thumbnail__item');
     
             if(type === 'carousel__next'){
                 listItemDom.appendChild(itemSlider[0]);
                 thumbnailDom.appendChild(itemThumbnail[0]);
                 
             }else{
                 let positionLastItem = itemSlider.length - 1;
                 listItemDom.prepend(itemSlider[positionLastItem]);
                 thumbnailDom.prepend(itemThumbnail[positionLastItem])
             }
     
             clearTimeout(runTimeOut);
             runTimeOut = setTimeout(() =>{
                 carouselDom.classList.remove('next');
             },timeRunning)
         }


