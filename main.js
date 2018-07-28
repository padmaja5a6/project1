// function Loadjson(file,callback){
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status == "200"){
//     callback(xhr.responseText);
//   }
//   };
//   xhr.send(null);
// }
// Loadjson("data.json",function(text)
// {
//   var data = JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   careerinfo(data.career);
//   Education(data.education);
//   skills(data.skills);
//   achievements(data.achievements);
// })
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());

      }else{
        reject(new error("error"));
      }
    })
  })
}
var newfile = loadjson("data.json");
newfile.then(data=>{
     console.log(data);
     basics(data.details);
     careerinfo(data.career);
     Education(data.education);
     skills(data.skills);
    achievements(data.achievements);
})

var child1 = document.querySelector(".childone");
function basics(det){
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);
  var name = document.createElement("h4");
  name.textContent = det.name;
  child1.appendChild(name);
  var phoneno = document.createElement("h4");
  phoneno.textContent = det.phoneno;
  child1.appendChild(phoneno);
  var email = document.createElement("a");
  email.href="mailto:padmajadolly9@gmail.com";
  email.textContent = det.email;
  child1.appendChild(email);

  var address = document.createElement("h4");
  address.textContent = "address";
  child1.appendChild(address);
  var hr = document.createElement("hr");
  child1.appendChild(hr);
  var p = document.createElement("p");
  p.textContent = det.address;
  child1.appendChild(p);
}
var child2 = document.querySelector(".childtwo");
function careerinfo(info) {
  var heading = document.createElement("h1");
  heading.textContent = "Career Objective:";
  child2.appendChild(heading);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var c = document.createElement("p");
  c.textContent = info.info;
  child2.appendChild(c);
}
function Education(edu) {
  var hd = document.createElement("h2");
  hd.textContent = "Educational Qualification";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border = "1";
  child2.appendChild(table1);

  tabledata="";
  for(i=0;i<edu.length;i++){
    tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institution+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
    }
    table1.innerHTML=tabledata;
}
function skills(skillinfo) {
  var hd = document.createElement("h2");
  hd.textContent="Technical skills";
  child2.appendChild(hd);

var hr = document.createElement("hr");
  child2.appendChild(hr);

    for(i=0;i<skillinfo.length;i++){
var title = document.createElement("h4");
title.textContent = skillinfo[i].title;
child2.appendChild(title);

var eduul = document.createElement("ul");
var eduli = document.createElement("li");
eduli.textContent=skillinfo[i].info;
eduul.appendChild(eduli);
child2.appendChild(eduul);
 }
}
 function achievements(achieveinfo) {
   var hd = document.createElement("h2");
   hd.textContent="Achievements";
   child2.appendChild(hd);

   var hr = document.createElement("hr");
   child2.appendChild(hr);

   for(i=0;i<achieveinfo.length;i++){
var title = document.createElement("h4");
title.textContent = achieveinfo[i].title;
child2.appendChild(title);

var eduul = document.createElement("ul");
var eduli = document.createElement("li");
eduli.textContent=achieveinfo[i].info;
eduul.appendChild(eduli);
child2.appendChild(eduul);
}
}
function openpage() {
  window.open("resume.html","_self",true)
}
