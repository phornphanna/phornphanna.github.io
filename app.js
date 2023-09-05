
//  make icon bar for click menu when responsive 
let barBtn = document.querySelector(".icon_bar");
let closing = document.querySelector(".closing");
let navigation = document.querySelector(".navigation") ;
let menuSlider = () =>{
    let check = navigation.classList.contains("active_menu") ;
    if(check){
   navigation.classList.remove("active_menu");
   console.log(navigation)
    } else {
        navigation.classList.add("active_menu");
    }
};
barBtn.addEventListener("click" , menuSlider);
closing.addEventListener("click" , menuSlider);

//  end of style slider menu

//  start style of search popup 
// use arraySearchList for display data on popup search list
let arraySearchList = [
       {'list' : 'popular link' , 'link' : ''},
       {'list' : 'find a movies' , 'link' : ''},
       {'list' : 'find a cinema' , 'link' : ''},
       {'list' : 'find a coming soon movies' , 'link' : ''},
       {'list' : 'promotion' , 'link' : ''},
];
let searchList = document.querySelector(".search_list");
let searchBtn1 = document.querySelector(".menu > li > .search");
let searchBtn2 = document.querySelector(".menu_right > .search_icon > .search");
let searchBox = document.querySelector(".box_search");
let closingPopupSearch =  document.querySelector(".box_search > .sub_search > .closing");
  let funSearchList = () =>{
    let checkList = searchBox.classList.contains("search_active");
    if (checkList){
        searchBox.classList.remove("search_active");
    } else {
        searchBox.classList.add("search_active")
    }
    let newArraySearchList = arraySearchList.map((e)=>{
         return `
         <ul class = "popular_link">
         <li>${e.list}</li>
         </ul> 
         `;
    }).join('');
    searchList.innerHTML = newArraySearchList;
  };
  closingPopupSearch.addEventListener("click" , funSearchList);
  searchBtn1.addEventListener("click" , funSearchList);
  searchBtn2.addEventListener("click" , funSearchList);
//  end of  make list of search and event clcik ======================

//  start  make slider animation     
const image = document.querySelectorAll(".container > img");
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');
const allDot = document.querySelectorAll('.dot');
 let boxSlide = document.querySelector(".slider");
let counter = 0 ;
function nextSlide(){
image[counter].style.animation = "nextOut 0.5s forwards";
if(counter == image.length - 1){
   counter = 0 ;
} else {
   counter++;
}
image[counter].style.animation  = 'nextIn 0.5s forwards';
pointerDot();
}
//  function nextSlide use for make slider to next 
nextBtn.addEventListener("click" , nextSlide)
//  next add event use when refreence of name function 
//  start make function backslide for for slider 
function backSlide(){
image[counter].style.animation = 'backOut 0.5s forwards';
if(counter == 0 ){
counter = image.length - 1;
} else {
counter--;
}
image[counter].style.animation = 'backIn 0.5s forwards';
pointerDot();
}
//  end of function back slide use for  back slider 
backBtn.addEventListener("click" , backSlide);
//  backbtnadd event use for make event click with refrence of function 
function autoSliding(){
test = setInterval(function(){
nextSlide();
pointerDot();
} , 1500);
}
// auto sliding use for interval for set up of time 
// autoSliding();
//  declare function auto slide for auto for ever 
boxSlide.addEventListener("mouseover", function(){
clearInterval(test);
});
//  stop sliding auto when put mouse on sliding 
//  clearInterval is method for clear interval that set on 
// auto sliding function and delte when we want to call  our we do need declare datatype so we can call our function
boxSlide.addEventListener("mouseleave" , function(){
autoSliding();
});
//  function use auto when when leave mouse on sliding 

