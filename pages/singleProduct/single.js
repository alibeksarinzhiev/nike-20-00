




let container = document.querySelector('.single .container')



// let db = fetch(`http://localhost:3000/shoes/${location.hash.slice(1)}`)
// db.then(res=>res.json())
// .then((json)=>getInfo(json))
let db1 = fetch(`http://localhost:3000/shoes/${location.hash.slice(1)}`)
db1.then(res=>res.json())
    .then((json)=>{
        let divimg = document.createElement('div')
        divimg.setAttribute('class','nike__img__left')
        json.image.forEach((el)=>{
            divimg.innerHTML+=`
            <img src="../../${el}" alt=''>
            `
        })
       container.prepend(divimg)

        container.innerHTML+=`
       
                <div class="nike__right">
                    <h1>${json.title}</h1>
                    <h3>${json.category}</h3>
                    <h4>${json.price}</h4>
                    <p
                    <p>incl. of taxes<br>(Also includes all applicable duties)</p>
                    <div class="size">
    
                        <h5>Select Size</h5>
                        <div>
                            <ul>
                                <li>40</li>
                                <li>41</li>
                                <li>42</li>
                            </ul>
                        </div>
                        
    
    
                    </div>
                    <div class="size__btns"> 
                    
                    <button class ="size__btn1">Add to Bag</button>
                    <button class ="size__btn2">Favourite</button>
                    </div>
                </div>`
    })




// let getInfo = (json)=>{
//
//
//
//
//     container.innerHTML+=`
//          <div class="nike__img__left">
//
//
//                 </div>
//                 <div class="nike__right">
//                     <h1>${json.title}</h1>
//                     <h3>${json.category}</h3>
//                     <h4>${json.price}</h4>
//                     <p
//                     <p>incl. of taxes<br>(Also includes all applicable duties)</p>
//                     <div class="size">
//
//                         <h5>Select Size</h5>
//                         <div>
//                             <ul>
//                                 <li>40</li>
//                                 <li>41</li>
//                                 <li>42</li>
//                             </ul>
//                         </div>
//
//
//
//                     </div>
//                     <button class ="size__btn1">Add to Bag</button>
//                     <button class ="size__btn2">Favourite</button>
//
//                 </div>`
//
//
// }

// fetch('http://localhost:3000/shoes/2')
// .then((rec)=>rec.json())
// .then((json)=>{
//     container.innerHTML+=`
//      <div class="nike__img__left">
//                 <img class="nike__img1" src="./img/Frame.png" alt="">
            
//             </div>
//             <div class="nike__right">
//                 <h1>${json.title}</h1>
//                 <h3>${json.category}</h3>
//                 <h4>${json.price}</h4>
//                 <p
//                 <p>incl. of taxes<br>(Also includes all applicable duties)</p>
//                 <div class="size">

//                     <h5>Select Size</h5>
//                     <div>
//                         <ul>
//                             <li>40</li>
//                             <li>41</li>
//                             <li>42</li>
//                         </ul>
//                     </div>
                    



//                 </div>
//                 <button class ="size__btn1">Add to Bag</button>
//                 <button class ="size__btn2">Favourite</button>
//                 <p class = "single__text">Layer on style with the Air Max 97. The cracked leather and soft suede update the iconic design while the original look (inspired by Japanese bullet trains and water droplets) still takes centre stage. Easy-to-style colours let you hit the streets quickly.</p>
//                 <p>Colour Shown: Flat Pewter/<br>Light Bone/Black/White
// //                 </div>
// //                 <button class ="size__btn1">Add to Bag</button>
// //                 <button class ="size__btn2">Favourite</button>


// //             </div>
//     `

// })