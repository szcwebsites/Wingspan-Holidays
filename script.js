const form = document.getElementById('priceForm');
const statusMessage = document.getElementById('formStatus');
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const location = document.getElementById('location').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !location || !destination || !message) {
      statusMessage.textContent = 'Please fill in every field before sending your inquiry.';
      return;
    }

    const email = 'wingspanholiday@gmail.com';
    const subject = `Price Inquiry - ${name}`;
    const body = [
      'Hello Wingspan Holidays,',
      '',
      `Name: ${name}`,
      `Location: ${location}`,
      `Destination: ${destination}`,
      '',
      'Travel inquiry:',
      message,
      '',
      'Please share the price details for my trip requirements.'
    ].join('\n');

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    statusMessage.textContent = 'Opening your email app with the inquiry details...';
    window.location.href = mailtoLink;
    form.reset();
  });
}
