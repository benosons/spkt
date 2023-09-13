console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
    $('#dataperkara').DataTable()
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
    let atensi = ''
    let lp = ''
    let l1 = ''

    var btn_lp = $('#btn-lp:checked').val();
    var btn_l1 = $('#btn-l1:checked').val();
    var btn_atensi = $('#btn-atensi:checked').val();
    if(btn_lp == 1){
        lp = 1 // ADA TERLAPOR = P21
    }
    if(btn_l1 == 1){
        l1 = 1  // DALAM LIDIK = SP3
    }
    if(btn_atensi == 1){
        atensi = 1
    }
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadperkara',
        data: {
            p21: lp,
            sp3: l1,
            atensi: atensi
        },
        success: function(result){
            let data = result.data;
            let code = result.code;
            
            if(code != 0){
                var dt = $('#dataperkara').DataTable({
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
                        { 'mDataProp': 'nolaporan' },
                        { 'mDataProp': 'tgllaporan' },
                        { 'mDataProp': 'pelapor' },
                        { 'mDataProp': 'tkp' },
                        { 'mDataProp': 'kronologis', className: "my_class" },
                        { 'mDataProp': 'terlapor' },
                        { 'mDataProp': 'pasal' },
                        { 'mDataProp': 'penyidik' },
                        { 'mDataProp': 'sudah' },
                        { 'mDataProp': 'hambatan' },
                        { 'mDataProp': 'keterangan' },
                        { 'mDataProp': 'lp' },
                        { 'mDataProp': 'l1' },
                        { 'mDataProp': 'atensi' },
                        { 'mDataProp': 'p21' },
                        { 'mDataProp': 'sp3' },
                        { 'mDataProp': 'status' },
                        { 'mDataProp': 'id' }
                    ],
                    order: [[0, 'ASC']],
                    fixedColumns: true,
                    aoColumnDefs:[
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = ''

                                    el += '<button class="btn btn-warning" onclick="lihatkronologis(`'+data+'`, `Pelapor`)">Lihat</button>'

                                    return  el
                                }
                                return data;
                            },
                            
                            aTargets: [ 2 ]
                        },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = ''

                                    el += '<button class="btn btn-warning" onclick="lihatkronologis(`'+data+'`, `Kronologis`)">Lihat</button>'

                                    return  el
                                }
                                return data;
                            },
                            
                            aTargets: [ 4 ]
                        },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = ''

                                    el += `<div class="mb-3 row">
                                                <div class="col-md-10">
                                                    <i class="bx bx-${row.lp == 1 ? 'check' : 'x'} fs-3 text-${row.lp == 1 ? 'success' : 'danger'}"></i>
                                                </div>
                                            </div>`

                                    return  el
                                }
                                return data;
                            },
                            
                            aTargets: [ 11 ]
                        },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = ''

                                    el += `<div class="mb-3 row">
                                                <div class="col-md-10">
                                                    <i class="bx bx-${row.l1 == 1 ? 'check' : 'x'} fs-3 text-${row.l1 == 1 ? 'success' : 'danger'}"></i>
                                                </div>
                                            </div>`

                                    return  el
                                }
                                return data;
                            },
                            
                            aTargets: [ 12 ]
                        },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = ''
                                    
                                    el += `<div class="mb-3 row">
                                            <div class="col-md-10">
                                                <i class="bx bx-${row.atensi == 1 ? 'check' : 'x'} fs-3 text-${row.atensi == 1 ? 'success' : 'danger'}"></i>
                                            </div>
                                        </div>`

                                    return  el
                                }
                                return data;
                            },
                            
                            aTargets: [ 13 ]
                        },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = ''
                                    
                                    el += `<div class="mb-3 row">
                                            <div class="col-md-10">
                                                <i class="bx bx-${row.p21 == 1 ? 'check' : 'x'} fs-3 text-${row.p21 == 1 ? 'success' : 'danger'}"></i>
                                            </div>
                                        </div>`

                                    return  el
                                }
                                return data;
                            },
                            
                            aTargets: [ 14 ]
                        },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = ''
                                    
                                    el += `<div class="mb-3 row">
                                            <div class="col-md-10">
                                                <i class="bx bx-${row.sp3 == 1 ? 'check' : 'x'} fs-3 text-${row.sp3 == 1 ? 'success' : 'danger'}"></i>
                                            </div>
                                        </div>`

                                    return  el
                                }
                                return data;
                            },
                            
                            aTargets: [ 15 ]
                        },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = ''
                                    if(row.status == 1){
                                        el += `<span class="badge badge-pill badge-soft-success font-size-11">Selesai</span>`
                                    }else{
                                        el += `<span class="badge badge-pill badge-soft-dark font-size-11">Belum Selesai</span>`
                                    }

                                    return  el
                                }
                                return data;
                            },
                            
                            aTargets: [ 16 ]
                        },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let selesai = ''
                                    if(row.status != 1){
                                        selesai =  `<button type="button" class="btn btn-success" onclick="selesaikan(${row.id})"><i class="bx bx-check fs-4"></i></button>`
                                    }

                                    let el = `<div class="btn-group" role="group" aria-label="Basic example">
                                                ${selesai}
                                                <button type="button" class="btn btn-warning" onclick="editperkara(${row.id})"><i class="bx bx-edit fs-4"></i></button>
                                                <button type="button" class="btn btn-danger" onclick="deleteperkara(${row.id})"><i class="bx bx-trash fs-4"></i></button>
                                            </div>`
                                    return el
                                }
                                return data;
                            },
                            
                            aTargets: [ 17 ]
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
                var table = $('#dataperkara').DataTable();
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

