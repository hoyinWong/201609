;
(function($){
    var 
        arr = ['one', 'two', 'one', 'three', 'three', 'two'],
        originalTxt = arr.join('!'),
        len = arr.length,
        i, iItem, j, jItem,
        currentTxt;
        $('.original').text(originalTxt);

    for(var i = 0; i < len; i++){
        iItem = arr[i];
        for(j = i+1; j < len; j++){
            jItem = arr[j];
            if(iItem === jItem){
                arr.splice(j,1);
            }
        }
        currentTxt = arr.join('!');
        $('.current').text(currentTxt);
    }
})(jQuery)