function pointerDot(){
for (let i = 0; i< allDot.length ; i++){
allDot[i].className =  allDot[i].className.replace("active" ,"");
}
allDot[counter].className += " active"
}
//  pointerDot function use for clear all class have active 
// and add class name to active by counter that index of image slider 
allDot.forEach(function(dot){
dot.addEventListener("click" , function(e){
 e.target.classList.add("active")
 let dotIndex = e.currentTarget.getAttribute("attr");
 if (dotIndex > counter){
   image[counter].style.animation = "nextOut 0.5s forwards";
  counter = dotIndex;
  image[counter].style.animation = "nextIn 0.5s forwards";
  
 }else if (dotIndex == counter){
  return ;
 } else{
   image[counter].style.animation = "backOut 0.5s forwards";
   counter = dotIndex;
   image[counter].style.animation = "backIn 0.5s forwards";

 }
//   make it when we click to dot slider  point to slide image that have this index
 pointerDot();
//  use pointer dot when  we do not click we will auto run 
});
});
// end of slider ======================
// start fetch api data to adverties
 let boxAdvertise = document.querySelector(".adv");
 let arrayAdvertise = [
  {'adv_img' : 'photo/adv1.jpg', 'link' : 'https://cisc.school/'},
  {'adv_img' : 'photo/adv2.jpg',  'link' : 'https://www.wingbank.com.kh/en/'},
  {'adv_img' : 'photo/adv4.jpg','link' : 'https://www.kdsb.com.kh/kdsb-en/about-us/about-us' },
  {'adv_img' : 'photo/adv5.jpg', 'link' : 'https://www.sbilhbank.com.kh/en/'},
  {'adv_img' : 'photo/adv6.jpg', 'link' : 'https://www.sbilhbank.com.kh/en/'},
  {'adv_img' : 'photo/adv7.jpg', 'link' : 'https://www.cbcl.com.kh/'},
  {'adv_img' : 'photo/adv8.jpg', 'link' : 'https://www.princebank.com.kh/'},
];
let newArrayAdvertise =  arrayAdvertise.map(function(e){
return  `
<a href="${e.link}" target="_blank"><img src="${e.adv_img}" alt=""></a>
`;
}).join('');
boxAdvertise.innerHTML= newArrayAdvertise;
//  end of adverties fetch api
  // make data of card 
  let arrayCard = [
    {
      'img' : 'photo/cinema1.jpg',
      'movie_date' : '24 aug 2023',
      'movie_name' : 'The House',
      'movie_type' : 'horror',
      'movie_time' : '1 HR. 36 MINS',
      'category'   : 'now',
      'link' : 'https://www.youtube.com/watch?v=n8VX3cB5jN8',
      'star' : `
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>`,
    },
     {
      'img' : 'photo/4dmax1.jpg',
      'movie_date' : '24 aug 2023',
      'movie_name' : 'Grand Turismo',
      'movie_type' : 'action / Thriller / Romance',
      'category'   : '4d',
      'link' : 'https://www.youtube.com/watch?v=7m9oLnN4M4M',
      'star' : `
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      `,
    },
    {
      'img' : 'photo/cinema3.jpg',
      'movie_date' : '18 aug 2023',
      'movie_name' : 'long live love',
      'movie_type' : 'comedy',
      'movie_time' : '2 HR. 14 MINS',
      'category'   : 'now',
      'link' : 'https://www.youtube.com/watch?v=W5rsdp5h5K8&t=1s',
      'star' : `
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>`,
    },
    {
      'img' : 'photo/cinema4.jpg',
      'movie_date' : '18 aug 2023',
      'movie_name' : 'Lost In the Stars',
      'movie_type' : 'Thriller / crime',
      'movie_time' : '2 HR. 02 MINS',
      'category'   : 'now',
      'link' : 'https://www.youtube.com/watch?v=RKnTodRgz_s',
      'star' : `
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>`,
    },
   
   {
    'img' : 'photo/4dmax2.jpg',
    'movie_date' : '17 aug 2023',
    'movie_name' : 'blue beetle',
    'movie_type' : 'Action / Advanture / Scr-fi ',
    'movie_time' : '2 HR. 08 MINS',
    'category'   : '4d',
    'link' : 'https://www.youtube.com/watch?v=IbY-Dun7jVo',
    'star' : `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    `,
  },
   {
    'img' : 'photo/cinema6.jpg',
    'movie_date' : '14 aug 2023',
    'movie_name' : 'talk to me',
    'movie_type' : 'horror',
    'movie_time' : '1 HR. 35 MINS',
    'category'   : 'now',
    'link' : 'https://www.youtube.com/watch?v=XJ_iuOHtXAY&t=1s',
    'star' : `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>        `,
  },
   {
    'img' : 'photo/cinema7.jpg',
    'movie_date' : '10 aug 2023',
    'movie_name' : 'love you a millon times',
    'movie_type' : 'Romance',
      'movie_time' : '1 HR. 30 MINS',
      'category'   : 'now',
      'link' : 'https://www.youtube.com/watch?v=h90HSkCSsjc',  
      'star' : `
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      `,
    },
    
    {
      'img' : 'photo/cinema8.jpg',
      'movie_date' : '10 aug 2023',
      'movie_name' : 'Tiger runningtttg',
      'movie_type' : 'Comedy',
      'movie_time' : '1 HR. 47 MINS',
      'category'   : 'now',
      'link' : 'https://www.youtube.com/watch?v=IKBquPNwhg4',
      'star' : `
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      `,
    },
  //  ==============
  {
    'img' : 'photo/cinema_soon1.jpg',
    'movie_date' : '25 aug 2023',
    'movie_name' : 'The Moon',
    'movie_type' : 'Drama',
    'movie_time' : '2 HR. 09 MINS',
    'category'   : 'soon',
    'star' : `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    `,
 },
  {
  'img' : 'photo/cinema_soon2.jpg',
  'movie_date' : '25 aug 2023',
  'movie_name' : 'The Tank',
  'movie_type' : 'Thriller / Horror',
  'movie_time' : '1 HR. 40 MINS',
  'category'   : 'soon',
  'link' : 'https://www.youtube.com/watch?v=-1rewz0ECvg',
  'star' : `
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  `, 
},
   {
'img' : 'photo/cinema_soon3.jpg',
'movie_date' : '26 aug 2023',
'movie_name' : "DOremon The Movie: Nobit's Sky Utopia",
'movie_type' : 'Comedy / advanture / Animation',
'movie_time' : '1 HR. 47 MINS',
'category'   : 'soon',
'link' : 'https://www.youtube.com/watch?v=IeHilFybTfY',
'star' : `
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
`,  
},
 {
'img' : 'photo/cinema_soon4.jpg',
'movie_date' : '28 aug 2023',
'movie_name' : 'Concrete Utopia',
'movie_type' : 'Horror',
'movie_time' : '2 HR. 10 MINS',
'category'   : 'soon',
'link' :'https://www.youtube.com/watch?v=fpBCsNVaPBo',
'star' : `
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i>
`,    
},
 {
'img' : 'photo/cinema_soon5.jpg',
'movie_date' : '30 aug 2023',
'movie_name' : 'KangDaniel: My Parade',
'movie_type' : '-',
'movie_time' : '1 HR. 42 MINS',
'category'   : 'soon',
'link' : 'https://www.youtube.com/watch?v=tbW3TYnmv80&t=2s',
'star' : `
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
`,    
},

{
'img' : 'photo/cinema_soon6.jpg',
'movie_date' : '30 aug 2023',
'movie_name' : 'Ms. Shampoo',
'movie_type' : 'Comedy / Romance',
'movie_time' : '2 HR. 0 MINS',
'category'   : 'soon',
'link' : 'https://www.youtube.com/watch?v=XBie9MZhSW4',
'star' : `
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i>
`,    
},
{
'img' : 'photo/cinema_soon7.jpg',
'movie_date' : '31 aug 2023',
'movie_name' : 'Para Betina Pengikut Iblis',  
'movie_type' : 'Horror',
'movie_time' : '1 HR. 30 MINS',
'category'   : 'soon',
'link' : 'https://www.youtube.com/watch?v=iIZxIJqC59c&t=2s',
'star' : `
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i>
`,    
},
{
'img' : 'photo/cinema_soon8.jpg',
'movie_date' : '31 aug 2023',
'movie_name' : 'Dance Till You drop',
'movie_type' : 'Drama',
'movie_time' : '1 HR. 30 MINS',
'category'   : 'soon',
'link' : 'https://www.youtube.com/watch?v=WSDtrJBR_xc',
'star' : `
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i>
`,      
},
{
'img' : 'photo/cinema_soon9.jpg',
'movie_date' : '31 aug 2023',
'movie_name' : 'The Equlizer 3',
'movie_type' : 'Action / crime / Thriller',
'movie_time' : '1 HR. 0 MINS',
'category'   : 'soon',
'link' : 'https://www.youtube.com/watch?v=e-L1FRDLBHA',
'star' : `
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i>
`,     
},
{
'img' : 'photo/cinema_soon10.jpg',
'movie_date' : '07 sep 2023',
'movie_name' : 'The nun',
'movie_type' : 'Horror',
'movie_time' : '1 HR. 0 MINS',
'category'   : 'soon',
'link' : 'https://www.youtube.com/watch?v=DOPDzuSai1M&t=6s',
'star' : `
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i>
`,     
},
// =============== for kid 
{
  'img' : 'photo/kid.jpg',
  'movie_date' : '09 Nov 2023',
  'movie_name' : 'The Marvels',
  'movie_type' : 'acition / advanture',
  'movie_time' : '1 HR. 0 MINS',
  'category'   : 'kid',
  'link' :'https://www.youtube.com/watch?v=LUOV6xJzabg',
  'star' : `
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star-half-stroke"></i>
  `,    
},
  {
    'img' : 'photo/kid2.jpg',
    'movie_date' : '22 Dec 2023',
    'movie_name' : 'Migration',
    'movie_type' : 'acition / advanture',
    'movie_time' : '1 HR. 0 MINS',
    'category'   : 'kid',
    'link' : 'https://www.youtube.com/watch?v=pA3KLOAb-I8',
    'star' : `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    `,     
  },
    {
      'img' : 'photo/kid3.jpg',
      'movie_date' : '26 Nov 2023',
      'movie_name' : 'Trolls 3: Band Together',
      'movie_type' : 'acition / comedy',
      'movie_time' : '1 HR. 0 MINS',
      'category'   : 'kid',
      'link' : 'https://www.youtube.com/watch?v=pA3KLOAb-I8&t=2s',
      'star' : `
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      `,     
    },
      {
        'img' : 'photo/kid4.jpg',
        'movie_date' : '23 Nov 2023',
        'movie_name' : 'Wish',
        'movie_type' : 'Animations',
        'movie_time' : '1 HR. 1 MINS',
        'category'   : 'kid',
        'link' : 'https://www.youtube.com/watch?v=pA3KLOAb-I8&t=3s',
        'star' : `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        `,     
      },

];