function addperkara() {
    let penyidik = [];
    for (let i = 0; i < $('[name="penyidik"]:checked').length; i++) {
        const element = $('[name="penyidik"]:checked')[i];
        penyidik.push(element.value)
        
    }
    
    console.log(penyidik.join("|"));
    var formData = new FormData();
    formData.append('id', $('#id_perkara').val())
    formData.append('nolaporan', $('#no-laporan').val())
    formData.append('tgllaporan', $('#tgl-laporan').val())
    formData.append('pelapor', $('#pelapor').val())
    formData.append('tkp', $('#tkp').val())
    formData.append('kronologis', $('#kronologis').val())
    formData.append('terlapor', $('#terlapor').val())
    formData.append('pasal', $('#pasal').val())
    formData.append('penyidik', penyidik.join("|"))
    formData.append('sudah', $('#sudah').val())
    formData.append('hambatan', $('#hambatan').val())
    formData.append('keterangan', $('#keterangan').val())
    formData.append('lp', $('#lp').is(':checked') ? 1 : 0)
    formData.append('l1', $('#l1').is(':checked') ? 1 : 0)
    formData.append('atensi', $('#atensi').is(':checked') ? 1 : 0)
    formData.append('p21', $('#p21').is(':checked') ? 1 : 0)
    formData.append('sp3', $('#sp3').is(':checked') ? 1 : 0)

    
    $.ajax({
        type: 'post',
        processData: false,
        contentType: false,
        url: 'submitperkara',
        data : formData,
        success: function(result){
            $('#modal-tambah').modal('hide')
            load()
        }
    })

}

function editperkara(id) {
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadperkarabyid',
        data : {
            id : id
        },
        success: function(result){
            var datas = result.data
            $('#modal-tambah').modal('show')
            datas.forEach(element => {
                $('#id_perkara').val(element.id)
                $('#no-laporan').val(element.nolaporan)
                var now = new Date(element.tgllaporan);

                var day = ("0" + now.getDate()).slice(-2);
                var month = ("0" + (now.getMonth() + 1)).slice(-2);

                var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

                $('#tgl-laporan').val(today)

                $('#pelapor').val(element.pelapor)
                $('#tkp').val(element.tkp)
                $('#kronologis').val(element.kronologis)
                $('#terlapor').val(element.terlapor)
                $('#pasal').val(element.pasal)
                let peny = element.penyidik.split("|")
                for (let i = 0; i < peny.length; i++) {
                    for (let index = 0; index < $('[name="penyidik"]').length; index++) {
                        const ele = $('[name="penyidik"]')[index];
                        if(ele.value == peny[i]){
                            $(ele).prop('checked', true);
                        }
                        
                    }                    
                }
                
                $('#sudah').val(element.sudah)
                $('#hambatan').val(element.hambatan)
                $('#keterangan').val(element.keterangan)

                if(element.atensi == 1){
                    $('#atensi').prop('checked', true)
                }
                if(element.lp == 1){
                    $('#lp').prop('checked', true)
                }
                if(element.l1 == 1){
                    $('#l1').prop('checked', true)
                }
                if(element.atensi == 1){
                    $('#atensi').prop('checked', true)
                }
                if(element.p21 == 1){
                    $('#p21').prop('checked', true)
                }
                if(element.sp3 == 1){
                    $('#sp3').prop('checked', true)
                }
            });
        }
    })
}

function deleteperkara(id) {
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
                url: 'deleteperkara',
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
    
    $('#text-nya').html(text)
    $('#krono').html(params)
    $('#modal-kronologis').modal('show')
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
