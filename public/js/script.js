document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
  document.querySelectorAll(".s-handels").forEach(handle => {
    handle.classList.toggle("s-handels-open");

  });
  if (document.querySelector(".sidebar").classList.contains("open")) {
  let generateHTML = 
  `  <a href="/views/home.html" style="width: 100%;text-decoration: none;">
     <div class="nav-data">
          Home
        </div>
        </a>
        <a href="/views/collection.html" style="width: 100%;text-decoration: none;">
        <div class="nav-data">
          Collection
        </div>
        </a>
       <a href="/views/about.html" style="width: 100%;text-decoration: none;">
        <div class="nav-data">
          About
        </div>
        </a>
        `
        document.querySelector('.nav').innerHTML = generateHTML
  }else{
    let generateHTML = ''
    document.querySelector('.nav').innerHTML = generateHTML
  }
  setTimeout(() => {
  document.querySelector('.container').addEventListener('click', () => {
    document.querySelector(".sidebar").classList.remove("open");
    
    if (document.querySelector(".sidebar").classList.contains("open")) {
      let generateHTML = 
      `  <a href="/views/home.html" style="width: 100%;text-decoration: none;">
         <div class="nav-data">
              Home
            </div>
            </a>
            <a href="/views/collection.html" style="width: 100%;text-decoration: none;">
            <div class="nav-data">
              Collection
            </div>
            </a>
               <a href="/views/about.html" style="width: 100%;text-decoration: none;">
        <div class="nav-data">
          About
        </div>
        </a>
            `
            document.querySelector('.nav').innerHTML = generateHTML
      }else{
        let generateHTML = ''
        document.querySelector('.nav').innerHTML = generateHTML
      }
    document.querySelectorAll(".s-handels").forEach(handle => {
      handle.classList.remove("s-handels-open");
  
    });
  })
}, 500);

})

document.querySelectorAll('.hexagon').forEach(div => {
  div.addEventListener('mouseover', () => {
      div.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
     div.style.transition = "background-color 0.3s ease-in-out";
     div.style.color = "rgba(221, 221, 221, 0.66)";
  });

  div.addEventListener('mouseout', () => {
      div.style.backgroundColor = "";
      div.style.color = "rgba(13, 13, 13, 0.62)";
  });
});

const selector1 = document.querySelector('.js-color-selector1');
const selector2 = document.querySelector('.js-color-selector2');
const selector3 = document.querySelector('.js-color-selector3');
selector1.addEventListener('click', () => {
  selector1.classList.add('color-selector-open');
  selector1.classList.remove('color-selector-shrink');

  selector2.classList.remove('color-selector-open');
  selector2.classList.add('color-selector-shrink');
  
  selector3.classList.remove('color-selector-open');
  selector3.classList.add('color-selector-shrink');



  let generateHTML =
  `  <div class="content-image1"> 
          <img src="/public/images/Anarc-dark-1.png" class="big-img" alt="Content Image" width="110%" height="110%">
        </div>
         <div class="shadow">
 
        </div>
  `
  document.querySelector('.aaa').innerHTML = generateHTML
});

selector2.addEventListener('click', () => {
  selector2.classList.add('color-selector-open');
  selector2.classList.remove('color-selector-shrink');

  selector1.classList.remove('color-selector-open');
  selector1.classList.add('color-selector-shrink');

  selector3.classList.remove('color-selector-open');
  selector3.classList.add('color-selector-shrink');

  
  let generateHTML =
  `  <div class="content-image1"> 
          <img src="/public/images/Anarc-frost-1.png" class="big-img" alt="Content Image" width="110%" height="110%">
        </div>
         <div class="shadow">
 
        </div>
  `
  document.querySelector('.aaa').innerHTML = generateHTML
});

selector3.addEventListener('click', () => {
  selector3.classList.add('color-selector-open');
  selector3.classList.remove('color-selector-shrink');

  selector2.classList.remove('color-selector-open');
  selector2.classList.add('color-selector-shrink');

  selector1.classList.remove('color-selector-open');
  selector1.classList.add('color-selector-shrink');

  
  let generateHTML =
  `  <div class="content-image1"> 
          <img src="/public/images/Anarc-earthy-1.png" class="big-img" alt="Content Image" width="110%" height="110%">
        </div>
         <div class="shadow">
 
        </div>
  `
  document.querySelector('.aaa').innerHTML = generateHTML
})

