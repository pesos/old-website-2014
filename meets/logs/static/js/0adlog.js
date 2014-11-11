function toggleInOut() {
    [].forEach.call(document.querySelectorAll('.inout'), function (elem) {
        if (window.getComputedStyle(elem).display == 'block')
            elem.style.display = 'none';
        else
            elem.style.display = 'block';
    });
}

var toggleLabel = document.getElementById('toggleLabel');
document.getElementById('toggleInOut').addEventListener('click', function () {
    toggleInOut();
});
if ($('toggleLabel').is(':checked')) {
    alert("Hello");
}