$( document ).ready(function() {
    fetch('https://api.instabuy.com.br/apiv3/layout?subdomain=organicos', { method: 'GET' })
        .then((response) => response.json())
        .then(function(response) {
            const imgUrl = 'https://assets.instabuy.com.br/ib.item.image.medium/m-';
            const data = response.data.collection_items.forEach(element => (
                document.querySelector('#data').insertAdjacentHTML("afterbegin",
                    `<div class="section-title">
                        <h2>${element.title}</h2>
                    </div>
                    <div class="product-list">
                        ${element.items.map(item => (
                            `<div class="product-item">
                                <img src="${imgUrl + item.images[0]}" alt="">
                                <span>${item.name}</span>
                                <strong>R$ ${item.prices[0].price}</strong>
                            </div>`
                        ))}
                    </div>`
                )
            ));
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