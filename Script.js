function toggleChart(chartId) {
    var iframe = document.getElementById(chartId);
    iframe.style.visibility = (iframe.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

function toggleWindy() {
    var windyIframe = document.getElementById('windy');
    windyIframe.style.visibility = (windyIframe.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

document.getElementById('redirectButtonBacktoMainpage').addEventListener('click', function () {
    window.location.href = 'MainSite.html'; // Replace 'Site.html' with the actual path to your Site file
});


document.getElementById('redirectButtonBacktoMainpage').addEventListener('mouseover', function () {
    document.getElementById('leaves-img').classList.add('rotating');
    //document.getElementById('leaves-img').style.transform = 'scale(1.1)';
});

document.getElementById('redirectButtonBacktoMainpage').addEventListener('mouseout', function () {
    document.getElementById('leaves-img').classList.remove('rotating');
    // document.getElementById('leaves-img').style.transform = 'scale(1)';
});