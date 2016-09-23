;
(function($){
    var 
        arr = ['one', 'two', 'one', 'three', 'three', 'two'],
        originalTxt = arr.join('!'),
        len = arr.length,
        i, iItem, j, jItem,
        currentTxt;
        $('.json .original').text(originalTxt);
        $('.hoyin .original').text(originalTxt);
    //Json的方法
    for(i = 0; i < len; i++){
        iItem = arr[i];
        for(j = i+1; j < len; j++){
            jItem = arr[j];
            if(iItem === jItem){
                arr.splice(j,1);
            }
        }
    }
    currentTxt = arr.join('!');
    $('.json .current').text(currentTxt);
    //hoyin 的方法
    var 
        result = [],//用来存放去重后的数组
        k, kItem, z, zItem,
        hoyinTxt;
    for(k = 0; k <len; k++){
        kItem = arr[k];
        for(z = k+1; z < len; z++){
            zItem = arr[z];
            if(kItem !== zItem){
                result.push(kItem);
            }
        }
    }
    hoyinTxt = result.join('!');
    $('.hoyin .current').text(currentTxt);
})(jQuery)