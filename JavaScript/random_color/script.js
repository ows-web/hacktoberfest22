console.log("hello world");



function chngcolor()
{
    var hexvalue=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G']
    var hexstring="#";
    
    for(var i=0;i<6;i++)
    {
        var index=Math.floor(Math.random()*hexvalue.length);
        hexstring+=hexvalue[index];
    
    }
    var body=document.querySelector("body");
    body.style.backgroundColor=hexstring;
    var hex=document.querySelector(".hex");
    hex.textContent=hexstring;
    hexstring="#";
}


// console.log(Math.random())