$(document).ready(function(){
  $('.chosen-select').chosen({allow_single_deselect:true});
  $(window)
					.off('resize.chosen')
					.on('resize.chosen', function() {
						$('.chosen-select').each(function() {
							 var $this = $(this);
							 $this.next().css({'width': $this.parent().width()});
						})
					}).trigger('resize.chosen');
					//resize chosen on sidebar collapse/expand
						$('.chosen-select').each(function() {
							 var $this = $(this);
							 $this.next().css({'width': $this.parent().width()});
						});

            $(".chosen-container").each(function() {
                 $(this).attr('style', 'width: 100%');
             });

  var f = document.createElement("iframe");
  f.src = "https://kopi.dev/widget-covid-19/?dark=true";
  f.width = "100%";
  f.height = 380;
  f.scrolling = "no";
  f.frameBorder = 0;
  f.id = 'covid-kopi';
  var rootEl = document.getElementsByClassName("kopi-covid");

  if(rootEl.length != 0){
    rootEl[0].appendChild(f);
  }

  if($(window).width() < 800){
    setTimeout(function(){
       $("#covid-jabar").attr('style', 'height:500px;');
       $("#covid-kopi").attr('style', 'height:500px;');

     }, 2000);

  }

  if($('#session_satuan').val()){
    loadmenu('satuan', $('#session_satuan').val());
  }

  if($('#role-nya').val() == '10'){
    // $('#menu-puas').show();
  }

  sessionStorage.setItem("survey", 0);
  
  // setInterval(() => {
    
  //   //   if(sessionStorage.getItem('survey') == 1){
  //   //     $('#menu-puas').show();
  //   //   }else{
  //   //     $('#menu-puas').hide();
  //   //   }
  //         $.ajax({
  //           type: 'post',
  //           dataType: 'json',
  //           url: 'loadcount',
  //           data : {
  //             param      : $('#role-nya').val(),
  //           },
  //           success: function(result){
  //             let data = result.data;
  //             let code = result.code;
              
  //             if($('#role-nya').val() != '10'){
  //               if(code != '0'){
  //                 if(data[0].status == 1){
  //                   $('#menu-puas').show();
  //                 }else{
  //                   $('#menu-puas').hide();
  //                 }
  //               }else{
  //                 $('#menu-puas').hide();
  //               }
  //             }else{
  //               if(code == 0){
  //                 $('[name="tot-all"]').hide()
  //                 $('.is-notif').hide()
  //                 $('#is-bell').removeClass('icon-animated-bell')
  //               }else{
  //                 let teknis = 0
  //                 let slo = 0
  //                 for (let i = 0; i < data.length; i++) {
  //                   const element = data[i];
  //                   if(element['type'] == 1){
  //                     teknis += 1
  //                   }else if(element['type'] == 2){
  //                     slo += 1
  //                   }
  //                 }

  //                 $('#is-bell').addClass('icon-animated-bell')
  //                 $('.is-notif').show()
  //                 $('#tot-teknis').html(teknis)
  //                 $('#tot-slo').html(slo)
  //                 $('[name="tot-all"]').show()
  //                 $('[name="tot-all"]').html(teknis+slo)

  //                 if(teknis == 0){
  //                   $('#notif-teknis').hide()
  //                 }else{
  //                   $('#notif-teknis').show()
  //                 }

  //                 if(slo == 0){
  //                   $('#notif-operasi').hide()
  //                 }else{
  //                   $('#notif-operasi').show()
  //                 }
  //               }
  //               $('#menu-puas').show();
  //             }
  //           }
  //         })
    
  // }, 1000);

});


function loadmenu(param, id){

$.ajax({
    type: 'post',
    dataType: 'json',
    url: 'loadparam',
    data : {
            param      : param,
            id         : id,
    },
    success: function(result){

        let data = result.data;
        $('#nama-pengaduan, #head-sat').text('Satuan '+data[0].satuan_desc);
        var li = '';
        for (var i = 0; i < data.length; i++) {
            if(data[i].satuan_name == 'lantas'){
              var href = 'https://korlantas.polri.go.id/';
            }else{
              var href = '#';
            }
            li += `<li>
                  	<a href="`+href+`" target="_blank" title="Post Default">
                  		SAT `+data[i].satuan_name.toUpperCase()+`
                  	</a>
                  </li>`;
        }

        // $('#satuan-fungsi').html(li);
      }
    });

  }

  function coronas(){
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: "coronas",
      success: function(result){
        console.log(result);
      }
    });
  }

  function animate(elem, type) {
    $(elem).addClass(type + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
        e.preventDefault();
        $(this).removeClass(type + ' animated');
    });
  };
