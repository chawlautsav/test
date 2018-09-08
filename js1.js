function func1()
{
	document.getElementById('para1').innerHTML='Bye World' 
}	
function func2()
{
	document.getElementById('para1').innerHTML += '  -_- ';
	document.getElementById('para1').innerHTML += Math.floor(Math.random()*100);
}
function func4()
{
	document.getElementById('para2').style.display='block';
	document.getElementById('para2').style.fontSize='50px';
}
var a = 0;
function func3()
{
	if(a == 1)
	{
		document.getElementById('para3').innerHTML='LIKE';
		a=0;
	}
	else
	{
		a=1;
		document.getElementById('para3').innerHTML='UNLIKE';
	}
}