document.addEventListener('DOMContentLoaded', () => {
  const seats = document.querySelectorAll('.seat');
  const totalAmount = document.getElementById('total');
  const totalSeat = document.getElementById('num');
  let amount = 0;
  let num = 0;

  seats.forEach(seat => {
    seat.addEventListener('click', () => {
      if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        amount -= 500; // Adjust the price per seat as needed
        num -= 1;
      } else {
        seat.classList.add('selected');
        amount += 500; // Adjust the price per seat as needed
        num += 1;
      }
      totalAmount.textContent = amount;
      totalSeat.textContent = num;
    });
  });
});
