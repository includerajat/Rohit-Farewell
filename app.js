// set up text to print, each item in array is new line
var aText = new Array(
  "Hi <u>Rohit!!</u>", 
  "",
  "I hope you are doing well, sorry I couldn't make to join your <u>Farewell call</u>",
  "",
  "Actually, it wouldn't make any difference, <u>because I prefer to quite</u>",
  "I think, we work together around 8-9 months and <u>it was a great journey</u>",
  "",
  "We had a lot of fun and lot of work also :)",
  "",
  "I am not sure what else to say and really I don't want to use any generative AI to write this",
  "Just want to say, <u>we will miss you and hoping for the best of your future</u>",
  "",
  "And remember that, Shuffling is necessary no matter where it happens, in cards or organization",
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();