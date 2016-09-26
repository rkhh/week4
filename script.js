  var speech1 = {
  	name : 'Winston Churchill',
  	year : 1940,
  	BCE : false
  };

    var speech2 = {
  	name : 'Ghandi',
  	year : 1942,
  	BCE : false
  };

    var speech3 = {
  	name : 'Demosthenes',
  	year : '342 BCE',
  	BCE : true
  };

var myArray = ['speech1', 'speech2', 'speech3'];

var difference = 2;

onload = function() {
  console.log ("Ghandi's speech and Churchill's speech are "+ difference +" years apart.");
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are "+ myArray.length +" speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by "+ speech1.name +" in "+ speech1.year +". It is "+ speech1.BCE +" that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log("This speech was written by "+ speech2.name +" in "+ speech2.year +". It is "+ speech2.BCE +" that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log("This speech was written by "+ speech3.name +" in "+ speech3.year +". It is "+ speech3.BCE +" that this year is B.C.E.");
});