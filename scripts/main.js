function accordion(){
  var toggle = $(".accordion-trigger");
  var content = $(".accordion-content");
  toggle.on("click", function(e){
    e.preventDefault();
    var $targetContent = $($(this).attr("href"));
    content.slideUp();
    if ($targetContent.is(':visible'))
     $targetContent.slideUp();
    else
     $targetContent.slideDown();
  });
}

function scrollNav() {
  $(".page-nav").on("click", "a", function(e){
    var target = $(this).attr("href");
    if (target.charAt(0) === "#"){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
    }
  });
}

function responsiveNav() {
  $(".menu-toggle").click(function(e){
    e.preventDefault();
    $(".page-nav ul").toggle();
    $(this).toggleClass("open");
  });
}

function filter() {
  if ($("#challenges-filter").length) {
    $('#challenges-filter').affix({ offset: $('#challenges-filter').position() });

    $("#all-filter").click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.challenges_page_list-challenge').show();
    });
    $("#software-filter").click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.challenges_page_list-challenge').hide();
      $('.challenges_page_list-challenge').filter('.software').show();
    });
    $("#hardware-filter").click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.challenges_page_list-challenge').hide();
      $('.challenges_page_list-challenge').filter('.hardware').show();
    });
    $("#design-filter").click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.challenges_page_list-challenge').hide();
      $('.challenges_page_list-challenge').filter('.design').show();
    });
    $("#strategy-filter").click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.challenges_page_list-challenge').hide();
      $('.challenges_page_list-challenge').filter('.strategy').show();
    });
  }
}

function modals() {
  var modalTrigger = $(".modal-trigger"); 
  var overlay = $("#overlay");
  modalTrigger.click(function(e){
    var modal = $(this).attr("href");
    var modalImg = $(this).find("img").attr("src");
    e.preventDefault();
    overlay.fadeIn();
    $(modal).fadeIn();
    $(modal).find("aside img").attr("src", modalImg);
  });
  overlay.on("click", function(e){
    if (!($(e.target).parents(".modal").length > 0)) {
      $(this).fadeOut();
      $(".modal").hide();
    }
  });
  $(".modal-close").click(function(e){
    e.preventDefault();
    $(".modal").hide();
    overlay.hide();
  });
  $(".modal").click(function(e){
    e.stopPropagation();
  });
}

function showMore() {
  var moreTrigger = $(".more-link");
  moreTrigger.on("click", function(e){
    e.preventDefault();
    if ($(this).text() === "More") {
      $(this).text("Less");
    } else {
      $(this).text("More");
    }
    var targetMoreContent = $(this).attr("href");
    $(targetMoreContent).slideToggle();
  });
}

$(document).ready(function(){
  accordion();
  modals();
  filter();
  showMore();
  filter();
  scrollNav();
  responsiveNav();
});