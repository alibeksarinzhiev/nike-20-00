

let box = document.querySelector('.box')
fetch('http://localhost:3000/shoes')
.then((res)=>res.json())
.then((json)=>json.forEach((el)=>{
    box.innerHTML+=`
    <div class="card">
    <img src="../../${el.image}" alt="">
    <h1 class="name__h1">${el.name}</h1>
    <p class="title">${el.title}</p>
    <p class="category__p">${el.category}</p>
    <p class="category__p">${el.gender}</p>
    <p class="color__p">${el.color}</p>
    <p class="price">${el.price}</p>

</div>
    `
}))
let men =document.querySelector('.header__center__ul__li__men')
men.addEventListener('click',()=>{
    box.innerHTML+=''
    fetch('http://localhost:3000/shoes')
    .then((res)=>res.json())
    .then((json)=>json.filter((el)=>{
        return el.gender === "Men"
    }).forEach(el=> {
        box.innerHTML+=`
    <div class="card">
    <img src="../../${el.image}" alt="">
    <h1 class="name__h1">${el.name}</h1>
    <p class="title">${el.title}</p>
    <p class="category__p">${el.category}</p>
    <p class="category__p">${el.gender}</p>
    <p class="color__p">${el.color}</p>
    <p class="price">${el.price}</p>

     </div>      `
        console.log(box)
    }
    ))
})