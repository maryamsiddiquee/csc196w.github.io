function biggerFont() 
{
    var text = document.getElementById("modifyText");
    text.style.fontSize = "24pt";
 }
 function makeBold() 
 {
    var text = document.getElementById("modifyText");
    text.style.fontWeight = "bold";
    text.style.color= "blue";
    text.style.textDecoration= "underline";
 }
 function unBoldText() {
    var text = document.getElementById("modifyText");
    text.style.fontSize = "initial";
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration= "none";
 }
 function addMoo() 
 {
    var suffix = '-Moo',
    txt = document.getElementById('modifyText');
    txt.style.textTransform="uppercase";
    txt.value = txt.value.split('.').join('') + suffix;
 }
