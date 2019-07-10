const removeRredundantElements=(barcodes)=>{
    let newBarcodesArray=[];
    for(let i=0;i<barcodes.length;i++){
        let count=1;
        if(barcodes[i]!='0'){
            for(let j=i+1;j<barcodes.length;j++){
                if(barcodes[j]==barcodes[i]){
                    barcodes[j]='0';
                    count++;
                }
            }
            let obj={};
            obj.barcodeID=barcodes[i];
            obj.total=count;
            newBarcodesArray.push(obj);
        }
    }
    return newBarcodesArray;
}


const isBarcodeValid=(newBarcodesArray,dataBase)=>{
    let lengthOfNewBarcodesArray=newBarcodesArray.length;
    let count=0;
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

const printReceipt=(barcodes,dataBase,removeRredundantElements,isBarcodeValid)=>{
    let  receipt='';
    let totalPrice=0;
    let newBarcodesArray=removeRredundantElements (barcodes);
    if(!isBarcodeValid (newBarcodesArray,dataBase))
    receipt= receipt+"[ERROR]!";
    else{
        receipt= receipt+"Receipts\n------------------------------------------------------------\n";
        for(let i=0;i<newBarcodesArray.length;i++){//找database里有没有
            for(let j=0;j<dataBase.length;j++){
                if(newBarcodesArray[i].barcodeID==dataBase[j].id){
                    totalPrice=totalPrice+dataBase[j].price*newBarcodesArray[i].total;
                    receipt=`${receipt}${dataBase[j].name}\t\t\t\t\t\t${dataBase[j].price}\t\t\t${newBarcodesArray[i].total}\n`;
                    break;
                }
            }
        }
        receipt= `${receipt}------------------------------------------------------------\nPrice: ${totalPrice}`;
    }
    return receipt;
}

module.exports ={
    removeRredundantElements,
    isBarcodeValid,
    printReceipt
};
