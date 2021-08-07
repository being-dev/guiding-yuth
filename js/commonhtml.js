if (location.protocol == 'http:'){
		  location.href = location.href.replace("http","https");
}
$("#topheader").html(
'<header class="navigation fixed-top">'+
  '<div class="container">'+
    '<nav class="navbar navbar-expand-lg navbar-light">'+
      '<a class="navbar-brand logo" href="index.html">'+
        '<img class="logo-default" src="images/logo.png" alt="logo"/>'+
        '<img class="logo-white" src="images/logo-white.png" alt="logo"/>'+
      '</a>'+
      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"'+
        'aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
      '</button>'+
	  '<div class="collapse navbar-collapse" id="navigation">'+
        '<ul class="navbar-nav ml-auto text-center">'+
          '<li class="nav-item">'+
              '<a class="nav-link" href="index.html">Home</a>'+
          '</li>'+
          '<li class="nav-item ">'+
            '<a class="nav-link" href="registration.html">Registration</a>'+
          '</li>'+
          '<li class="nav-item ">'+
            '<a class="nav-link" href="contact-us.html">Contact Us</a>'+
          '</li>'+
          '<li class="nav-item ">'+
            '<a class="nav-link" href="team.html">Team</a>'+
          '</li>'+          
        '</ul>'+
      '</div>'+
    '</nav>'+
   '</div>'+
'</header>');

$("#footerdata").html(
	'<footer id="footer" class="bg-one">'+
	  '<div class="footer-bottom">'+
		'<h5>Copyright 2021. All rights reserved. Yuva Margdarshak</h5>'+
	  '</div>'+
'</footer>');

$("#admin-topheader").html(
  '<header class="navigation fixed-top">'+
    '<div class="container">'+
      '<nav class="navbar navbar-expand-lg navbar-light">'+
        '<a class="navbar-brand logo" href="index.html">'+
          '<img class="logo-default" src="images/logo.png" alt="logo"/>'+
          '<img class="logo-white" src="images/logo-white.png" alt="logo"/>'+
        '</a>'+
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"'+
          'aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">'+
          '<span class="navbar-toggler-icon"></span>'+
        '</button>'+
      '<div class="collapse navbar-collapse" id="navigation">'+
          '<ul class="navbar-nav ml-auto text-center">'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="./home.html">Home</a>'+
            '</li>'+
            '<li class="nav-item ">'+
              '<a class="nav-link" href="candidate-list.html">Candidate Registrations</a>'+
            '</li>'+
            '<li class="nav-item ">'+
              '<a class="nav-link" href="candidate-queries.html">Queries</a>'+
            '</li>'+
            '<li class="nav-item ">'+
              '<a class="nav-link" href="javascript:void(0);" id="adminLogout">Logout</a>'+
            '</li>'+
          '</ul>'+
        '</div>'+
      '</nav>'+
     '</div>'+
  '</header>');

  $("#admin-footerdata").html(
    '<footer id="footer" class="bg-one">'+
      '<div class="footer-bottom">'+
      '<h5>Copyright 2021. All rights reserved. Yuva Margdarshak</h5>'+
      '</div>'+
  '</footer>');

  $('#adminLogout').click(function(event){
    window.localStorage.clear();
    window.location.href='./index.html';
  });