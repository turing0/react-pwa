// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('/serviceWorker.js');
//         console.log(123);
//     });
// }

function isPushSupported() {
    //checks if user has granted permission to Push notifications
    if (Notification.permission === 'denied') {
        alert('User has blocked push notification.');
        return;
}

//Checks if current browser supports Push notification
if (!('PushManager' in window)) {
    alert('Sorry, Push notification isn\'t supported in your browser.');
    return;
}

//Get `push notification` subscription id

//If `serviceWorker` is registered and ready
navigator.serviceWorker.ready
    .then(function (registration) {
    registration.pushManager.getSubscription()
    .catch(function (error) {
        console.error('Error occurred while enabling push ', error);
    });
    });
}