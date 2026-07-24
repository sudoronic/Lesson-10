function torchButton() {

const button = document.querySelector('.js-button');
  if(!button.classList.contains('is-toggle'))
  {
  button.classList.add('is-toggle');
  button.classList.remove('toggleButton');
  }else{
    button.classList.remove('is-toggle');
    button.classList.add('toggleButton');
  }

}