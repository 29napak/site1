








// ----------------------slideShow--------------------------------------------



const current = document.querySelector("#selected");
const thumbs = document.querySelectorAll(".thumbs div");
const opacity = 0.5;
let count = 1;
let start = true
thumbs[0].classList.add("active")
thumbs.forEach(div => div.addEventListener("click", imgActivate))
thumbs.forEach(div => {
  div.addEventListener("click",()=>{
    if(div.getAttribute('id') === "thumbs1"){
      count = 1
    }else if(div.getAttribute('id') === "thumbs2"){
      count = 2
    }else if(div.getAttribute('id') === "thumbs3"){
      count = 3
    }else{
      thumbs.classList.remove('active')
    }
  })
})

function imgActivate(e) {
  clearInterval(mySlide)
  thumbs.forEach(div => (div.classList.remove("active")));
  e.target.classList.add("active")
  current.src = e.target.getAttribute("data-src");
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 1000);
  setTimeout(()=> thumbs.forEach(div => (div.classList.remove("active"))),5000)
  setTimeout(() => mySlide = setInterval(autoPlay,5000),0); 
}

  function autoPlay() {
    if(count < thumbs.length){
      count++
    }else{
      count=1
    }   
   let isthumbs = document.querySelector("#thumbs"+(count)+"");
   thumbs.forEach(div => (div.classList.remove("active")));
    isthumbs.classList.add("active")
    current.src = "assets/images/slide"+(count)+".png"
    current.classList.add("fade-in");
    setTimeout(() => current.classList.remove("fade-in"), 1000);   

  }

  let mySlide = setInterval(autoPlay,5000)









  // ------------------------------dropDow navigation---------------------------------------

  const navi = document.querySelectorAll('.navi')
  const drops = document.querySelectorAll('.dropDown')
  const line = document.querySelectorAll('.navlist')
  navi.forEach((tab)=>{
    tab.addEventListener('click',()=>{
      const shownav = tab.querySelector('.dropDown')
      drops.forEach((tc)=>{tc.classList.remove('active')})
      shownav.classList.add('active')

      const showline = tab.querySelector('.navlist')
      line.forEach((e)=>{e.classList.remove('active')})
      showline.classList.add('active')
    })
  })

  navi.forEach((tab)=>{
    tab.addEventListener('mouseover',()=>{
      const shownav = tab.querySelector('.dropDown')
      drops.forEach((tc)=>{tc.classList.remove('active')})
      shownav.classList.add('active')

      const showline = tab.querySelector('.navlist')
      line.forEach((e)=>{e.classList.remove('active')})
      showline.classList.add('active') 
    })
  })

  navi.forEach((tab)=>{
    tab.addEventListener('mouseleave',()=>{
      const shownav = tab.querySelector('.dropDown')
      drops.forEach((tc)=>{tc.classList.remove('active')})
      line.forEach((e)=>{e.classList.remove('active') })
      
    })
  })


// --------------------------------hamberger menu-------------------------------

const btn = document.querySelector('.headerArea__container__menuBtn')
const colllap = document.querySelector('.headerArea__container__menuCollap')

btn.addEventListener('click',()=>{
  btn.classList.toggle('active')
  colllap.classList.toggle('active')
})


// ----------------------------tab------------------------


const tabtitle = document.querySelectorAll('.tabtitle__item')
const tabdetail = document.querySelectorAll('.tabdetail__wrap')

tabtitle.forEach((title) =>{
  title.addEventListener('click',()=>{
    const target =document.querySelector(title.dataset.target);
    tabdetail.forEach((tc)=>{
      tc.classList.remove('active')
    })
    target.classList.add('active')
    tabtitle.forEach((tt)=>{
      tt.classList.remove('active')
    })
    title.classList.add('active')
  })
})


// -----------------------------accodion-----------------------------


const acds = document.querySelectorAll('.accodion')

acds.forEach(acds =>acds.addEventListener('click',()=>{
    acds.classList.toggle('active')
  })
)




// const btn = document.querySelector('.headerArea__container__menuBtn')
// const colllap = document.querySelector('.headerArea__container__menuCollap')

// btn.addEventListener('click',()=>{
//   btn.classList.toggle('active')
//   colllap.classList.toggle('active')
// })


// navi.forEach((tab)=>{
//   tab.addEventListener('click',()=>{
//     const shownav = tab.querySelector('.dropDown')
//     drops.forEach((tc)=>{tc.classList.remove('active')})
//     shownav.classList.add('active')

//     const showline = tab.querySelector('.navlist')
//     line.forEach((e)=>{e.classList.remove('active')})
//     showline.classList.add('active')
//   })
// })

