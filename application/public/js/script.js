 var results;
 var showPerRequest = 4;
 var loopVar = 0;


 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         results = JSON.parse(xhttp.responseText);
         showData();
     }
 };
 xhttp.open("GET", "https://jsonplaceholder.typicode.com/albums/2/photos", true);
 xhttp.send();


 function showData() {
     console.log(results);
     if (showPerRequest >= 50) {
         //                console.log("hide button")
         document.getElementById("load-img").style.display = "none";
     }
     for (loopVar; loopVar < showPerRequest; loopVar++) {
         console.log(results[loopVar])
         var boxHtml = `<div class="box">
                    <div class="boxInner">
                        <img src="${results[loopVar].thumbnailUrl}"/>
                        <div class="titleBox">
                            ${results[loopVar].title}
                        </div>
                    </div>
                </div>`;

         document.getElementById("wrap").innerHTML += boxHtml;
     }
     showPerRequest += 4;
     showCount();
     var g = document.getElementById('wrap');
     for (var i = 0, len = g.children.length; i < len; i++) {

         (function(index) {
             g.children[i].onclick = function() {
                 this.classList.add("hide")
                 var elm = this;
                 setTimeout(function() {
                     elm.remove();
                     showCount();
                 }, 300)
             }
         })(i);
     }
 }

 function showCount() {
     var x = document.getElementById("wrap").childElementCount;
     x = `There are ${x} photo(s) being shown`;
     document.getElementById("imageCount").innerHTML = x;
 }

 function hideElm() {
     console.log("hide")
 }