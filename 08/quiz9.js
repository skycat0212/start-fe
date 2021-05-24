const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $textarea = document.querySelector('#log');

$url.addEventListener('change', get);
$btn.addEventListener('click', get);

function get(event) {
    fetch($url.value).then( res => {
        res.text().then((text) => {
            $textarea.value = text;
        });
    }).catch( e => {
        $textarea.value = e;
    })
}