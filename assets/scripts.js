$(".item").each(function() {
    var img_url = $(this).find('img').attr('src');
    $(this).css({
        'width': '100%',
        'background-size': 'contain',
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