var msg;
msg="<p><code>the actual script is in external script file called common.js</code></p>";
function addnos(headvar,bodyvar){
    document.write(msg);
    var sum;
    sum=headvar+bodyvar;
    document.write("sum of variables <i>headvar</i> and <i>bodyvar</i> is"+sum);
}