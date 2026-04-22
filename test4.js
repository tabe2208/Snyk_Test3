// URL: ?name=<script>alert('XSS')</script>
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
// 
document.getElementById('greeting').innerHTML = "Ç±ÇÒÇ…ÇøÇÕÅA" + name + "Ç≥ÇÒ"; 


