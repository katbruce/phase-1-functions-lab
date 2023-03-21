// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return(Math.abs(street-42));
}
function distanceFromHqInFeet(street){
    return(distanceFromHqInBlocks(street)*264);
}
function distanceTravelledInFeet(start,destination){
    return(Math.abs(start-destination)*264);
}
function calculatesFarePrice(start,destination){
    let dis = distanceTravelledInFeet(start, destination);
    if (dis<400){
        return(0);
    }else if(dis<=2000){
        return((dis-400)*.02);
    }else if(dis<=2500){
        return(25);
    }else{
        return('cannot travel that far');
    }
    
}