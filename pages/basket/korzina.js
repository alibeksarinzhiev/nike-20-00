let box = document.querySelector('.box')
fetch('http://localhost:3000/shoes/1')
.then((res)=>res.json())
.then((json)=>{
    box.innerHTML+=`
    <div class="card">
    <img src="../../${json.image}" alt="">
    <p class="title">${json.title}</p>
    <p class="category__p">${json.category}</p>
    <p class="price">${json.price}</p>

</div>
    `
})