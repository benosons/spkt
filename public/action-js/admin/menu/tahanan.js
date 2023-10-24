console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
    $('#datatahanan').DataTable()
    load()

    $('#modal-tambah').on('show.bs.modal', function(){
        $('#form-perkara')[0].reset()
    })

    $('#btn-atensi').on('change', function(){
        load()
    })
    $('#btn-lp').on('change', function(){
        load()
    })
    $('#btn-l1').on('change', function(){
        load()
    })
});

function load(){
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadtahanan',
        success: function(result){
            let data = result.data;
            let code = result.code;
            
            if(code != 0){
                var dt = $('#datatahanan').DataTable({
                    destroy: true,
                    paging: true,
                    lengthChange: true,
                    searching: true,
                    ordering: true,
                    info: true,
                    autoWidth: false,
                    responsive: false,
                    pageLength: 10,
                    aaData: result.data,
                    aoColumns: [
                        { 'mDataProp': 'no_lp' },
                        { 'mDataProp': 'nama_tahanan' },
                        { 'mDataProp': 'sp_han' },
                        { 'mDataProp': 'habis' },
                        { 'mDataProp': 'jang_han' },
                        { 'mDataProp': 'perpanjangan' },
                        { 'mDataProp': 'id' }

                    ],
                    order: [[0, 'ASC']],
                    fixedColumns: true,
                    aoColumnDefs:[
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){

                                    let el = `<div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-warning" onclick="edittahanan(${row.id})"><i class="bx bx-edit fs-4"></i></button>
                                                <button type="button" class="btn btn-danger" onclick="deletetahanan(${row.id})"><i class="bx bx-trash fs-4"></i></button>
                                            </div>`
                                    return el
                                }
                                return data;
                            },
                            
                            aTargets: [ 6 ]
                        },
                    ],
                    // fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
                    //     var index = iDisplayIndexFull + 1;
                    //     $('td:eq(0)', nRow).html('#'+index);
                    //     return  index;
                    // },
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
                var table = $('#datatahanan').DataTable();
                table.clear().draw();
            }
        }
    })
}

function viewimage(ektp, selfie) {
    $('#modal-image').modal('show')
    $('#img-ektp').attr("src", ektp)
    $('#img-selfie').attr("src", selfie)
}

function addtahanan() {

    var formData = new FormData();
    formData.append('id', $('#id_tahanan').val())
    formData.append('no_lp', $('#no_lp').val())
    formData.append('nama_tahanan', $('#nama_tahanan').val())
    formData.append('sp_han', $('#sp_han').val())
    formData.append('tgl_sp_han', $('#tgl_sp_han').val())
    formData.append('habis', 1)
    formData.append('tgl_perpanjangan', $('#tgl_perpanjangan').val())
    formData.append('perpanjangan', 1)

    $.ajax({
        type: 'post',
        processData: false,
        contentType: false,
        url: 'submittahanan',
        data : formData,
        success: function(result){
            $('#modal-tambah').modal('hide')
            load()
        }
    })

}

function edittahanan(id) {
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadtahananbyid',
        data : {
            id : id
        },
        success: function(result){
            var datas = result.data
            $('#modal-tambah').modal('show')
            datas.forEach(element => {
                $('#id_tahanan').val(element.id)
                var now_sp = new Date(element.sp_han);

                var day_sp = ("0" + now_sp.getDate()).slice(-2);
                var month_sp = ("0" + (now_sp.getMonth() + 1)).slice(-2);

                var today_sp = now_sp.getFullYear()+"-"+(day_sp)+"-"+(month_sp) ;

                $('#no_lp').val(element.no_lp)
                $('#nama_tahanan').val(element.nama_tahanan)
                $('#sp_han').val(element.sp_han)
                $('#habis').val(element.habis)
                $('#jang_han').val(element.jang_han)
                $('#perpanjangan').val(element.perpanjangan)

            });
        }
    })
}

function deletetahanan(id) {
    Swal.fire({
        title: '',
        text: "Menghapus Data ini !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak'
      }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'deletetahanan',
                data : {
                    id : id
                },
                success: function(result){
                    $('#modal-tambah').modal('hide')
                    load()
                }
            })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

}

function lihatkronologis(params, text) {
    
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'getkronologis',
        data : {
            id : params
        },
        success: function(result){
            
            if(text == 'Kronologis'){
                $('#text-nya').html(text)
                $('#krono').html(result.data[0].kronologis)
                $('#modal-kronologis').modal('show')
            }

            if(text == 'Pelapor'){
                $('#text-nya').html(text)
                $('#krono').html(result.data[0].pelapor)
                $('#modal-kronologis').modal('show')
            }
        }
    })
    
}

function selesaikan(id) {
    Swal.fire({
        title: '',
        text: "Apakah Laporan Ini Telah Selesai ?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak'
      }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'selesaiperkara',
                data : {
                    id : id
                },
                success: function(result){
                    load()
                }
            })
          Swal.fire(
            'Berhasil!',
            'Laporan Telah Selesai',
            'success'
          )
        }
      })

}

function downloadexcel() {
    
    Swal.fire({
        title: 'Pilih status yang akan didownload?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        confirmButtonText: 'Sudah Selesai',
        denyButtonText: `Belum Selesai`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'downloadexcel',
                data : {
                    status : 1
                },
                success: function(result){
                    window.location.href = result.data
                }
            })   
        } else if (result.isDenied) {
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'downloadexcel',
                data : {
                    status : ''
                },
                success: function(result){
                    window.location.href = result.data
                }
            }) 
        }
      })
    
}
