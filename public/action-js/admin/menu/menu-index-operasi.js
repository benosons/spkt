"use strict";
console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
  window.stt = [];
  $('#nav-menu li').removeClass();
  // $('#nav-menu li#menu-data').addClass('open');
  $('#nav-menu li#menu-operasi').addClass('active');
  $('#mohon_save').prop('disabled', true);
  $('[name="id-input-file-3"]').ace_file_input({
    no_file:'tidak ada file ...',
    btn_choose:'Pilih File',
    btn_change:'Ganti',
    droppable:false,
    onchange:null,
    thumbnail:false, //| true | large
    //whitelist:'gif|png|jpg|jpeg'
    //blacklist:'exe|php'
    //onchange:''
    //
    before_remove : function() {
      $('#submit_doc').prop('disabled', true);
      return true;
    }
  }).on('change', function(){
    if($('#jenis_doc').val() != 0){
      $('#submit_doc').prop('disabled', false);
    }else{
      $('#submit_doc').prop('disabled', true);
    }
  });

  $('#jenis_doc').on('change', function () {
    if($('[name="id-input-file-3"]').val() == '' && $(this).val() == 0){
      $('#submit_doc').prop('disabled', true);
    }else if($('[name="id-input-file-3"]').val() == '' && $(this).val()){
      $('#submit_doc').prop('disabled', true);
    }else if($('[name="id-input-file-3"]').val() && $(this).val() == 0){
      $('#submit_doc').prop('disabled', true);
    }else{
      $('#submit_doc').prop('disabled', false);
    }
  })

  $('[name="id-input-file-5"]').ace_file_input({
    no_file:'tidak ada file ...',
    btn_choose:'Pilih File',
    btn_change:'Ganti',
    droppable:false,
    onchange:null,
    thumbnail:false, //| true | large
    //whitelist:'gif|png|jpg|jpeg'
    //blacklist:'exe|php'
    //onchange:''
    //
    before_remove : function() {
      $('#submit_doc_lapangan').prop('disabled', true);
      return true;
    }
  }).on('change', function(){
    $('#submit_doc_lapangan').prop('disabled', false);
  });

  $('[name="id-input-file-6"]').ace_file_input({
    no_file:'tidak ada file ...',
    btn_choose:'Pilih File',
    btn_change:'Ganti',
    droppable:false,
    onchange:null,
    thumbnail:false, //| true | large
    //whitelist:'gif|png|jpg|jpeg'
    //blacklist:'exe|php'
    //onchange:''
    //
    before_remove : function() {
      $('#mohon_save').prop('disabled', true);
      return true;
    }
  }).on('change', function(){
    $('#mohon_save').prop('disabled', false);
  });

  $('#all-permohonan').DataTable();
  $('#data-file-doc').DataTable();
  $('#data-file-doc-lapangan').DataTable();

  loadpermohonan('2');

  $('#mohon_save').on('click', function(){
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
          var formData = new FormData();
          formData.append('param', 'data_permohonan');
          formData.append('type', '2');
          let berapa = [];
          for (let index = 1; index <= 9; index++) {
            if($('#input_'+index).val()){
              formData.append('input_'+index, $('#input_'+index).val());
              $('#input_'+index).parent().parent().removeClass('has-error');
              berapa.push(index);
            }else{
              $('#input_'+index).parent().parent().addClass('has-error');
            }
          }

          formData.append("file[doc_permohonan]", $('#doc_permohonan')[0].files[0]);
          // formData.append("file[doc_izin_lingkungan]", $('#doc_izin_lingkungan')[0].files[0]);
          // formData.append("file[doc_nib]", $('#doc_nib')[0].files[0]);

          if(berapa.length == 8){
            save(formData);
          }
        }
      }
    })
  });

  $('#submit_doc').on('click', function(){

    var formData = new FormData();
    formData.append('id', $('#ini-ID').val());
    formData.append('param', 'param_file');
    formData.append('type', '2');

    switch ($('#jenis_doc').val()) {
      case 'doc_permohonan_slo':
        formData.append("file[doc_permohonan_slo]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_izin_usaha':
        formData.append("file[doc_izin_usaha]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_persetujauan_lingkungan':
        formData.append("file[doc_persetujauan_lingkungan]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_persetujuan_teknis':
        formData.append("file[doc_persetujuan_teknis]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_hasil_pemantauan':
        formData.append("file[doc_hasil_pemantauan]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_kontrol_jaminan':
        formData.append("file[doc_kontrol_jaminan]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_sertifikat_registrasi':
        formData.append("file[doc_sertifikat_registrasi]", $('#doc_')[0].files[0]);
        
          break;
    }

    
    upload(formData);
  });

  $('#submit_doc_lapangan').on('click', function(){

    var formData = new FormData();
    formData.append('id', $('#ini-ID-lapangan').val());
    formData.append('param', 'param_file_lapangan');
    formData.append('type', '2');
    formData.append("file[doc_izin_usaha]", $('#doc_lapangan')[0].files[0]);
    formData.append("keterangan", $('#keterangan_lapangan').val());

    
    uploadlapangan(formData);
  });

  $('#cekunggahan').on('click', function(){
    $('.remove').click()
    $('#jenis_doc').val('')
    $('#jenis_doc').trigger("chosen:updated");

    action('view', $('#idpermohonan').val(), $('#initype').val())
  })

  $('#deletedataini').on('click', function(){
    action('delete',$('#idpermohonan').val(),$('#initype').val(),'','data_permohonan')
  })

  $('#verlapanganini').on('click', function(){
    actionlapangan('view',$('#idpermohonan').val(),$('#initype').val())
  })

  $('[name=form-input]').on('change', function(){
    
    let vl = []
    for (let index = 0; index < $('[name=form-input]').length; index++) {
      let valn = $('[name=form-input]')[index].value
      if(valn){
        vl.push(valn)
      }
    }
    
    if(vl.length == 8){
      $('#mohon_save').prop('disabled', false);
    }else{
      $('#mohon_save').prop('disabled', true);
    }
  })

  $('#kategori').on('change', function(){
    if(this.value > 0){
      $('#simpanaja').attr('disabled', false)
    }else{
      $('#simpanaja').attr('disabled', true)
    }
  })

});

function loadpermohonan(param){

  $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'loadpermohonan',
      data : {
              param      : param,
      },
      success: function(result){
          let data = result.data;
          let code = result.code;
          if(code != '0'){

            if($('#isRole').val() == 0){
              let optd = ''
              $('#iskat').val(data[0].kategori)
              $('#dokumen-unggahan').html(data[0].kategori == '1' ? 'PERSYARATAN PERMOHONAN SURAT KELAYAKAN OPERASIONAL PEMBUANGAN DAN/ATAU PEMANFAATAN AIR LIMBAH' : 'PERSYARATAN PERMOHONAN SURAT KELAYAKAN OPERASIONAL PEMBUANGAN EMISI' )
              switch (data[0].kategori) {
                case '1': //limbah
                    optd = `<option value=""> </option>
                            <option value="doc_permohonan_slo"> Surat Permohonan SLO </option>
                            <option value="doc_izin_usaha"> Perizinan Berusaha </option>
                            <option value="doc_persetujauan_lingkungan"> Persetujuan Lingkungan / Izin Lingkungan </option>
                            <option value="doc_persetujuan_teknis"> Persetujuan Teknis Air Limbah </option>
                            <option value="doc_hasil_pemantauan"> Hasil Pemantauan Air Limbah yang diuji oleh Laboratorium yang mendapat registrasi dari menteri </option>
                            <option value="doc_kontrol_jaminan"> Dokumen Kontrol Jaminan / Jaminan Kualitas (quality assurance / quality control) mengenai tata cara uji air limbah </option>
                            <option value="doc_sertifikat_registrasi"> Sertifikasi Registrasi Laboratorium Lingkungan </option>`
                  break;
                case '2': //udara
                    optd = `<option value=""> </option>
                            <option value="doc_permohonan_slo"> Surat Permohonan SLO </option>
                            <option value="doc_izin_usaha"> Perizinan Berusaha </option>
                            <option value="doc_persetujauan_lingkungan"> Persetujuan Lingkungan / Izin Lingkungan </option>
                            <option value="doc_persetujuan_teknis"> Persetujuan Teknis </option>
                            <option value="doc_hasil_pemantauan"> Hasil Pemantauan Emisi yang diuji oleh Laboratorium yang mendapat registrasi dari menteri </option>
                            <option value="doc_kontrol_jaminan"> Dokumen Kontrol Jaminan / Jaminan Kualitas (quality assurance / quality control) mengenai tata cara uji emisi </option>
                            <option value="doc_sertifikat_registrasi"> Sertifikat Registrasi Laboratorium Lingkungan </option>`
                  break;
              }

              $('#jenis_doc').html(optd)
              $('#jenis_doc').trigger("chosen:updated");

              $('#idpermohonan').val(data[0].id);
              $('#initype').val(data[0].type);
              $('#initambah').hide()
              $('#ini-form-add').hide()
              $('#ini-form-view').show()

              if(data[0].status == 1){
                $('#verlapanganini').parent().parent().show();
                $('#surveykepuasan').parent().parent().show();
                $('#menu-puas').show();
                sessionStorage.setItem('survey', 1)
                $('#ini-verifikasi').hide()
              }else{
                $('#verlapanganini').parent().parent().hide();
                $('#surveykepuasan').parent().parent().hide();
                $('#menu-puas').hide();
                sessionStorage.setItem('survey', 0)
                $('#ini-verifikasi').show()
              }

              $('#cekunggahan').show()
              $('#deletedataini').show()
              for (let index = 1; index <= 9; index++) {
                $('#view_'+index).val(data[0]['p'+index]);
                $('#view_'+index).prop('disabled', true);
              }

              var harap = [];
              for (var f in data[0]['file'] ) {

                var jenisnya = data[0].file[f]['jenis'];
                var oknya = data[0].file[f]['ok'];

                switch (jenisnya) {
                  case 'doc_permohonan':
                        $('#nama-file-permohonan').html(data[0].file[f]['filename']);
                        $('#nama-file-permohonan').attr('onclick', "downloadatuh('"+'public/'+data[0].file[f]['path']+'/'+data[0].file[f]['filename']+"')");
                        $('#hapus-permohonan').attr('onclick', "actionfile('delete','"+data[0].file[f]['id']+"','"+data[0].type+"','"+data[0].file[f]['path']+'/'+data[0].file[f]['filename']+"')");

                        $('#view-file-permohonan').css('display', 'block');
                        $('#form-permohonan-reupload').css('display', 'none');

                        if(oknya == 1){
                          $('#hapus-permohonan').css('display', 'none');
                          $('#ini-verifikasi').hide()
                        }else{
                          $('#hapus-permohonan').show();
                          $('#cekunggahan').hide();
                          if(oknya == 2){
                            var ell = ` <li>
                                          <i class="">File Permohonan</i>
                                        </li>`
                            $('#harus-upload').append(ell);
                            harap.push('permohonan');
                          }
                        }

                    break;
                  case 'doc_izin_lingkungan':
                        $('#nama-file-izin-lingkungan').html(data[0].file[f]['filename']);
                        $('#nama-file-izin-lingkungan').attr('onclick', "downloadatuh('"+'public/'+data[0].file[f]['path']+'/'+data[0].file[f]['filename']+"')");
                        $('#hapus-izin-lingkungan').attr('onclick', "actionfile('delete','"+data[0].file[f]['id']+"','"+data[0].type+"','"+data[0].file[f]['path']+'/'+data[0].file[f]['filename']+"')");

                        $('#view-file-izin-lingkungan').css('display', 'block');
                        $('#form-izin-lingkungan-reupload').css('display', 'none');

                        if(oknya == 1){
                          $('#hapus-izin-lingkungan').css('display', 'none');
                        }else{
                          $('#hapus-izin-lingkungan').show();
                          if(oknya == 2){
                            var ell = ` <li>
                                          <i class="">File Izin Lingkungan</i>
                                        </li>`
                            $('#harus-upload').append(ell);
                            harap.push('izin');
                          }
                        }

                    break;
                  case 'doc_nib':
                        $('#nama-file-nib').html(data[0].file[f]['filename']);
                        $('#nama-file-nib').attr('onclick', "downloadatuh('"+'public/'+data[0].file[f]['path']+'/'+data[0].file[f]['filename']+"')");
                        $('#hapus-nib').attr('onclick', "actionfile('delete','"+data[0].file[f]['id']+"','"+data[0].type+"','"+data[0].file[f]['path']+'/'+data[0].file[f]['filename']+"')");
                     
                        $('#view-file-nib').css('display', 'block');
                        $('#form-nib-reupload').css('display', 'none');

                        if(oknya == 1){
                          $('#hapus-nib').css('display', 'none');
                        }else{
                          $('#hapus-nib').show();
                          if(oknya == 2){
                            var ell = ` <li>
                                          <i class="">File NIB</i>
                                        </li>`
                            $('#harus-upload').append(ell);
                            harap.push('nib');
                          }
                        }
                    break;
                
                  default:
                    break;
                }
              }

              if(harap.length == 0){
                $('#harap').hide();
              }

            }else{
              var dt = $('#all-permohonan').DataTable({
                destroy: true,
                paging: true,
                lengthChange: false,
                searching: true,
                ordering: true,
                info: true,
                autoWidth: false,
                responsive: false,
                pageLength: 10,
                aaData: result.data,
                aoColumns: [
                    { 'mDataProp': 'id', 'width':'10%'},
                    { 'mDataProp': 'p1'},
                    { 'mDataProp': 'p2'},
                    { 'mDataProp': 'p6'},
                    { 'mDataProp': 'kategori'},
                    { 'mDataProp': 'p7'},
                    { 'mDataProp': 'p8'},
                    { 'mDataProp': 'id'},
                ],
                order: [[0, 'ASC']],
                fixedColumns: true,
                aoColumnDefs:[
                  { width: 50, targets: 0 },
                  {
                      mRender: function ( data, type, row ) {
                        // if(_.keys(row.file).length == 0){
                        //         path_0 = '';
                        //         path_1 = '';
                        //         path_2 = '';
                        //         filename_0 = '';
                        //         filename_1 = '';
                        //         filename_2 = '';

                        //         var id_0 = '';
                        //         var id_1 = '';
                        //         var id_2 = '';

                        //         var teks_0 = '';
                        //         var teks_1 = '';
                        //         var teks_2 = '';

                        //         if(ok_0 == 1){
                        //           teks_0 = 'class="text-success"';
                        //         }else if(ok_0 == 2){
                        //           teks_0 = 'class="text-danger"';
                        //         }

                        //         if(ok_1 == 1){
                        //           teks_1 = 'class="text-success"';
                        //         }else if(ok_1 == 2){
                        //           teks_1 = 'class="text-danger"';
                        //         }

                        //         if(ok_2 == 1){
                        //           teks_2 = 'class="text-success"';
                        //         }else if(ok_2 == 2){
                        //           teks_2 = 'class="text-danger"';
                        //         }

                        //         var elemen_0 = '';
                        //         var elemen_1 = '';
                        //         var elemen_2 = '';

                        //         var validasinya = '';

                        //     // }else if(_.keys(row.file).length == 1){
                        //     //     var path_0 = row.file[0]['path'];
                        //     //     var path_1 = '';
                        //     //     var path_2 = '';
                        //     //     var filename_0 = row.file[0]['filename'];
                        //     //     var filename_1 = '';
                        //     //     var filename_2 = '';

                        //     //     var id_0 = row.file[0]['id'];
                        //     //     var id_1 = '';
                        //     //     var id_2 = '';

                        //     //     var ok_0 = row.file[0]['ok'];
                        //     //     var ok_1 = '';
                        //     //     var ok_2 = '';

                        //     //     var teks_0 = '';
                        //     //     var teks_1 = '';
                        //     //     var teks_2 = '';

                        //     //     if(ok_0 == 1){
                        //     //       teks_0 = 'class="text-success"';
                        //     //     }else if(ok_0 == 2){
                        //     //       teks_0 = 'class="text-danger"';
                        //     //     }

                        //     //     if(ok_1 == 1){
                        //     //       teks_1 = 'class="text-success"';
                        //     //     }else if(ok_1 == 2){
                        //     //       teks_1 = 'class="text-danger"';
                        //     //     }

                        //     //     if(ok_2 == 1){
                        //     //       teks_2 = 'class="text-success"';
                        //     //     }else if(ok_2 == 2){
                        //     //       teks_2 = 'class="text-danger"';
                        //     //     }

                        //     //     var elemen_0 = `<div class="row">`;
                        //     //         if(ok_0 == null){
                        //     //         elemen_0 += `<div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                       </div>
                        //     //                       <div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                       </div>`;
                        //     //         }else if(ok_0 == 1){
                        //     //           elemen_0 += `
                        //     //                       <div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                       </div>`;
                        //     //         }else if(ok_0 == 2){
                        //     //           elemen_0 += `<div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                       </div>
                        //     //                       `;
                        //     //         }

                        //     //         elemen_0 += `<div class="col-sm-8">
                        //     //                         <a `+teks_0+` target="_blank" type="button" href="public/`+path_0+'/'+filename_0+`"> <i class="ace-icon fa fa-file"></i> Permohonan</a>
                        //     //                       </div>
                        //     //                     `;

                        //     //         elemen_0 += `</div>`;

                        //     //     var elemen_1 = '';
                        //     //     var elemen_2 = '';

                        //     //     var validasinya = '';

                        //     // }else if(_.keys(row.file).length == 2){
                        //     //     var path_0 = row.file[0]['path'];
                        //     //     var path_1 = row.file[1]['path'];
                        //     //     var path_2 = '';
                        //     //     var filename_0 = row.file[0]['filename'];
                        //     //     var filename_1 = row.file[1]['filename'];
                        //     //     var filename_2 = '';

                        //     //     var id_0 = row.file[0]['id'];
                        //     //     var id_1 = row.file[1]['id'];
                        //     //     var id_2 ='';

                        //     //     var ok_0 = row.file[0]['ok'];
                        //     //     var ok_1 = row.file[1]['ok'];
                        //     //     var ok_2 ='';

                        //     //     var teks_0 = '';
                        //     //     var teks_1 = '';
                        //     //     var teks_2 = '';

                        //     //     if(ok_0 == 1){
                        //     //       teks_0 = 'class="text-success"';
                        //     //     }else if(ok_0 == 2){
                        //     //       teks_0 = 'class="text-danger"';
                        //     //     }

                        //     //     if(ok_1 == 1){
                        //     //       teks_1 = 'class="text-success"';
                        //     //     }else if(ok_1 == 2){
                        //     //       teks_1 = 'class="text-danger"';
                        //     //     }

                        //     //     if(ok_2 == 1){
                        //     //       teks_2 = 'class="text-success"';
                        //     //     }else if(ok_2 == 2){
                        //     //       teks_2 = 'class="text-danger"';
                        //     //     }

                        //     //     var elemen_0 = `<div class="row">`
                        //     //     if(ok_0 == null){
                        //     //         elemen_0 += `     <div class="col-sm-2">
                        //     //                             <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                           </div>
                        //     //                           <div class="col-sm-2">
                        //     //                             <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                           </div>`
                        //     //     }else if(ok_0 == 1){
                        //     //       elemen_0 += `     
                        //     //                           <div class="col-sm-2">
                        //     //                             <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                           </div>`

                        //     //     }else if(ok_0 == 2){
                        //     //       elemen_0 += `     <div class="col-sm-2">
                        //     //                             <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                           </div>
                        //     //                           `

                        //     //     }
                                
                        //     //         elemen_0 += `<div class="col-sm-8">
                        //     //                             <a `+teks_0+` target="_blank" type="button" href="public/`+path_0+'/'+filename_0+`"> <i class="ace-icon fa fa-file"></i> Permohonan</a>
                        //     //                           </div>`;
                                
                        //     //         elemen_0 += `</div>`;

                        //     //     var elemen_1 = `<div class="row">`;
                        //     //     if(ok_1 == null){
                        //     //         elemen_1 += `<div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                       </div>
                        //     //                       <div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                       </div>`
                        //     //     }else if(ok_1 == 1){
                        //     //       elemen_1 += `
                        //     //               <div class="col-sm-2">
                        //     //                 <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //               </div>`
                        //     //     }else if(ok_1 == 2){
                        //     //       elemen_1 += `<div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                       </div>
                        //     //                       `
                        //     //     }

                        //     //         elemen_1 += `<div class="col-sm-8">
                        //     //                         <a `+teks_1+` target="_blank" href="public/`+path_1+'/'+filename_1+`"> <i class="ace-icon fa fa-file"></i> </i> Izin Lingkungan</a>
                        //     //                       </div>`

                        //     //         elemen_1 += `</div>`;

                        //     //     var elemen_2 = '';

                        //     //     var validasinya = '';

                        //     // }else if(_.keys(row.file).length == 3){
                        //     //     var path_0 = row.file[0]['path'];
                        //     //     var path_1 = row.file[1]['path'];
                        //     //     var path_2 = row.file[2]['path'];
                        //     //     var filename_0 = row.file[0]['filename'];
                        //     //     var filename_1 = row.file[1]['filename'];
                        //     //     var filename_2 = row.file[2]['filename'];

                        //     //     var id_0 = row.file[0]['id'];
                        //     //     var id_1 = row.file[1]['id'];
                        //     //     var id_2 = row.file[2]['id'];

                        //     //     var ok_0 = row.file[0]['ok'];
                        //     //     var ok_1 = row.file[1]['ok'];
                        //     //     var ok_2 = row.file[2]['ok'];

                        //     //     var teks_0 = '';
                        //     //     var teks_1 = '';
                        //     //     var teks_2 = '';

                        //     //     if(ok_0 == 1){
                        //     //       teks_0 = 'class="text-success"';
                        //     //     }else if(ok_0 == 2){
                        //     //       teks_0 = 'class="text-danger"';
                        //     //     }

                        //     //     if(ok_1 == 1){
                        //     //       teks_1 = 'class="text-success"';
                        //     //     }else if(ok_1 == 2){
                        //     //       teks_1 = 'class="text-danger"';
                        //     //     }

                        //     //     if(ok_2 == 1){
                        //     //       teks_2 = 'class="text-success"';
                        //     //     }else if(ok_2 == 2){
                        //     //       teks_2 = 'class="text-danger"';
                        //     //     }

                        //     //     var elemen_0 = `<div class="row">`
                        //     //         if(ok_0 == null){
                        //     //         elemen_0 += `     <div class="col-sm-2">
                        //     //                             <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                           </div>
                        //     //                           <div class="col-sm-2">
                        //     //                             <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                           </div>`
                        //     //         }else if(ok_0 == 1){
                        //     //           elemen_0 += `     
                        //     //                           <div class="col-sm-2">
                        //     //                             <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                           </div>`
                        //     //         }else if(ok_0 == 2){
                        //     //           elemen_0 += `     <div class="col-sm-2">
                        //     //                                 <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                               </div>
                        //     //                               `
                        //     //         }
                                
                        //     //         elemen_0 += `<div class="col-sm-8">
                        //     //                             <a `+teks_0+` target="_blank" type="button" href="public/`+path_0+'/'+filename_0+`"> <i class="ace-icon fa fa-file"></i> Permohonan</a>
                        //     //                           </div>`;
                                
                        //     //         elemen_0 += `</div>`;

                        //     //     var elemen_1 = `<div class="row">`;
                        //     //     if(ok_1 == null){
                        //     //         elemen_1 += `<div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                       </div>
                        //     //                       <div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                       </div>`
                        //     //     }else if(ok_1 == 1){
                        //     //       elemen_1 += `
                        //     //                       <div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                       </div>`

                        //     //     }else if(ok_1 == 2){
                        //     //       elemen_1 += `<div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                       </div>
                        //     //                       `

                        //     //     }

                        //     //         elemen_1 += `<div class="col-sm-8">
                        //     //                         <a `+teks_1+` target="_blank" href="public/`+path_1+'/'+filename_1+`"> <i class="ace-icon fa fa-file"></i> </i> Izin Lingkungan</a>
                        //     //                       </div>`

                        //     //         elemen_1 += `</div>`;

                        //     //     var elemen_2 = `<div class="row">`
                        //     //     if(ok_2 == null){
                        //     //         elemen_2 += `<div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_2+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                       </div>
                        //     //                       <div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_2+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                       </div>`
                        //     //     }else if(ok_2 == 1){

                        //     //       elemen_2 += `
                        //     //                       <div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_2+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //     //                       </div>`
                        //     //     }else if(ok_2 == 2){
                        //     //       elemen_2 += `<div class="col-sm-2">
                        //     //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_2+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //     //                       </div>
                        //     //                       `

                        //     //     }

                        //     //         elemen_2 += `<div class="col-sm-8">
                        //     //                         <a `+teks_2+` target="_blank" href="public/`+path_2+'/'+filename_2+`"> <i class="ace-icon fa fa-file"></i> NIB</a>
                        //     //                       </div>`

                        //     //         elemen_2 += `</div>`;

                        //     //         var validasinya = '';
                        //     //         if(ok_0 == 1 && ok_1 == 1 && ok_2 == 1){
                        //     //           var validasinya = `<button class="btn btn-xs btn-block btn-info" onclick="action('view',`+row.id+`,'`+row.type+`')">
                        //     //                                 <i class="ace-icon fa fa-file bigger-120"></i> Data Unggahan
                        //     //                               </button>`;
                        //     //           }

                        //     // }

                        //   }else if(_.keys(row.file).length == 1){
                        //     var path_0 = row.file[0]['path'];
                        //     var path_1 = '';
                        //     var path_2 = '';
                        //     var filename_0 = row.file[0]['filename'];
                        //     var filename_1 = '';
                        //     var filename_2 = '';

                        //     var id_0 = row.file[0]['id'];
                        //     var id_1 = '';
                        //     var id_2 = '';

                        //     var ok_0 = row.file[0]['ok'];
                        //     var ok_1 = '';
                        //     var ok_2 = '';

                        //     var teks_0 = '';
                        //     var teks_1 = '';
                        //     var teks_2 = '';

                        //     if(ok_0 == 1){
                        //       teks_0 = 'class="text-success"';
                        //     }else if(ok_0 == 2){
                        //       teks_0 = 'class="text-danger"';
                        //     }

                        //     if(ok_1 == 1){
                        //       teks_1 = 'class="text-success"';
                        //     }else if(ok_1 == 2){
                        //       teks_1 = 'class="text-danger"';
                        //     }

                        //     if(ok_2 == 1){
                        //       teks_2 = 'class="text-success"';
                        //     }else if(ok_2 == 2){
                        //       teks_2 = 'class="text-danger"';
                        //     }

                        //     var elemen_0 = `<div class="row">`
                        //         if(ok_0 == null){
                        //         elemen_0 += `     <div class="col-sm-2">
                        //                             <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //                           </div>
                        //                           <div class="col-sm-2">
                        //                             <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //                           </div>`
                        //         }else if(ok_0 == 1){
                        //           elemen_0 += `     
                        //                           <div class="col-sm-2">
                        //                             <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //                           </div>`
                        //         }else if(ok_0 == 2){
                        //           elemen_0 += `     <div class="col-sm-2">
                        //                                 <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //                               </div>
                        //                               `
                        //         }
                            
                        //         elemen_0 += `<div class="col-sm-8">
                        //                             <a `+teks_0+` target="_blank" type="button" href="public/`+path_0+'/'+filename_0+`"> <i class="ace-icon fa fa-file"></i> Permohonan</a>
                        //                           </div>`;
                            
                        //         elemen_0 += `</div>`;

                        //     var elemen_1 = `<div class="row">`;
                        //     if(ok_1 == null){
                        //         elemen_1 += `<div class="col-sm-2">
                        //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //                       </div>
                        //                       <div class="col-sm-2">
                        //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //                       </div>`
                        //     }else if(ok_1 == 1){
                        //       elemen_1 += `
                        //                       <div class="col-sm-2">
                        //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //                       </div>`

                        //     }else if(ok_1 == 2){
                        //       elemen_1 += `<div class="col-sm-2">
                        //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //                       </div>
                        //                       `

                        //     }

                        //         elemen_1 += `</div>`;

                        //     var elemen_2 = `<div class="row">`
                        //     if(ok_2 == null){
                        //         elemen_2 += `<div class="col-sm-2">
                        //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_2+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //                       </div>
                        //                       <div class="col-sm-2">
                        //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_2+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //                       </div>`
                        //     }else if(ok_2 == 1){

                        //       elemen_2 += `
                        //                       <div class="col-sm-2">
                        //                         <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_2+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                        //                       </div>`
                        //     }else if(ok_2 == 2){
                        //       elemen_2 += `<div class="col-sm-2">
                        //                         <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_2+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                        //                       </div>
                        //                       `

                        //     }


                        //         elemen_2 += `</div>`;

                        //         var validasinya = '';
                        //         if(ok_0 == 1 ){
                        //           var validasinya = `<button class="btn btn-xs btn-block btn-info" onclick="action('view',`+row.id+`,'`+row.type+`')">
                        //                                 <i class="ace-icon fa fa-file bigger-120"></i> Data Unggahan
                        //                               </button>`;
                        //           }

                        // }

                        // var elo = `<button class="btn btn-xs btn-info" onclick="action('view',`+row.id+`,'`+row.type+`')">
                        //             <i class="ace-icon fa fa-file bigger-120"></i>
                        //           </button>`;
                        //           var el = `<div class="btn-group">
                        //               <button data-toggle="dropdown" class="btn btn-xs btn-indo dropdown-toggle" aria-expanded="false">
                        //                 File
                        //                 <i class="ace-icon fa fa-angle-down icon-on-right"></i>
                        //               </button>

                        //               <ul class="dropdown-menu dropdown-info dropdown-menu-right" style="width:22rem">
                        //                 <li>
                        //                   `+elemen_0+`                                        
                        //                 </li>

                        //                 <li class="divider"></li>

                        //                 <li>
                        //                     `+validasinya+`
                        //                 </li>

                        //               </ul>
                        //             </div>`;

                        //   if($('#role').val() == '1' || $('#role').val() == '2') {

                        //     el += `<button class="btn btn-xs btn-danger" onclick="action('delete',`+row.id+`,'`+row.type+`','','data_permohonan')">
                        //             <i class="ace-icon fa fa-trash-o bigger-120"></i>
                        //           </button>`;
                        //     if(row.status == 1){
                        //       el += `<button title="Verifikasi Lapangan" class="btn btn-xs btn-success" onclick="actionlapangan('view',`+row.id+`,'`+row.type+`')">
                        //             <i class="ace-icon fa fa-check-square-o bigger-120"></i>
                        //           </button>`;
                        //     }
                        //   }else{
                            
                        //     if(row.status == 1){
                        //       el += `<button title="Verifikasi Lapangan" class="btn btn-xs btn-success" onclick="actionlapangan('view',`+row.id+`,'`+row.type+`')">
                        //             <i class="ace-icon fa fa-check-square-o bigger-120"></i>
                        //           </button>`;
                        //     }else{
                        //       el += `<button class="btn btn-xs btn-danger" onclick="inidelete('data_permohonan','${row.id}','${row.type}','${row.created_by}','${row.created_date}')">
                        //       <i class="ace-icon fa fa-trash bigger-120"></i>
                        //     </button>`;
                        //     }
                        //   }

                        if (type == 'display') {
                          var el = ''

                            // if(row.param){
                            //   el += `<div class="btn-group">
                            //             <button class="btn btn-xs btn-primary" onclick="action('view',`+row.id+`,'`+row.type+`', '', '', '`+row.param+`')">
                            //             <i class="ace-icon fa fa-file bigger-120"></i>
                            //             </button>
                            //           </div>`
                            // }

                            if(row.kategori){
                              el += `<div class="btn-group"><button class="btn btn-xs btn-primary" onclick="action('view',`+row.id+`,'`+row.type+`',${row.kategori})">
                                      <i class="ace-icon fa fa-file bigger-120"></i>
                                    </button></div>`;
                            }

                              el += `<div class="btn-group">
                                            <button class="btn btn-xs btn-info" onclick="popupvalidasi(${row.id}, '${row.type}', ${row.param}, ${row.kategori})"> <i class="ace-icon fa fa-th-list"></i> </button>
                                          </div>`
                                          
                              if(row.status == 1){
                                el += `<div class="btn-group"><button title="Verifikasi Lapangan" class="btn btn-xs btn-success" onclick="actionlapangan('view',`+row.id+`,'`+row.type+`')">
                                      <i class="ace-icon fa fa-check-square-o bigger-120"></i>
                                    </button></div>`;
                              }else{
                                el += `<div class="btn-group"><button class="btn btn-xs btn-danger" onclick="action('delete',`+row.id+`,'`+row.type+`','','data_permohonan')">
                                        <i class="ace-icon fa fa-trash-o bigger-120"></i>
                                      </button></div>`
                              }
                    
                              el += ``
                            return el;
                        }
                        

                          return data;
                      },
                      aTargets: [7]
                  },
                  {
                    "render": function ( data, type, row ) {
                      if (type == 'display') {
                        if(!row.kategori){
                          return '-'
                        }

                        let iskat = ''
                        let kategori = [
                          '',
                          'Air Limbah',
                          'Udara',
                        ]

                        return kategori[row.kategori]
                      }
                      return data
                    },
                    aTargets: [4]
                  },
                ],
                fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
                    var index = iDisplayIndexFull + 1;
                    $('td:eq(0)', nRow).html('#'+index);
                    return  index;
                },
                fnInitComplete: function () {

                    var that = this;
                    var td ;
                    var tr ;
                    this.$('td').click( function () {
                        td = this;
                    });
                    this.$('tr').click( function () {
                        tr = this;
                    });
                }
              });

              var categoryIndex = 0;
              $("#all-permohonan th").each(function (i) {
                if ($($(this)).html() == "Kategori") {
                  categoryIndex = i; return false;
                }
              });

              $.fn.dataTable.ext.search.push(
                function (settings, data, dataIndex) {
                  var selectedItem = $('#categoryFilter').val()
                  var category = data[categoryIndex];
                  if (selectedItem === "" || category.includes(selectedItem)) {
                    return true;
                  }
                  return false;
                }
              );

              $("#categoryFilter").change(function (e) {
                dt.draw();
              });
              dt.draw();
              
            }
          }else{
            if($('#isRole').val() == 2){
              $('#initambah').show()
              $('#cekunggahan').hide()
              $('#deletedataini').hide()
            }else{
              var dt = $('#all-permohonan').DataTable();
              dt.clear().draw()
            }
          }

        }
      })
    }

function save(formData){

  var dialog = bootbox.dialog({
    message: '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
    closeButton: false
  });

  $.ajax({
      type: 'post',
      processData: false,
      contentType: false,
      url: 'addpermohonan',
      data : formData,
      success: function(result){
        dialog.modal('hide');
        Swal.fire({
          type: 'success',
          title: 'Berhasil Tambah Permohonan !',
          showConfirmButton: true,
          // showCancelButton: true,
          confirmButtonText: `Ok`,
        }).then((result) => {
          $(document).ready(function(){
              // location.reload()
              loadpermohonan(2)
          });
        })
      }
    });
  };

  function upload(formData){
    var dialog = bootbox.dialog({
      message: '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
      closeButton: false
    });
    $.ajax({
        type: 'post',
        processData: false,
        contentType: false,
        url: 'uploadfile',
        data : formData,
        success: function(result){
          dialog.modal('hide');
          location.reload()
        }
      });
    };

    function uploadlapangan(formData){

      $.ajax({
          type: 'post',
          processData: false,
          contentType: false,
          url: 'uploadfilelapangan',
          data : formData,
          success: function(result){
            // location.reload()
            actionlapangan('view',$('#ini-ID-lapangan').val(),2)
          }
        });
      };

  function action(mode, id, type, keterangan, param, kategori){
    if(mode == 'view'){
      $('#modal_file').modal('show');
      $('#modal_file > .modal-dialog').width('70%');

      loadstatus(id, 2);
      $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'loadfile',
          data : {
              id        : id,
              type      : type,
          },
          success: function(result){
            let data = result.data;
            let code = result.code;
            
            if($('#role').val() == '10'){
              $('#dokumen-unggahan').html(keterangan == '1' ? 'PERSYARATAN PERMOHONAN SURAT KELAYAKAN OPERASIONAL PEMBUANGAN DAN/ATAU PEMANFAATAN AIR LIMBAH' : 'PERSYARATAN PERMOHONAN SURAT KELAYAKAN OPERASIONAL PEMBUANGAN EMISI' )

              // $('#dokumen-unggahan').html(`<i class="ace-icon fa fa-file green "></i>&nbsp;Dokumen Unggahan ${keterangan == 1? 'Air Limbah' : 'Udara'}`)

              if(result.data.length >= 6){
                  for (let i = 0; i < result.data.length; i++) {
                    var element =  result.data[i]['status'];
                    if(element == '0'){
                      window.stt.push(element)
                    }
                  }

                  if(window.stt.length >= 6){
                    updatestatusmaster(id, 1)
                  }else{
                    updatestatusmaster(id, 0)
                  }
                  

              }
            }else{

            }

            $('#ini-ID').val(id);
            if(code != '0'){
              var dt = $('#data-file-doc').DataTable({
                destroy: true,
                paging: true,
                lengthChange: false,
                searching: true,
                ordering: true,
                info: true,
                autoWidth: false,
                responsive: false,
                pageLength: 10,
                aaData: result.data,
                aoColumns: [
                    { 'mDataProp': 'id', 'width':'10%'},
                    { 'mDataProp': 'jenis'},
                    { 'mDataProp': 'filename'},
                    { 'mDataProp': 'status', 'width':'15%'},
                    { 'mDataProp': 'created_date'},
                    { 'mDataProp': 'updated_date'},
                    { 'mDataProp': 'keterangan'},
                    { 'mDataProp': 'id'},
                ],
                order: [[0, 'ASC']],
                fixedColumns: true,
                aoColumnDefs:[
                  { width: 50, targets: 0 },
                  // {
                  //     mRender: function ( data, type, row ) {
    
                  //       var el = bytesToSize(parseInt(data));
    
                  //         return el;
                  //     },
                  //     aTargets: [2]
                  // },
                  {
                    mRender: function ( data, type, row ) {
  
                        if($('#role').val() == '10' || $('#role').val() == '100'){
                          let rev = '';
                          let done = '';
                          if(data == '1'){
                              rev = 'selected';
                          }

                          if(data == '0'){
                              done = 'selected';
                          }
                          
                        var el =`<select class="form-control" id="status_2_`+row.id+`" >
                                  <option value=""> - </option>
                                  <option `+rev+` value="1"> <i>Revisi</i> </option>
                                  <option `+done+` value="0"> Selesai </option>
                                </select>`;
                        }else{
                          if(data == '1'){
                            var el = '<span class="label label-danger arrowed">Revisi</span>';
                          }else if(data == '0'){
                            var el = '<span class="label label-primary arrowed">Selesai</span>';
                          }else{
                            var el = '-'
                          }
                        }
  
                        return el;
                    },
                    aTargets: [ 3 ]
                },
                {
                  mRender: function ( data, type, row ) {

                      if($('#role').val() == '10' || $('#role').val() == '100'){
                        if(data == null){
                          data = '';
                        }
                      var el =`<textarea style="width:150px;" id="keterangan_2_`+row.id+`">`+data+`</textarea>`;
                      }else{
                        var el = data;
                      }

                      return el;
                  },
                  aTargets: [ 6 ]
              },
                {
                  mRender: function ( data, type, row ) {
                        var el = row.updated_date == row.created_date ? '-' : row.updated_date;
                      return el;
                  },
                  aTargets: [ 5 ]
              },
              {
                mRender: function ( data, type, row ) {

                  var el = `<div class="btn-group"><a class="btn btn-xs btn-warning" target="_blank" href="public/`+row.path+'/'+row.filename+`">
                            <i class="ace-icon fa fa-download bigger-120"></i>
                          </a></div>`;

                if($('#role').val() == 0) {
                  if(row.status == '1'){
                    el += `<div class="btn-group"><button class="btn btn-xs btn-info" onclick="revisi('`+row.id+`','`+row.type+`','`+row.jenis+`','`+row.path+'/'+row.filename+`','`+row.jenis+`')">
                                  <i class="ace-icon fa fa-edit bigger-120"></i>
                                </button></div>`;

                    el += `<div class="btn-group"><button class="btn btn-xs btn-danger" onclick="actionfile('delete','`+row.id+`','`+row.type+`', '`+row.path+'/'+row.filename+`')">
                            <i class="ace-icon fa fa-trash-o bigger-120"></i>
                          </button></div>`;
                  }
                  
                }else{
                  el += `<div class="btn-group"><button class="btn btn-xs btn-success" onclick="action('update','`+row.id+`','`+row.type+`')">
                            <i class="ace-icon fa fa-check-square-o bigger-120"></i>
                          </button></div>`;

                }

                el += `<div class="btn-group">
                                    <button data-toggle="dropdown" class="btn btn-xs btn-indo dropdown-toggle" aria-expanded="false">
                                      <i class="ace-icon fa fa-clock-o bigger-120"></i>
                                    </button>

                                    <ul class="dropdown-menu dropdown-info dropdown-menu-right" style="width:25rem">
                                    <div class="timeline-container">
                                    <div class="timeline-items">
                
                                      <div class="timeline-item clearfix">
                                        <div class="timeline-info">
                                          <span class="label label-primary label-sm">Create</span>
                
                                        </div>
                
                                        <div class="widget-box transparent">
                                          <div class="widget-body">
                                            <div class="widget-main">
                                                <i class="ace-icon fa fa-clock-o bigger-110"></i>
                                                ${row.created_date}
                                            </div>
                                          </div>
                                        </div>
                                      </div>`

                                      for (let index = 0; index < row.history.length; index++) {
                                        el += 
                                        `<div class="timeline-item clearfix">
                                        <div class="timeline-info">
                                        ${row.history[index]['status'] == 1 ? '<span class="label label-warning label-sm">Revisi</span>' : '<span class="label label-success label-sm">Selesai</span>'}
                                          
                                        </div>
                
                                        <div class="widget-box transparent">
                                          <div class="widget-body">
                                            <div class="widget-main">
                                                <i class="ace-icon fa fa-clock-o bigger-110"></i>
                                                ${row.history[index]['createdate']}
                                            </div>
                                          </div>
                                        </div>
                                      </div>`
                                      }
                
                                  el+=`</div>
                                  </div>
                                    </ul>
                                  </div>`;

                    return el;
                },
                aTargets: [7]
            },
                ],
                fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
                    var index = iDisplayIndexFull + 1;
                    $('td:eq(0)', nRow).html('#'+index);
                    return  index;
                },
                fnInitComplete: function () {
    
                    var that = this;
                    var td ;
                    var tr ;
                    this.$('td').click( function () {
                        td = this;
                    });
                    this.$('tr').click( function () {
                        tr = this;
                    });
                }
              });

              dt.column(4).visible(false);
              dt.column(5).visible(false);
            }else{
              var dt = $('#data-file-doc').DataTable();
              dt.clear().draw();
            }

          }
        })
      }else if(mode == 'update'){
        let stat = $('#status_'+type+'_'+id).val();
        let keterangan = $('#keterangan_'+type+'_'+id).val();
        
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'updatestatus',
          data : {
              table     : 'param_file',
              id        : id,
              type      : type,
              stat      : stat,
              keterangan      : keterangan,
          },
          success: function(result){
            let data = result.data;
            location.reload()
            // action('view',$('#ini-ID').val(id),2)
          }
        })
      }else if(mode == 'delete'){
        bootbox.confirm({
            message: "Anda Yakin <b>Hapus</b> data ini?",
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
              $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'deletedata',
                data : {
                    param     : param,
                    id        : id,
                    type      : type,
                },
                success: function(result){
                  location.reload()
                }
              })
            }
          }
        })
      }
    }

    function actionlapangan(mode, id, type, keterangan, param){
    if(mode == 'view'){
      $('#modal_file_lapangan').modal('show');
      $('#keterangan_lapangan').val('');
      $('#doc_lapangan').val('');
      $('.remove').trigger('click')
      loadstatus(id, 2);
      $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'loadfilelapangan',
          data : {
              id        : id,
              type      : type,
          },
          success: function(result){
            let data = result.data;
            let code = result.code;
          

            $('#ini-ID-lapangan').val(id);
            if(code != '0'){
              var dt = $('#data-file-doc-lapangan').DataTable({
                destroy: true,
                paging: true,
                lengthChange: false,
                searching: true,
                ordering: true,
                info: true,
                autoWidth: false,
                responsive: false,
                pageLength: 10,
                aaData: result.data,
                aoColumns: [
                    { 'mDataProp': 'id', 'width':'10%'},
                    { 'mDataProp': 'jenis'},
                    { 'mDataProp': 'filename'},
                    { 'mDataProp': 'created_date'},
                    { 'mDataProp': 'id'},
                ],
                order: [[0, 'ASC']],
                fixedColumns: true,
                aoColumnDefs:[
                  { width: 50, targets: 0 },
                  // {
                  //     mRender: function ( data, type, row ) {
    
                  //       var el = bytesToSize(parseInt(data));
    
                  //         return el;
                  //     },
                  //     aTargets: [2]
                  // },
              {
                mRender: function ( data, type, row ) {

                  var el = `<div class="btn-group"><a class="btn btn-xs btn-warning" target="_blank" href="public/`+row.path+'/'+row.filename+`">
                            <i class="ace-icon fa fa-download bigger-120"></i>
                          </a></div>`;

                if($('#role').val() == '1' || $('#role').val() == '2') {
                  if(row.status == '1'){
                    el += `<div class="btn-group"><button class="btn btn-xs btn-info" onclick="revisi('`+row.id+`','`+row.type+`','`+row.jenis+`','`+row.path+'/'+row.filename+`','`+row.jenis+`')">
                                  <i class="ace-icon fa fa-edit bigger-120"></i>
                                </button></div>`;

                    el += `<div class="btn-group"><button class="btn btn-xs btn-danger" onclick="actionfile('delete','`+row.id+`','`+row.type+`', '`+row.path+'/'+row.filename+`')">
                            <i class="ace-icon fa fa-trash-o bigger-120"></i>
                          </button></div>`;
                  }
                  
                }else{
                  // el += `<button class="btn btn-xs btn-success" onclick="action('update','`+row.id+`','`+row.type+`')">
                  //           <i class="ace-icon fa fa-check-square-o bigger-120"></i>
                  //         </button>`;
                  el += `<div class="btn-group"><button class="btn btn-xs btn-danger" onclick="actionfilelapang('delete','`+row.id+`','`+row.type+`', '`+row.path+'/'+row.filename+`')">
                            <i class="ace-icon fa fa-trash-o bigger-120"></i>
                          </button></div>`;

                }

                    return el;
                },
                aTargets: [4]
            },
                ],
                fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
                    var index = iDisplayIndexFull + 1;
                    $('td:eq(0)', nRow).html('#'+index);
                    return  index;
                },
                fnInitComplete: function () {
    
                    var that = this;
                    var td ;
                    var tr ;
                    this.$('td').click( function () {
                        td = this;
                    });
                    this.$('tr').click( function () {
                        tr = this;
                    });
                }
            });
            }else{
              var dt = $('#data-file-doc-lapangan').DataTable();
              dt.clear().draw();
            }

          }
        })
      }else if(mode == 'update'){
        let stat = $('#status_'+type+'_'+id).val();
        let keterangan = $('#keterangan_'+type+'_'+id).val();
        
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'updatestatus',
          data : {
              table     : 'param_file',
              id        : id,
              type      : type,
              stat      : stat,
              keterangan      : keterangan,
          },
          success: function(result){
            let data = result.data;
            location.reload()
          }
        })
      }else if(mode == 'delete'){
        bootbox.confirm({
            message: "Anda Yakin <b>Hapus</b> data ini?",
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
              $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'deletedata',
                data : {
                    param     : param,
                    id        : id,
                    type      : type,
                },
                success: function(result){
                  location.reload()
                }
              })
            }
          }
        })
      }
    }

    function loadstatus(id, type, jenis){
      $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadstatus',
        data : {
          id        : id,
          type        : type,
          jenis        : jenis,
        },
        success: function(result){
          let data = result.data;
            
            for (let i = 0; i < data.length; i++) {
              $('#jenis_doc option[value="'+data[i]['jenis']+'"]').prop('disabled',true);
              $('#jenis_doc').trigger("chosen:updated");
              
            }
        }
      })
    }

    function updatestatusmaster(id,stat){
      $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'updatestatusmaster',
        data : {
          id        : id,
          stat        : stat,
        },
        success: function(result){
          let data = result.data;
            
        }
      })
    }

    function revisi(id, type, jenis, path){
      $('#edit_group').removeAttr('hidden');
      $('#jenis_edit').val(jenis);
      $('#id_edit').val(id);
      $('#path_edit').val(path);
      $('#type_edit').val(type);
      
      };

      $('#submit_edit').on('click', function(){
      
        var formData = new FormData();
        formData.append('id', $('#id_edit').val());
        formData.append('path', $('#path_edit').val());
        formData.append('type', $('#type_edit').val());
        formData.append("file[]", $('#edit_file')[0].files[0]);
  
        $.ajax({
            type: 'post',
            processData: false,
            contentType: false,
            url: 'editfile',
            data : formData,
            success: function(result){
              location.reload();
            }
          });
        
        });

    function bytesToSize(bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
   }

   function actionfile(mode,id,type, path){
    bootbox.confirm({
      message: "Anda Yakin <b>Hapus</b> data ini?",
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
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'deletedataungahan',
          data : {
              param     : 'param_file',
              id        : id,
              type      : type,
              path      : path,
          },
          success: function(result){
            location.reload()
          }
        })
      }
    }
  })
  }

  function actionfilelapang(mode,id,type, path){
     
    bootbox.confirm({
      message: "Anda Yakin <b>Hapus</b> data ini?",
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
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'deletedataungahan',
          data : {
              param     : 'param_file_lapangan',
              id        : id,
              type      : type,
              path      : path,
          },
          success: function(result){
            location.reload()
          }
        })
      }
    }
  })
}

  function downloadatuh(path){
    window.open(path);
  }

  function reupload(type){
    var dialog = bootbox.dialog({
      message: '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
      closeButton: false
    });

    var formData = new FormData();
    formData.append('param', 'data_file');
    formData.append('type', '2');
    formData.append('id_parent', $('#idpermohonan').val());

    if(type == 'izin-lingkungan'){
      formData.append("file[doc_izin_lingkungan]", $('#doc_izin_lingkungan_reupload')[0].files[0]);
    }else if(type == 'nib'){
      formData.append("file[doc_nib]", $('#doc_nib_reupload')[0].files[0]);
    }else if(type == 'permohonan'){
      formData.append("file[doc_permohonan]", $('#doc_permohonan_reupload')[0].files[0]);
    }

    $.ajax({
      type: 'post',
      processData: false,
      contentType: false,
      url: 'reuploadfile',
      data : formData,
      success: function(result){
        dialog.modal('hide');
        Swal.fire({
          type: 'success',
          title: 'Berhasil Upload File !',
          showConfirmButton: true,
          // showCancelButton: true,
          confirmButtonText: `Ok`,
        }).then((result) => {
          $(document).ready(function(){
            location.reload()
          });
        })
      }
    });

  }

  function okdong(id, ok){
    var formData = new FormData();
    formData.append('param', 'data_file');
    formData.append('id', id);
    formData.append('ok', ok);

    $.ajax({
      type: 'post',
      processData: false,
      contentType: false,
      url: 'okdong',
      data : formData,
      success: function(result){
        Swal.fire({
          type: 'success',
          title: 'Berhasil Verifikasi File !',
          showConfirmButton: true,
          // showCancelButton: true,
          confirmButtonText: `Ok`,
        }).then((result) => {
          $(document).ready(function(){
            location.reload()
          });
        })
      }
    });

  }

  function inidelete(param, id, type, by, date) {
    bootbox.confirm({
        message: "Anda Yakin <b>Hapus</b> data ini?",
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
          $.ajax({
            type: 'post',
            dataType: 'json',
            url: 'deletedatapermohonan',
            data : {
                param     : param,
                id        : id,
                type      : type,
                createby  : by,
                createdate  : date,
            },
            success: function(result){
              location.reload()
            }
          })
        }
      }
    })
  }

  function popupvalidasi(id, type, param, kategori) {
    
    $('#idv2').val(id)
    $('#modal_validasi').modal('show');
    $('#kategori').val(kategori ? kategori : 0)
    if(!kategori){
      $('#kategori').attr('disabled', false)
      $('#simpanaja').show()
    }else{
      $('#kategori').attr('disabled', true)
      $('#simpanaja').hide()
    }
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'loadfilepermohonan',
      data: {
        id: id,
        type: type
      },
      success: function(result){
        var code = result.code
        var data = result.data
        var isok = 0
        var el = '';
        for (const key in data) {
          var id = data[key]['id']
          var path = data[key]['path']
          var filename = data[key]['filename']
          var jenis = data[key]['jenis']
          var ok = data[key]['ok']
          var checked = ok == 1 ? 'checked' : ''
          var classe =  !ok ? 'class="text-info"' : ok == 1 ? 'class="text-success"' : 'class="text-danger"'
          isok += ok == 1 ? 1 : 0
          el += `
                      <div class="row">`
                        if(ok == 2){
                            el += `<div class="col-sm-1">
                                      <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(${id}, 1)"> <i class="ace-icon fa fa-check"></i></a>
                                  </div>`
                            el += `<div class="col-sm-1">
                                      <a type="button" class="btn btn-white btn-xs btn-default" disabled> <i class="ace-icon fa fa-times"></i></a>
                                  </div>`
                                  classe = 'class="text-danger"'
                        }else if(ok == 1){
                            el += `<div class="col-sm-1">
                                      <a type="button" class="btn btn-white btn-xs btn-default" disabled> <i class="ace-icon fa fa-check"></i></a>
                                  </div>`
                            el += `<div class="col-sm-1">
                                      <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(${id}, 2)"> <i class="ace-icon fa fa-times"></i></a>
                                  </div>`
                        }else{
                          el += `<div class="col-sm-1">
                                      <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(${id}, 1)"> <i class="ace-icon fa fa-check"></i></a>
                                  </div>
                                  <div class="col-sm-1">
                                      <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(${id}, 2)"> <i class="ace-icon fa fa-times"></i></a>
                                  </div>`
                        }

                          el +=      `<div class="col-sm-10">
                                         <span class="lbl"> <a ${classe} target="_blank" type="button" href="public/${path+'/'+filename}"> <i class="ace-icon fa fa-file"></i> ${data[key]['jenis']} </a> </span>
                                      </div>
                                    </div>`
                                            
        }
        
        if(isok < 1){
          $('#kategori').hide()
          $('#simpanaja').hide()
        }
        
        $('#file-unggahan').html(el);
      }
    })
  }

  function validasiV2(id, param){
      
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'updatepermohonanparam',
      data : {
          id         : $('#idv2').val(),
          kategori   : $('#kategori').val(),
          param      : null,
          ver        : 2,
      },
      success: function(result){
        location.reload()
      }
    })
   }
