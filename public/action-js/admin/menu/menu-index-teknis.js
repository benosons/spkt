"use strict";
console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
  
  $('#nav-menu li').removeClass();
  // $('#nav-menu li#menu-data').addClass('open');
  $('#nav-menu li#menu-teknis').addClass('active');
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
      $('#submit_kajian').prop('disabled', true);
      return true;
    }
  }).on('change', function(){
    if($('#bab_kajian').val() != 0){
      $('#submit_kajian').prop('disabled', false);
    }else{
      $('#submit_kajian').prop('disabled', true);
    }
  });

  $('#bab_kajian').on('change', function () {
    if($('[name="id-input-file-3"]').val() == '' && $(this).val() == 0){
      $('#submit_kajian').prop('disabled', true);
    }else if($('[name="id-input-file-3"]').val() == '' && $(this).val()){
        $('#submit_kajian').prop('disabled', true);
    }else if($('[name="id-input-file-3"]').val() && $(this).val() == 0){
        $('#submit_kajian').prop('disabled', true);
    }else{
      $('#submit_kajian').prop('disabled', false);
    }
  })

  $('[name="id-input-file-4"]').ace_file_input({
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
      $('#submit_standar').prop('disabled', true);
      return true;
    }
  }).on('change', function(){
    if($('#bab_standar').val() != 0){
      $('#submit_standar').prop('disabled', false);
    }else{
      $('#submit_standar').prop('disabled', true);
    }
  });

  $('#bab_standar').on('change', function () {
    if($('[name="id-input-file-4"]').val() == '' && $(this).val() == 0){
      $('#submit_standar').prop('disabled', true);
    }else if($('[name="id-input-file-4"]').val() == '' && $(this).val()){
        $('#submit_standar').prop('disabled', true);
    }else if($('[name="id-input-file-4"]').val() && $(this).val() == 0){
        $('#submit_standar').prop('disabled', true);
    }else{
      $('#submit_standar').prop('disabled', false);
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
      $('#mohon_save').prop('disabled', true);
      return true;
    }
  }).on('change', function(){
    $('#mohon_save').prop('disabled', false);
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
      $('#submit_doc_lapangan').prop('disabled', true);
      return true;
    }
  }).on('change', function(){
    $('#submit_doc_lapangan').prop('disabled', false);
  });

  $('[name="id-input-file-lampiran"]').ace_file_input({
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
      $('#submit_lampiran').prop('disabled', true);
      return true;
    }
  }).on('change', function(){
    if($('#bab_lampiran').val() != 0){
      $('#submit_lampiran').prop('disabled', false);
    }else{
      $('#submit_lampiran').prop('disabled', true);
    }
  });

  $('[name="id-input-file-lampiran-2"]').ace_file_input({
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
      $('#submit_lampiran-2').prop('disabled', true);
      return true;
    }
  }).on('change', function(){
    if($('#bab_lampiran-2').val() != 0){
      $('#submit_lampiran-2').prop('disabled', false);
    }else{
      $('#submit_lampiran-2').prop('disabled', true);
    }
  });

  $('#bab_lampiran').on('change', function () {
    if($('[name="id-input-file-lampiran"]').val() == '' && $(this).val() == 0){
      $('#submit_lampiran').prop('disabled', true);
    }else if($('[name="id-input-file-lampiran"]').val() == '' && $(this).val()){
      $('#submit_lampiran').prop('disabled', true);
    }else if($('[name="id-input-file-lampiran"]').val() && $(this).val() == 0){
      $('#submit_lampiran').prop('disabled', true);
    }else{
      $('#submit_lampiran').prop('disabled', false);
    }
  })

  $('#bab_lampiran-2').on('change', function () {
    if($('[name="id-input-file-lampira-2n"]').val() == '' && $(this).val() == 0){
      $('#submit_lampiran-2').prop('disabled', true);
    }else if($('[name="id-input-file-lampiran-2"]').val() == '' && $(this).val()){
      $('#submit_lampiran-2').prop('disabled', true);
    }else if($('[name="id-input-file-lampiran-2"]').val() && $(this).val() == 0){
      $('#submit_lampiran-2').prop('disabled', true);
    }else{
      $('#submit_lampiran-2').prop('disabled', false);
    }
  })

  $('#modal_program').on('shown.bs.modal', function () {


  })

  $('#all-permohonan').DataTable();
  $('#data-file').DataTable();

  loadpermohonan('1');

  $('#verlapanganini').on('click', function(){
    actionlapangan('view',$('#idpermohonan').val(),$('#initype').val())
  })

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
          formData.append('type', '1');
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
          formData.append("file[doc_izin_lingkungan]", $('#doc_izin_lingkungan')[0].files[0]);
          formData.append("file[doc_nib]", $('#doc_nib')[0].files[0]);
          formData.append("file[doc_penapisan_mandiri]", $('#doc_penapisan_mandiri')[0].files[0]);
          // formData.append("bab_kajian", $('#bab_kajian').val());
          // formData.append("file[doc_standar]", $('#doc_standar')[0].files[0]);
          // formData.append("bab_standar", $('#bab_standar').val());
          
          if(berapa.length == 9){
            save(formData);
          }
        }
      }
    })
      
  });

  $('#submit_kajian').on('click', function(){

    var formData = new FormData();
    formData.append('id', $('#ini-ID').val());
    formData.append('param', 'param_file');
    formData.append('type', '1');
    formData.append('kategori', $('#inikategori').val());

    formData.append("file[doc_kajian]", $('#doc_kajian')[0].files[0]);
    formData.append("bab", $('#bab_kajian').val());
    
    upload(formData);
  });

  $('#submit_lampiran').on('click', function(){

    var formData = new FormData();
    formData.append('id', $('#ini-ID').val());
    formData.append('param', 'param_file');
    formData.append('type', '1');
    formData.append('kategori', $('#inikategori').val());

    formData.append("file[doc_lampiran]", $('#doc_lampiran')[0].files[0]);
    formData.append("bab", $('#bab_lampiran').val());
    formData.append("kategoriparam", '1');
    
    upload(formData);
  });

  $('#submit_lampiran-2').on('click', function(){

    var formData = new FormData();
    formData.append('id', $('#ini-ID').val());
    formData.append('param', 'param_file');
    formData.append('type', '1');
    formData.append('kategori', $('#inikategori').val());

    formData.append("file[doc_lampiran]", $('#doc_lampiran-2')[0].files[0]);
    formData.append("bab", $('#bab_lampiran-2').val());
    formData.append("kategoriparam", '2');
    
    upload(formData);
  });

  $('#submit_standar').on('click', function(){

    var formData = new FormData();
    formData.append('id', $('#ini-ID').val());
    formData.append('param', 'param_file');
    formData.append('type', '1');
    formData.append('kategori', $('#inikategori').val());

    formData.append("file[doc_standar]", $('#doc_standar')[0].files[0]);
    formData.append("bab", $('#bab_standar').val());
    
    upload(formData);
  });


  $('#doc_kajain').on('change', function(){

  })

  $('#cekunggahan').on('click', function(){
    action('view', $('#idpermohonan').val(), $('#initype').val(), $('#inikategori').val())
  })

  $('#deletedataini').on('click', function(){
    action('delete',$('#idpermohonan').val(),$('#initype').val(),'','data_permohonan')
  })

  $('#submit_doc_lapangan').on('click', function(){

    var formData = new FormData();
    formData.append('id', $('#ini-ID-lapangan').val());
    formData.append('param', 'param_file_lapangan');
    formData.append('type', '1');
    formData.append("file[doc_izin_usaha]", $('#doc_lapangan')[0].files[0]);
    formData.append("keterangan", $('#keterangan_lapangan').val());

    
    uploadlapangan(formData);
  });

  $('[name=form-input]').on('change', function(){
    
    let vl = []
    for (let index = 0; index < $('[name=form-input]').length; index++) {
      let valn = $('[name=form-input]')[index].value
      if(valn){
        vl.push(valn)
      }
    }
    
    if(vl.length == 9){
      $('#mohon_save').prop('disabled', false);
    }else{
      $('#mohon_save').prop('disabled', true);
    }
  })

  $('#kategori').on('change', function(){
    if(this.value > 0){
      $('#jenis').attr('disabled', false)
      
      if(this.value == 2){
        $(`#jenis`).val(0)
        $(`#jenis option[value='2']`).attr('hidden', true)
      }else{
        $(`#jenis`).val(0)
        $(`#jenis option[value='2']`).removeAttr('hidden')
      }
    }else{
      $('#jenis').val(0)
      $('#jenis').attr('disabled', true)
    }
  })

  $('#jenis').on('change', function(){
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
              // console.log(data[0].id);
              $('#idpermohonan').val(data[0].id);
              $('#initype').val(data[0].type);
              $('#inikategori').val(data[0].kategori);
              $('#initambah').hide()
              $('#ini-form-add').hide()
              $('#ini-form-view').show()
              if(!data[0]['param']){
                $('#cekunggahan').hide()
                $('#ini-verifikasi').show()
              }else{
                $('#cekunggahan').show()
                $('#ini-verifikasi').hide();
                $('#harap').hide();
                
              }

              if(data[0].status == 1){
                $('#verlapanganini').parent().parent().show();
                $('#surveykepuasan').parent().parent().show();
                $('#menu-puas').show();
                sessionStorage.setItem('survey', 1)
              }else{
                $('#verlapanganini').parent().parent().hide();
                $('#surveykepuasan').parent().parent().hide();
                $('#menu-puas').hide();
                sessionStorage.setItem('survey', 0)
              }
              
              $('#deletedataini').show()
              for (var index = 1; index <= 9; index++) {
                $('#view_'+index).val(data[0]['p'+index]);
                $('#view_'+index).prop('disabled', true);
              }

              $('#ini-paramnya').val(data[0]['param']);

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
                        }else{
                          $('#hapus-permohonan').show();
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
                  case 'doc_penapisan_mandiri':
                        $('#nama-file-penapisan-mandiri').html(data[0].file[f]['filename']);
                        $('#nama-file-penapisan_mandiri').attr('onclick', "downloadatuh('"+'public/'+data[0].file[f]['path']+'/'+data[0].file[f]['filename']+"')");
                        $('#hapus-penapisan-mandiri').attr('onclick', "actionfile('delete','"+data[0].file[f]['id']+"','"+data[0].type+"','"+data[0].file[f]['path']+'/'+data[0].file[f]['filename']+"')");
                     
                        $('#view-file-penapisan-mandiri').css('display', 'block');
                        $('#form-penapisan-mandiri-reupload').css('display', 'none');

                        if(oknya == 1){
                          $('#hapus-penapisan-mandiri').css('display', 'none');
                        }else{
                          $('#hapus-penapisan-mandiri').show();
                          if(oknya == 2){
                            var ell = ` <li>
                                          <i class="">File Hasil Penapisan Mandiri</i>
                                        </li>`
                            $('#harus-upload').append(ell);
                            harap.push('mandiri');
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
                      { 'mDataProp': 'p3'},
                      { 'mDataProp': 'kategori'},
                      { 'mDataProp': 'type'},
                      // { 'mDataProp': 'p6'},
                      { 'mDataProp': 'p7'},
                      { 'mDataProp': 'p8'},
                      { 'mDataProp': 'id'},
                  ],
                  order: [[0, 'ASC']],
                  fixedColumns: true,
                  aoColumnDefs:[
                    { width: 50, targets: 0 },
                    {
                      "render": function ( data, type, row ) {
                        if (type == 'display') {
                          if(!row.kategori){
                            return '-'
                          }

                          let iskat = ''
                          let kategori = [
                            '',
                            'Pembuangan air limbah ke badan air permukaan',
                            'Pembuangan air limbah ke formasi tertentu',
                            'Pemanfaatan air limbah untuk aplikasi ke tanah',
                            'Pemanfaatan air limbah ke formasi tertentu',
                            'Pembuangan emisi'
                          ]

                          return kategori[row.kategori]
                        }
                        return data
                      },
                      aTargets: [4]
                    },
                    {
                      "render": function ( data, type, row ) {
                        if (type == 'display') {
                          if(!row.param){
                            return '-'
                          }
                          let par = [
                            '',
                            'Kajian Teknis',
                            'Standar Teknis'
                          ]
                          return par[row.param]
                        }
                        return data
                      },
                      aTargets: [5]
                    },
                    {
                        "render": function ( data, type, row ) {
                          // if (type == 'display') {
                          //   var el = '';
                          //   var file = row.file
                          //   var isok = 0
                          //   var step = `<div class="btn-group">
                          //                 <button class="btn btn-xs btn-info "> <i class="ace-icon fa fa-th-list"></i> </button>
                          //               </div>`
                          //   el += step
                          //   el += `<div class="btn-group">
                          //           <button data-toggle="dropdown" class="btn btn-xs btn-indo dropdown-toggle" aria-expanded="false"> File <i class="ace-icon fa fa-angle-down icon-on-right"></i></button>
                          //           <ul class="dropdown-menu dropdown-info dropdown-menu-right" style="width:25rem">`
                          //     var li = ''

                          //     for (const key in file) {
                                
                          //       var id = file[key]['id']
                          //       var path = file[key]['path']
                          //       var filename = file[key]['filename']
                          //       var jenis = file[key]['jenis']
                          //       var ok = file[key]['ok']
                          //       var classe = ''

                          //       li += `<li>
                          //                 <div class="row">`
                          //         if(ok == 2){
                          //             li += `<div class="col-sm-2">
                          //                       <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(${id}, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                   </div>`
                          //                   classe = 'class="text-danger"'
                          //         }else if(ok == 1){
                          //             isok += 1
                          //             li += `<div class="col-sm-2">
                          //                       <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(${id}, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                   </div>`
                          //         }else{
                          //           li += `<div class="col-sm-2">
                          //                       <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(${id}, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                   </div>
                          //                   <div class="col-sm-2">
                          //                       <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(${id}, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                   </div>`
                          //         }

                          //       li +=      `<div class="col-sm-8">
                          //                       <a ${classe} target="_blank" type="button" href="public/${path+'/'+filename}"> <i class="ace-icon fa fa-file"></i> ${jenis} </a>
                          //                   </div>
                          //                 </div>
                          //             </li>`
                          //     }

                          //   el += li
                          //   el += `</ul>
                          //       </div>`

                                
                          //   el += `<div class="btn-group"><button class="btn btn-xs btn-danger" onclick="action('delete',`+row.id+`,'`+row.type+`','','data_permohonan')">
                          //             <i class="ace-icon fa fa-trash-o bigger-120"></i>
                          //           </button></div>`
                                    
                          //   return el;
                          // }


                          // ------------------------------------------------------------------------------------------------
                          // if(row.param){
                            
                          //   var path_0 = `public/${row.file[0]['path']}/${row.file[0]['filename']}`;
                          //   var path_1 = `public/${row.file[1]['path']}/${row.file[1]['filename']}`;
                          //   var path_2 = `public/${row.file[2]['path']}/${row.file[2]['filename']}`;
                            
                          //   el = `  <button class="btn btn-xs btn-info" onclick="action('view',`+row.id+`,'`+row.type+`', '', '', '`+row.param+`')">
                          //             <i class="ace-icon fa fa-file bigger-120"></i>
                          //           </button>
                          //           <div class="btn-group">
                          //               <button data-toggle="dropdown" class="btn btn-xs btn-indo dropdown-toggle" aria-expanded="false">
                          //                 <i class="ace-icon fa fa-paperclip bigger-120"></i>
                          //               </button>

                          //               <ul class="dropdown-menu dropdown-info dropdown-menu-right" style="width:25rem">
                          //                 <li>
                          //                   <a target="_blank" type="button" href="${path_0}"> <i class="ace-icon fa fa-file"></i> Permohonan</a>
                          //                 </li>

                          //                 <li>
                          //                   <a target="_blank" href="${path_1}"> <i class="ace-icon fa fa-file"></i>  Izin Lingkungan</a>
                          //                 </li>

                          //                 <li>
                          //                   <a target="_blank" href="${path_2}"> <i class="ace-icon fa fa-file"></i> NIB</a>
                          //                 </li>

                          //               </ul>
                          //             </div>`
                          // }else{
                            
                          //   if(_.keys(row.file).length == 0){

                          //       var path_0 = '';
                          //       var path_1 = '';
                          //       var path_2 = '';

                          //       var filename_0 = '';
                          //       var filename_1 = '';
                          //       var filename_2 = '';

                          //       var id_0 = '';
                          //       var id_1 = '';
                          //       var id_2 = '';

                          //       var teks_0 = '';
                          //       var teks_1 = '';
                          //       var teks_2 = '';

                          //       if(ok_0 == 1){
                          //         teks_0 = 'class="text-success"';
                          //       }else if(ok_0 == 2){
                          //         teks_0 = 'class="text-danger"';
                          //       }

                          //       if(ok_1 == 1){
                          //         teks_1 = 'class="text-success"';
                          //       }else if(ok_1 == 2){
                          //         teks_1 = 'class="text-danger"';
                          //       }

                          //       if(ok_2 == 1){
                          //         teks_2 = 'class="text-success"';
                          //       }else if(ok_2 == 2){
                          //         teks_2 = 'class="text-danger"';
                          //       }

                          //       var elemen_0 = '';
                          //       var elemen_1 = '';
                          //       var elemen_2 = '';

                          //       var validasinya = '';

                          //   }else if(_.keys(row.file).length == 1){

                          //       var path_0 = row.file[0]['path'];
                          //       var path_1 = '';
                          //       var path_2 = '';

                          //       var filename_0 = row.file[0]['filename'];
                          //       var filename_1 = '';
                          //       var filename_2 = '';

                          //       var id_0 = row.file[0]['id'];
                          //       var id_1 = '';
                          //       var id_2 = '';

                          //       var ok_0 = row.file[0]['ok'];
                          //       var ok_1 = '';
                          //       var ok_2 = '';

                          //       var teks_0 = '';
                          //       var teks_1 = '';
                          //       var teks_2 = '';

                          //       if(ok_0 == 1){
                          //         teks_0 = 'class="text-success"';
                          //       }else if(ok_0 == 2){
                          //         teks_0 = 'class="text-danger"';
                          //       }

                          //       if(ok_1 == 1){
                          //         teks_1 = 'class="text-success"';
                          //       }else if(ok_1 == 2){
                          //         teks_1 = 'class="text-danger"';
                          //       }

                          //       if(ok_2 == 1){
                          //         teks_2 = 'class="text-success"';
                          //       }else if(ok_2 == 2){
                          //         teks_2 = 'class="text-danger"';
                          //       }

                          //       var elemen_0 = `<div class="row">`;
                          //           if(ok_0 == null){
                          //           elemen_0 += `<div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                         </div>
                          //                         <div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                         </div>`;
                          //           }else if(ok_0 == 1){
                          //             elemen_0 += `
                          //                         <div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                         </div>`;

                          //           }else if(ok_0 == 2){
                          //             elemen_0 += `<div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                         </div>
                          //                         `;

                          //           }

                          //           elemen_0 += `<div class="col-sm-8">
                          //                           <a `+teks_0+` target="_blank" type="button" href="public/`+path_0+'/'+filename_0+`"> <i class="ace-icon fa fa-file"></i> Permohonan</a>
                          //                         </div>
                          //                       `;

                          //           elemen_0 += `</div>`;

                          //       var elemen_1 = '';
                          //       var elemen_2 = '';

                          //       var validasinya = '';

                          //   }else if(_.keys(row.file).length == 2){

                          //       var path_0 = row.file[0]['path'];
                          //       var path_1 = row.file[1]['path'];
                          //       var path_2 = '';

                          //       var filename_0 = row.file[0]['filename'];
                          //       var filename_1 = row.file[1]['filename'];
                          //       var filename_2 = '';

                          //       var id_0 = row.file[0]['id'];
                          //       var id_1 = row.file[1]['id'];
                          //       var id_2 ='';

                          //       var ok_0 = row.file[0]['ok'];
                          //       var ok_1 = row.file[1]['ok'];
                          //       var ok_2 ='';

                          //       var teks_0 = '';
                          //       var teks_1 = '';
                          //       var teks_2 = '';

                          //       if(ok_0 == 1){
                          //         teks_0 = 'class="text-success"';
                          //       }else if(ok_0 == 2){
                          //         teks_0 = 'class="text-danger"';
                          //       }

                          //       if(ok_1 == 1){
                          //         teks_1 = 'class="text-success"';
                          //       }else if(ok_1 == 2){
                          //         teks_1 = 'class="text-danger"';
                          //       }

                          //       if(ok_2 == 1){
                          //         teks_2 = 'class="text-success"';
                          //       }else if(ok_2 == 2){
                          //         teks_2 = 'class="text-danger"';
                          //       }

                          //       var elemen_0 = `<div class="row">`
                          //       if(ok_0 == null){
                          //           elemen_0 += `     <div class="col-sm-2">
                          //                               <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                             </div>
                          //                             <div class="col-sm-2">
                          //                               <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                             </div>`
                          //       }else if(ok_0 == 1){
                          //         elemen_0 += `
                          //                     <div class="col-sm-2">
                          //                       <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                     </div>`;

                          //       }else if(ok_0 == 2){
                          //         elemen_0 += `<div class="col-sm-2">
                          //                       <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                     </div>
                          //                     `;

                          //       }
                                
                          //           elemen_0 += `<div class="col-sm-8">
                          //                               <a `+teks_0+` target="_blank" type="button" href="public/`+path_0+'/'+filename_0+`"> <i class="ace-icon fa fa-file"></i> Permohonan</a>
                          //                             </div>`;
                                
                          //           elemen_0 += `</div>`;

                          //       var elemen_1 = `<div class="row">`;
                          //       if(ok_1 == null){
                          //           elemen_1 += `<div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                         </div>
                          //                         <div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                         </div>`
                          //       }else if(ok_1 == 1){
                          //         elemen_1 += `
                          //                         <div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                         </div>`

                          //       }else if(ok_1 == 2){
                          //         elemen_1 += `<div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                         </div>
                          //                        `

                          //       }

                          //           elemen_1 += `<div class="col-sm-8">
                          //                           <a `+teks_1+` target="_blank" href="public/`+path_1+'/'+filename_1+`"> <i class="ace-icon fa fa-file"></i> </i> Izin Lingkungan</a>
                          //                         </div>`

                          //           elemen_1 += `</div>`;

                          //       var elemen_2 = '';

                          //       var validasinya = '';

                          //   }else if(_.keys(row.file).length == 3){

                          //       var path_0 = row.file[0]['path'];
                          //       var path_1 = row.file[1]['path'];
                          //       var path_2 = row.file[2]['path'];

                          //       var filename_0 = row.file[0]['filename'];
                          //       var filename_1 = row.file[1]['filename'];
                          //       var filename_2 = row.file[2]['filename'];

                          //       var id_0 = row.file[0]['id'];
                          //       var id_1 = row.file[1]['id'];
                          //       var id_2 = row.file[2]['id'];

                          //       var ok_0 = row.file[0]['ok'];
                          //       var ok_1 = row.file[1]['ok'];
                          //       var ok_2 = row.file[2]['ok'];

                          //       var teks_0 = '';
                          //       var teks_1 = '';
                          //       var teks_2 = '';

                          //       if(ok_0 == 1){
                          //         teks_0 = 'class="text-success"';
                          //       }else if(ok_0 == 2){
                          //         teks_0 = 'class="text-danger"';
                          //       }

                          //       if(ok_1 == 1){
                          //         teks_1 = 'class="text-success"';
                          //       }else if(ok_1 == 2){
                          //         teks_1 = 'class="text-danger"';
                          //       }

                          //       if(ok_2 == 1){
                          //         teks_2 = 'class="text-success"';
                          //       }else if(ok_2 == 2){
                          //         teks_2 = 'class="text-danger"';
                          //       }

                          //        var elemen_0 = `<div class="row">`
                          //           if(ok_0 == null){
                          //               elemen_0 += `     <div class="col-sm-2">
                          //                               <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                             </div>
                          //                             <div class="col-sm-2">
                          //                               <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                             </div>`
                          //           }else if(ok_0 == 1){
                          //               elemen_0 += `
                          //                         <div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_0+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                         </div>`;
    
                          //           }else if(ok_0 == 2){
                          //               elemen_0 += `<div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_0+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                         </div>
                          //                         `;
    
                          //           }
                                
                          //           elemen_0 += `<div class="col-sm-8">
                          //                               <a `+teks_0+` target="_blank" type="button" href="public/`+path_0+'/'+filename_0+`"> <i class="ace-icon fa fa-file"></i> Permohonan</a>
                          //                             </div>`;
                                
                          //           elemen_0 += `</div>`;

                          //       var elemen_1 = `<div class="row">`;
                          //       if(ok_1 == null){
                          //           elemen_1 += `<div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                         </div>
                          //                         <div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                         </div>`
                          //       }else if(ok_1 == 1){
                          //           elemen_1 += `
                          //                         <div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_1+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                         </div>`

                          //       }else if(ok_1 == 2){
                          //           elemen_1 += `<div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_1+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                         </div>
                          //                        `

                          //       }

                          //           elemen_1 += `<div class="col-sm-8">
                          //                           <a `+teks_1+` target="_blank" href="public/`+path_1+'/'+filename_1+`"> <i class="ace-icon fa fa-file"></i> </i> Izin Lingkungan</a>
                          //                         </div>`

                          //           elemen_1 += `</div>`;

                          //       var elemen_2 = `<div class="row">`
                          //       if(ok_2 == null){
                          //           elemen_2 += `<div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_2+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                         </div>
                          //                         <div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_2+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                         </div>`
                          //       }else if(ok_2 == 1){
                          //           elemen_2 += `
                          //                         <div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-danger" onclick="okdong(`+id_2+`, 2)"> <i class="ace-icon fa fa-times"></i></a>
                          //                         </div>`

                          //       }else if(ok_2 == 2){
                          //           elemen_2 += `<div class="col-sm-2">
                          //                           <a type="button" class="btn btn-white btn-xs btn-success" onclick="okdong(`+id_2+`, 1)"> <i class="ace-icon fa fa-check"></i></a>
                          //                         </div>
                          //                         `

                          //       }

                          //           elemen_2 += `<div class="col-sm-8">
                          //                           <a `+teks_2+` target="_blank" href="public/`+path_2+'/'+filename_2+`"> <i class="ace-icon fa fa-file"></i> NIB</a>
                          //                         </div>`

                          //           elemen_2 += `</div>`;

                          //       if(ok_0 == 1 && ok_1 == 1 && ok_2 == 1){
                          //         console.log();
                          //           var validasinya = `<div class="row">
                          //                             <div class="col-sm-12">
                          //                               <a type="button" class="btn btn-white btn-block btn-sm btn-primary" onclick="validasi(`+row.id+`, 1)"> <i class="ace-icon fa fa-check"></i> Kajian teknis </a>
                          //                             </div>

                          //                             <div class="col-sm-12">
                          //                               <a type="button" class="btn btn-white btn-block btn-sm btn-primary" onclick="validasi(`+row.id+`, 2)"> <i class="ace-icon fa fa-check"></i> Standar Teknis</a>
                          //                             </div>
                          //                           </div>`;
                          //       }else{
                          //         var validasinya = '<a class="text-danger"> Belum Upload Ulang File ! </a>';
                          //       }

                          //   }

                          //   el += `<div class="btn-group">
                          //             <button data-toggle="dropdown" class="btn btn-xs btn-indo dropdown-toggle" aria-expanded="false">
                          //               File
                          //               <i class="ace-icon fa fa-angle-down icon-on-right"></i>
                          //             </button>

                          //             <ul class="dropdown-menu dropdown-info dropdown-menu-right" style="width:25rem">
                          //               <li>
                          //                 `+elemen_0+`
                          //               </li>

                          //               <li>
                          //                 `+elemen_1+`
                          //               </li>

                          //               <li>
                          //                 `+elemen_2+`
                          //               </li>


                          //               <li>
                          //                 `+validasinya+`
                          //               </li>

                          //             </ul>
                          //           </div>`

                          //   // el += `<a class="" target="_blank" href="public/">
                          //   //       Permohonan
                          //   //     </a>`
                          //   // el += `<a class="btn btn-xs btn-primary" target="_blank" href="public/">
                          //   //       <i class="ace-icon fa fa-download bigger-120"></i>
                          //   //     </a>`
                          //   // el += `<a class="btn btn-xs btn-info" target="_blank" href="public/">
                          //   //       <i class="ace-icon fa fa-download bigger-120"></i>
                          //   //     </a>`
                          // }

                          // if($('#role').val() == '1' || $('#role').val() == '2') {
                            
                          //   el += `<button class="btn btn-xs btn-danger" onclick="action('delete',`+row.id+`,'`+row.type+`','','data_permohonan')">
                          //             <i class="ace-icon fa fa-trash-o bigger-120"></i>
                          //           </button>`;
                          // }else{
                          //   if(row.status == 1){
                          //     el += `<button title="Verifikasi Lapangan" class="btn btn-xs btn-success" onclick="actionlapangan('view',`+row.id+`,'`+row.type+`')">
                          //           <i class="ace-icon fa fa-check-square-o bigger-120"></i>
                          //         </button>`;
                          //   }else{
                          //     el += `<button class="btn btn-xs btn-danger" onclick="inidelete('data_permohonan','${row.id}','${row.type}','${row.created_by}','${row.created_date}')">
                          //     <i class="ace-icon fa fa-trash bigger-120"></i>
                          //   </button>`;
                          //   }
                          // }
                          
                          if (type == 'display') {

                            var file = row.file
                            var oks = 0
                            for (const key in file) {
                              oks = file[key]['ok'] == 1 ? oks+1 : +0
                            }

                            var el = ''

                            if(row.param){
                              if(oks == 4){
                                el += `<div class="btn-group">
                                        <button class="btn btn-xs btn-primary" onclick="action('view',${row.id},'${row.type}', '', '', '${row.param}',${row.kategori})">
                                        <i class="ace-icon fa fa-file bigger-120"></i>
                                        </button>
                                      </div>`
                              }
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
                            
                                     
                            return el;
                          }

                          return data;
                        },
                        aTargets: [8]
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

              // $("#all-permohonan_filter.dataTables_filter").append($("#categoryFilter"));

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
            if($('#isRole').val() == 0){
              $('#initambah').show()
              $('#cekunggahan').hide()
              $('#deletedataini').hide()
            }else{
              var tb = $('#all-permohonan').DataTable()
              tb.clear().draw();
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
            location.reload()
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

  function action(mode, id, type, keterangan, param, kode, kategori){    
    
    if(mode == 'view'){
      let parkateg = [
        '',
        'Pembuangan air limbah ke badan air permukaan',
        'Pembuangan air limbah ke formasi tertentu',
        'Pemanfaatan air limbah untuk aplikasi ke tanah',
        'Pemanfaatan air limbah ke formasi tertentu',
        'Pembuangan emisi',
      ]
      
      if(!kategori || kategori === undefined){
        kategori = $('#inikategori').val();
      }
      let kateg_name = parkateg[kategori]
      $('#text-kategori').text(kateg_name)
      if(!kode){
        kode = $('#ini-paramnya').val();
      }
      
      let opt = '<option value="0"> </option>'
      
      if(kategori == 1 && kode == 1){
        opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Rona Lingkungan Awal</option>
                <option value="3">BAB 3 - Komponen Lingkungan Yang Terkena Dampa</option>
                <option value="4">BAB 4 - Prakiraan Dampa</option>
                <option value="5">BAB 5 - Rencana Pengelolaan Lingkungan</option>
                <option value="6">BAB 6 - Rencana Pemantauan Lingkungan</option>
                <option value="7">BAB 7 - Sistem Penanggulangan Keadaan Darura</option>
                <option value="8">BAB 8 - Internalisasi Biaya Lingkungan</option>
                <option value="9">BAB 9 - Periode Waktu Uji Coba</option>
                <option value="10">BAB 10 - Struktur Organisasi Dan Standar Kompetensi Sumber Daya Manusia</option>
                <option value="11">BAB 11 - Sistem Manajemen Lingkungan</option>
                `

                $('#ini-lampiran').show()
                $('#kajian-teknis').show();
                $('#standar-teknis').hide();
                $( "#modal_file" ).on('shown.bs.modal', function (e) {
                  $("#kajian-teknis").addClass('active');
                  $("#standar-teknis").removeClass('active');
    
                  $('#kajian').addClass('tab-pane active');
                  $('#standar').removeClass('active');
                });
      }else if(kategori == 2 && kode == 1){
          opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                  <option value="2">BAB 2 - Rona Lingkungan Awal</option>
                  <option value="3">BAB 3 - Prakiraan Dampak</option>
                  <option value="4">BAB 4 - Rencana Pengelolaan Lingkungan </option>
                  <option value="5">BAB 5 - Rencana Pemantauan Lingkungan</option>
                  <option value="6">BAB 6 - Sistem Penanggulangan Keadaan Darurat</option>
                  <option value="7">BAB 7 - Internalisasi Biaya Lingkungan</option>
                  <option value="8">BAB 8 - Periode Waktu Uji Coba</option>
                  <option value="9">BAB 9 - Struktur Organisasi dan Standar Kompetensi Sumber Daya Manusia</option>
                  <option value="10">BAB 10 - Sistem Manajemen Lingkungan</option>`
                  // <option value="11">BAB LAMPIRAN</option>

                  $('#ini-lampiran').show()
                  $('#kajian-teknis').show();
                  $('#standar-teknis').hide();
                  $( "#modal_file" ).on('shown.bs.modal', function (e) {
                    $("#kajian-teknis").addClass('active');
                    $("#standar-teknis").removeClass('active');

                    $('#kajian').addClass('tab-pane active');
                  $('#standar').removeClass('active');
                  });

      }else if(kategori == 3 && kode == 1){
        opt += `<option value="1">Bab 1 - Deskripsi Kegiatan</option>
                <option value="2">Bab 2 - Rona Lingkungan Awal</option>
                <option value="3">Bab 3 - Prakiraan Dampak</option>
                <option value="4">Bab 4 - Rencana Pengelolaan Lingkungan</option>
                <option value="5">Bab 5 - Rencana Pemantauan Lingkungan</option>
                <option value="6">Bab 6 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="7">Bab 7 - Internalisasi Biaya Lingkungan</option>
                <option value="8">Bab 8 - Periode Uji Coba</option>
                <option value="9">Bab 9 - Standar Kompetensi Sumber Daya Manusia</option>
                <option value="10">Bab 10 - Sistem Manajemen Lingkungan</option>
                `
                // <option vavlue="9">BAB LAMPIRAN</option>
                
                $('#ini-lampiran').show()
                $('#kajian-teknis').show();
                $('#standar-teknis').hide();
                $( "#modal_file" ).on('shown.bs.modal', function (e) {
                  $("#kajian-teknis").addClass('active');
                  $("#standar-teknis").removeClass('active');

                  $('#kajian').addClass('tab-pane active');
                  $('#standar').removeClass('active');
                });

      }else if(kategori == 4 && kode == 1){
        opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Rona Lingkungan Awal</option>
                <option value="3">BAB 3 - Baku Mutu Air Limbah</option>
                <option value="4">BAB 4 - Prakiraan Dampak</option>
                <option value="5">BAB 5 - Rencana Pengelolaan Lingkungan</option>
                <option value="6">BAB 6 - Rencana Pemantauan Lingkungan</option>
                <option value="7">BAB 7 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="8">BAB 8 - Internalisasi Biaya Lingkungan</option>
                <option value="9">BAB 9 - Periode Waktu Uji Coba</option>
                <option value="10">BAB 10 - Struktur Organisasi dan Standar Kompetensi Sumber Daya Manusia</option>
                <option value="11">BAB 11 - Sistem Manajemen Lingkungan</option>`
                // <option value="12">BAB LAMPIRAN</option>

                $('#ini-lampiran').show()
                $('#kajian-teknis').show();
                $('#standar-teknis').hide();
                $( "#modal_file" ).on('shown.bs.modal', function (e) {
                  $("#kajian-teknis").addClass('active');
                  $("#standar-teknis").removeClass('active');

                  $('#kajian').addClass('tab-pane active');
                  $('#standar').removeClass('active');;
                });
      }else if(kategori == 5 && kode == 1){
        opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Rona Lingkungan Awal</option>
                <option value="3">BAB 3 - Desain Sarana dan Prasarana Sistem Pengendalian Emisi</option>
                <option value="4">BAB 4 - Prakiraan Dampak</option>
                <option value="5">BAB 5 - Rencana Pemantauan Lingkungan</option>
                <option value="6">BAB 6 - Internalisasi Biaya Lingkungan</option>
                <option value="7">BAB 7 - Standar Kompetensi Sumber Daya Manusia</option>
                <option value="8">BAB 8 - Sistem Manajemen Lingkungan</option>
                <option value="9">BAB 9 - Periode Uji Coba Instalasi Pengendali Emisi</option>
                `
                // <option value="8">BAB LAMPIRAN</option>

                $('#ini-lampiran').show()
                $('#kajian-teknis').show();
                $('#standar-teknis').hide();
                $( "#modal_file" ).on('shown.bs.modal', function (e) {
                  $("#kajian-teknis").addClass('active');
                  $("#standar-teknis").removeClass('active');

                  $('#kajian').addClass('tab-pane active');
                  $('#standar').removeClass('active');
                });
      }else if(kategori == 1 && kode == 2){
        opt +=` <option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Baku Mutu Air Limbah Nasional</option>
                <option value="3">BAB 3 - Rencana Pengelolaan Lingkungan</option>
                <option value="4">BAB 4 - Rencana Pemantauan Lingkungan</option>
                <option value="5">BAB 5 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="6">BAB 6 - Internalisasi Biaya Lingkungan</option>
                <option value="7">BAB 7 - Periode Waktu Uji Coba</option>
                <option value="8">BAB 8 - Struktur Organisasi Dan Standar Kompetensi Sumber Daya Manusia</option>
                <option value="9">BAB 9 - Sistem Manajemen Lingkungan</option>`
                 
              $('#ini-lampiran-2').show()
              $('#kajian-teknis').hide();
              $('#standar-teknis').show();
              $( "#modal_file" ).on('shown.bs.modal', function (e) {
                  $("#kajian-teknis").removeClass('active');
                  $("#standar-teknis").addClass('active');

                  $('#kajian').removeClass('active');
                  $('#standar').addClass('tab-pane active');
                  
              });
              
      }else if(kategori == 3 && kode == 2){
        opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Baku Mutu Air Limbah</option>
                <option value="3">BAB 3 - Rencana Pengelolaan Lingkungan</option>
                <option value="4">BAB 4 - Rencana Pemantauan Lingkungan</option>
                <option value="5">BAB 5 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="6">BAB 6 - Internalisasi Biaya Lingkungan</option>
                <option value="7">BAB 7 - Periode Waktu Uji Coba</option>
                <option value="8">BAB 8 - Struktur Organisasi dan Standar Kompetensi Sumber Daya Manusia</option>
                <option value="9">BAB 9 - Sistem Manajemen Lingkungan</option>
                `
                // <option value="9">BAB LAMPIRAN</option>

                $('#ini-lampiran-2').show()
                $('#kajian-teknis').hide();
                $('#standar-teknis').show();
                $( "#modal_file" ).on('shown.bs.modal', function (e) {
                  $("#kajian-teknis").removeClass('active');
                  $("#standar-teknis").addClass('active');

                  $('#kajian').removeClass('active');
                  $('#standar').addClass('tab-pane active');
                  
                });
      }else if(kategori == 4 && kode == 2){
        opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Baku Mutu Air Limbah</option>
                <option value="3">BAB 3 - Rencana Pengelolaan Lingkungan</option>
                <option value="4">BAB 4 - Rencana Pemantauan Lingkungan</option>
                <option value="5">BAB 5 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="6">BAB 6 - Internalisasi Biaya Lingkungan</option>
                <option value="7">BAB 7 - Periode Waktu Uji Coba</option>
                <option value="8">BAB 8 - Standar Kompetensi Sumber Daya Manusia</option>
                <option value="9">BAB 9 - Sistem Manajemen Lingkungan</option>
                `
                // <option value="9">BAB LAMPIRAN</option>

                $('#ini-lampiran-2').show()
                $('#kajian-teknis').hide();
                $('#standar-teknis').show();
                $( "#modal_file" ).on('shown.bs.modal', function (e) {
                  $("#kajian-teknis").removeClass('active');
                  $("#standar-teknis").addClass('active');

                  $('#kajian').removeClass('active');
                  $('#standar').addClass('tab-pane active');
                  
                });
      }else if(kategori == 5 && kode == 2){
        opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Rujukan Baku Mutu Emisi</option>
                <option value="3">BAB 3 - Desain Sarana dan Prasarana Sistem Pengendalian Emisi</option>
                <option value="4">BAB 4 - Rencana Pemantauan Lingkungan </option>
                <option value="5">BAB 5 - Internalisasi Biaya Lingkungan</option>
                <option value="6">BAB 6 - Standar Kompetensi Sumber Daya Manusia </option>
                <option value="7">BAB 7 - Sistem Manajemen Lingkungan</option>
                <option value="8">BAB 8 - Periode Uji Coba Instalasi Pengendali Emisi</option>
                `
                // <option value="7">BAB LAMPIRAN</option>

                $('#ini-lampiran-2').show()
                $('#kajian-teknis').hide();
                $('#standar-teknis').show();
                $( "#modal_file" ).on('shown.bs.modal', function (e) {
                  $("#kajian-teknis").removeClass('active');
                  $("#standar-teknis").addClass('active');

                  $('#kajian').removeClass('active');
                  $('#standar').addClass('tab-pane active');
                  
                });
      }

      
      $('#bab_kajian').html(opt)
      $('#bab_kajian').trigger("chosen:updated");
      $('#bab_standar').html(opt)
      $('#bab_standar').trigger("chosen:updated");
      
      // switch (kode) {
      //   case '1':
      //       $('#kajian-teknis').show();
      //       $('#standar-teknis').hide();
      //       $( "#modal_file" ).on('shown.bs.modal', function (e) {
      //         $("#kajian-teknis").addClass('active');
      //         $("#standar-teknis").removeClass('active');

      //         $('#kajian').addClass('tab-pane active');
      //         $('#standar').addClass('tab-pane');
      //       });
      //     break;
      //   case '2':
      //       $('#kajian-teknis').hide();
      //       $('#standar-teknis').show();
      //       $( "#modal_file" ).on('shown.bs.modal', function (e) {
      //         $("#kajian-teknis").removeClass('active');
      //         $("#standar-teknis").addClass('active');

      //         $('#kajian').removeClass('active');
      //         $('#standar').addClass('active');
              
      //       });
      //     break;
      // }

      $('#modal_file').modal('show');
      $('#modal_file > .modal-dialog').width($('#modal_file > .modal-dialog').width() + 100);
      $('#ini-ID').val(id);
        if(kode == '1'){
          $.ajax({
              type: 'post',
              dataType: 'json',
              url: 'loadfile',
              data : {
                  id        : id,
                  type      : 1,
                  jenis     : 'doc_kajian',
                  kategori  : kategori,
              },
              success: function(result){
                loadstatus(id, 1, 'doc_kajian', kategori );
                
                let data = result.data;
                let code = result.code;
                if(code != '0'){
                  var dt = $('#data-file-kajian').DataTable({
                    destroy: true,
                    paging: true,
                    lengthChange: false,
                    searching: true,
                    ordering: true,
                    info: true,
                    autoWidth: false,
                    responsive: false,
                    pageLength: 11,
                    aaData: result.data,
                    aoColumns: [
                        { 'mDataProp': 'id', 'width':'10%'},
                        { 'mDataProp': 'bab'},
                        { 'mDataProp': 'filename'},
                        // { 'mDataProp': 'size'},
                        { 'mDataProp': 'status'},
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
                      //     aTargets: [3]
                      // },
                      {
                        mRender: function ( data, type, row ) {
                            if(type == 'display'){
                              let des = []
                              if(row.jenis != 'doc_lampiran'){
                                $("#bab_kajian option").each(function(){
                                    des.push($(this).text())
                                });
                              }else{
                                let p = ''
                                if(row.param == 2){
                                  p = '-2'
                                }
                                
                                  $(`#bab_lampiran${p} option[value="${row.bab}"]`).prop('disabled',true);
                                  $('#bab_lampiran').trigger("chosen:updated");
                                
                                des = ['-', 'LAMPIRAN I', 'LAMPIRAN II', 'LAMPIRAN III']
                              }
                              return des[row.bab]
                            }

                            return data
      
                        },
                        aTargets: [ 1 ]
                    },
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
                              
                            var el =`<select class="form-control" id="status_1_`+row.id+`" >
                                      <option value=""> - </option>
                                      <option `+rev+` value="1"> Revisi </option>
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
                            
                            if(row.jenis == 'doc_lampiran'){
                              return '-'
                            }
                            return el;
                        },
                        aTargets: [ 3 ]
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
      
                            if($('#role').val() == '10' || $('#role').val() == '100'){
                              if(data == null){
                                data = '';
                              }
                            var el =`<textarea style="width:150px;" id="keterangan_1_`+row.id+`">`+data+`</textarea>`;
                            }else{
                              var el = data;
                            }

                            if(row.jenis == 'doc_lampiran'){
                              return '-'
                            }
      
                            return el;
                        },
                        aTargets: [ 6 ]
                    },
                      {
                          mRender: function ( data, type, row ) {
        
                            var el = `<div class="btn-group"><a class="btn btn-xs btn-warning" target="_blank" href="public/`+row.path+'/'+row.filename+`">
                                      <i class="ace-icon fa fa-download bigger-120"></i>
                                    </a></div>`;

                          if($('#role').val() == 0) {
                            if(row.status == '1'){
                              el += `<div class="btn-group"><button class="btn btn-xs btn-info" onclick="revisikajian('`+row.id+`','`+row.type+`','`+row.jenis+`','`+row.path+'/'+row.filename+`','`+row.bab+`', '${row.kategori}')">
                                      <i class="ace-icon fa fa-edit bigger-120"></i>
                                    </button></div>`;

                              el += `<div class="btn-group"><button class="btn btn-xs btn-danger" onclick="actionfile('delete','`+row.id+`','`+row.type+`', '`+row.path+'/'+row.filename+`')">
                                      <i class="ace-icon fa fa-trash-o bigger-120"></i>
                                    </button></div>`;
                            }
                            
                          }else{
                            if(row.jenis == 'doc_lampiran'){
                              el += ''
                            }else{
                            el += `<div class="btn-group"><button class="btn btn-xs btn-success" onclick="action('update','`+row.id+`','`+row.type+`','','1')">
                                      <i class="ace-icon fa fa-check-square-o bigger-120"></i>
                                    </button></div>`;
                            }
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
                    fnDrawCallback: function(){
                      var table = $('#data-file-kajian').DataTable();
                      var trr = $("#data-file-kajian tbody tr");
                      for (let index = 0; index < trr.length; index++) {
                        $(trr[index]).find('td:eq(1)').css('white-space', 'normal');
                        $(trr[index]).find('td:eq(2)').css('white-space', 'normal');
                      }
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
                  var table = $('#data-file-kajian').DataTable();
                  table.clear().draw();
                }
                // $('#create_date').html(data[0]['created_date']);
                // for (let index = 0; index < data.length; index++) {
                //   if(data[index]['jenis'] == 'doc_kajian'){
                //       $('#file_name_kajian').html(data[index]['filename']);
                //       $('#file_name_kajian').attr('href', 'public'+ '/'+ data[index]['path']+'/'+data[index]['filename']);
                //       $('#file_size_kajian').html(bytesToSize(parseInt(data[index]['size'])));
                //   }else if(data[index]['jenis'] == 'doc_standar'){
                //     $('#file_name_standar').html(data[index]['filename']);
                //     $('#file_name_standar').attr('href', 'public'+ '/'+ data[index]['path']+'/'+data[index]['filename']);
                //     $('#file_size_standar').html(bytesToSize(parseInt(data[index]['size'])));
                //   }
                  
                  
                // }
              }
          })
        }else if(kode == '2'){
          $.ajax({
            type: 'post',
            dataType: 'json',
            url: 'loadfile',
            data : {
                id        : id,
                type      : 1,
                jenis      : 'doc_standar',
                kategori  : kategori,
            },
            success: function(result){
              loadstatus(id, 1, 'doc_standar', kategori);

              let data = result.data;
              let code = result.code;
              
              if(code != '0'){
                var dt = $('#data-file-standar').DataTable({
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
                      { 'mDataProp': 'bab'},
                      { 'mDataProp': 'filename'},
                      // { 'mDataProp': 'size'},
                      { 'mDataProp': 'status'},
                      { 'mDataProp': 'created_date'},
                      // { 'mDataProp': 'updated_date'},
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
                    //     aTargets: [3]
                    // },
                    {
                      mRender: function ( data, type, row ) {
                          if(type == 'display'){
                            let des = []
                            if(row.jenis != 'doc_lampiran'){
                              $("#bab_kajian option").each(function(){
                                  des.push($(this).text())
                              });
                            }else{
                              let p = ''
                              if(row.param == 2){
                                p = '-2'
                              }
                              
                                $(`#bab_lampiran${p} option[value="${row.bab}"]`).prop('disabled',true);
                                $(`#bab_lampiran${p}`).trigger("chosen:updated");
                              
                              des = ['-', 'LAMPIRAN I', 'LAMPIRAN II', 'LAMPIRAN III']
                            }
                            return des[row.bab]
                          }

                          return data
    
                      },
                      aTargets: [ 1 ]
                  },
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
                                  <option `+rev+` value="1"> Revisi </option>
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
                          
                          let des = [
                            '-',
                            'DESKRIPSI KEGIATAN',
                            'BAKU MUTU AIR LIMBAH NASIONAL',
                            'RENCANA PENGELOLAAN LINGKUNGAN',
                            'RENCANA PEMANTAUAN LINGKUNGAN',
                            'SISTEM PENANGGULANGAN KEADAAAN DARURAT',
                            'INTERNALISASI BIAYA LINGKUNGAN',
                            'PERIODE WAKTU UJI COBA',
                            'STRUKTUR ORGANISASI DAN STANDAR KOMPETENSI SUMBER DAYA MANUSIA',
                            'SISTEM MANAJEMEN LINGKUNGAN'
                          ]
                            
                            return des[data];
                        },
                        aTargets: [ 1 ]
                    },
                  //   {
                  //     mRender: function ( data, type, row ) {
                  //           var el = row.updated_date == row.created_date ? '-' : row.updated_date;
                  //         return el;
                  //     },
                  //     aTargets: [ 5 ]
                  // },
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
                      aTargets: [ 5 ]
                  },
                    {
                        mRender: function ( data, type, row ) {
      
                          var el = `<div class="btn-group"><a class="btn btn-xs btn-warning" target="_blank" href="public/`+row.path+'/'+row.filename+`">
                                      <i class="ace-icon fa fa-download bigger-120"></i>
                                    </a></div>`;

                          if($('#role').val() == 0) {
                            if(row.status == '1'){
                              el += `<div class="btn-group"><button class="btn btn-xs btn-info" onclick="revisistandar('`+row.id+`','`+row.type+`','`+row.jenis+`','`+row.path+'/'+row.filename+`','`+row.bab+`', '${row.kategori}')">
                                      <i class="ace-icon fa fa-edit bigger-120"></i>
                                    </button></div>`;

                              el += `<div class="btn-group"><button class="btn btn-xs btn-danger" onclick="actionfile('delete','`+row.id+`','`+row.type+`', '`+row.path+'/'+row.filename+`')">
                                      <i class="ace-icon fa fa-trash-o bigger-120"></i>
                                    </button></div>`;
                            }
                          }else{
                            el += `<div class="btn-group"><button class="btn btn-xs btn-success" onclick="action('update','`+row.id+`','`+row.type+`','','2')">
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
                        aTargets: [6]
                    },
                  ],
                  fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
                      var index = iDisplayIndexFull + 1;
                      $('td:eq(0)', nRow).html('#'+index);
                      return  index;
                  },
                  fnDrawCallback: function(){
                    var table = $('#data-file-standar').DataTable();
                    var trr = $("#data-file-standar tbody tr");
                    for (let index = 0; index < trr.length; index++) {
                      $(trr[index]).find('td:eq(1)').css('white-space', 'normal');
                      $(trr[index]).find('td:eq(2)').css('white-space', 'normal');
                    }
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
                var table = $('#data-file-standar').DataTable();
                table.clear().draw();
              }
              // $('#create_date').html(data[0]['created_date']);
              // for (let index = 0; index < data.length; index++) {
              //   if(data[index]['jenis'] == 'doc_kajian'){
              //       $('#file_name_kajian').html(data[index]['filename']);
              //       $('#file_name_kajian').attr('href', 'public'+ '/'+ data[index]['path']+'/'+data[index]['filename']);
              //       $('#file_size_kajian').html(bytesToSize(parseInt(data[index]['size'])));
              //   }else if(data[index]['jenis'] == 'doc_standar'){
              //     $('#file_name_standar').html(data[index]['filename']);
              //     $('#file_name_standar').attr('href', 'public'+ '/'+ data[index]['path']+'/'+data[index]['filename']);
              //     $('#file_size_standar').html(bytesToSize(parseInt(data[index]['size'])));
              //   }
                
                
              // }
            }
          })
        }else{
          let kat = [
            '',
            'Pembuangan air limbah ke badan air permukaan',
            'Pembuangan air limbah ke formasi tertentu',
            'Pemanfaatan air limbah untuk aplikasi ke tanah',
            'Pemanfaatan air limbah ke formasi tertentu',
            'Pembuangan emisi'
          ]
      
          $('#dokumen-unggahan').html(`<i class="ace-icon fa fa-file green "></i>&nbsp;Persyaratan Permohonan ${kat[kategori]}`)
        }

      }else if(mode == 'update'){
        
        let stat = $('#status_'+param+'_'+id).val();
        let keterangan = $('#keterangan_'+param+'_'+id).val();
        
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

    function loadstatus(id, param, jenis, kategori){      
      
      switch (jenis) {
        case 'doc_kajian':
            param = '1';
          break;
        case 'doc_standar':
            param = '2';
          break;
      }
      $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadstatus',
        data : {
            id        : id,
            type       : 1,
            jenis      : jenis,
            kategori      : kategori,
        },
        success: function(result){
          let data = result.data;
          let code = result.code;
          
          if(code == '1'){
            if(jenis == 'doc_kajian'){
              
              for (let i = 0; i < data.length; i++) {
                $('#bab_kajian option[value="'+data[i]['bab']+'"]').prop('disabled',true);
                $('#bab_kajian').trigger("chosen:updated");
                
              }
            }else if(jenis == 'doc_standar'){
              for (let i = 0; i < data.length; i++) {
                $('#bab_standar option[value="'+data[i]['bab']+'"]').prop('disabled',true);
                $('#bab_standar').trigger("chosen:updated");
                
              }
            }else if(jenis == 'doc_lampiran'){
              for (let i = 0; i < data.length; i++) {
                let p = ''
                if(data[i]['param'] == 2){
                  p = '-2'
                }
                $(`#bab_lampiran${p} option[value="${data[i]['bab']}"]`).prop('disabled',true);
                $(`#bab_lampiran${p}`).trigger("chosen:updated");
              }
            }
          }
        }
      })
    }

    function revisikajian(id, type, jenis, path, bab, kategori){
      $('#edit_group_kajian').removeAttr('hidden');
      $('#bab_edit_kajian').val(bab);
      $('#id_edit_kajian').val(id);
      $('#path_edit_kajian').val(path);
      $('#type_edit_kajian').val(type);
      $('#kategori_edit_standar').val(kategori);

      
      };

    function revisistandar(id, type, jenis, path, bab, kategori){
      $('#edit_group_standar').removeAttr('hidden');
      $('#bab_edit_standar').val(bab);
      $('#id_edit_standar').val(id);
      $('#path_edit_standar').val(path);
      $('#type_edit_standar').val(type);
      $('#kategori_edit_standar').val(kategori);
      
      };

    $('#submit_edit_kajian').on('click', function(){
      
      var formData = new FormData();
      formData.append('id', $('#id_edit_kajian').val());
      formData.append('path', $('#path_edit_kajian').val());
      formData.append('type', $('#type_edit_kajian').val());
      formData.append('kategori', $('#kategori_edit_kajian').val());
      formData.append("file[]", $('#edit_file_kajian')[0].files[0]);

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

    $('#submit_edit_standar').on('click', function(){
      
      var formData = new FormData();
      formData.append('id', $('#id_edit_standar').val());
      formData.append('path', $('#path_edit_standar').val());
      formData.append('type', $('#type_edit_standar').val());
      formData.append('kategori', $('#type_edit_standar').val());
      formData.append("file[]", $('#edit_file_standar')[0].files[0]);

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

   function validasi(id, param){
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'updatepermohonanparam',
      data : {
          id        : id,
          param      : param,
      },
      success: function(result){
        location.reload()
      }
    })
   }

   
   function actionlapangan(mode, id, type, keterangan, param){
    if(mode == 'view'){
      $('#modal_file_lapangan').modal('show');
      $('#keterangan_lapangan').val('');
      $('#doc_lapangan').val('');
      $('.remove').trigger('click')
      loadstatus(id, 1);
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

    function uploadlapangan(formData){

      $.ajax({
          type: 'post',
          processData: false,
          contentType: false,
          url: 'uploadfilelapangan',
          data : formData,
          success: function(result){
            location.reload()
            actionlapangan('view',$('#ini-ID-lapangan').val(),1)
          }
        });
      };

    function hapusfile(){
      alert();
    }

    function reupload(type){
      var dialog = bootbox.dialog({
        message: '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
        closeButton: false
      });

      var formData = new FormData();
      formData.append('param', 'data_file');
      formData.append('type', '1');
      formData.append('id_parent', $('#idpermohonan').val());

      if(type == 'izin-lingkungan'){
        formData.append("file[doc_izin_lingkungan]", $('#doc_izin_lingkungan_reupload')[0].files[0]);
      }else if(type == 'nib'){
        formData.append("file[doc_nib]", $('#doc_nib_reupload')[0].files[0]);
      }else if(type == 'permohonan'){
        formData.append("file[doc_permohonan]", $('#doc_permohonan_reupload')[0].files[0]);
      }else if(type == 'penapisan-mandiri'){
        formData.append("file[doc_penapisan_mandiri]", $('#doc_penapisan_mandiri_reupload')[0].files[0]);
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

    function checklog(id){
      var ada = []
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'checklog',
          data : {
              id        : id,
          },
          success: function(result){
            if(result.code != '0'){
              for (let index = 0; index < result.data.length; index++) {
                const element = result.data[index];
                ada.push(element)
              }
            }
          }
        })

        return ada

    }

    function popupvalidasi(id, type, param, kategori) {
      $('#idv2').val(id)
      $('#modal_validasi').modal('show');
      $('#kategori').val(kategori ? kategori : 0)
      $('#jenis').val(param ? param : 0)
      if(!param){
        $('#kategori').attr('disabled', false)
        $('#jenis').attr('disabled', false)
        $('#simpanaja').show()
      }else{
        $('#kategori').attr('disabled', true)
        $('#jenis').attr('disabled', true)
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
            // el += `<div class="checkbox">
            //         <label>
            //           <input name="form-field-checkbox" type="checkbox" class="ace" onclick="okdong(${id}, ${!ok ? 1 : ok==1? 2: 1})" ${checked}>
            //           <span class="lbl"> <a ${classe} target="_blank" type="button" href="public/${path+'/'+filename}"> <i class="ace-icon fa fa-file"></i> ${data[key]['jenis']} </a> </span>
            //         </label>
            //       </div>`

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
          
          if(isok < 4){
            $('#kategori').hide()
            $('#jenis').hide()
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
            param      : $('#jenis').val(),
            ver        : 2,
        },
        success: function(result){
          location.reload()
        }
      })
     }

    