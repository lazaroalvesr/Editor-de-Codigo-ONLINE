function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let saida = document.getElementById("output");

    saida.contentDocument.body.innerHTML = htmlCode+"<style>" +cssCode +"</style>";
    saida.contentWindow.eval(jsCode);
}
