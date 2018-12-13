function print_table()
{   
    var table_elements = document.getElementById('number_table');
    var table_content = "<tr><td>DEC</td><td>BIN</td><td>HEX</td><td>OCT</td></tr>"
    for(let x=0; x<=50; x++)
    {
        x = parseInt(x);
        var bin = x.toString(2);
        var hex = x.toString(16).toUpperCase();
        var oct = x.toString(8);
        table_content += "<tr><td>"+x+"</td><td>"+bin+"</td><td>"+hex+"</td><td>"+oct+"</td></tr>";
      table_elements.innerHTML= table_content;
    }
}
function Showtable()
{
    if (document.getElementById("button").textContent == "Clear")
    {
        document.getElementById("number_table").style.display = "none";
        document.getElementById("button").textContent = "Show";
        document.getElementsByTagName('head').innerHTML = "Press Show button to print the table";
    }
    else
    {
        document.getElementById("number_table").style.display = "block";
        document.getElementById("button").textContent = "Clear";
    }
}