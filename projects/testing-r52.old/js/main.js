var infoPopup= document.getElementById('info-popup');
var info = document.getElementById('info');

function show() {
  info.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
  infoPopup.style.display="block";
  setTimeout(function() {infoPopup.style.opacity="1";
    infoPopup.style.borderRadius = "3px";
    infoPopup.style.width = "auto";
    infoPopup.style.padding = "17px 70px 15px 40px";
    info.style.boxShadow="none";
  }, 10)
}

function hide() {
  info.innerHTML='<i class="fa fa-info" aria-hidden="true"></i>';
  infoPopup.style.padding = "17px 1px 15px 16px";;
  infoPopup.style.opacity="0"
  infoPopup.style.borderRadius = "50px";
  infoPopup.style.width = "55px";
  info.style.boxShadow="0 5px 10px -2px rgba(0,0,0,0.45)";
  setTimeout(function() {
    infoPopup.style.display="none";
  }, 210)
}

function infoShow() {
  var infoInner = document.getElementById('info').innerHTML;

  if (infoInner == '<i class="fa fa-info" aria-hidden="true"></i>') {
    show();
  }
  else {
    hide();
  }
}
