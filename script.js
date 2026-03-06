let data = JSON.parse(localStorage.getItem("scholarships"));
let visible = 6;

function display(){

let container = document.getElementById("cards");
container.innerHTML="";

data.slice(0,visible).forEach(s=>{

let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${s.title}</h3>
<div class="amount">${s.funding ? "Full Funding" : "$"+s.amount}</div>
<div>Country: ${s.country}</div>
<div>Stream: ${s.stream}</div>
<div>Level: ${s.level}</div>
<div>Deadline: ${s.deadline}</div>
<button>View Details</button>
`;

container.appendChild(card);

});

updateStats();

}

function updateStats(){

document.getElementById("totalScholarships").innerText =
data.length+" Scholarships";

document.getElementById("fullFunding").innerText =
data.filter(s=>s.funding).length+" Full Funding";

document.getElementById("deadlines").innerText =
data.length+" Deadlines";

}

function loadMore(){

visible+=3;
display();

}

function applyFilters(){

let countries=[...document.querySelectorAll(".country:checked")].map(c=>c.value);
let streams=[...document.querySelectorAll(".stream:checked")].map(c=>c.value);
let levels=[...document.querySelectorAll(".level:checked")].map(c=>c.value);

data = JSON.parse(localStorage.getItem("scholarships")).filter(s=>{

return (countries.length==0||countries.includes(s.country)) &&
(streams.length==0||streams.includes(s.stream)) &&
(levels.length==0||levels.includes(s.level));

});

display();

}

function resetFilters(){

document.querySelectorAll("input").forEach(i=>i.checked=false);

data=JSON.parse(localStorage.getItem("scholarships"));

display();

}

function sortBy(type){

if(type==="amount"){
data.sort((a,b)=>b.amount-a.amount);
}

if(type==="deadline"){
data.sort((a,b)=>a.deadline.localeCompare(b.deadline));
}

display();

}

display();
