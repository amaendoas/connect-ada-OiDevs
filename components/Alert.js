export default class Alert {
  constructor(msg) {
    this.msg = msg;
    this.alertDiv = document.createElement('div');
    this.alertMsg = document.createElement('span');
    this.alertCloseBtn = document.createElement('button');
    this.successIcon = document.createElement('img');
    this.successIcon.setAttribute('src', '../../assets/success.svg')
    this.closeIcon = document.createElement('img');
    this.closeIcon.setAttribute('src', '../../assets/close.svg')


    this.alertDiv.id = 'alert-div';
    this.alertMsg.id = 'alert-msg';
    this.alertCloseBtn.id = 'alert-close-btn';

    this.alertDiv.classList.add('alert');

    
    this.alertCloseBtn.append(this.closeIcon)
    this.alertMsg.innerHTML = this.msg;
    this.alertDiv.append(this.successIcon, this.alertMsg, this.alertCloseBtn);
    document.body.append(this.alertDiv);
  }

  showAlert() {
    this.alertDiv.classList.add('show');
    this.alertDiv.classList.add('showAlert');
    this.alertDiv.classList.remove('hide');
  }

  hideAlert() {
    this.alertDiv.classList.add('hide');
    this.alertDiv.classList.remove('show');
  }
}