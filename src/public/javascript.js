let listInfor = document.querySelector(".list")

function consumirInfor(){
  fetch("http://localhost:3000/infor-all", {
    method: "GET"
  })
  .then( (response) => response.json())
  .then( (response) => {
         console.log(response.infors)

         for(let c = 0; c <= response.infors.length -1 ; c++){
           listInfor.innerHTML += `<li>${response.infors[c].infor}</li>`
         }

  })
}