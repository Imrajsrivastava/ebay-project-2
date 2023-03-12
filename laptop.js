var container = document.getElementById("dataDiv");
let inp;
 document.getElementById("lth").addEventListener("click",()=>{
    inp = "asc";
    getData(inp);
 })
 document.getElementById("htl").addEventListener("click",()=>{
    inp = "desc";
    getData(inp);
 })

async function getData(inp){
    try {
        var res = await fetch(`https://clone-ebay-test-api.onrender.com/electronicsData?key=laptop&_sort=price&_order=${inp}`);
        var jsonData =await res.json();
        display(jsonData);
    } catch (error) {
        console.log(error);
    }
}
getData();

function display(data){
    container.textContent = "";
    data.forEach(elm=>{
        var anchor = document.createElement("div");
        anchor.setAttribute("id","imgAppend");
        var image = document.createElement("img");
        image.src = elm.image;
        var div = document.createElement("div");
        div.textContent = elm.description;
        var price = document.createElement("h4");
        price.textContent = "$ "+ elm.price;
        anchor.append(image,div,price);
        anchor.addEventListener("click",()=>{
            var obj = {
                image: elm.image,
                des: elm.description,
                price: elm.price,
                qty: 1
            }
            // phoneData.push(obj);
            localStorage.setItem("detail",JSON.stringify(obj));
            location.href = "detailPage.html";
        })
        container.append(anchor);
    })
}