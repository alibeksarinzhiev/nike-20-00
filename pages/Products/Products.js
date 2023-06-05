


let cart = []

let addCart = (el)=>{



}



let bakseticon = document.querySelector('.bag__img')
let popup = document.querySelector('.popup__basket')
bakseticon.addEventListener('click',()=>{
    popup.classList.toggle('active')
})
console.log(bakseticon)
let box = document.querySelector('.box')
let men =document.querySelector('.header__center__ul__li__men')
fetch('http://localhost:3000/shoes')
.then((res)=>res.json())
.then((json)=>json.forEach((el)=>{

    box.innerHTML+=`
    <div class="card">
    <a href="../../pages/singleProduct/single.html#${el.id}">
    <img src="../../${el.image[0]}" alt="">
    </a>
    <h1 class="name__h1">${el.name}</h1>
    <p class="title">${el.title}</p>
    <p class="category__p">${el.category}</p>
    <p class="category__p">${el.gender}</p>
    <p class="color__p">${el.color}</p>
    <p class="price">${el.price}</p>
    <button type="button" onclick="addCart(${el.name})" class="card__btn">Корзину</button>


</div>
    `

}))

men.addEventListener('click',()=>{
    location.reload()
    box.innerHTML=' '
    fetch('http://localhost:3000/shoes')
    .then((res)=>res.json())
    .then((json)=>json.filter((el)=>{
        return el.gender === "Men"
    }).forEach(el=> {
        box.innerHTML+=`
    <div class="card">
    <a href="../../pages/singleProduct/single.html#${el.id}">
    <img src="../../${el.image[0]}" alt="">
    </a>
    <h1 class="name__h1">${el.name}</h1>
    <p class="title">${el.title}</p>
    <p class="category__p">${el.category}</p>
    <p class="category__p">${el.gender}</p>
    <p class="color__p">${el.color}</p>
    <p class="price">${el.price}</p>
    <button type="button" onclick="()=>addCart(el)" class="card__btn">Корзину</button>

     </div>      `
        console.log(box)
    }
    ))
})

let women =document.querySelector('.header__center__ul__li__women')
women.addEventListener('click',()=>{
    box.innerHTML=''
    fetch('http://localhost:3000/shoes')
    .then((res)=>res.json())
    .then((json)=>json.filter((el)=>{
        return el.gender === "Women"
    }).forEach(el=> {
        box.innerHTML+=`
    <div class="card">
    <a href="../../pages/singleProduct/single.html#${el.id}">
    <img src="../../${el.image[0]}" alt="">
    </a>
    
    <h1 class="name__h1">${el.name}</h1>
    <p class="title">${el.title}</p>
    <p class="category__p">${el.category}</p>
    <p class="category__p">${el.gender}</p>
    <p class="color__p">${el.color}</p>
    <p class="price">${el.price}</p>
    <button type="button" onclick="()=>addCart(el)" class="card__btn">Корзину</button>

     </div>      `
       
    }
    ))
})
