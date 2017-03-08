// _____________________________
//         Logout resize!

window.onload = function() {
  var loginSize = document.getElementById('login').offsetWidth+"px";
  document.getElementById('logout').style.width = loginSize;
}

// _____________________________
//            Print!

document.getElementById('print').onclick = function() {
  javascript:print(document);
}

// _____________________________
//         Info popup!

var info = document.getElementById('info');
var infoPopup= document.getElementById('info-popup');

function show() {
  info.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
  infoPopup.style.padding = "17px 150px 15px 30px";
  infoPopup.style.width = "auto";
}

function hide() {
  info.innerHTML='<i class="fa fa-info" aria-hidden="true"></i>';
  infoPopup.style.padding = "17px 1px 15px 16px";;
  infoPopup.style.width = "150px";
}

document.getElementById('info').onclick = function() {
  var infoInner = this.innerHTML;

  if (infoInner == '<i class="fa fa-info" aria-hidden="true"></i>') {
    show();
  }
  else {
    hide();
  }
}

// _____________________________
//          Option status!

var checklist = document.getElementsByClassName('select');

for (var i = 0; i < checklist.length ; i++) {
  checklist[i].addEventListener("change",  option)
}

function option() {
  if (this.options[1].selected) {
    this.parentNode.classList.add('success');
    this.parentNode.classList.remove('failure');
  }
  else if (this.options[2].selected) {
    this.parentNode.classList.add('failure');
    this.parentNode.classList.remove('success');
  }
  else {
    this.parentNode.classList.remove('failure');
    this.parentNode.classList.remove('success');
  }
}
