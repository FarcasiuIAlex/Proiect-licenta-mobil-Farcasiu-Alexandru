// Redirect to Site.html when the button is clicked
document.getElementById('redirectButton').addEventListener('click', function () {
    window.location.href = 'Site.html'; // Replace 'Site.html' with the actual path to your Site file
});


document.getElementById('redirectButtonFIH').addEventListener('click', function () {
    window.location.href = 'https://www.fih.upt.ro/v4/'; // Replace 'Site.html' with the actual path to your Site file
});

function toggleChart(chartId) {
    var iframe = document.getElementById(chartId);
    iframe.style.visibility = (iframe.style.visibility === 'hidden') ? 'visible' : 'hidden';
}


// JavaScript to make image bigger when button is hovered
document.getElementById('Harta buton').addEventListener('mouseover', function () {
    document.getElementById('cloud-image').style.transform = 'scale(1.4)';
});

document.getElementById('Harta buton').addEventListener('mouseout', function () {
    document.getElementById('cloud-image').style.transform = 'scale(1)';
});

document.getElementById('Locatia buton').addEventListener('mouseover', function () {
    document.getElementById('earth-image').style.transform = 'scale(1.4)';
});

document.getElementById('Locatia buton').addEventListener('mouseout', function () {
    document.getElementById('earth-image').style.transform = 'scale(1)';
});




/* pentru  poptext cu culori 
function showPopup(element, text, color) {
    var popup = document.createElement('span');
    popup.textContent = text;
    popup.style.position = 'absolute';
    popup.style.top = (element.offsetTop + 120) + 'px'; // Ajustăm poziția pop-up-ului în funcție de dimensiunile butonului
    popup.style.left = (element.offsetLeft - 30) + 'px';
    popup.style.color = color; // Setăm culoarea textului
    document.body.appendChild(popup);
}

function hidePopup() {
    var popups = document.querySelectorAll('span'); // Găsim toate elementele <span>
    popups.forEach(function(popup) {
        popup.parentNode.removeChild(popup); // Ștergem toate elementele <span> din DOM
    });
}

*/
//zoom icon fara actionare buton poptext temp c
document.getElementById('TempC').addEventListener('mouseover', function () {
    document.getElementById('termometer-img').style.transform = 'scale(1.4)';
});

document.getElementById('TempC').addEventListener('mouseout', function () {
    document.getElementById('termometer-img').style.transform = 'scale(1)';
});
//umid
document.getElementById('Umiditate%').addEventListener('mouseover', function () {
    document.getElementById('humidity-img').style.transform = 'scale(1.4)';
});

document.getElementById('Umiditate%').addEventListener('mouseout', function () {
    document.getElementById('humidity-img').style.transform = 'scale(1)';
});
/// lux
document.getElementById('Lux').addEventListener('mouseover', function () {
    document.getElementById('summer-img').style.transform = 'scale(1.4)';
});

document.getElementById('Lux').addEventListener('mouseout', function () {
    document.getElementById('summer-img').style.transform = 'scale(1)';
});
///tempf
document.getElementById('Tempf').addEventListener('mouseover', function () {
    document.getElementById('termoF-img').style.transform = 'scale(1.4)';
});

document.getElementById('Tempf').addEventListener('mouseout', function () {
    document.getElementById('termoF-img').style.transform = 'scale(1)';
});
//presiunea atm
document.getElementById('Presiunea').addEventListener('mouseover', function () {
    document.getElementById('pressure-gauge-img').style.transform = 'scale(1.4)';
});

document.getElementById('Presiunea').addEventListener('mouseout', function () {
    document.getElementById('pressure-gauge-img').style.transform = 'scale(1)';
});
//alarma
document.getElementById('Alarma').addEventListener('mouseover', function () {
    document.getElementById('smoke-detector (1)').style.transform = 'scale(1.4)';
});

document.getElementById('Alarma').addEventListener('mouseout', function () {
    document.getElementById('smoke-detector (1)').style.transform = 'scale(1)';
});