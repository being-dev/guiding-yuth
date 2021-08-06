(function ($) {
  'use strict';

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */

  // window.load = function () {
  // 	document.getElementById('preloader').style.display = 'none';
  // }

  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).hide();
    });
  });


  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();


  /* ========================================================================= */
  /*	Header Scroll Background Change
  /* ========================================================================= */

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll > 200) {
      //console.log('a');
      $('.navigation').addClass('sticky-header');
    } else {
      //console.log('a');
      $('.navigation').removeClass('sticky-header');
    }
  });

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */

  // filter
  setTimeout(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
  }, 500);

  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */

  //Init the slider
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });


  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */

  //Init the slider
  $('.clients-logo-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1
  });




  /* ========================================================================= */
  /*	Company Slider Carousel
  /* =========================================================================  */
  $('.company-gallery').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1
  });


  /* ========================================================================= */
  /*   Contact Form Validating
  /* ========================================================================= */

  $('#contact-form').validate({
    errorClass: 'form-error',
    errorElement: 'span',
    rules: {
      txt_name: {
        required: true
      },
      txt_mobile: {
        required: true,
        minlength: 10
      },
      txt_subject: {
        required: true
      },
      txt_message: {
        required: true
      }
    },
    messages: {
      txt_name: {
        required: 'Please provide your name'
      },
      txt_mobile: {
        required: 'Please provide your mobile no,',
        minlength: 'Please provide your valid mobile no.'
      },
      txt_subject: {
        required: 'Please provide your query subject'
      },
      txt_message: {
        required: 'Please provide your query describtion ',
      }
    },
    submitHandler: function (form) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      $('#form-message').removeClass();
      $('#preloader').show('slow');
      $.ajax({
        type: 'POST',
        data: JSON.stringify($('#contact-form').serializeFormJSON()),
        url: 'https://q8cvv81t00.execute-api.ap-southeast-1.amazonaws.com/dev/api/v1/secure/contact/save',
        dataType: 'json',
        complete: function (xhr, status) {
          $('#preloader').hide('slow');
          if (xhr.status == 200) {
            $('#form-message').html(xhr.responseText);
            $('#form-message').addClass('alert alert-success');
            $('#form-message').fadeIn();
            $("#contact-form").trigger("reset");
          } else {
            $('#form-message').html(xhr.responseText);
            $('#form-message').addClass('alert alert-danger');
            $('#form-message').fadeIn();
          }
        }
      });
    }
  }

  );

  $('#registration-form').validate({

    errorClass: 'form-error',
    errorElement: 'span',

    rules: {
      txt_first_name: {
        required: true,
        minlength: 2
      }, txt_middle_name: {
        required: true,
        minlength: 2
      }, txt_last_name: {
        required: true,
        minlength: 2
      }, txt_mobile_no: {
        required: true,
        minlength: 10
      }, txt_birth_date: {
        required: true,
        minlength: 10
      }, txt_address: {
        required: true,
        minlength: 10
      }, txt_education: {
        required: true,
        minlength: 2
      }, txt_look_for: {
        required: true
      }, txt_add_info: {
        required: true
      }
    },
    messages: {
      txt_first_name: {
        required: 'Please provide your first name',
        minlength: 'First name must consist of at least 2 characters'
      },
      txt_middle_name: {
        required: 'Please provide your middle name',
        minlength: 'Middle name must consist of at least 2 characters'
      },
      txt_last_name: {
        required: 'Please provide your last name',
        minlength: 'Last name must consist of at least 2 characters'
      }, txt_mobile_no: {
        required: 'Please provide your mobile no.',
        minlength: 'Please provide your valid mobile no.'
      }, txt_birth_date: {
        required: 'Please provide your birth date',
        minlength: 'Please provide valid birth date'
      }, txt_address: {
        required: 'Please provide your address details',
        minlength: 'Please provide valid address details.'
      }, txt_education: {
        required: 'Please provide your education information',
        minlength: 'Please provide valid education qualification'
      }, txt_look_for: {
        required: 'Please select what you are looking for'
      }, txt_add_info: {
        required: 'Any additional information or interest or qualification or specialization'
      }

    },
    submitHandler: function (form) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      $('#preloader').show('slow');
      $('#form-message').removeClass();
      $.ajax({
        type: 'POST',
        data: JSON.stringify($('#registration-form').serializeFormJSON()),
        url: 'https://q8cvv81t00.execute-api.ap-southeast-1.amazonaws.com/dev/api/v1/secure/register/save',
        dataType: 'json',
        complete: function (xhr, status) {
          $('#preloader').hide('slow');
          if (xhr.status == 200) {
            $('#form-message').html(xhr.responseText);
            $('#form-message').addClass('alert alert-success');
            $('#form-message').fadeIn();
            $("#registration-form").trigger("reset");
          } else {
            $('#form-message').html(xhr.responseText);
            $('#form-message').addClass('alert alert-danger');
            $('#form-message').fadeIn();
          }
        }
      });
    }
  });

  $('#btn_cancel').click(function() {
    $("#registration-form").trigger("reset");
    var ele = $("#registration-form").find(".form-error");
    $("#registration-form").find(".form-error").removeClass('form-error');
    for(var i=0;i<ele.length ;i++) {
      if(ele[i].tagName == 'SPAN') {
        ele[i].remove();
      }
    }    
  });

  $('#login-form').validate({
    errorClass: 'form-error',
    errorElement: 'span',
    rules: {
      txt_username: {
        required: true
      },
      txt_password: {
        required: true
      }      
    },
    messages: {
      txt_username: {
        required: 'Please provide username'
      },
      txt_password: {
        required: 'Please provide your password'
      }      
    },
    submitHandler: function (form) {
      $('#login-form').removeClass();
      $('#preloader').show('slow');
      $.ajax({
        type: 'POST',
        data: JSON.stringify($('#contact-form').serializeFormJSON()),
        url: 'https://q8cvv81t00.execute-api.ap-southeast-1.amazonaws.com/dev/api/v1/secure/login/auth',
        dataType: 'json',
        complete: function (xhr, status) {
          $('#preloader').hide('slow');
          if (xhr.status == 200) {
            $('#form-message').html(xhr.responseText);
            $('#form-message').addClass('alert alert-success');
            $('#form-message').fadeIn();
            $("#contact-form").trigger("reset");
          } else {
            $('#form-message').html(xhr.responseText);
            $('#form-message').addClass('alert alert-danger');
            $('#form-message').fadeIn();
          }
        }
      });
    }
  });

  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  var scroll = new SmoothScroll('a[href*="#"]');

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    if ($('.counter').length !== 0) {
      var oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  // -----------------------------
  //  On Scroll
  // -----------------------------
  $(window).scroll(function () {
    counter();
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
 
})(jQuery);
