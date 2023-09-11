console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
    $('#dataperkara').DataTable()
    load()

    $('#modal-tambah').on('show.bs.modal', function(){
        $('#form-perkara')[0].reset()
    })
});

function load(){
    
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadperkara',
        success: function(result){
            let data = result.data;
            let code = result.code;
            
            if(code){
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
                        { 'mDataProp': 'kronologis' },
                        { 'mDataProp': 'terlapor' },
                        { 'mDataProp': 'pasal' },
                        { 'mDataProp': 'penyidik' },
                        { 'mDataProp': 'sudah' },
                        { 'mDataProp': 'hambatan' },
                        { 'mDataProp': 'keterangan' },
                        { 'mDataProp': 'id' }
                    ],
                    order: [[0, 'ASC']],
                    fixedColumns: true,
                    aoColumnDefs:[
                        { width: 50, targets: 0 },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = `<div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-warning" onclick="editperkara(${row.id})"><i class="bx bx-edit fs-4"></i></button>
                                                <button type="button" class="btn btn-danger"><i class="bx bx-trash fs-4"></i></button>
                                            </div>`
                                    return el
                                }
                                return data;
                            },
                            
                            aTargets: [ 11 ]
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
                 $("#dataperkara").DataTable()
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
    var formData = new FormData();
    formData.append('id', $('#id_perkara').val())
    formData.append('nolaporan', $('#no-laporan').val())
    formData.append('tgllaporan', $('#tgl-laporan').val())
    formData.append('pelapor', $('#pelapor').val())
    formData.append('tkp', $('#tkp').val())
    formData.append('kronologis', $('#kronologis').val())
    formData.append('terlapor', $('#terlapor').val())
    formData.append('pasal', $('#pasal').val())
    formData.append('penyidik', $('#penyidik').val())
    formData.append('sudah', $('#sudah').val())
    formData.append('hambatan', $('#hambatan').val())
    formData.append('keterangan', $('#keterangan').val())

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
                $('#tgl-laporan').val(element.tgllaporan)
                $('#pelapor').val(element.pelapor)
                $('#tkp').val(element.tkp)
                $('#kronologis').val(element.kronologis)
                $('#terlapor').val(element.terlapor)
                $('#pasal').val(element.pasal)
                $('#penyidik').val(element.penyidik)
                $('#sudah').val(element.sudah)
                $('#hambatan').val(element.hambatan)
                $('#keterangan').val(element.keterangan)
            });
        }
    })
}
