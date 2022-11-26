 
function displayCourse()
{
for ( var i = 1 ; i < 6; i++)
{
    var target = "course" + i;
    $("." + target).hide();
   
    if ( localStorage[target] != ""  && localStorage[target] != null)
    {

      var firstWord = target.split("")
      $("." + target).text(localStorage[target]);
      $("." + target).show();
   
    }
}
}

displayCourse();



$(".clearSchedule").click( function()
{
    localStorage.clear();
    displayCourse();
});