/**
 * Created by wilson on 16/9/7.
 */

function AppCacheListen() {
    var appCache = window.applicationCache;
    window.addEventListener('load', function (e) {
        appCache.addEventListener('updateready', function (e) {
            if (appCache.status == appCache.UPDATEREADY) {
                // Browser downloaded a new app cache.
                // Swap it in and reload the page to get the new hotness.
                appCache.swapCache();
                if (confirm('有新版本，确定重新加载?')) {
                    window.location.reload();
                }
            } else {
                // Manifest didn’t changed. Nothing new to server.
                console.log("manifest didn\'t change");
            }
        }, false);
    }, false);

}
AppCacheListen();


var dateArray = document.querySelector("#scroller ul");

var dateHtml = "";

for (var i = 1; i < 32; i++) {
    dateHtml += "<li> <p>结算" + i + "</p> <p>+50</p> <p>-20</p> </li>";
}
dateArray.innerHTML = dateHtml;

dateNum = 31;
var liWidth = screen.width/5;
var totalWidth = screen.width * dateNum/5;

document.querySelector("#scroller ul").style.width = totalWidth + "px";

var liArr = document.querySelectorAll("#scroller li");
for (var i=0; i < liArr.length;i++){
    liArr[i].style.width = liWidth + "px";
}
hideKeyBoard()


var myScroll;

function loaded () {
  myScroll = new IScroll('#wrapper', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false, snap: 'li' });
}

