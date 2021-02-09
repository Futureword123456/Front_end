// alert("长江大学");

// var  x = 123;
// alert(x+1);
// console.log("cjdx ");
// function add(x1,x2) {
//     return x1 + x2;
// }
// var x = add(2,3);
// console.log(x);

//  var x4 =function (x1,x2) {
//      return x1 + x2;
// };
// var x =x4(4,5);
//
// console.log(x);
// function add( x1,x2) {
//     return x1+x2;

// }
// var x = add(4,6);
// console.log(x);

// function jian(x1,x2){
//     if (x1>=x2)
//       return x1-x2;
//     else  
//       return x2-x1;
// }
// var x = jian(4,6);
// console.log(x)

// //Force type conversion
// var x= !0;
// console.log(Boolean(x));



// var x= "abc";
// if(!isNaN(x)){
//     console.log(parseInt(x));
// }else{
//     console.log("is error!");
//     x =0;
// }
// console.log(x);

// var n=9;
// function fun1() {
//     var n2 = 5;
//     var n=10;
//     console.log(n2);
// }
// function fun2() {
//     n=n-1;

// }
// function fun3() {
//     console.log(n);
//     console.log(n2);
// }
// fun1();
// fun2();
// fun3();


// var x = 2;
// var y = 3;
// var z = 1;
// var flag = (x>10 || y>5) || z>10;
// console.log(flag);

// var n = 11;
// var flag = 10?"dayu":"xiaoyu";

// console.log(flag)
// var x=2;
// var y=2;
// if(x>y){
//     console.log("大于");
// }
// else if(x<y){
//     console.log("小于");
  
// }else{
//     console.log("x==y");
// }
// var score = 95;
// var str;
// var n= parseInt(score/10);
// switch (n) {
//     case 10:
//         str="nanfen";
//         break;
//     case 9:
//         str="youxiu";
//         break;
//     case 8:
//     case 7:
//         str="liaoghao";
//         break;
//     case 6:
//         str = "jige";
//         break;
//     case 5:
//     case 4:
//     case 3:
//     case 2:
//     case 1:
//         str = "bujige";
//         break;
//     default:
//         break;
// }
// console.log(str);
// var score = 95;
// var str;
// var n= parseInt(score/10);
// if (n>=9 &&n<=10){
//     str="nanfen";
// }
// else if(n>=8&& n<=9){
//     str="youxiu";
// }
// else if(n>=7&& n<=8){
//     str="ianghao";
// }
// else if(n>=6&& n<=7){
//      0;i<=100;i++){
//     if(i%2==0){
//         continue;
//     }
//     if (sum>=1000){
//         break;
//     }
//     sum = sum+i;    
// }   
// console.log(sum);

var str="52232819981209491X"
console.log(str.substr(3,6));
console.log(str.substring(3,9));
var x =str.charAt(12);
if (x%2==0){
    console.log('nan');
}else{
    console.log("nv");
}
console.log(str.length);
console.log(str.indexOf(1));
var str1 = "sdsfv,dfg,d654,84,564,dfv51d,4"
var arr = str1.split(",")
console.log(arr[1]);
console.log(str.concat("55",",","77"));
console.log(arr.concat("55",",","77"));
console.log(str1.replace("84","imooc"));

var a= new Date();
// var b =new Date("2021-1-2 10:32:45")
// console.log(a.getDate());
// console.log(b.getMonth()+1);
// console.log(a.getHours());
// console.log(a.getDay());
// console.log(a.getSeconds());
// console.log(a.getMinutes());
// var n = a.getTime()

function fun_FmtDate() {
    var d1 = new Date();
    var yyyy,mm,dd,hh,mi,ss;
    yyyy=d1.getFullYear();
    mm = d1.getMonth()+1;
    dd = d1.getDate();
    hh = d1.getHours();
    mi = d1.getMinutes();
    ss = d1.getSeconds();
    time = yyyy+"-"+mm+"-"+dd+"-"+hh+":"+mi+":"+ss;
    return time
}
console.log(fun_FmtDate());

var n = 65.2651
console.log(Math.round(n));
console.log(n.toFixed(2));
console.log(Math.min(1,5,1,9));
console.log(Math.max(1,5,1,9));
console.log(Math.abs(-2));

//shuzu
// var arr = new Array();
// var arr = new Array(5);
var arr = new Array(1,5,"894");
console.log(arr[2]);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}


for(var j in arr){
    console.log(arr[j]);
}



