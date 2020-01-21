function openNav() {
  document.getElementById("sidebar").style.marginLeft = '0';
  document.getElementById("centerbar").style.marginLeft = '0';
  document.getElementById("mailexp").style.marginLeft = '0';
  document.getElementById("openbtn").style.display = 'none';
  document.getElementById("closebtn").style.display = 'block';
}
function closeNav() {
  document.getElementById("sidebar").style.marginLeft = '-5vw';
  document.getElementById("centerbar").style.marginLeft = '-5vw';
  document.getElementById("mailexp").style.marginLeft = '-5vw';
  document.getElementById("closebtn").style.display = 'none';
  document.getElementById("openbtn").style.display = 'block';
}
