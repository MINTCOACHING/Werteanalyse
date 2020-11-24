
//alert(localStorage.getItem('reminder'));


window.onload = myvalues;

var counter = 0;

function myvalues()
{
//var reminder = localStorage.getItem('reminder');
//if(reminder < 1){	
  for ( i = 1; i<150;i++){
	var myF = null ;
	var myC = null ;
	var myL = null ;
	var mywert = '';
	
	

	mywert=localStorage.getItem('werte'+i);
	
	if(mywert!==null) {
		counter  += 1;
		myF = document.createDocumentFragment() ;
		var myDiv=document.createElement("DIV");
		myDiv.className="werteelement";

		myC = document.createElement( 'INPUT' ) ;
		myC.type = 'checkbox' ;
		myC.className="wertebox";
		myC.checked = false ;
		myC.id = 'CB'+i ;
		myC.value = mywert; 

		myDiv.appendChild( myC ) ;
		
		myL = document.createElement("label");
		myL.className="wertelabel";
		myL.htmlFor=myC.id;
		myT=document.createTextNode(mywert);
		myL.appendChild(myT);
		myDiv.appendChild( myL ) ;

		myF.appendChild( myDiv ) ;
		var div=document.getElementById("canvas");
		div.appendChild( myF );
		}
  }
  }
//}



function checkbox()
{
  //localStorage.clear();
	var str = '';
	var zaehler = 0;
	var next = 0;
	var counter2 = 0;
	for(i = 1; i<=counter; i++){
		if(document.getElementById('CB'+i).checked==true){
			counter2 += 1;
			localStorage.setItem('counter2', counter2);
			var checks = document.getElementById('CB'+i).value;
			zaehler += 1;
			localStorage.setItem("wertetopten" + zaehler, checks);
		}
	}
window.open('top10.html', '_self');
}