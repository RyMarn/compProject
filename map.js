
    var nodeList = [];
    nodeList["comp1010"] = ["false"];
    nodeList["math1500"] = ["false"];
    nodeList["stat1000"] = ["false"];
    nodeList["math1300"] = ["false"];
    nodeList["econ1010"] = ["false"];
    nodeList["comp1020"] = ["false","comp1010"];
    nodeList["math1700"] = ["false","math1500"];
    nodeList["comp1500"] = ["false","comp1010"];
    nodeList["econ1020"] = ["false","econ1010"];
    nodeList["stat2000"] = ["false","stat1000"];
    nodeList["comp2140"] = ["false","comp1020","math1300","math1700","stat2000","econ1020","comp1500" ];
    nodeList["comp2160"] = ["false","comp1020"];
    nodeList["comp2000"] = ["false","comp1020","math1300","math1700","stat2000","econ1020","comp1500" ];
    nodeList["math1240"] = ["false","comp1020","math1300","math1700","stat2000","econ1020" ,"comp1500"];
    nodeList["math2000"] = ["false","comp1020","math1300","math1700","stat2000","econ1020" ,"comp1500"];
    nodeList["comp2150"] = ["false","comp2140" , "comp2160"];
    nodeList["comp2280"] = ["false","comp2140" , "comp2160" , "math1240"];
    nodeList["comp2080"] = ["false","math1240" , "comp2140"];
    nodeList["comp2130"] = ["false","math1240" , "comp2140"];
    nodeList["math2080"] = ["false","math1240" , "math2000"];
    nodeList["comp3000"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3001"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3002"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3003"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3004"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3005"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3006"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3007"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3008"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3009"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp4000"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4001"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4002"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4003"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4004"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4005"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4006"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4007"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4008"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4009"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];






    var borderWidth = "4px";

    var clickedBox = "#00DF9A";



    
turnGreen();

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
        this.parentElement.style.backgroundColor = "#33554a";
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
    }
    return true;

  }


  function turnGreen()
  {
 
    Object.keys(nodeList).forEach(function(x)
    {
        $("#" + x).css("border", "none");// remove border



      
        if (nodeList[x][0] == "false" && checkReq(x )  )
        {
            $("#" + x).css("background-color", "#00DF9A ");// Prevent this from being check
       
        }

        if ( !checkReq(x )) 
        {
            $(`#${x} :first-child`).prop('checked', false); // Uncheck the box
            $("#" + x).css("background-color" , "#33554a");// Prevent this from being check
       

        }


    })
}



var courseDesc = [];
courseDesc["sample"] = "This is default example of description for a course! In the real world more information would go here"
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";

courseDesc["comp1010"] = "An introduction to computer science. Students will learn the basics of computer science and programming using a procedural high level language "
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";

courseDesc["math1500"] = "A first Year calculus class. Teaches about derivatives, changing functions, riemann sums and slopes "
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";

courseDesc["math1300"] = "Learn about linear algebra. Includes topics on matrixes, linear functions and transformations "
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";

courseDesc["comp1020"] = "Introduction to recursive functions, Object oriented programing and some basic algorithms "
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";

courseDesc["econ1010"] = "This is a sample elective course, that the student could pick from a drop down menu. Learn basic Econmics, including demand and supply curves! "
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";

courseDesc["econ1020"] = "This is a sample elective course, that the student could pick from a drop down menu. Learn basic Econmics, including demand and supply curves! "
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";


courseDesc["stat1000"] = "Learn the basics of modern statistics using the R-programing language. Includes topics like normal distribution and p-values"
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";

courseDesc["math1700"] = "A second Year calculus class. Teaches about integrals, calcuting volumes, power rule and accumlation functions "
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";


courseDesc["comp1500"] = "A computer class designed for engineering students. Uses python to teach object oriented topics in computer scince"
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";



courseDesc["stat2000"] = "More advanced topics in statistics are covered in the course. Geared towards students pursuing more mathematically rich careers."
+ "  <p style='text-decoration: underline ;'>Fall 2022: MWF 10:30 AM - 11:20 AM</p> ";






// EVERYTHING RELATD TO THE HIDDEN DIVS

var currentCourseSelected;


