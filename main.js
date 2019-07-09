
function removeRredundantElements (barcodes) {
    var newBarcodesArray=[];
    for(let i=0;i<barcodes.length;i++){
        var count=1;
        if(barcodes[i]!='0'){
            for(let j=i+1;j<barcodes.length;j++){
                if(barcodes[j]==barcodes[i]){
                    barcodes[j]='0';
                    count++;
                }
            }
            var obj={};
            obj.barcodeID=barcodes[i];
            obj.total=count;
            newBarcodesArray.push(obj);
        }
    }
    return newBarcodesArray;
}
function isBarcodeValid (newBarcodesArray,dataBase) {
    var lengthOfNewBarcodesArray=newBarcodesArray.length;
    var count=0;
    for(let i=0;i<newBarcodesArray.length;i++){//找database里有没有
        for(let j=0;j<dataBase.length;j++){
            if(newBarcodesArray[i].barcodeID==dataBase[j].id){
                count++;
                break;
            }
        }
    }
    if(lengthOfNewBarcodesArray==count++)
    return true;
    else
    return false;
}
function printReceipt (barcodes,dataBase,removeRredundantElements,isBarcodeValid) {
    var  receipt='';
    var totalPrice=0;
    var newBarcodesArray=removeRredundantElements (barcodes);
    if(!isBarcodeValid (newBarcodesArray,dataBase))
    receipt= receipt+"[ERROR]!";
    else{
        receipt= receipt+"Receipts\n------------------------------------------------------------\n";
        for(let i=0;i<newBarcodesArray.length;i++){//找database里有没有
            for(let j=0;j<dataBase.length;j++){
                if(newBarcodesArray[i].barcodeID==dataBase[j].id){
                    totalPrice=totalPrice+dataBase[j].price*newBarcodesArray[i].total;
                    receipt= receipt+dataBase[j].name+"\t\t\t\t\t\t"+dataBase[j].price+"\t\t\t"+newBarcodesArray[i].total+"\n";
                    break;
                }
            }
        }
        receipt= receipt+"------------------------------------------------------------\nPrice: "+totalPrice;
        /*for(let i=0;i<newBarcodesArray.length;i++){//找database里有没有
            for(let j=0;j<dataBase.length;j++){
                if(newBarcodesArray[i].barcodeID==dataBase[j].id){
                    receipt= receipt+"hello!";
                    break;
                }
            }
        }*/
    }
    return receipt;
}
module.exports ={
    removeRredundantElements,
    isBarcodeValid,
    printReceipt
};
