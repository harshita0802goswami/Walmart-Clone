 import { navbar } from '../nav.js';
 document.querySelector('.nav').innerHTML = navbar();

import { footer } from '../footer.js';
document.querySelector('.footer').innerHTML = footer();

let ProdcutData = JSON.parse(localStorage.getItem("detail_me"))

function displayData(ele){

    const image1=document.getElementById("image1");
    image1.src=ele.Product_imgUrl

    image1.addEventListener("mouseover", function(){
        mainIG.src= ele.Product_imgUrl
        
    })
    image1.addEventListener("mouseout", function(){
        mainIG.src = ele.Product_imgUrl
    })

    const image2=document.getElementById("image2");
    image2.src=ele.Product_img1
    image2.addEventListener("mouseover", function(){
        mainIG.src= ele.Product_img1
        
    })
    image2.addEventListener("mouseout", function(){
        mainIG.src = ele.Product_imgUrl
    })

    const image3=document.getElementById("image3");
    image3.src=ele.Product_img2

    image3.addEventListener("mouseover", function(){
        mainIG.src= ele.Product_img2
        
    })
    image3.addEventListener("mouseout", function(){
        mainIG.src = ele.Product_imgUrl
    })

    const image4=document.getElementById("image4");
    image4.src=ele.Product_img3

    image4.addEventListener("mouseover", function(){
        mainIG.src= ele.Product_img3
        
    })
    image4.addEventListener("mouseout", function(){
        mainIG.src = ele.Product_imgUrl
    })

    var mainIG = document.getElementById("cocImg")
    mainIG.src = ele.Product_imgUrl

    var brand = document.getElementById("coca")
    brand.textContent = ele.Brand


    var ProductName = document.getElementById("brandName")
    ProductName.textContent = ele.Product_Name

    var Rate = document.getElementById("rating")
    Rate.innerText = ele.Rating

    var Price = document.getElementById("Price1")
    Price.innerText = "Now $"+ele.List_Price

    const cartBtn=document.getElementById("bt3");

    cartBtn.addEventListener('click',cartPage);
    var count = 1;
    function cartPage(){
    cartBtn.innerHTML = ""
    let cartdiv = document.createElement("div");
    let subbtn = document.createElement("button");
    let pdcount = document.createElement("div")
    let plubtn = document.createElement("button");

    subbtn.innerText = "-"
    plubtn.innerText = "+"
    pdcount.innerText = count;



    subbtn.addEventListener('click', su);
    plubtn.addEventListener('click', plu);
    function su() {
      if (ele.count > 0) {
        let local = JSON.parse(localStorage.getItem('product_added')) || [];

        let flag = false;
        local.map(function (el) {
          if (el.idd == ele.idd) {
            flag = true;
            ele.count--;
            el.count--;
            console.log(el.idd, ele.idd);
          }
        });

        if (flag == false) {
          local.push(ele);
        }
        localStorage.setItem('product_added', JSON.stringify(local));

        addfun();
      }
      // console.log('adx');
      if (ele.count == 0) {
        let local = JSON.parse(localStorage.getItem('product_added')) || [];
        let r = local.filter(function (o) {
          return o.count > 0;
        });
        localStorage.setItem('product_added', JSON.stringify(r));
        pdcount.innerHTML = '';

        pdcount.append();
        ele.count++;
      }
    }
    function plu() {
      
        pdcount.innerHTML = '';
      // let local = product.filter(function (ele) {
      //   return ele.count > 1;
      // });
      let local = JSON.parse(localStorage.getItem('product_added')) || [];

      let flag = false;
      local.map(function (el) {
        if (el.idd == ele.idd) {
          flag = true;
          ele.count++;
          el.count++;
          console.log(el.idd, ele.idd);
        }
      });

      if (flag == false) {
        local.push(ele);
      }
      // local.push(ele);

      localStorage.setItem('product_added', JSON.stringify(local));
      cartBtn.append(subbtn, ele.count, plubtn);
    }

    cartBtn.addEventListener('click', addfun);

    function addfun() {
      // console.log('s');

      cartBtn.innerHTML = '';
      cartBtn.append(subbtn, ele.count, plubtn);

      // count = 1;
    }

        // window.location.href="";

    }


}

displayData(ProdcutData)

 



   var drop1 = document.getElementById("dr1")
   var count = 1; 
   var count2 = 1 
   var drop2 = document.getElementById("dr2").addEventListener("click", function(){
    var cont2 = document.getElementById("cn2")
    if(count2%2==0){
         cont2.style.display = "none"
    }
    else{
        cont2.style.display = "block"
    }
    count2++;
   })
   drop1.addEventListener("click", function(){
    var cont1 = document.getElementById("cn1")
    if(count%2==0){
         cont1.style.display = "none"
    }
    else{
        cont1.style.display = "block"
    }
    count++;
      
      
   })
 

   
   
 






















