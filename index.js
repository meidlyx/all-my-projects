function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}
  
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
  
document.getElementById('showPopupButton').addEventListener('click', showPopup);
document.getElementById('closePopupButton').addEventListener('click', closePopup);
  