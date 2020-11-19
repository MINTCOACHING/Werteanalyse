window.onload = clearLocalStorage;

function clearLocalStorage(){
localStorage.clear();
}

function checkbox()
{
  localStorage.clear();
  var reminder = 0;
	localStorage.setItem("reminder", reminder);
	//alert(reminder);
  for ( i = 1; i<11;i++){
	  document.getElementById(i).innerHTML = i
  }
  var checks = document.getElementsByName('werte');
  
  var str = '';
  var zaehler = 0;
  var next = 0
  for ( i = 0; i<101;i++){
	
		if(checks[i].checked == true ) {
			zaehler += 1;
			str = '';
			str= checks[i].value;
			localStorage.setItem("werte" + zaehler, str);
			}
  }
  if(next == 0) {
	  
	  window.open('topn.html', '_self');
	  
	}
  
  }