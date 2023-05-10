console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
    $('#datapetugas').DataTable()
    load()
    $("#simpan-petugas").on('click', function(){
        var formData = new FormData();
        formData.append("nama", $("#nama").val())
        formData.append("nrp", $("#nrp").val())
        formData.append("whatsapp", $("#whatsapp").val())
        formData.append("alamat_1", $("#alamat_1").val())
        formData.append("alamat_2", $("#alamat_2").val())
        formData.append("alamat_3", $("#alamat_3").val())

        action('save', formData)
    })
});

function action(param, data){
    
    if(param == 'save'){
        $.ajax({
            type: 'post',
            processData: false,
            contentType: false,
            dataType: 'json',
            url: 'simpanpetugas',
            data: data,
            success: function(result){
                
            }
        })
    }
}

function load(){
    
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadpetugas',
        success: function(result){
            let data = result.data;
            let code = result.code;
            
            if(code){
                var dt = $('#datapetugas').DataTable({
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
                        { 'mDataProp': 'id', 'width':'10'},
                        { 'mDataProp': 'nama'},
                        { 'mDataProp': 'nrp', 'width':'10'},
                        { 'mDataProp': 'whatsapp', 'width':'10'},
                        { 'mDataProp': 'alamat'},
                        { 'mDataProp': 'create_date'},
                        { 'mDataProp': 'id'},
                        { 'mDataProp': 'id'},
                        { 'mDataProp': 'id'},
                    ],
                    order: [[0, 'ASC']],
                    fixedColumns: true,
                    aoColumnDefs:[
                        { width: 50, targets: 0 },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = `<a type="button" class="btn btn-sm btn-outline-info waves-effect waves-light" onclick="viewimage()"><i class="mdi mdi-image"></i> Foto</a>`
                                    return el
                                }
                                return data;
                            },
                            
                            aTargets: [ 8 ]
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
                 $("#datatamu").DataTable()
            }
        }
    })
}

function viewimage(ektp, selfie) {
    $('#modal-image').modal('show')
    $('#img-ektp').attr("src", ektp)
    $('#img-selfie').attr("src", selfie)
}
