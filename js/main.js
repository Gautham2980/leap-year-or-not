var a=new Date();
var leap=a.getFullYear();
console.log(leap);
if(leap%4==0){
    document.write("This is leap year")
}
else{
    document.write("This is not leap year")
}