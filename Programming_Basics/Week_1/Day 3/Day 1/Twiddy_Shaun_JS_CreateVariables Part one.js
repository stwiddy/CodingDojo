var childHeight = 50
var child = 12

function displayIfChildCanRideRollerCoaster() {
    if (childHeight >= 42 && child >=10) 
    {
    console.log ("Child can Ride!");
    
    } else if (childHeight < 42) 
    {
    console.log ("Child must be 42 inches or above")
    
    } else (child < 10) 
    {
    console.log("Child must be 10 or order")
    }
}


displayIfChildCanRideRollerCoaster();