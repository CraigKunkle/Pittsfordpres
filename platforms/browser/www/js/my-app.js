// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
    // Do something here for "about" page


});
myApp.onPageInit('books', function (page) {
    // Do something here for "books" page
	//myApp.alert('These liks will use data');
});

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
});

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
});

$$(document).ready(function(){
	


});

	
function OpenD365() {
   var refd365 = cordova.InAppBrowser.open('http://d365.org/', '_blank', 'toolbar=yes');
   refd365.addEventListener('loadstop', function() {
		//refd365.insertCSS({code: "#header-logo-wrap{height: 0px;"});
		refd365.insertCSS({code: "#header-newsletter {display: none;} #header-logo-wrap {height:100%;} .home #app-store-button {display: none;} "});
   });
}