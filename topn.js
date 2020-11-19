
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
		myC = document.createElement( 'INPUT' ) ;
		var br = document.createElement('br');
		myF.appendChild(br);
		myC.type = 'checkbox' ;
		myC.checked = false ;
		myC.align = 'center';
		myC.id = 'CB'+i ;
		myC.value = mywert; 
		myF.appendChild( myC ) ;
		myL = document.createTextNode(mywert);
		myF.appendChild( myL ) ;
		document.body.appendChild( myF );
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