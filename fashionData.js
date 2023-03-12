var container = document.getElementById("appendData");

// document.getElementById("unbranded").addEventListener("click",()=>{
//     localStorage.setItem("brand","Unbranded");
//     getData();
// })
// document.getElementById("nike").addEventListener("click",()=>{
//     localStorage.setItem("brand","Nike");
//     getData();
// })
// document.getElementById("adidas").addEventListener("click",()=>{
//     localStorage.setItem("brand","Adidas");
//     getData();
// })
// document.getElementById("coach").addEventListener("click",()=>{
//     localStorage.setItem("brand","Coach");
//     getData();
// })
// document.getElementById("jordan").addEventListener("click",()=>{
//     localStorage.setItem("brand","Jordan");
//     getData();
// })
var brand ;
document.getElementById("nike").addEventListener("click",()=>{
    brand = "Nike";
    getData(inp,brand);
    
})
document.getElementById("adidas").addEventListener("click",()=>{
    brand = "Adidas";
    getData(inp,brand);
})
document.getElementById("jordan").addEventListener("click",()=>{
    brand = "Jordan";
    getData(inp,brand);
})
document.getElementById("coach").addEventListener("click",()=>{
    brand = "Coach";
    getData(inp,brand);
})
document.getElementById("unbranded").addEventListener("click",()=>{
    brand = "Unbranded";
    getData(inp,brand);
})

// sort by price
let inp;
 document.getElementById("lth").addEventListener("click",()=>{
    inp = "asc";
    getData(inp,brand);
 })
 document.getElementById("htl").addEventListener("click",()=>{
    inp = "desc";
    getData(inp,brand);
 })
//  console.log(key);
async function getData(inp,brand){
    try {
        let key= localStorage.getItem("key") || "";
        console.log(key);
        // let brand= localStorage.getItem("brand") || "";
        
        var res = await fetch(`https://clone-ebay-test-api.onrender.com/fashionData?key=${key}&brand=${brand}&_sort=price&_order=${inp}`);
        var jsonData = await res.json();
        displayData(jsonData);
    } catch (error) {
        console.log(error);
    }
    // localStorage.setItem("key","");
}
async function getCat(){
    try {
        let key= localStorage.getItem("key") || "";
        console.log(key);
        // let brand= localStorage.getItem("brand") || "";
        
        var res = await fetch(`https://clone-ebay-test-api.onrender.com/fashionData?key=${key}`);
        var jsonData = await res.json();
        displayData(jsonData);
    } catch (error) {
        console.log(error);
    }
}
async function getAllData(){
    try {
        // let key= localStorage.getItem("key") || "";
        // console.log(key);
        // let brand= localStorage.getItem("brand") || "";
        
        var res = await fetch(`https://clone-ebay-test-api.onrender.com/fashionData`);
        var jsonData = await res.json();
        displayData(jsonData);
    } catch (error) {
        console.log(error);
    }
}
// getAllData();
// getCat();

// get All Data Logic
let k = localStorage.getItem("key");
if(k==""){
    getAllData();
    // localStorage.setItem("key","");
}else{
    getCat();
}
// localStorage.setItem("key","");


function displayData(data){
    container.innerHTML = "";
    data.map((elm)=>{
        var ancor = document.createElement("div");
        ancor.setAttribute("id","imgAppend");
        var image = document.createElement("img");
        image.src = elm.image;
        var div = document.createElement("div");
        div.innerText = elm.description;
        var price = document.createElement("h4");
        price.textContent = "$ "+elm.price;
        var brand = document.createElement("h4");
        brand.innerText = elm.brand;
        ancor.append(image,div,price,brand);
        ancor.addEventListener("click",()=>{
            var obj = {
                image: elm.image,
                des: elm.description,
                price: elm.price,
            }
            // phoneData.push(obj);
            localStorage.setItem("detail",JSON.stringify(obj));
            location.href = "detailPage.html";
        })
        container.append(ancor);
    })
}


// localStorage.setItem("brand","");




// async function priceData(inp){
//     try {
//         var key = localStorage.getItem("key");
//         var res = await fetch(`http://localhost:3000/fashionData?key=${key}&_sort=price&_order=${inp}`);
//         var jsonData =await res.json();
//         display(jsonData);
//     } catch (error) {
//         console.log(error);
//     }
// }