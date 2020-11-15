function checkbox()
{
  for ( i = 1; i<11;i++){
	  document.getElementById(i).innerHTML = i
  }
  var checks = document.getElementsByName('werte');{
  
  var str = '';
  var zaehler = -1;
  
  for ( i = 0; i<101;i++){
		if(checks[i].checked == true ) {
			zaehler += 1;
			if(zaehler>9) {
				alert("Bitte wähle nur 10 Werte aus!");
				for ( i = 1; i<11;i++){
					document.getElementById(i).innerHTML = i
					}
				break;
				}
				
			str= checks[i].value + " ";
			document.getElementById(zaehler+1).innerHTML = str
		//} else {
			//zaehler += 1;
			
		//document.getElementById(01).innerHTML += str;
		}
  }
  
  }
}

document.addEventListener('DOMContentLoaded', (event) => {

  var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  
  
  let items = document.querySelectorAll('.container .box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});