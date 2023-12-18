document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#noir').onclick = function () {
        document.querySelector('body').style.background = 'navy';
    }
    document.querySelector('#blanc').onclick = function () {
        document.querySelector('body').style.background = 'aqua'; 
    }
});
