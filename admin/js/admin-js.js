$(function () {

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
          $('#form-message').removeClass();
          $('#preloader').show('slow');
          var url = buildUrl('/login/auth');
          $.ajax({
            type: 'POST',
            data: JSON.stringify($('#login-form').serializeFormJSON()),
            url: url,
            dataType: 'json',
            complete: function (xhr, status) {
              $('#preloader').hide('slow');
              if (xhr.status == 200) {
                //$('#form-message').html(xhr.responseText);
                //$('#form-message').addClass('alert alert-success');
                $('#form-message').fadeIn();
                $.cookie("Authorization", xhr.responseText);
                window.location.href='home.html'
              } else {
                $('#form-message').html(xhr.responseText);
                $('#form-message').addClass('alert alert-danger');
                $('#form-message').fadeIn();
              }
            }
          });
        }
      });

});

// Admin :: Candidate List Page Functionality 
/** [Start] */
function loadRegistrationsDetails() {
    var url = buildUrl('/admin/list');
    $('#alert-message').removeClass();
    $('#preloader').show('slow');
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        complete: function (xhr, status) {
            if (xhr.status == 200) {
                buildTableBody(xhr.responseText);
                $('#alert-message').fadeIn();
                $('#preloader').hide('slow');
            } else {
                $('#alert-message').html(xhr.responseText);
                $('#alert-message').addClass('alert alert-danger');
                $('#preloader').hide('slow');
            }
        }
    });
}

function buildTableBody(response) {
    var tbody = '';
    $.each(JSON.parse(response), function (key, value) {
        tbody += '<tr>';
        tbody += '<td style="width:200px;">';
        tbody += value.details.name;
        tbody += '</td>';
        tbody += '<td>';
        tbody += value.details.mobileNo;
        tbody += '</td>';
        tbody += '<td>';
        tbody += value.details.education
        tbody += '</td>';
        tbody += '<td style="width:200px;">';
        tbody += value.details.birthDate
        tbody += '</td>';
        tbody += '<td>';
        tbody += value.details.address
        tbody += '</td>';
        tbody += '<td>';
        tbody += value.details.lookingFor
        tbody += '</td>';
        tbody += '<td>';
        tbody += value.details.additionalInfo
        tbody += '</td>';   
        tbody += '<td>';
        tbody += value.details.reg_date
        tbody += '</td>';     
        tbody += '</tr>';
    });   

    $('#cand_tbody').html(tbody);   
}

function loadQueriesDetails() {
    var url = buildUrl('/admin/queries-list');
    $('#alert-message').removeClass();
    $('#preloader').show('slow');
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        complete: function (xhr, status) {
            if (xhr.status == 200) {
                buildQueriesTableBody(xhr.responseText);
                $('#alert-message').fadeIn();
                $('#preloader').hide('slow');
            } else {
                $('#alert-message').html(xhr.responseText);
                $('#alert-message').addClass('alert alert-danger');
                $('#preloader').hide('slow');
            }
        }
    });
}

function buildQueriesTableBody(response) {
    var tbody = '';
    $.each(JSON.parse(response), function (key, value) {
        tbody += '<tr>';
        tbody += '<td>';
        tbody += value.details.name;
        tbody += '</td>';
        tbody += '<td>';
        tbody += value.details.mobileNo;
        tbody += '</td>';
        tbody += '<td>';
        tbody += value.details.query_date
        tbody += '</td>';
        tbody += '<td>';
        tbody += value.details.message
        tbody += '</td>';
        tbody += '</tr>';
    });   

    $('#cand_query_tbody').html(tbody);   
}

/** [End] */