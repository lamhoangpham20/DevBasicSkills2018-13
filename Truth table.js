function generate_table()
{
  var i =0;   
  var j =0;
  var table_elements = document.getElementById('truth_table');
  var table_content = "<tr><td>p</td><td>q</td><td>p^q</td><td>p^q</td><td>-p</td><td>p===q</td></tr>"
     
  for ( i=0; i<2; i++)
  {
    for (j=0 ; j<2 ; j++)
    {
      var a = i || j;
      var b = i && j;
      var c = i === j;
      var d = !i;
      if (d==true)
      {
        d=1;
      }
      else
      {
        d=0;
      }
      if (c==true)
      {
        c=1;
      }
      else
      {
        c=0;
      }
       table_content += "<tr><td>"+i+"</td><td>"+j+"</td><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+d+"</td></tr>";
      table_elements.innerHTML= table_content;
    }
    
  }
}