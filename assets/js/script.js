console.log("script chargé");

let secretKey = "$2a$10$HP1iQUMD/WXoB2AoJBE7PecR.WswLXdsh7S0cpwimOymzoeqvqz1a";
let Bin_ID = "654defe60574da7622c497e7";
let urlApi = "https://api.jsonbin.io/v3";

let testJSonBIn;
await gettestJsonbin();
console.log("Voici les données via fetch: ", testJSonBIn);

async function gettestJsonbin () {
    const res = await fetch(`${urlApi}/b/${Bin_ID}`, {
        method: 'GET',
        headers: {
            'X-Master-Key': secretKey,
            'Content-type': 'application/json',
            
        }
    });
    testJSonBIn = await res.json();
}