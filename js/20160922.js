;
(function($) {
   $('.w-recommend').on('click','a',function(){
        var 
            she = $(this),
            url = $(this).attr('data-url'),
            title = $(this).attr('data-title'),
            localUrl = location.href;
        if(url !== localUrl){
            history.pushState({}, title, url);
            history.replaceState(null, title, url);
        }
   });
   window.addEventListener("popstate", function() {
        window.location.reload();                                
});
})(jQuery);

