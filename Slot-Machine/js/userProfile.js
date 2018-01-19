
            var API_URL='https://rqfjpfrte1.execute-api.ap-south-1.amazonaws.com/prod/userprofile';
    $(document).ready(function(){

      $.ajax({
        type:'GET',
        url:API_URL,

        success:function(data){

            console.log(data);
            
          
          
              $('#player_name').html('');
              $('#player_name').html('<p>'+data.Item.playerName+'</p>');
              $('#user_email').html('');
              $('#user_email').html('<p>'+data.Item.email+'</p>');
              $('#DOB').html('');
              $('#DOB').html('<p>'+data.Item.DOB+'</p>');
              $('#HighScore').html('');
              $('#HighScore').html('<p>'+data.Item.highScore+'</p>');
              $('#tokens').html('');
              $('#tokens').html('<p>'+data.Item.tokens+'</p>');
              $('#user_image').attr('src',data.Item.profilePicture);

          

        }
      })
    })
//         (
//           /*global WildRydes _config*/

// var WildRydes = window.WildRydes || {};
// WildRydes.map = WildRydes.map || {};

// (function rideScopeWrapper($) {
//     var authToken;
//     WildRydes.authToken.then(function setAuthToken(token) {
//         if (token) {
//             authToken = token;
//         } else {
//             window.location.href = '/signin.html';
//         }
//     }).catch(function handleTokenError(error) {
//         alert(error);
//         window.location.href = '/signin.html';
//     });
//     function requestUnicorn(pickupLocation) {
//         $.ajax({
//             method: 'POST',
//             url: _config.api.invokeUrl + '/ride',
//             headers: {
//                 Authorization: authToken
//             },
//             data: JSON.stringify({
//                 PickupLocation: {
//                     Latitude: pickupLocation.latitude,
//                     Longitude: pickupLocation.longitude
//                 }
//             }),
//             contentType: 'application/json',
//             success: completeRequest,
//             error: function ajaxError(jqXHR, textStatus, errorThrown) {
//                 console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
//                 console.error('Response: ', jqXHR.responseText);
//                 alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
//             }
//         });
//     }

//     function completeRequest(result) {
//         var unicorn;
//         var pronoun;
//         console.log('Response received from API: ', result);
//         unicorn = result.Unicorn;
//         pronoun = unicorn.Gender === 'Male' ? 'his' : 'her';
//         displayUpdate(unicorn.Name + ', your ' + unicorn.Color + ' unicorn, is on ' + pronoun + ' way.');
//         animateArrival(function animateCallback() {
//             displayUpdate(unicorn.Name + ' has arrived. Giddy up!');
//             WildRydes.map.unsetLocation();
//             $('#request').prop('disabled', 'disabled');
//             $('#request').text('Set Pickup');
//         });
//     }

//     // Register click handler for #request button
//     $(function onDocReady() {
//         $('#request').click(handleRequestClick);
//         $(WildRydes.map).on('pickupChange', handlePickupChanged);

//         WildRydes.authToken.then(function updateAuthMessage(token) {
//             if (token) {
//                 displayUpdate('You are authenticated. Click to see your <a href="#authTokenModal" data-toggle="modal">auth token</a>.');
//                 $('.authToken').text(token);
//             }
//         });

//         if (!_config.api.invokeUrl) {
//             $('#noApiMessage').show();
//         }
//     });

//     function handlePickupChanged() {
//         var requestButton = $('#request');
//         requestButton.text('Request Unicorn');
//         requestButton.prop('disabled', false);
//     }

//     function handleRequestClick(event) {
//         var pickupLocation = WildRydes.map.selectedPoint;
//         event.preventDefault();
//         requestUnicorn(pickupLocation);
//     }

//     function animateArrival(callback) {
//         var dest = WildRydes.map.selectedPoint;
//         var origin = {};

//         if (dest.latitude > WildRydes.map.center.latitude) {
//             origin.latitude = WildRydes.map.extent.minLat;
//         } else {
//             origin.latitude = WildRydes.map.extent.maxLat;
//         }

//         if (dest.longitude > WildRydes.map.center.longitude) {
//             origin.longitude = WildRydes.map.extent.minLng;
//         } else {
//             origin.longitude = WildRydes.map.extent.maxLng;
//         }

//         WildRydes.map.animate(origin, dest, callback);
//     }

//     function displayUpdate(text) {
//         $('#updates').append($('<li>' + text + '</li>'));
//     }
// }(jQuery));

//         )