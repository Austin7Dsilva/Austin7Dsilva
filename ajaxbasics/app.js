//to print data from text

let textdata = document.querySelector('#text-btn');

textdata.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();

    xhr.open('GET','./data/message.txt', true);

    xhr.send();

    xhr.onload = () =>  {
        if (xhr.status===200) {
            let data = xhr.responseText;
            displayTextData(data);
        }
    };
})

let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;
};


//to print json data

let jsondata = document.querySelector('#json-btn');

jsondata.addEventListener('click',()=>{
    let jsonxhr = new XMLHttpRequest();

    jsonxhr.open('GET','./data/mobiles.json',true);

    jsonxhr.send();

    jsonxhr.onload = () =>{
        if(jsonxhr.status===200)
        {
            let jsontextdata = jsonxhr.responseText;
            let mobilesjson = JSON.parse(jsontextdata);
            displayJsonData(mobilesjson);
        }
    };
})

let displayJsonData = (indata) =>{
    let htmlTemplate = '';
    htmlTemplate = `
    <ul class="list-group">
        <li class="list-group-item">ID : ${indata.id}</li>
        <li class="list-group-item">Brand : ${indata.brand}</li>
        <li class="list-group-item">Color : ${indata.color}</li>
        <li class="list-group-item">Price : ${indata.price}</li>
    </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;
};

//to print api data

let apidata = document.querySelector('#api-btn');

apidata.addEventListener('click',()=>{
    
    let apixhr = new XMLHttpRequest();

    apixhr.open('GET','https://jsonplaceholder.typicode.com/users',true);

    apixhr.send();

    apixhr.onload = () =>{
        let apitextdata = apixhr.responseText;
        let users = JSON.parse(apitextdata);
        displayApitext(users);
    };
})

let displayApitext = (inputapidata) =>{

    let htmltemplate = '';
    for(let i of inputapidata){
        htmltemplate +=`
        <ul class="list-group">
            <li class="list-group-item">ID : ${i.id}</li>
            <li class="list-group-item">Name : ${i.name}</li>
            <li class="list-group-item">Email : ${i.email}</li>
            <li class="list-group-item">Street : ${i.address.street}</li>
            <li class="list-group-item">City : ${i.address.city}</li>
        </ul>
        `;
    }
    document.querySelector('#api-card').innerHTML = htmltemplate;
};