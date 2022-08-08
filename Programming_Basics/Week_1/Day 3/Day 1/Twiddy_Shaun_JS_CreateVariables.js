var childHeight = 50
var child = 12

function displayIfChildCanRideRollerCoaster() {
    if (childHeight >= 52 && child >=10) 
    {
    console.log ("Get on that ride, kiddo!");
    
    } else if (childHeight < 52) 
    {
    console.log ("Sorry kiddo. Maybe next year")
    
    } else if (child < 10) 
    {
    console.log("Child must be 10 or order")
    }
}


displayIfChildCanRideRollerCoaster();