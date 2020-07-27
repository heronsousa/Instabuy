$( document ).ready(function() {
    fetch('https://api.instabuy.com.br/apiv3/layout?subdomain=organicos', { method: 'GET' })
        .then((response) => response.json())
        .then(function(response) {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

$(".item").each(function() {
    var img_url = $(this).find('img').attr('src');
    $(this).css({
        'height': '300px',
        'background-size': '100%',
        'background-image': 'url(' + img_url + ')',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
    });
    $(this).find('img').hide();
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}