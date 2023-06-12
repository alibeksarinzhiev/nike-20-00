


let cart = []
JSON.parse(localStorage.getItem('basket'))
let setLocal = ()=>{
    localStorage.setItem('basket',JSON.stringify(cart))
}

let search = ''

let inputSearch = document.querySelector('.header__center__input')


let url = 'http://localhost:3000/shoes'


let bakseticon = document.querySelector('.bag__img')

let total = document.querySelector('.total')


let popup = document.querySelector('.popup__basket')
bakseticon.addEventListener('click',()=>{
    popup.classList.toggle('active')
})

let box = document.querySelector('.box')
let men =document.querySelector('.header__center__ul__li__men')

let getProduct=()=>{
    fetch(url + `${search.length?'?title_like='+search:''}`)
        .then((res)=>res.json())
        .then((json)=> {
                box.innerHTML =''
            json.forEach((el) => {


                box.innerHTML += `
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
    ${cart.length}

   
   
${cart.filter((item)=>item.id===el.id).length?`<button class="delete" data-id="${el.id}"><span class="material-symbols-outlined">
delete
</span></button>`:` <button type="button" data-id="${el.id}" class="card__btn">Корзину</button>`}


</div>
    `

            })
            let addCart = document.querySelectorAll('.card__btn')
            let deleteCart = document.querySelectorAll('.delete')

            Array.from(addCart).forEach((el)=>{
                el.addEventListener('click',()=>{

                    cart=[...cart,json.find((item)=>item.id===+el.dataset.id)]
                    setLocal()
                    getProduct()
                })
            })
            Array.from(deleteCart).forEach((el)=>{
                el.addEventListener('click',()=>{
                    cart=cart.filter((item)=>item.id!==+el.dataset.id)
                    getProduct()
                })
            })
        }
        )
    getBasket()
}
inputSearch.addEventListener('change',(e)=>{
    search = e.target.value
    getProduct()
})


let getBasket = ()=>{
    popup.innerHTML=''
    cart.forEach((el)=>{
        popup.innerHTML+=`
        <div class="card">
    <img src="../../${el.image[0]}" alt="">
    <p class="title">${el.title}</p>
    <p class="category__p">${el.category}</p>
    <p class="price-bakset">${el.price}</p>

</div>`


    }
    )

    total.textContent = cart.reduce((acc,rec)=>{
        return acc+ +rec.price
    },0)




}


getBasket()
getProduct()



    






