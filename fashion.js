document.getElementById("all").addEventListener("click",()=>{
    localStorage.setItem("key","");
    // localStorage.setItem("url","http://localhost:3000/fashionData")
    location.href = "fashionData.html";
})
document.getElementById("kurta").addEventListener("click",()=>{
    localStorage.setItem("key","kurta");
    location.href = "fashionData.html";
})
document.getElementById("t-shirt").addEventListener("click",()=>{
    localStorage.setItem("key","t-shirts");
    location.href = "fashionData.html";
})
document.getElementById("jeans").addEventListener("click",()=>{
    localStorage.setItem("key","jeans");
    location.href = "fashionData.html";
})
document.getElementById("lower").addEventListener("click",()=>{
    localStorage.setItem("key","lower");
    location.href = "fashionData.html";
})
document.getElementById("shirt").addEventListener("click",()=>{
    localStorage.setItem("key","shirt");
    location.href = "fashionData.html";
})