// function myFunction() {
//     let x = document.getElementById("myText").value;
//     document.querySelector("h1").innerText = x;
//   }
  let Button = document.querySelector("#btn");
  Button.addEventListener("click", ()=>{
    let x = document.getElementById("myText").value;
    document.querySelector("h1").innerText = x;
    console.log(x);
  });