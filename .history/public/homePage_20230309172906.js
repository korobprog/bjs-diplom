const logoutButton = new LogoutButton();
//выход
logoutButton.action = () => {
    const cb = (response) => {
        if (response.success) {
            location.reload();
        }
    }
    ApiConnector.logout(cb);
}
//Профиль
ApiConnector.current((responce) => {
    if (responce.success) {
        console.log(responce);
        ProfileWidget.showProfile(responce.data);
    }
})

// Обновление валют
const ratesBoard = new RatesBoard();

const updateRatesBoard = () => {
    ApiConnector.getStocks((responce) => {
        if (responce.success) {
            ratesBoard.clearTable();
            ratesBoard.fillTable(responce.data)
        }
    });
}
updateRatesBoard();
setInterval(() => {
    updateRatesBoard();
}, 60000);

const moneyManager = new MoneyManager();
// Добавление денег
moneyManager.addMoney = function(data) {
    console.log(data)
    moneyManager.addMoney(data, responce => responce.success
        ? ApiConnector.showProfile()
        : this.setMessage(isSuccess.message))
}