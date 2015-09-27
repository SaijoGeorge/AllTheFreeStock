(function(){
  
  //Change these values
  var msg = "We use cookies to enhance your web browsing experience. By continuing to browse the site you agree to our policy on cookie usage.";
  var closeBtnMsg = "OK";
  var privacyBtnMsg = "Privacy Policy";
  var privacyLink = "http://allthefreestock.com/privacy.html";
  
  //check cookies 
  if(document.cookie){
   var cookieString = document.cookie;
   var cookieList = cookieString.split(";");
   // if cookie named OKCookie is found, return
   for(x = 0; x < cookieList.length; x++){
     if (cookieList[x].indexOf("OKCookie") != -1){return}; 
   }
  }
  
  var docRoot = document.body;
  var okC = document.createElement("div");
  okC.setAttribute("id", "okCookie");
  var okCp = document.createElement("p");
  var okcText = document.createTextNode(msg); 
  
  //close button
  var okCclose = document.createElement("a");
  var okcCloseText = document.createTextNode(closeBtnMsg);
  okCclose.setAttribute("href", "#");
  okCclose.setAttribute("id", "okClose");
  okCclose.appendChild(okcCloseText);
  okCclose.addEventListener("click", closeCookie, false);
 
  //privacy button
  var okCprivacy = document.createElement("a");
  var okcPrivacyText = document.createTextNode(privacyBtnMsg);
  okCprivacy.setAttribute("href", privacyLink);
  okCprivacy.setAttribute("id", "okCprivacy");
  okCprivacy.appendChild(okcPrivacyText);
  
  //add to DOM
  okCp.appendChild(okcText);
  okC.appendChild(okCp);
  okC.appendChild(okCclose);
  okC.appendChild(okCprivacy);
  docRoot.appendChild(okC);
  
  okC.classList.add("okcBeginAnimate");
  
  function closeCookie(){
    var cookieExpire = new Date();
    cookieExpire.setFullYear(cookieExpire.getFullYear() +2);
    document.cookie="OKCookie=1; expires=" + cookieExpire.toGMTString() + ";";
    docRoot.removeChild(okC);
  }
  
})();