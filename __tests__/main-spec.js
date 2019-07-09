const  caller= require('../main');

it ('should print string "[ERROR]" when there are wrong barcode', () => {
    expect( caller.printReceipt(['0001', '0003', '0005', '1111'], [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ],caller.removeRredundantElements,caller.isBarcodeValid)).toBe("[ERROR]!");
});
it ('should  print receipt when the barcodes are correct', () => {
    expect( caller.printReceipt(['0001', '0003', '0005', '0003'],[
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ],caller.removeRredundantElements,caller.isBarcodeValid)).toBe("Receipts\n------------------------------------------------------------\n"
    +"Coca Cola\t\t\t\t\t\t3\t\t\t1\nPepsi-Cola\t\t\t\t\t\t5\t\t\t2\nDr Pepper\t\t\t\t\t\t7\t\t\t1\n"
    +"------------------------------------------------------------\nPrice: 20");
});