let card = document.querySelector(".box_card > .card");
console.log(card)
function showingCard(cardItem){
      let newCard = cardItem.map(function(e){
          return `
          <aside class="sub_card">
                          <main class="card_hover">
                            <p class="play"><i class="fa-solid fa-play"></i></p>
                            <p><i class="fa-solid fa-tag"></i><span>${e.movie_type}</span></p>
                            <p><i class="fa-regular fa-clock"></i><span>${e.movie_date}</span></p>
                            <p class = "star">${e.star}</p>
                            <a href="${e.link}"><button>Trailer</button></a>
                          </main>
                            <main class="card_base">
                              <img src="${e.img}" alt="">
                              <p>${e.movie_date}</p>
                              <p>${e.movie_name}</p>
                            </main>
                    </aside> 
          `;
      }).join("");
    card.innerHTML = newCard;
}

 let allBtn = document.querySelectorAll('.btn');
  let boxBtn = document.querySelector(".box_btn");
  boxBtn.addEventListener("click" , function(btn){
     let checkBtn = btn.target.dataset.id;
        allBtn.forEach(function(e){
             if(checkBtn){
              e.classList.remove('active');
              btn.target.classList.add('active');
             }
        });
  });
   allBtn.forEach(function(btn){
    btn.addEventListener("click" , function(e){
      let checkFilter = e.target.dataset.id;
        let newArrayCard = arrayCard.filter(function(item){
                  return item.category == checkFilter;
        });  
       showingCard(newArrayCard);
       if(checkFilter == 'all'){
        showingCard(arrayCard);
       }
   }); 
  });

