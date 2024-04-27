function showPopup(contentId) {
    var popup = document.getElementById('popup');
    var popupContent1 = document.getElementById('popupContent1');
    var popupContent2 = document.getElementById('popupContent2');
    var popupContent3 = document.getElementById('popupContent3');

    if (contentId === 1) {
        popupContent1.style.display = 'block';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'none';
    } else if (contentId === 2) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'block';
        popupContent3.style.display = 'none';
    } else if (contentId === 3) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'block';
    } else if (contentId === 4) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'none';
    }

    popup.classList.add('active');
}

function closePopup() {
    var popup = document.getElementById('popup');
    var popupContent1 = document.getElementById('popupContent1');
    var popupContent2 = document.getElementById('popupContent2');
    var popupContent3 = document.getElementById('popupContent3');

    popupContent1.style.display = 'none';
    popupContent2.style.display = 'none';
    popupContent3.style.display = 'none';

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

document.getElementById('closePopupButton').addEventListener('click', closePopup);

function toggleAside() {
    var aside = document.getElementById("myAside");
    var computedStyle = window.getComputedStyle(aside);
    var left = computedStyle.getPropertyValue("left");
    var closeAsideButton = document.getElementById("closeAsideButton");

    if (left === "-495px" || left === "") {
        aside.style.left = "0";
        aside.classList.add("open"); 
        closeAsideButton.style.display = 'block';
    } else {
        aside.style.left = "-495px";
        aside.classList.remove("open"); 
        closeAsideButton.style.display = 'none';
    }
}


function closeAside() {
    var aside = document.getElementById("myAside");
    aside.style.left = "-495px";
    aside.classList.remove("open"); 
}


document.getElementById("showPopupButton1").addEventListener("click", toggleAside);
document.getElementById("showPopupButton2").addEventListener("click", toggleAside);
document.getElementById("showPopupButton3").addEventListener("click", toggleAside);
