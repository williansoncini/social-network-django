(function (){
    if (window.myBookmarklet !== undefined){
        myBookmarklet()
    } else {
        document.body.appendChild(document.createElement('script')).src='https://mysite.com:8000/static/js/bookmarklet.js?r='+Math.floor(Math.random()*999999999);
    }
})();