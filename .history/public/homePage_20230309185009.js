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

// Добавление денег
const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = function (data) {
    ApiConnector.addMoney(data, response => {
       response.success 
       ? ProfileWidget.showProfile(response.data) 
       : this.setMessage(response.success, isSuccess, message)
    })
}
