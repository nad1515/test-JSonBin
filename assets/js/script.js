console.log("script chargé");

//  const secretKey = "$2a$10$HP1iQUMD/WXoB2AoJBE7PecR.WswLXdsh7S0cpwimOymzoeqvqz1a";
// const Bin_ID = "6556210112a5d376599a541e";
// const urlApi = "https://api.jsonbin.io/v3";

// let dataJSonBIn;
// await getdataJsonbin();
//  console.log("Voici les données via fetch: ", dataJSonBIn);

// async function gettestJsonbin () {
//     const res = await fetch(`${urlApi}/b/${Bin_ID}`, {
//         method: 'GET',
//         headers: {
//             'X-Master-Key': secretKey,
//             'Content-type': 'application/json',
            
//         }
//     });
//      testJSonBIn = await res.json();
    
// }



// async function postJsonbin () {
//     const res = await fetch(`${urlApi}/b/`, {
//         method: 'POST',
//         headers: {
//             'X-Master-Key': secretKey,
//             'Content-type': 'application/json',
//          },
//         body:JSON.stringify(dataJson)
//     });  
// }
// let dataJson = {
//     "adresses ": [
//       {
//         "id": "1254ffrd",
//         "rue": "54 boulevard lavéran",
//         "code-postal": "13013",
//         "ville": "MARSEILLE"
//       },
//       {
//         "id": "1254ffrd",
//         "rue": "54 boulevard lavéran",
//         "code-postal": "13013",
//         "ville": "MARSEILLE"
//       },
//       {
//         "id": "1254ffrd",
//         "rue": "54 boulevard lavéran",
//         "code-postal": "13013",
//         "ville": "MARSEILLE",
//         "pays": "FRANCE"
//       },
//       {
//         "id": "1254ffrd",
//         "rue": "54 boulevard lavéran",
//         "code-postal": "13013",
//         "ville": "MARSEILLE",
//         "pays": "FRANCE"
//       }
//     ]
//   }
  
//  postJsonbin()
 //  .....................cree un mini formulaire et pouvoir recuperer les données et les transformer en fichier json(strigify)
// let formJson;

const secretKey = "$2a$10$HP1iQUMD/WXoB2AoJBE7PecR.WswLXdsh7S0cpwimOymzoeqvqz1a";
const Bin_ID = "65534c5354105e766fcfd262";
const urlApi = "https://api.jsonbin.io/v3";

let dataJSonBIn;
let tableau = [];
await getJsonBin()
async function getJsonBin(){
    const res = await fetch(`${urlApi}/b/${Bin_ID}`, {
     method : 'GET',
     headers : {
        
        'Content-Type': 'application/json',
        'X-Master-Key': secretKey,

     },
     })
     dataJSonBIn = await res.json();
      console.log(dataJSonBIn);
    }
  dataJSonBIn.record.forEach((record)=>{
   tableau.push(record)
 });
 console.log(tableau);


 let formJson;
async function testJsonBin(){
         const res = await fetch(`${urlApi}/b/65534c5354105e766fcfd262`, {
         method : 'PUT',
         headers : {
            'Content-Type': 'application/json',
            'X-Master-Key': secretKey,

         },
         body: JSON.stringify(tableau)
         })
         
  tableau.push(formJson);
  console.log(tableau);
}

    

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault()
        let docForm = new FormData(form);
         formJson = Object.fromEntries(docForm)
         console.log(formJson);
    
         tableau.push(formJson);
         console.log(tableau);
         testJsonBin()


    })

    let delet = document.querySelector("#efface");
    delet.addEventListener("click", function(){
         document.querySelectorAll("input").forEach(item =>{
            item.value = "";
         })
    })


///............stok la methode post....................

// let formJson;
// async function testJsonBin(){
//          const res = await fetch(`${urlApi}/b/`, {
//          method : 'POST',
//          headers : {
//             'Content-Type': 'application/json',
//             'X-Master-Key': secretKey,

//          },
//          body: JSON.stringify(formJson)
//          })
//     }
//     let form = document.querySelector("form");
//     form.addEventListener("submit", function(event){
//         event.preventDefault()
//         let docForm = new FormData(form);
//          formJson = Object.fromEntries(docForm)
//          console.log(formJson);
//          testJsonBin()
//     })
//     let delet = document.querySelector("#efface");
//     delet.addEventListener("click", function(){
//          document.querySelectorAll("input").forEach(item =>{
//             item.value = "";
//          })
//     })
