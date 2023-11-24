var arr=[{EmpID:"01",Name:"sanjeev",Designation:"manager",Salary:"80,000",email:"sanjeev@gmail.com"},
{EmpID:"02",Name:"Raan",Designation:"Designer",Salary:"95,000",email:"raan122003@gmail.com"},
{EmpID:"03",Name:"Divya",Designation:"HR",Salary:"68,000",email:"sdivya143@gmail.com"}];


var table=document.createElement("table");

    var tiRow=document.createElement("tr");
    var ticol1=document.createElement("th");
    ticol1.innerHTML="Emp ID";
    var ticol2=document.createElement("th");
    ticol2.innerHTML="Name";
    var ticol3=document.createElement("th");
    ticol3.innerHTML="Designation";
    var ticol4=document.createElement("th");
    ticol4.innerHTML="Salary";
    var ticol5=document.createElement("th");
    ticol5.innerHTML="Email";

    var mainRow=document.getElementById("row-main");
    mainRow.appendChild(table);
    table.appendChild(tiRow);

    tiRow.appendChild(ticol1);
    tiRow.appendChild(ticol2);
    tiRow.appendChild(ticol3);
    tiRow.appendChild(ticol4);
    tiRow.appendChild(ticol5);

arr.forEach(function(e){

    var tRow=document.createElement("tr");
    var tcol1=document.createElement("td");
    tcol1.innerHTML=e.EmpID;
    var tcol2=document.createElement("td");
    tcol2.innerHTML=e.Name;
    var tcol3=document.createElement("td");
    tcol3.innerHTML=e.Designation;
    var tcol4=document.createElement("td");
    tcol4.innerHTML=e.Salary;
    var tcol5=document.createElement("td");
    tcol5.innerHTML=e.email;

    

    table.appendChild(tRow);
    tRow.appendChild(tcol1);
    tRow.appendChild(tcol2);
    tRow.appendChild(tcol3);
    tRow.appendChild(tcol4);
    tRow.appendChild(tcol5);

})
