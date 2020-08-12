function showAlert(message, success = true) {
  const alertTemplate = `<div class="alert alert-dismissible ${
    success ? 'alert-success' : 'alert-danger'
  }" role="alert">
          <strong>NOT AVAILABLE YET</strong>
        </div>`;
  const alertElement = $('body').append(alertTemplate);
  alertElement.alert();
  setTimeout(() => {
    $('.alert').alert('close');
  }, 2000);
}

document.querySelector('.alertButton').addEventListener('click', showAlert);