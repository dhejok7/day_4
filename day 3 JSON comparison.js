solution 1
--------------
<!doctype HTML>
<html>
<head>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js">

var obj1 = {name: "Raghu", age: 5};
var obj2 = {age: 5, name: "Raghu"};
if(_.isEqual(obj1,obj2)){
  console.log("Equal");
}else
  {
    console.log("isNotEqual")
  }
</script>
</head>
<body>
</body>
</html>
-----------------------------------------------------------
solution 2
--------------

<!doctype HTML>
<html>
<head>
</head>
<body>
let json = {name:"Raghu",age:4};
let json1 = {age:4, name:"Raghu"};

if(json.name == json1.name){
    console.log("isEqual")
}else {
    console.log("isNotEqual")
}
</body>
</html>