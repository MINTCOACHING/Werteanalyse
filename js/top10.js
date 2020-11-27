window.onload = clean;

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
    item.addEventListener('touchstart', handleDragStart, false);
    item.addEventListener('touchstart', handleDragEnter, false);
    item.addEventListener('touchmove', handleDragOver, false);
    item.addEventListener('touchmove', handleDragLeave, false);
    item.addEventListener('touchmove', handleDrop, false);
    item.addEventListener('touchend', handleDragEnd, false);
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
    
  });
});

function clean(){
	var str = '';
	var zaehler = 0;
	var counter3 = localStorage.getItem('counter2');
	for ( i = 1; i<=counter3;i++){
		document.getElementById(i).innerHTML = 'MAEH';
		zaehler += 1;
		str = 'wertetopten' + zaehler;
		if(localStorage.getItem(str)!==null){
		document.getElementById(i).innerHTML = 'MUH';
		document.getElementById(i).innerHTML = localStorage.getItem(str);
		}else {
			str = zaehler;
			document.getElementById(i).innerHTML = i;
		}
	}
}

function generatePDF() {
        // Choose the element that our invoice is rendered in.
        const element = document.getElementById("druck");
		var opt = {
		  margin:       1,
		  filename:     'MINT-Coaching_Werteanalyse.pdf',
		  image:        { type: 'jpeg', quality: 0.98 },
		  html2canvas:  { scale: 4,},
		  jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
};

		// New Promise-based usage:
		html2pdf().set(opt).from(element).save();

        
      }
	  
	  

