
  function getPersonalDetail(){
     
      let email = $("#email").val();
      let firstname = $("#Fornavn").val();
      let lastname = $("#Etternavn").val();
      let address = $("#address").val();
      let phone = $("#phone").val();
      let linkedIn = $("#linkedIn").val();
      let skills = $("#skills").val();
      let language = $("#language").val();
      let birthdate = $("#birthdate").val();
         
	    let bdate=new Date(birthdate);
      let norway_format= new Intl.DateTimeFormat('nb-NO').format(bdate);
      // $("#birthdateT").text(norway_format);
	    
      let summary = $("#summary").val();
      let hobby = $("#hobby").val();
      let qualification = $("#qualification").val();
      let certification=$("#certification").val();
      let other = $("#other").val();
      
      if (validateEmail(email) === false) {
        alert("Den er ugyldig eposten!");
        return (false);
      }
      
	  
	  //validate for norwegian mobile phone number
	
	  let isValid = validateNorwegianPhoneNumber(phone);
		if (isValid  === false) {
		  alert("Den er ugyldig norsk telefonnumber! må være 8 siffer");
		  return (false);
		} 
	  
      if (validateName(firstname) === false){
        alert("Det er ugyldig fornavn!");
        return (false);
      }
      if (validateName(lastname)=== false){
        alert("Det er ugyldig etternavn!");
        return (false);
      }       
      // check for under age
	  checkAge();
	 

      $("#emailT").text(email);
      $("#nameT").text(`${firstname} ${lastname}`);
      $("#addressT").text(`Address: ${address}`);
      $("#phoneT").text(phone.replaceAll(' ', ''));   // white space removed from phone number
      $("#linkedInT").text(linkedIn);
      $("#skillsT").text(skills);
      $("#languageT").text(language);
	  
      $("#birthdateT").text(`Født: ${norway_format}`);
      
      $("#summaryT").text(summary);
      $("#hobbyT").text(hobby);
      $("#qualificationT").text(qualification);
      $("#certificationT").text(certification);
      $("#otherT").text(other);
      //$("#nameT").append(name);


     
  }


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
    
 
    getPersonalDetail();
      
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
  

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) { 
    var re = /^[0-9]{8}$/;
    return re.test(String(phone).toLowerCase());
  }
  
  function validateNorwegianPhoneNumber(number) {
  // Regular expression for Norwegian phone numbers
  const norwegianPhoneRegex = /^(0047|\+47|47)?\s?(\d{2})\s?(\d{2})\s?(\d{2})\s?(\d{2})$/;

  // Remove any whitespace in the number
  const cleanedNumber = number.replace(/\s/g, '');

  // Test the number against the regex
  return norwegianPhoneRegex.test(cleanedNumber);
}




  
  function validateName(name) {
    // Regular expression pattern to match names with two words separated by a space
    var pattern = /^[a-zA-Z]+( [a-zA-Z]+)?$/;
    
    // Check if the name matches the pattern
    return pattern.test(name);
  }

 

  function checkAge() {
    var bdate = document.getElementById('birthdate').value;
    
    // Create a Date object from the input value
    var dob = new Date(bdate);
    
    // Get today's date
    var today = new Date();
    
    // Calculate the age
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
	

    
    // Check if age is greater than or equal to 18
    if (age <= 16) {
      alert(`Du er ${age} år (mindreårig)`);
      // This is where you can proceed with the accepted action
    } 
  }
  
