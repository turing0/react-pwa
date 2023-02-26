function subscribePush() {
    //Subscribes user to Push notifications
    registration.pushManager.subscribe({
        userVisibleOnly: true, //Set user to see every notification
        applicationServerKey: urlBase64ToUint8Array(process.env.REACT_APP_PUBLIC_VAPID_KEY),
    })
    .then(function (subscription) {
        toast('Subscribed successfully.');
        console.info('Push notification subscribed.');
        console.log(subscription);
    })
    .catch(function (error) {
        console.error('Push notification subscription error: ', error);
    });
}