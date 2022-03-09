var danishPrice = 50;
var butterPrice = 25;
var toastPrice = 10;
var myBudget = 100;
var packedWell = false;

if(danishPrice < myBudget){
    if(packedWell == true){
        console.log('danish khabo');
    }
    else{
        console.log('danish khamuna');
    }
}
else if(butterPrice < myBudget){
    console.log('butter khabo');
}
else if(toastPrice < myBudget){
    console.log('toast khabo');
}
else{
    console.log('kisui khabo na');
}