// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(function(){
  fadeInPaws();
  linkClickHandler();
  petPanelBgHandler();
  setDateInputHandler();
}); // End Document Ready


// Fade in the paw prints on page load
function fadeIn(){
  var paws = $('.paw-container');
  i = 0;
  while( !($(paws[i]).hasClass('hidden')) ){
    i += 1;
  };
  $(paws[i]).fadeIn(200, function(){
    $(paws[i]).removeClass('hidden')
  }).css({
    'display' : '-webkit-flex',
    'display' : 'flex' 
  });
};


function fadeInPaws(){
  setTimeout(function(){
    var fade = setInterval(function(){
      if (($('.hidden').length) === 0){
        clearInterval(fade);
      } else {
      fadeIn();
      }
    },150);
  }, 1500);
};

function linkClickHandler(){
   $('a').on('click', function(event) {   
    event.preventDefault();
    var target = $(this).attr('href');
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: $(target).offset().top
      },500);
    }, 250);
  });

  $('.selection').on('click', function() {   
    var target = $(this).attr('href');
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: $(target).offset().top
      },500);
    }, 250);
  });
};


// Change the background color of the selected pet panel
function petPanelBgHandler(){ 
  $('.pet-panel').on('click', function() {
    var pets = $('.pet-panel');
    for(var i = 0; i<pets.length; i++){
      $(pets[i]).css('background-color', '');
      $(pets[i]).find('.pet-title').css('color', 'rgba(255,255,255,0.5');
    }
    $(this).css('background-color', '#CD78A3');
    $(this).find('.pet-title').css('color', 'black');
  });
};


function setDateInputHandler(){
  $('.date-select').dateDropper({
      'dropPrimaryColor': '#81788E',
      'dropBorder': '3px solid #625772',
      'dropTextColor': '#625772',
      'dropShadow':  '6px 6px 0 0 #CD78A3',
      'dropWidth' : '200',
      'format' : 'F j, Y'
    });

  $('#start-date').on('change', function(){
    var date = $(this).val();
    var $endDate = $('#end-date');
    $endDate.val(date).change();
    var scope = angular.element($('#start-date')).scope();
    scope.$apply(function(){
        scope.start_date = date;
    });

  });

  $('#end-date').on('change', function(){
    console.log("End Date Changed!");
    var date = $(this).val();
    var scope = angular.element($('#end-date')).scope();
    scope.$apply(function(){
        scope.end_date = date;
    });
  });

};
