2.

function AddItem(ProductID, ProductName, Description, Price, Quantity, StoreID) {
    var merged = false;
    var UserID = $("#hiddenUserID").val(); //e.g. = 1
    var ProductDate = $("#hiddenDateField").val(); //e.g. = 2014/05/01
    var newItemObj = {
        "ProductID": ProductID,
        "ProductName": ProductName,
        "Description": Description,
        "Price": Price,
        "Quantity": Quantity,
        "StoreID": StoreID,
        "UserID": UserID,
        "ProductDate": ProductDate
    };
    // просмотреть товары в корзине
    for (var i = 0; i < ShoppingCartItems.length; i++) {

        // если product ID, user ID, and date одинаковые
        if (ShoppingCartItems[i].ProductID == newItemObj.ProductID &&
            ShoppingCartItems[i].UserID == newItemObj.UserID &&
            ShoppingCartItems[i].ProductDate == newItemObj.ProductDate) {

            // добавить количество нового объекта к старому
            ShoppingCartItems[i].Quantity += newItemObj.Quantity;

            // если два элемента объединены, установите флаг
            merged = true;
        }
    };
    // если слияния не произошло, просто добавить элемент в обычном режиме
    if (!merged) {
        ShoppingCartItems.push(newItemObj);
    }
}