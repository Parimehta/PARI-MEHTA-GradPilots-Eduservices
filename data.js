const scholarships = [

{title:"Global Scholars Program",country:"USA",stream:"Business",level:"PG",amount:50000,deadline:"July",funding:false},

{title:"UK Excellence Award",country:"UK",stream:"Law",level:"PG",amount:0,deadline:"August",funding:true},

{title:"Canadian Merit Scholarship",country:"Canada",stream:"Business",level:"UG",amount:30000,deadline:"June",funding:false},

{title:"Germany Research Grant",country:"Germany",stream:"STEM",level:"PhD",amount:0,deadline:"May",funding:true},

{title:"France Academic Award",country:"France",stream:"IR",level:"PG",amount:20000,deadline:"April",funding:false},

{title:"STEM Innovators Grant",country:"USA",stream:"STEM",level:"PhD",amount:40000,deadline:"September",funding:false},

{title:"Future Leaders Scholarship",country:"UK",stream:"Business",level:"UG",amount:15000,deadline:"December",funding:false},

{title:"AI Global Fellowship",country:"USA",stream:"STEM",level:"PhD",amount:60000,deadline:"January",funding:true}

];

if(!localStorage.getItem("scholarships")){
localStorage.setItem("scholarships",JSON.stringify(scholarships));
}
