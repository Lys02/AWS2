/*global WildRydes _config*/

var SlotMachine = window.SlotMachine || {};
var API_home_Url='https://rqfjpfrte1.execute-api.ap-south-1.amazonaws.com/prod/home';

(function scopeWrapper($) {
    var authToken;
    SlotMachine.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = '/signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/signin.html';
    });


    // function requestUnicorn(pickupLocation) {
    //     $.ajax({
    //         method: 'POST',
    //         url: _config.api.invokeUrl + '/ride',
    //         headers: {
    //             Authorization: authToken
    //         },
    //         data: JSON.stringify({
    //             PickupLocation: {
    //                 Latitude: pickupLocation.latitude,
    //                 Longitude: pickupLocation.longitude
    //             }
    //         }),
    //         contentType: 'application/json',
    //         success: completeRequest,
    //         error: function ajaxError(jqXHR, textStatus, errorThrown) {
    //             console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
    //             console.error('Response: ', jqXHR.responseText);
    //             alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
    //         }
    //     });
    // }


    $(function onDocReady() {

        SlotMachine.authToken.then(function updateAuthMessage(token) {
            if (token) {
                displayUpdate('You are authenticated. Click to see your <a href="#authTokenModal" data-toggle="modal">auth token</a>.');
                $('.authToken').text(token);
            }
        });

        if (!API_home_Url) {
            $('#noApiMessage').show();
        }

        $.ajax({
            type: 'GET',
            url: API_home_Url,
            headers: {
                Authorization: authToken
            },
            
            contentType: 'application/json',
            success: function(data){
                console.log('call successful -data reciebed :'+data);
            }
            // error: function ajaxError(jqXHR, textStatus, errorThrown) {
            //     console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
            //     console.error('Response: ', jqXHR.responseText);
            //     alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
            // }
        });
    });



    

    function displayUpdate(text) {
        $('#updates').append($('<li>' + text + '</li>'));
    }
}(jQuery));
