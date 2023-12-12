

$(document).ready(function () {
  $(".registrationForm").on("submit", function (event) {
    event.preventDefault();


    let email = $("#email").val();

    let name = $("#fullName").val();
    let address = $("#address").val();
    let phone = $("#phone").val();
    let linkedIn = $("#linkedIn").val();
    let skills = $("#skills").val();
    let language = $("#language").val();
    let birthdate = $("#birthdate").val();
    let summary = $("#summary").val();
    let hobby = $("#hobby").val();
    let qualification = $("#qualification").val();
    let certification=$("#certification").val();
    let other = $("#other").val();


    $("#emailT").text(email);
    $("#nameT").text(name);
    $("#addressT").text(address);
    $("#phoneT").text(phone);
    $("#linkedInT").text(linkedIn);
    $("#skillsT").text(skills);
    $("#languageT").text(language);
    $("#birthdateT").text(birthdate);
    $("#summaryT").text(summary);
    $("#hobbyT").text(hobby);
    $("#qualificationT").text(qualification);
    $("#certificationT").text(certification);
    $("#otherT").text(other);
    //$("#nameT").append(name);


  });



});


function addWorkingExperiences() {
  let newNode = document.createElement("textarea");

  newNode.classList.add("experience");

  newNode.setAttribute("rows", 2);

  let weOb = document.getElementById("exp");
  let weAddButtonOb = document.getElementById("addExp");

  weOb.insertBefore(newNode, weAddButtonOb);

}

function addAnotherQualifications() {
  let nodeQual = document.createElement("textarea");
  //let nodeQual = $createElement("textarea");  
  nodeQual.classList.add("qualification");

  nodeQual.setAttribute("rows", 2);

  let qualAdd = document.getElementById("qual");
  let addBtn = document.getElementById("addQual");

  qualAdd.insertBefore(nodeQual, addBtn);
}

function addLanguage(){
  let nodelang=document.createElement("textarea");
  nodelang.classList.add("language");
  //nodelang.setAttribute("rows",2);

  let langAdd=document.getElementById("lang");
  let addBtnLang=document.getElementById("addLang");

  langAdd.insertBefore(nodelang,addBtnLang);

}

function createCv() {
  // list more experiences if available
  let wes = document.getElementsByClassName("experience");

  let str = "";

  for (let ex of wes) {
    str = str + `<li> ${ex.value} </li>`;
  }

  document.getElementById("experienceT").innerHTML = str;

   // list more qualifications
  let wes2 = document.getElementsByClassName("qualification");

  let str2 = "";

  for (let ex2 of wes2) {
    str2 = str2 + `<li> ${ex2.value} </li>`;
  }

  document.getElementById("qualificationT").innerHTML = str2;
  
  // list more languages
  let langMore = document.getElementsByClassName("language");

  let lang = "";

  for (let la of langMore) {
    lang = lang + `<li> ${la.value} </li>`;
  }

  document.getElementById("languageT").innerHTML = lang;


}

function printCv() {
  document.getElementById("formcv").style.display = "none";
  document.getElementById("templatecv").style.display = "block";
  //$(".registrationForm")[0].reset()
  window.print();
}
