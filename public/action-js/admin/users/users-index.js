"use strict";
console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
  $('#nav-menu li').removeClass();
  $('#nav-menu li#menu-users').addClass('active');

  $('#setting-user').DataTable();
  $('.user-tambah').hide();

  loadusers('');

  $('#save-user').on('click', function(){
      let user_name = $('#user_name').val();
      let user_password = 12345;
      let user_role = $('#user_role').val();
      let user_fullname = $('#user_fullname').val();
      let user_nip = $('#user_nip').val();

      var formData = new FormData();
      formData.append('user_name', user_name);
      formData.append('user_password', user_password);
      formData.append('user_role', user_role);
      formData.append('user_fullname', user_fullname);
      formData.append('nip', user_nip);

      var Validator = {
          rules: {
              username: /^(\d|\w)+$/, // allows letters, numbers, and underscores
              length: 4
          },
          validate: function(user) {
              var value = $(user).val();
              if (!this.rules.username.test(value)) {
                Swal.fire({
                  type: 'warning',
                  title: 'Tidak boleh spasi atau spesial karakter!',
                  showConfirmButton: true,
                  // showCancelButton: true,
                  confirmButtonText: `Ok`,
                });
              }else if(value.length < this.rules.length){
                Swal.fire({
                  type: 'warning',
                  title: 'Username minimal 6 karakter!',
                  showConfirmButton: true,
                  // showCancelButton: true,
                  confirmButtonText: `Ok`,
                });
              }else{
                save(formData);
              }

          }
      };

      Validator.validate('#user_name');

  });

  $('#user_role').on('change', function(){
    if(this.value == 100){
      $('#user_satuan').val(0);
      $('#user_satuan').prop('disabled', true);
    }else{
      $('#user_satuan').prop('disabled', false);
    }
  });

  $('#user_name').on('keyup', function(){
    $('#form_uname').removeClass('has-error');
    $('#isAda').hide();
  })

  $('#view-pass').on('click', function(){
    let type = $('#new-password').attr('type');
    
    if(type == 'password'){
      $('#new-password').attr('type', 'text');
      $(this).attr('class','btn btn-sm btn-default');
      $(this).html('<i class="ace-icon fa fa-eye-slash bigger-110"></i>');
    }else{
      $('#new-password').attr('type', 'password');
      $(this).attr('class','btn btn-sm btn-success');
      $(this).html('<i class="ace-icon fa fa-eye bigger-110"></i>');
    }
  })

});

function loadusers(param){

  $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'loadusers',
      data : {
              param      : param,
      },
      success: function(result){
          let data = result.data;
          var dt = $('#setting-users').DataTable({
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
                { 'mDataProp': 'user_id', 'width':'10%'},
                { 'mDataProp': 'user_name'},
                { 'mDataProp': 'user_fullname'},
                { 'mDataProp': 'role_name'},
                { 'mDataProp': 'user_status'},
                { 'mDataProp': 'user_status'},
            ],
            order: [[0, 'ASC']],
            fixedColumns: true,
            aoColumnDefs:[
              { width: 50, targets: 0 },
              {
                  mRender: function ( data, type, row ) {
                      if(!data){
                        data = '<center>-</center>';
                      }
                      return data;
                  },
                  aTargets: [ 3 ]
              },
              {
                  mRender: function ( data, type, row ) {

                    var stt = '';
                    
                      if(row.user_status == 1){
                        stt = 'checked'
                      }else if(row.user_status == 0){
                        stt ='';
                      }else{
                        stt = 'disabled'
                      }
                      var el ='<input value="'+row.user_id+'" type="checkbox" class="js-primary" '+stt+' />';

                      return el;
                  },
                  aTargets: [ 4 ]
              },
              {
                  mRender: function ( data, type, row ) {

                    var el = '';
                      if(row.isLogin == 1){
                        el ='<span class="label label-sm label-success arrowed-in">online</span>';
                      }else{
                        el ='<span class="label label-sm label-dafault arrowed-in">offline</span>';
                      }

                      return el;
                  },
                  aTargets: [ 5 ]
              },
              {
                  mRender: function ( data, type, row ) {
                    var el = '';
                    
                    if(row.user_status == null){
                        el += `<div class="btn-group"><button title="Validasi User" class="btn btn-xs btn-info" onclick="action('validate','`+row.user_id+`','')">
                                <i class="ace-icon fa fa-check-square-o bigger-120"></i>
                              </button></div>`;
                    }

                        el += `<div class="btn-group"><button title="Hapus User" class="btn btn-xs btn-danger" onclick="action('delete','`+row.user_id+`','')">
																<i class="ace-icon fa fa-trash-o bigger-120"></i>
															</button></div>`;

                        el += `<div class="btn-group"><button title="Ganti Password" class="btn btn-xs btn-warning" onclick="passreset('`+row.user_id+`')">
																<i class="ace-icon fa fa-key bigger-120"></i>
															</button></div>`;

                      return el;
                  },
                  aTargets: [ 6 ]
              },
            ],
            fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
                var index = iDisplayIndexFull + 1;
                $('td:eq(0)', nRow).html('#'+index);
                return  index;
            },
            fnDrawCallback: function(){
              var elemprimary = $('.js-primary');
              for (var i = 0; i < elemprimary.length; i++) {
                if($(elemprimary[i]).attr('data-switchery') !== 'true'){
                  var switchery = new Switchery(elemprimary[i], { color: '#1abc9c', jackColor: '#fff', size: 'small', className : 'switchery status' });
                  elemprimary[i].onchange = function() {
                    action('update',this.value, this.checked)
                  }
                }
              }
            },
            fnInitComplete: function () {
              // var elemprimary = $('.js-primary');
              // for (var i = 0; i < elemprimary.length; i++) {
              //   var switchery = new Switchery(elemprimary[i], { color: '#1abc9c', jackColor: '#fff', size: 'small', className : 'switchery status' });
              //   elemprimary[i].onchange = function() {
              //     action('update',this.value, this.checked)
              //   }
              // }


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

        let first_row = dt.row(':first').data();
        $('#satuan_code').val(parseInt(first_row.id) + 1 + '0');

        }
      })
    }

