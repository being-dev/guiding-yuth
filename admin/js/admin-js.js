$(function () {

    $('#alert-message').removeClass();
    $('#preloader').show('slow');
    $.ajax({
        type: 'POST',
        url: 'https://2bdwgnrb4m.execute-api.ap-southeast-1.amazonaws.com/dev/api/v1/secure/admin/list',
        dataType: 'json',       
        complete: function (xhr, status) {
            $('#preloader').hide('slow');
            if (xhr.status == 200) {
                $('#alert-message').html(xhr.responseText);
                $('#alert-message').fadeIn();
               
            } else {
                $('#alert-message').html(xhr.responseText);
                $('#alert-message').addClass('alert alert-danger');
                $('#alert-message').fadeIn();
            }
        }
    });


});