window.addEventListener("DOMContentLoaded" , function(){
 showingCard(arrayCard);
});
//  end of fecth data to html 
//  start make card member in group 
var member = [
  {
  "name" :'Name  : Phorn Phanna',
  'major':'Major : Software Engineering',
  'Age' : 'Age   : 21 Year old',
  'img' : 'photo/phanna.jpg',
  'detail' : `
  He Was born at 26 Nov 2004 <br>
  In Present He live at St Rada ,
  PhnomPenh Thmey,Khan Toulkork ,
  Phnom Penh.
  `,
 },
  {
  "name" : 'Name  : SOMLENG PHALPITITHYA',
  'major' :'Major : Software engineering ',
  'Age' :  'Age   : 21 Year Old',
  'img' : 'photo/tiya.JPG',
  'detail' : `
  He Was born at 07 Sep 2004 <br>
  In Present He live at #C11 , St598
  ,Sangkat Toulsongke,Khan RurseyKeo
  ,Phnom Penh.
  `,
},
  {
  "name" :'Name  : CHOUEN SORIYA',
  'Age' : 'Age   : 19 year old',
  'major':'Major : SoftWare Engineering',
  'img' : 'photo/soriya.jpg',
  'detail' : `
  He Was born at 14 June 2004 <br>
  In Present He live at FX8H+662 Phnom Penh.
  ` ,
},
  {
  "name" :'Name  : Am chedthameanrith',
  'Age' : 'Age   : 19 year old',
  'major':'Major : Software engineering',
  'img' : 'photo/rith.jpg',
  'detail' : `
  He Was born at 28 Mar 2004 <br>
  In Present He  live at #L15 St 202,
  Terk lork3,Khan Toulkork,Phnom Penh.
  ` ,
},

  {
  "name": 'Name  : HENG MENG KHOUNG',
  'Age' : 'Age   : 21 year old',
  'major':'Major : SoftWare Engineering',
  'img' : 'photo/khong.jpg',
  'detail' : `
  He Was born at 02 Dec 2002  <br>
  In Present He live at #M176 St Oland6,
  Sangkat koukkleang ,Khan sensok,Phnom Penh.
  `,
 }
 ] ;
 var txt = 0 ;
 let nextStep = document.querySelector(".next_step");
 let comeBack = document.querySelector(".come_back");
 let memberImage = document.querySelector(".member_card .image");
 let memberName = document.querySelector(".info_personal .name");
 let memberSubject = document.querySelector(".info_personal .major");
 let memberAge = document.querySelector(".info_personal  .age");
 let memberDetail = document.querySelector(".info_personal .detail");
 console.log(memberDetail ,nextStep , comeBack)
 let RandomIndexMember= ()=> Math.floor(Math.random() * member.length);
 window.addEventListener("DOMContentLoaded", function(){ 
  let randomIndex = RandomIndexMember();
   memberImage.src= member[randomIndex].img;
    memberName.innerHTML = member[randomIndex].name;
    memberAge.innerHTML = member[randomIndex].Age;
    memberDetail.innerHTML = member[randomIndex].detail;
    memberSubject.innerHTML = member[randomIndex].major;
 });

nextStep.addEventListener("click" ,  nextStepSlider);
function nextStepSlider (){
  
  if(txt == member.length - 1){
    txt  = 0 ;
  } else {
    txt ++;
  }
  memberImage.src= member[txt ].img;
    memberName.innerHTML = member[txt ].name;
    memberAge.innerHTML = member[txt ].Age;
    memberDetail.innerHTML = member[txt ].detail;
    memberSubject.innerHTML = member[txt ].major;
}


comeBack.addEventListener("click" ,  BackStepSlider);
function BackStepSlider (){
  if(txt  == 0){
    txt  = member.length - 1 ;
  } else {
    txt --;
  }
  memberImage.src= member[txt].img;
    memberName.innerHTML = member[txt].name;
    memberAge.innerHTML = member[txt].Age;
    memberDetail.innerHTML = member[txt].detail;
    memberSubject.innerHTML = member[txt].major;
}

