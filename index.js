function showPopup(contentId) {
    var popup = document.getElementById('popup');
    var popupContent1 = document.getElementById('popupContent1');
    var popupContent2 = document.getElementById('popupContent2');
    var popupContent3 = document.getElementById('popupContent3');
    var popupContent4 = document.getElementById('popupContent4');

    if (contentId === 1) {
        popupContent1.style.display = 'block';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'none';
        popupContent4.style.display = 'none';
    } else if (contentId === 2) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'block';
        popupContent3.style.display = 'none';
        popupContent4.style.display = 'none';
    } else if (contentId === 3) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'block';
        popupContent4.style.display = 'none';
    } else if (contentId === 4) {
        popupContent1.style.display = 'none';
        popupContent2.style.display = 'none';
        popupContent3.style.display = 'none';
        popupContent4.style.display = 'block';
    }

    popup.classList.add('active');
    closePopupButton.style.display = 'block'; 
}

function closePopup() {
    var popup = document.getElementById('popup');
    var popupContent1 = document.getElementById('popupContent1');
    var popupContent2 = document.getElementById('popupContent2');
    var popupContent3 = document.getElementById('popupContent3');
    var popupContent4 = document.getElementById('popupContent4');

    popupContent1.style.display = 'none';
    popupContent2.style.display = 'none';
    popupContent3.style.display = 'none';
    popupContent4.style.display = 'none';

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

window.addEventListener('DOMContentLoaded', function() {
    var avatars = [
        'ava-meidlyx1.png', 'ava-meidlyx2.png', 'ava-meidlyx3.png', 'ava-meidlyx4.png', 'ava-meidlyx5.png',
        'ava-meidlyx6.png', 'ava-meidlyx7.png', 'ava-meidlyx8.png', 'ava-meidlyx9.png', 'ava-meidlyx10.png',
        'ava-meidlyx11.png', 'ava-meidlyx12.png', 'ava-meidlyx13.png', 'ava-meidlyx14.png', 'ava-meidlyx15.png',
        'ava-meidlyx16.png', 'ava-meidlyx17.png', 'ava-meidlyx18.png', 'ava-meidlyx19.png', 'ava-meidlyx20.png',
        'ava-meidlyx21.png', 'ava-meidlyx22.png', 'ava-meidlyx23.png', 'ava-meidlyx24.png', 'ava-meidlyx25.png',
        'ava-meidlyx26.png', 'ava-meidlyx27.png', 'ava-meidlyx28.png', 'ava-meidlyx29.png', 'ava-meidlyx30.png',
        'ava-meidlyx31.png', 'ava-meidlyx32.png', 'ava-meidlyx33.png', 'ava-meidlyx34.png', 'ava-meidlyx35.png',
        'ava-meidlyx36.png', 'ava-meidlyx37.png', 'ava-meidlyx38.png', 'ava-meidlyx39.png', 'ava-meidlyx40.png',
        'ava-meidlyx41.png', 'ava-meidlyx42.png', 'ava-meidlyx43.png', 'ava-meidlyx44.png', 'ava-meidlyx45.png',
        'ava-meidlyx46.png'
    ];

    var randomIndex = Math.floor(Math.random() * avatars.length);
    var avatar = document.getElementById('avatar');
    var avatarPath = 'png-files/' + avatars[randomIndex];

    if(window.innerWidth > 900) {
        // Desktop
        avatar.src = avatarPath;
        avatar.width = 350;
    } else {
        // Mobile
        avatar.src = avatarPath;
        avatar.width = 300;
    }
    avatar.style.borderRadius = '200px';
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
