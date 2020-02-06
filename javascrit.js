// document.write("<h5> hi </h5>" );
// var txt;
// var r = confirm("ARE YOU READY!");
// if (r == true) {
//   txt = "You pressed OK!";
// } else {
//   txt = "You pressed Cancel!";
// }
// alert("NOT YET :D");
// document.write(prompt("your name plz"));
// prompt("how are you");
    // var today =new Date();
    // var hourNow = prompt("enter the time 0-24")
    // var greeting;
    // if (hourNow > 18 && hourNow<=24){
    //     greeting = 'good evening!';}
    // else if (hourNow >12 && hourNow<=18){greeting = 'good afternoon!';} 
    //  else if(hourNow> 0&& hourNow<=12){greeting = 'good morning!';}
    //  else{greeting = 'Welcome!';} 
    //  return greeting; 
    //  }
// document.write('<h3>' + theTime() + '</h3>')
var a = confirm("Are you cars lover?",'yes or no');
if ( a==false ){alert("leave the page Plz ");} 
  else{alert('WLC BRAH');}
function kindOfCar(){
  var kind;
  var img= '';
  while(kind!=="binz"&&kind!=="bmw"){
     kind= prompt("which car do you like binz or bmw?");}
  var numberofimgs;
  numberofimgs=prompt("how many car do you want?");
  for(var x=0;x<numberofimgs;x++){
    if(kind==="binz"){
      img=img+'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB7qVCCdLvfkSuGeGBOgzVlPcAv3YGb9oVJLpCsTjbgBKK7d3Z">';
      }else if(kind==="bmw"){
        img = img+'<img src="data:image/jpeg;base64,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">'
        }
        
  }
  return img;
}
document.write('<p>'+ kindOfCar() +'<p/>');
