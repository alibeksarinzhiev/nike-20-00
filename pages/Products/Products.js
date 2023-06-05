
let post = (el)=>{
    fetch('http://localhost:3000/basket', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": el.id,
            "image": el.image,
            "name": el.name,
            "title": el.title,
            "category": el.category,
            "gender": el.gender,
            "color": el.color,
            "price": el.price
        })
    })
}


let box = document.querySelector('.box')
fetch('http://localhost:3000/shoes')
.then((res)=>res.json())
.then((json)=>json.forEach((el)=>{
    box.innerHTML+=`
    <div class="card">
    <a href="http://127.0.0.1:5500/pages/singleProduct/single.html#${el.id}">
    <img src="../../${el.image[0]}" alt="">
    </a>
    <h1 class="name__h1">${el.name}</h1>
    <p class="title">${el.title}</p>
    <p class="category__p">${el.category}</p>
    <p class="category__p">${el.gender}</p>
    <p class="color__p">${el.color}</p>
    <p class="price">${el.price}</p>
    <button type="button" onClick="${()=>post(el)}" class="card__btn">Корзину</button>

</div>
    `
}))

let men =document.querySelector('.header__center__ul__li__men')
men.addEventListener('click',()=>{
    box.innerHTML=''
    fetch('http://localhost:3000/shoes')
    .then((res)=>res.json())
    .then((json)=>json.filter((el)=>{
        return el.gender === "Men"
    }).forEach(el=> {
        box.innerHTML+=`
    <div class="card">
    <a href="http://127.0.0.1:5500/pages/singleProduct/single.html#${el.id}">
    <img src="../../${el.image[0]}" alt="">
    </a>
    <h1 class="name__h1">${el.name}</h1>
    <p class="title">${el.title}</p>
    <p class="category__p">${el.category}</p>
    <p class="category__p">${el.gender}</p>
    <p class="color__p">${el.color}</p>
    <p class="price">${el.price}</p>
    <button > ${Корзину}</button>

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
    <a href="http://127.0.0.1:5500/pages/singleProduct/single.html#${el.id}">
    <img src="../../${el.image}" alt="">
    </a>
    
    <h1 class="name__h1">${el.name}</h1>
    <p class="title">${el.title}</p>
    <p class="category__p">${el.category}</p>
    <p class="category__p">${el.gender}</p>
    <p class="color__p">${el.color}</p>
    <p class="price">${el.price}</p>

     </div>      `
       
    }
    ))
})