console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
  window.emots = 0
  window.ektp = ''
  window.selfie = ''
  window.encrypted = ''
  
  $('#kirim_daftar').on('click', function () {
    bootbox.confirm({
      message: "Apakah data yg anda masukan sudah <b>sesuai</b> ?",
      buttons: {
      confirm: {
          label: '<i class="fa fa-check"></i> Ya',
          className: 'btn-success btn-xs',
      },
      cancel: {
          label: '<i class="fa fa-times"></i> Tidak',
          className: 'btn-danger btn-xs',
      }
    },
    callback : function(result) {
    if(result) {
        var nama          = $('#nama').val()
        var telp          = $('#telp').val()
        var jenis_kelamin = $('[name="jenis_kelamin"]:checked').val()
        var ektp          = window.ektp
        var selfie        = window.selfie
        var tujuan        = $('#tujuan').val()
    
        var formData = new FormData();
        formData.append('table', 'data_tamu');
        formData.append('nama', nama);
        formData.append('telp', telp);
        formData.append('jenis_kelamin', jenis_kelamin);
        formData.append('ektp', ektp);
        formData.append('selfie', selfie);
        formData.append('tujuan', tujuan);
        window.encrypted = CryptoJS.AES.encrypt(telp, "benosons");
        
        // var decrypted = CryptoJS.AES.decrypt(encrypted, "benosons");
        // decrypted.toString(CryptoJS.enc.Utf8)
        
        save(formData)
        }
      }
    })

  })

  $('#ektp').change(function(){
    const file = this.files[0];
    
    if (file){
      let reader = new FileReader();
      reader.onload = function(event){
        // console.log(event.target.result);
        window.ektp = event.target.result
        $('#previewKtp').attr('src', event.target.result);
      }
      reader.readAsDataURL(file);
    }
  });

  $('#selfie').change(function(){
    const file = this.files[0];
    
    if (file){
      let reader = new FileReader();
      reader.onload = function(event){
        window.selfie = event.target.result
        $('#previewSelfie').attr('src', event.target.result);
      }
      reader.readAsDataURL(file);
    }
  });

});

function save(formData){

  var dialog = bootbox.dialog({
    message: '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
    closeButton: true
  });

  $.ajax({
      type: 'post',
      processData: false,
      contentType: false,
      url: 'submittamu',
      data : formData,
      success: function(result){

        bootbox.alert({
          message: 'Berhasil Terkirim!',
          buttons: {
            ok: {
                  label: '<i class="fa fa-check"></i> ok',
                  className: 'btn-success btn-xs'
              },
          },
          callback: function (result) {
            localStorage.setItem("nopelet", window.encrypted, 86400000);
            $('.bootbox').remove();
            $('.modal-dialog').remove();
            $('.modal-backdrop').remove();
            location.reload()
          }
      });
        
      }
    });
};

function emot(param, kode){

  $('.emot').find("i").removeClass('text-success')
  $('.emot').find("i").removeClass('text-info')
  $('.emot').find("i").removeClass('text-danger')
  $('.emot').find("i").addClass('text-warning')

  if(kode == 1){
    $(param).find("i").removeClass('text-warning')
    $(param).find("i").addClass('bx bx-smile text-success')
    window.emots = 1
  }

  if(kode == 2){
    $(param).find("i").removeClass('text-warning')
    $(param).find("i").addClass('bx bx-meh text-info')
    window.emots = 2
  }

  if(kode == 3){
    $(param).find("i").removeClass('text-warning')
    $(param).find("i").addClass('bx bx-sad text-danger')
    window.emots = 3
  }
  
}

