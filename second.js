
/*
document.getElementsByClassName("node") .addEventListener("click", function() {
    const cb = document.querySelector('#check1240');
    alert();
    if (cb)
    {
        
        this.parentElement.style.backgroundColor = "blue";
    }

  });
  */

    var nodeList = [];
    nodeList["node3400"] =  ["false", "node2180", "node1700","node2180"];
    nodeList["node3390"] =  ["false", "node2180", "node1700","node1300"];
    nodeList["node3380"] =  ["false", "node2160", "node2180"];
    nodeList["node3460"] =  ["false", "node2160"];
    nodeList["node2180"] =  ["false", "node1020"];
    nodeList["node2160"] =  ["false", "node1240", "node1020"];
    nodeList["node1020"] =  ["false", "node1010"];
    nodeList["node1700"] =  ["false", "node1500"];
    nodeList["node1500"] =   ["false"];
    nodeList["node1300"] =  ["false"];
    nodeList["node1010"] =  ["false"];
    nodeList["node1240"] = ["false"];
   
 
 
    
 
 

 

 
 

  



    var borderWidth = "4px";

    var clickedBox = "rgb(198, 158, 148)";


    
    turnGreen();



    $( "#node1010" ).hover(
        function() {
          $( this ).append( $( "<img style='position:relative; left:40px; ' src='example.png' width='400px' height='400px'>" ) );
        }, function() {
          $( this ).find( "img" ).last().remove();
        }
      );
       

     

   

    


  $('input[type="checkbox"]').click(function(e) 
  { 
    

    parentID = $(this).parent().attr("id");

    if ( checkReq(parentID))
    {
   
   

    if ( nodeList[parentID][0] == "false")
    {
    
        nodeList[parentID][0] = "true";
        this.parentElement.style.backgroundColor = clickedBox;
        
     }

      else { 
        nodeList[parentID][0] = "false";
        this.parentElement.style.backgroundColor = "rgb(228, 198, 198)";
      }
    }
    else {
        $(this).prop('checked', !$(this).prop('checked')); // Prevent this from being check


    }

    turnGreen();
    
      
 })

 function checkReq(nodeID) {
    
    for (  var i = 1 ; i < nodeList[nodeID].length; i++   )
    {

        targetNode =  nodeList[nodeID][i] ;
        if (nodeList[targetNode][0] == "false")
        {
            return false;
        }
        if (!checkReq(targetNode))
        {
            return false;
        }
    }
    return true;

  }

  function turnGreen()
  {
 
    Object.keys(nodeList).forEach(function(x)
    {
        $("#" + x).css("border", "none");// remove border



      
        if (nodeList[x][0] == "false" && checkReq(x )  ) // If this is false, and the requirements are true highlight green
        {
            $("#" + x).css("border", "solid green " + borderWidth);// Prevent this from being check
       
        }

        if ( !checkReq(x )) 
        {
            $(`#${x} :first-child`).prop('checked', false); // Uncheck the box
            $("#" + x).css("background-color" , "rgb(228, 198, 198)");// Prevent this from being check
            x[0] = "false";
       

        }


    })
}

  
 



function adjustLine(from, to, line){

	var fT = from.offsetTop  + from.offsetHeight/2;
  var tT = to.offsetTop 	 + to.offsetHeight/2;
  var fL = from.offsetLeft + from.offsetWidth/2;
  var tL = to.offsetLeft 	 + to.offsetWidth/2;
  
  var CA   = Math.abs(tT - fT);
  var CO   = Math.abs(tL - fL);
  var H    = Math.sqrt(CA*CA + CO*CO);
  var ANG  = 180 / Math.PI * Math.acos( CA/H );

  if(tT > fT){
      var top  = (tT-fT)/2 + fT;
  }else{
      var top  = (fT-tT)/2 + tT;
  }
  if(tL > fL){
      var left = (tL-fL)/2 + fL;
  }else{
      var left = (fL-tL)/2 + tL;
  }

  if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
    ANG *= -1;
  }
  top-= H/2;

  line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-transform"] = 'rotate('+ ANG +'deg)';
  line.style.top    = top+'px';
  line.style.left   = left+'px';
  line.style.height = H + 'px';
}
adjustLine(
  document.getElementById('node1010'), 
  document.getElementById('node1020'),
  document.getElementById('line1')
);
adjustLine(
    document.getElementById('node1500'), 
    document.getElementById('node1700'),
    document.getElementById('line2')
  );

  adjustLine(
    document.getElementById('node1020'), 
    document.getElementById('node2160'),
    document.getElementById('line3')
  );

  adjustLine(
    document.getElementById('node1240'), 
    document.getElementById('node2160'),
    document.getElementById('line4')
  );

  adjustLine(
    document.getElementById('node1020'), 
    document.getElementById('node2180'),
    document.getElementById('line5')
  );

  adjustLine(
    document.getElementById('node1020'), 
    document.getElementById('node2180'),
    document.getElementById('line5')
  );

  adjustLine(
    document.getElementById('node2160'), 
    document.getElementById('node3460'),
    document.getElementById('line6')
  );

  adjustLine(
    document.getElementById('node2160'), 
    document.getElementById('node3380'),
    document.getElementById('line7')
  );

  adjustLine(
    document.getElementById('node2180'), 
    document.getElementById('node3380'),
    document.getElementById('line8')
  );

  adjustLine(
    document.getElementById('node1700'), 
    document.getElementById('node3390'),
    document.getElementById('line9')
  );

  adjustLine(
    document.getElementById('node1300'), 
    document.getElementById('node3390'),
    document.getElementById('line10')
  );


  adjustLine(
    document.getElementById('node2180'), 
    document.getElementById('node3390'),
    document.getElementById('line11')
  );











  

  
  
  
  
