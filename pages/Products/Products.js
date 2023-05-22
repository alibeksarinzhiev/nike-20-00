

let box = document.querySelector('.box')
fetch('http://localhost:3000/shoes')
.then((res)=>res.json())
.then((json)=>json.forEach((el)=>{
    box.innerHTML+=`
    <div class="card">
    <h1>${el.name}</h1>
    <img src="../../${el.image}" alt="">
</div>
    `
}))