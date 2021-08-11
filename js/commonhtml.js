if (location.protocol == 'http:') {
  location.href = location.href.replace("http", "https");
}

$(function () {
  $(window).on('load', function () {

    checkLocationConfiguration();

    checkServerConfiguration();

    $('#preloader').fadeOut('slow', function () {
      $(this).hide();
    });
  });

  /* ========================================================================= */
  /*	Header Scroll Background Change
  /* ========================================================================= */
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $('.navigation').addClass('sticky-header');
    } else {
      //$('.navigation').toggle();
      $('.navigation').removeClass('sticky-header');
    }
  });

  $.fn.serializeFormJSON = function () {

    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  $("#topheader").html(
    '<header class="navigation fixed-top">' +
    '<div class="container">' +
    '<nav class="navbar navbar-expand-lg navbar-light">' +
    '<a class="navbar-brand logo" href="index.html">' +
    '<img class="logo-default" src="images/logo.png" alt="logo"/>' +
    '<img class="logo-white" src="images/logo-white.png" alt="logo"/>' +
    '</a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"' +
    'aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navigation">' +
    '<ul class="navbar-nav ml-auto text-center">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="index.html">Home</a>' +
    '</li>' +
    '<li class="nav-item ">' +
    '<a class="nav-link" href="registration.html">Registration</a>' +
    '</li>' +
    '<li class="nav-item ">' +
    '<a class="nav-link" href="contact-us.html">Contact Us</a>' +
    '</li>' +
    '<li class="nav-item ">' +
    '<a class="nav-link" href="team.html">Team</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</nav>' +
    '</div>' +
    '</header>');

  $("#footerdata").html(
    '<footer id="footer" class="bg-one">' +
    '<div class="footer-bottom">' +
    '<h5>Copyright 2021. All rights reserved. Yuva Margdarshak</h5>' +
    '</div>' +
    '</footer>');

  $("#admin-topheader").html(
    '<header class="navigation fixed-top">' +
    '<div class="container">' +
    '<nav class="navbar navbar-expand-lg navbar-light">' +
    '<a class="navbar-brand logo" href="home.html">' +
    '<img class="logo-default" src="images/logo.png" alt="logo"/>' +
    '<img class="logo-white" src="images/logo-white.png" alt="logo"/>' +
    '</a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"' +
    'aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navigation">' +
    '<ul class="navbar-nav ml-auto text-center">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="./home.html">Home</a>' +
    '</li>' +
    '<li class="nav-item ">' +
    '<a class="nav-link" href="candidate-list.html">Candidate Registrations</a>' +
    '</li>' +
    '<li class="nav-item ">' +
    '<a class="nav-link" href="candidate-queries.html">Queries</a>' +
    '</li>' +
    '<li class="nav-item ">' +
    '<a class="nav-link" href="javascript:void(0);" id="adminLogout">Logout</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</nav>' +
    '</div>' +
    '</header>');

  $("#admin-footerdata").html(
    '<footer id="footer" class="bg-one">' +
    '<div class="footer-bottom">' +
    '<h5>Copyright 2021. All rights reserved. Yuva Margdarshak</h5>' +
    '</div>' +
    '</footer>');

  $('#adminLogout').click(function (event) {
    $.removeCookie("access_token");
    window.location.href = './index.html';
  });
});

function buildUrl(endpoint) {
  checkServerConfiguration();
  return window.atob(window.localStorage.getItem('SERVER_API_URI')) + endpoint;
}

function checkServerConfiguration() {
  if (!window.localStorage.getItem('SERVER_API_URI') || window.localStorage.getItem('SERVER_API_URI').length == 0) {
    loadServerConfiguration();
  }
}

function loadServerConfiguration() {
  $.ajax({
    url: '../config/app-prod-server-config.json',
    type: 'GET',
    dataType: 'json',
    complete: function (xhr) {
      if (xhr.status == 200) {
        var json = (JSON.parse(xhr.responseText));
        var AWS_SERVER_URI = "";
        AWS_SERVER_URI = AWS_SERVER_URI.concat(json.protocol);
        AWS_SERVER_URI = AWS_SERVER_URI.concat(json.subdomain);
        AWS_SERVER_URI = AWS_SERVER_URI.concat('.');
        AWS_SERVER_URI = AWS_SERVER_URI.concat(json.servername);
        AWS_SERVER_URI = AWS_SERVER_URI.concat('/');
        AWS_SERVER_URI = AWS_SERVER_URI.concat(json.stage);
        AWS_SERVER_URI = AWS_SERVER_URI.concat(json.version);
        AWS_SERVER_URI = AWS_SERVER_URI.concat(json.context);
        window.localStorage.setItem('SERVER_API_URI', window.btoa(AWS_SERVER_URI));
      } else {
        alert('Something went wrong. Please try later sometime...')
      }
    }
  });
}

function checkLocationConfiguration() {
  if (!window.localStorage.getItem('LOCATION_INFO') || window.localStorage.getItem('LOCATION_INFO').length == 0) {
    getLocationInfo();
  }
}

function getLocationInfo() {
  $.ajax({
    url: 'https://ipinfo.io?token=97141d06cbc205',
    type: 'GET',
    dataType: 'json',
    complete: function (xhr) {
      if (xhr.status == 200) {
        var locationInfo = xhr.responseText;
        window.localStorage.setItem('LOCATION_INFO', window.btoa(locationInfo));
      } else {
        alert('Something went wrong. Please try later sometime...')
      }
    }
  });
}