//THE FUNCTION THAT RUNS WHEN YOU DOUBLE CLICK THE NODE
function moveDivs(event)
    {


        

        // THIS IS SO WE CAN TARGET WHAT COURSE TO ADD TO THE SCHEDULE IF THE ADD TO SCHEDULE BUTTON IS CLICKED
        var target = event.target || event.srcElement;
        if ( checkReq(target.id)) // WE WILl ONY SHOW THIS POP UP DIV IF IT'S PREREQUISTS ARE FULLfILLED
        {

            // CHANGES COURSE DESCPRITON;
            if ( courseDesc[target.id] !== undefined)
            {
                $("#course-info p").empty();
                 $("#course-info p").first().html(courseDesc[target.id] );
            }
            else {
                $("#course-info p").empty();
                $("#course-info p").first().html( courseDesc["sample"] );
            }

      

    
        currentCourseSelected = target.id;


        var screenWidth = $(window).width();
     
        x=event.pageX;
        y=event.pageY;
        if (x + 250 >  screenWidth)
        {
            x -= 250;
        }
        
        document.getElementById("course-info").style.left=x+"px";
        document.getElementById("course-info").style.top=y+"px";
    
        showHidden();
        
        }
    }


    function showHidden()
    {
       
        document.getElementById("course-info").style.visibility = "visible";
    }

    function hideShown()
    {
        document.getElementById("course-info").style.visibility = "hidden";

    }

    function changeText()
    {
        var element = document.getElementById("schedule-btn");
        if(element.innerHTML =="Add To Schedule")
        element.innerHTML = "Remove from Schedule";
        else
        element.innerHTML = "Add To Schedule";
    }


    //THIS CHANGES WHETHER THE BUTTON SAYS ADD TO OR REMOVE FROM SCHEDULE
    function changeCourseInfo(text)
    {
        var courseTxt = document.getElementById("course-info-txt");

        courseTxt.innerHTML = text;

           //SETTING WHAT THE Remove from Schedule / ADD TO SCHEDULE BUTTON SHOULD LOOK LIKE
           var courseTarget = document.getElementById("course-info-txt").textContent;
           var addRemoveButton = document.getElementById("schedule-btn");
   

           if ( checkIfCourseInSchedule(courseTarget))
           {
               
               addRemoveButton.innerHTML = "Remove from Schedule";
           }
           else {
               addRemoveButton.innerHTML = "Add To Schedule";
   
           }
    }
    
  

function showDiv(element)
{
   
    var x = document.getElementById(element);
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }


}


//WHAT ACTUALLY HAPPENS WHEN YOU CLICK THE ADD TO / REMOVE SCHEDULE BUTTON
function changeBtnText(element)
{
    var courseTarget = document.getElementById("course-info-txt").textContent;
      
 
    // WHERE WE SET OUR TARGET
    var x = document.getElementById(element);
    if(x.innerHTML === "Add To Schedule")
    {
        if ( addToSchedule(courseTarget) )
    {
    changeText(x,"Remove From Schedule");
    }
    else {
        alert("Schedule is full! Maximum of 5 courses allowed, remove courses before adding more ")
    }
   
    }
    else
    {
    changeText(x,"Add To Schedule");
    localStorage.setItem("course1", "")
    }

}


// cHECK IF IF THE INPUT COURSE IS IN THE SCHEDULE;
function checkIfCourseInSchedule( inputCourse)
{
    for ( var i = 1 ; i < 6; i++)
{
    var target = "course" + i;
 
    if ( localStorage[target] == inputCourse)
    {
        return true;
    }
}
    return false;
}

//ADD TO SCHDULE - Returns true if added, else returns false
function addToSchedule(inputCourse)
{
for ( var i = 1 ; i < 7; i++)
{
    var target = "course" + i;
 
    if ( localStorage[target] == "" ||  localStorage[target] == null )
    {
        localStorage.setItem(target, inputCourse);
        return true;
    }
}

    return false;
}









function changeText(element , text)
{
 
    element.innerHTML =text;

}

function hideElement(element)
{
    wait(500);
    var element = document.getElementById(element);
    element.style.visibility = 'hidden';
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

 function checksearch(field , link)
 {
    var element = document.getElementById((field));

    if(element.value ==="")
    alert("Error: Please enter a major");
    else
    document.location.href = link;

 }

 function checkUserAndPass(user , pass , link)
 {
    var userE = document.getElementById(user);
    var passE = document.getElementById(pass);
    
    if(userE.value ==="" || passE.value ==="")
    alert("Error: Username or password are missing");
    else
    document.location.href = link

 }
 



