const logoutButton = new LogoutButton();

logoutButton.action = () => {
    const cb = (response) => {
        if (response.success) {
            location.reload();
        }
    }
    ApiConnector.logout(cb);
}

ApiConnector.current((responce) => {
if(responce.success) {
    console.log(responce);
    ProfileWidget.showProfile(responce.data)
}
})