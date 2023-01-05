console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
    load()
});

function load(){
  
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadsurvey',
        success: function(result){
            let data = result.data;
            let code = result.code;
            // $("#datasurvey").DataTable()
            var dt = $('#datasurvey').DataTable({
                pageLength: 10,
                aaData: result.data,
                aoColumns: [
                    { 'mDataProp': 'id', 'width':'10%'},
                    { 'mDataProp': 'nomor'},
                    { 'mDataProp': 'jenis_kelamin'},
                    { 'mDataProp': 'pendidikan'},
                    { 'mDataProp': 'pekerjaan'},
                    { 'mDataProp': 'create_date'},
                ],
                order: [[0, 'ASC']],
                fixedColumns: true,
                aoColumnDefs:[
                  { width: 50, targets: 0 },
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
        }
    })
}
