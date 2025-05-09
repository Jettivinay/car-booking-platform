document.getElementById("date").value = new Date().toISOString().split('T')[0];

const form = document.getElementById('bookingForm');
const carDisplay = document.getElementById('carOutput');

// Check if entered color is valid
function isValidColor(color) {
  const s = new Option().style;
  s.color = color;
  return s.color !== '';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const color = document.getElementById('requirement').value.trim();
  const date = document.getElementById('date').value;

  document.getElementById('outName').textContent = name;
  document.getElementById('outPhone').textContent = phone;
  document.getElementById('outEmail').textContent = email;
  document.getElementById('outReq').textContent = color;
  document.getElementById('outDate').textContent = date;

  carDisplay.style.background = isValidColor(color) ? color : 'gray';
  carDisplay.style.display = 'block';
  carDisplay.scrollIntoView({ behavior: 'smooth' });
});