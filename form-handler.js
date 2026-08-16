document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Clear previous state
    status.textContent = '';
    status.className = '';

    const data = new FormData(form);

    // Simple honeypot check
    if (data.get('website')) {
      status.textContent = 'Submission failed (spam detected).';
      status.className = 'error';
      status.focus();
      return;
    }

    try {
      const resp = await fetch(form.action, { method: form.method, body: data });
      if (resp.ok) {
        status.textContent = 'Thanks — your message has been sent!';
        status.className = 'success';
        form.reset();
      } else {
        status.textContent = 'Failed to send message. Please try again later.';
        status.className = 'error';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try again.';
      status.className = 'error';
    }
    // Move focus so assistive tech picks up the live region
    status.focus();
  });
});
