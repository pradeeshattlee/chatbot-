function load_script() {
    // load node
    var node = document.createElement('script');
    node.type = 'text/javascript';
    script_head.appendChild(node);
}


var rc_base_url = 'https://staging.redtie.co/emailpoc/';
var rc_api_url = rc_base_url + 'index1.php';

var scripts = document.getElementsByTagName('script');
var script_head = document.getElementsByTagName('head')[0];
var get_script = scripts[scripts.length - 1];

// google font
var google = document.createElement('link');
google.rel = 'stylesheet';
google.href = 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700';
script_head.appendChild(google);

// jquery
if (typeof(jQuery) === 'undefined') {
    var jquery = document.createElement('script');
    jquery.type = 'text/javascript';
    jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
    script_head.appendChild(jquery);
}

// add moment js
var moment = document.createElement('script');
moment.type = 'text/javascript';
moment.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js';
script_head.appendChild(moment);

// socket script
var ioscript = document.createElement('script');
ioscript.type = 'text/javascript';
ioscript.onreadystatechange = function() {
    if (this.readyState === 'complete') {
        load_script();
    }
}

ioscript.onload = load_script;
ioscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js';
script_head.appendChild(ioscript);

