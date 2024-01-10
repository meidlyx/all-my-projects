function showPopup(contentId) {
    var popup = document.getElementById('popup');
    var popupContent1 = document.getElementById('popupContent1');
    var popupContent2 = document.getElementById('popupContent2');
    var popupContent3 = document.getElementById('popupContent3');
    var popupContent4 = document.getElementById('popupContent4');
    var popupContent5 = document.getElementById('popupContent5');

    if (contentId === 1) {
        popupContent1.style.display = 'block';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'none';
        popupContent4.style.display = 'none';
        popupContent5.style.display = 'none';
    } else if (contentId === 2) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'block';
        popupContent3.style.display = 'none';
        popupContent4.style.display = 'none';
        popupContent5.style.display = 'none';
    } else if (contentId === 3) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'block';
        popupContent4.style.display = 'none';
        popupContent5.style.display = 'none';
    } else if (contentId === 4) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'none';
        popupContent4.style.display = 'block';
        popupContent5.style.display = 'none';
    } else if (contentId === 5) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'none';
        popupContent4.style.display = 'none';
        popupContent5.style.display = 'block';
    }

    popup.classList.add('active');
}

function closePopup() {
    var popup = document.getElementById('popup');
    var popupContent1 = document.getElementById('popupContent1');
    var popupContent2 = document.getElementById('popupContent2');
    var popupContent3 = document.getElementById('popupContent3');
    var popupContent4 = document.getElementById('popupContent4');
    var popupContent5 = document.getElementById('popupContent5');

    popupContent1.style.display = 'none';
    popupContent2.style.display = 'none';
    popupContent3.style.display = 'none';
    popupContent4.style.display = 'none';
    popupContent5.style.display = 'none';

    popup.classList.remove('active');
}

document.getElementById('showPopupButton1').addEventListener('click', function() {
    showPopup(1);
});

document.getElementById('showPopupButton2').addEventListener('click', function() {
    showPopup(2);
});

document.getElementById('showPopupButton3').addEventListener('click', function() {
    showPopup(3);
});
document.getElementById('showPopupButton4').addEventListener('click', function() {
    showPopup(4);
});
document.getElementById('showPopupButton5').addEventListener('click', function() {
    showPopup(5);
});

document.getElementById('closePopupButton').addEventListener('click', closePopup);
