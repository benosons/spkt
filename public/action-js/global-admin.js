$(document).ready(function(){

});

function tunggu() {
  setTimeout(() => {
    $('.bootbox').removeAttr('style');
    $('.modal-backdrop').remove();
  }, 1000);
}

