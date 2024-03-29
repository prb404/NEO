function loadjscssfileneo(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileJs=document.createElement('script')
  fileJs.setAttribute("type","text/javascript")
  fileJs.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined"){
  document.getElementsByTagName("head")[0].appendChild(fileref)
 }
 else if (typeof fileJs!="undefined"){
  document.getElementsByTagName("body")[0].appendChild(fileJs)
 }
}

// external JS
//loadjscssfileneo("https://url.com/.../customJavaScript.js", "js") //dynamically load and add this .js file
loadjscssfileneo("https://cdn.logwork.com/widget/countdown.js", "js")

// external CSS
//loadjscssfileneo("https://url.com/.../customStyleSheet.css", "css") ////dynamically load and add this .css file
loadjscssfileneo("https://prb404.github.io/NEO/neo/customStyleSheetNEO.css", "css")