




let container = document.querySelector('.single .container')



let db = fetch(`http://localhost:3000/shoes/${location.hash.slice(1)}`)
db.then(res=>res.json())
.then((json)=>getInfo(json))



let getInfo = (json)=>{

   
    container.innerHTML+=`
         <div class="nike__img__left">
         
                   ~
                
                </div>
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
                    <button class ="size__btn1">Add to Bag</button>
                    <button class ="size__btn2">Favourite</button>
    
                </div>`
}

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

//             </div>
//     `

// })