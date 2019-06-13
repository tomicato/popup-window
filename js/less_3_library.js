
function $(selector) {
  var elements;
  if(selector instanceof HTMLElement){
    elements = [selector];
  }else{
    // something except HTMLElement(string, etc.)
    elements = document.querySelectorAll(selector);
    //console.log(elements);
  }


  return new jsPopup(elements);
}


function jsPopup(elements) {

  this.elements = elements;
  var s = this;

  this.on = function (ev, func) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener(ev, func);
    }
    return this;
  };

  this.open = function (item) {

    /*Создаем элементы DOM-дерева*/
    var overlay = document.createElement('div');
    var popup = document.createElement('div');
    var popup_window = document.querySelector('#popup-window');
    var btn = document.querySelector('.win_open');



    /*Добавляем классы элементам*/
    overlay.classList.add('overlay');
    popup.classList.add('popup');

    /*Размещаем элементы в блоке или на странице*/
    popup_window.appendChild(overlay);
    popup_window.appendChild(popup);
    var im = item;

      btn.style.opacity = 0;
      overlay.style.opacity = 1;
      popup.style.opacity = 1;
      overlay.classList.add('show');
      popup.classList.add('show');
      btn.classList.add('show');
      popup.innerHTML = im;
      btn.style.transition = 'opacity 2s';


    overlay.addEventListener('click', function () {
      overlay.style.opacity = 0;
      popup.style.opacity = 0;
      setTimeout(function(){
      overlay.classList.remove('show');
      popup.classList.remove('show');
      btn.style.opacity = 1;
      overlay.remove();
      popup.remove();
      },700);



    });
  };

  this.addClassToArray = function (cls) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(cls);
    }
  };

  this.addClass= function (cls) {
    this.elements[0].classList.add(cls);
  };


}