var responses = ["0 - Try again later", "1 - You can rely on it", "2 - It is decidedly so.", "3 - Without a doubt", "4 - Very doubtful" , "5 - Outlook not so good" , "6 - As I see it", "7 - Reply hazy, try again", "8 - Better not tell you now", "9 - Cannot predict now", "10 - Yes, definitely", "11 - My Sources say no", "12 - Concentrate and ask again", "13 - Signs point to yes", "14 - My reply is no", "15 - Don't count on it.", "16 - Ask James.", "17 - Verrrry Interesting", "18 - @(*^ｪ^)@     >^)))< ～～"];

//main function that runs when page finishes loading
window.onload = function(){
  var text = "hi";
  
  var result = document.getElementById("result");
  result.onclick = giveResponse;
}


function giveResponse(){
  
  //get a random number within lengh of reponses
  
  //num from 0 to 1 * how many responses
  var index = Math.random() * responses.length;
  index = Math.floor(index); //always round down
  
  //alert item number (index) from respones
  alert(responses[index]);
}
