// _____________________________
//         logoutResize

window.onload = function() {
  var loginSize = document.getElementById('login').offsetWidth+"px";
  document.getElementById('logout').style.width = loginSize;
}

// _____________________________
//         infoPopup

var infoPopup= document.getElementById('info-popup');
var info = document.getElementById('info');

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
  var infoInner = document.getElementById('info').innerHTML;

  if (infoInner == '<i class="fa fa-info" aria-hidden="true"></i>') {
    show();
  }
  else {
    hide();
  }
};