function onusers(type){
    $('.page-list > li').removeClass('active');
    if(type == 'input'){
      $('.user-tambah').show();
      $('.user-list').hide();
      $('#save-user').show();
      $('#tambah-user').hide();
    }else if(type == 'list'){
      loadusers('');
      $('#list-user').addClass('active');
      $('.user-tambah').hide();
      $('.user-list').show();
      $('#save-user').hide();
      $('#tambah-user').show();
    }
};

function save(formData){
  
      $.ajax({
        type: 'post',
        processData: false,
        contentType: false,
        url: 'checkUser',
        data : formData,
        success: function(result){
          var code = result.code;
          
          if(code == '0'){
            $('#form_uname').removeClass('has-error');
            $('#isAda').hide();
              $.ajax({
                type: 'post',
                processData: false,
                contentType: false,
                url: 'addUser',
                data : formData,
                success: function(result){
                  Swal.fire({
                    type: 'success',
                    title: 'Success add User !',
                    showConfirmButton: true,
                    // showCancelButton: true,
                    confirmButtonText: `Ok`,
                  }).then((result) => {
                        loadusers('');
                        $('#user_name').val('');
                        $('#user_fullname').val('');
                        $('#user_role').val(0).trigger("chosen:updated");
                        $('#modal_user').modal('hide');
                  })
                }
              });
          }else if(code == '1'){
              $('#form_uname').addClass('has-error');
              $('#isAda').show();
          }
        }
      });
  };

  function action(mode, id, status){
    if(mode == 'delete'){
      bootbox.confirm({
        message: "Are you sure to <b>Delete</b> ?",
        buttons: {
         confirm: {
             label: '<i class="fa fa-check"></i> Yes',
             className: 'btn-success btn-xs',
         },
         cancel: {
             label: '<i class="fa fa-times"></i> No',
             className: 'btn-danger btn-xs',
         }
       },
        callback : function(result) {
  			if(result) {
            isAction(mode, id, status);
    			}
    		}
    });
  }else if(mode == 'update'){
    isAction(mode, id, status);
  }else if(mode == 'validate'){
    isAction(mode, id, 1);
  }
}

  function isAction(mode, id, status){
    var formData = new FormData();
    formData.append('mode', mode);
    formData.append('id', id);
    formData.append('status', status);
    $.ajax({
        type: 'post',
        processData: false,
        contentType: false,
        url: 'actionUsers',
        data : formData,
        success: function(result){
          loadusers('');
        }
      });
  }

  function loadparam(param){

    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadparam',
        data : {
                param      : param,
        },
        success: function(result){
            let data = result.data;
            var opt = '<option value="0">- Pilih Satuan -</option>';
            for (var i = 0; i < data.length; i++) {
              opt += '<option value="'+data[i].satuan_code+'">'+data[i].satuan_desc+'</option>';
            }

            $('#user_satuan').append(opt);
          }
        })
      }
    
      function isCheck(username, role){
        var formData = new FormData();
        formData.append('user_name', mode);
        formData.append('user_role', id);
        $.ajax({
            type: 'post',
            processData: false,
            contentType: false,
            url: 'checkUser',
            data : formData,
            success: function(result){
              // loadusers('');
            }
          });
      }

      function passreset(id){
        $('#modal_password').modal('show');
        $('#id-password').val(id);
        $('#new-password').val('');
      }

      $('#save-password').on('click', function(){
        let id = $('#id-password').val();
        let user_password = $('#new-password').val();
        var formData = new FormData();
        formData.append('id', id);
        formData.append('user_password', user_password);
        pass(formData);

    });

    function pass(formData){
      $.ajax({
        type: 'post',
        processData: false,
        contentType: false,
        url: 'updatepass',
        data : formData,
        success: function(result){
          var code = result.code;
          
          if(code == '0'){
            Swal.fire({
              type: 'success',
              title: 'Sukses Ganti Password !',
              showConfirmButton: true,
              // showCancelButton: true,
              confirmButtonText: `Ok`,
            }).then((result) => {
                  loadusers('');
                  $('#user_name').val('');
                  $('#user_fullname').val('');
                  $('#user_role').val(0).trigger("chosen:updated");
                  $('#modal_user').modal('hide');
                  $('#modal_password').modal('hide');
            })
          }
        }
      });
  };