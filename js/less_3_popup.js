window.onload = function () {

/*  var w_open = document.querySelector('.win_open');
  var do_call = document.querySelector('.do_call');
  var popup = document.querySelector('.popup');
  var overlay = document.querySelector('.overlay');
  var els = document.querySelectorAll('#popup-window div');*/


  var text = '<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at autem, eum excepturi exercitationem expedita, ipsa modi nihil non officia omnis, voluptatibus? Adipisci ea hic pariatur quas quia ratione, repellat!</span><span>Ad asperiores assumenda consequatur consequuntur deleniti doloribus, expedita explicabo facilis in ipsum iure obcaecati quis rerum, similique soluta. Nihil placeat provident quos voluptatibus voluptatum! Alias doloremque laborum totam velit! Facere?</span>\n' +
    '</p>' +
    '<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at autem, eum excepturi exercitationem expedita, ipsa modi nihil non officia omnis, voluptatibus? Adipisci ea hic pariatur quas quia ratione, repellat!</span><span>Ad asperiores assumenda consequatur consequuntur deleniti doloribus, expedita explicabo facilis in ipsum iure obcaecati quis rerum, similique soluta. Nihil placeat provident quos voluptatibus voluptatum! Alias doloremque laborum totam velit! Facere?</span>\n' +
    '</p>' +
    '<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at autem, eum excepturi exercitationem expedita, ipsa modi nihil non officia omnis, voluptatibus? Adipisci ea hic pariatur quas quia ratione, repellat!</span><span>Ad asperiores assumenda consequatur consequuntur deleniti doloribus, expedita explicabo facilis in ipsum iure obcaecati quis rerum, similique soluta. Nihil placeat provident quos voluptatibus voluptatum! Alias doloremque laborum totam velit! Facere?</span>\n' +
    '</p>' +
    '<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at autem, eum excepturi exercitationem expedita, ipsa modi nihil non officia omnis, voluptatibus? Adipisci ea hic pariatur quas quia ratione, repellat!</span><span>Ad asperiores assumenda consequatur consequuntur deleniti doloribus, expedita explicabo facilis in ipsum iure obcaecati quis rerum, similique soluta. Nihil placeat provident quos voluptatibus voluptatum! Alias doloremque laborum totam velit! Facere?</span>\n' +
    '</p>';




  var jp = new jsPopup();

  $('.win_open').on('click', function () {
   console.log(this); // Object jp
    $('.popup').open(text);
    $('.overlay').addClass('blue');
  });

  $('.do_call').on('click', function () {
    var form = document.querySelector('.form-call-me');
    jp.open(form.innerHTML);
  });



};




