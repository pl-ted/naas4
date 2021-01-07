import $ from 'jquery';  
window.jQuery = $; window.$ = $;

function scrollToForm() { var element = document.getElementById('formContainerBox'); element.scrollIntoView({ behavior: 'smooth', block: 'start' }); }


$(document).ready(function () {

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                console(sParam);
            }
        }
    };

    var pl_matchtype = getUrlParameter('pl_matchtype');
    var pl_campaignid = getUrlParameter('pl_campaignid');
    var pl_adgroupid = getUrlParameter('pl_adgroupid');
    var pl_network = getUrlParameter('pl_network');
    var pl_device = getUrlParameter('pl_device');
    var pl_devicemodel = getUrlParameter('pl_devicemodel');
    var pl_creative = getUrlParameter('pl_creative');
    var pl_keyword = getUrlParameter('pl_keyword');
    var pl_adposition = getUrlParameter('pl_adposition');
    var gclid = getUrlParameter('gclid');
    var pl_page = getUrlParameter('pl_page');
    var pl_feeditemid = getUrlParameter('pl_feeditemid');
    var pl_targetid = getUrlParameter('pl_targetid');
    var pl_loc_physical_ms = getUrlParameter('pl_loc_physical_ms');
    var pl_loc_interest_ms = getUrlParameter('pl_loc_interest_ms');

    $("*[name='pl_matchtype']").val(pl_matchtype).trigger('change');
    $("*[name='pl_campaignid']").val(pl_campaignid).trigger('change');
    $("*[name='pl_adgroupid']").val(pl_adgroupid).trigger('change');
    $("*[name='pl_network']").val(pl_network).trigger('change');
    $("*[name='pl_device']").val(pl_device).trigger('change');
    $("*[name='pl_devicemodel']").val(pl_devicemodel).trigger('change');
    $("*[name='pl_creative']").val(pl_creative).trigger('change');
    $("*[name='pl_keyword']").val(pl_keyword).trigger('change');
    $("*[name='pl_adposition']").val(pl_adposition).trigger('change');
    $("*[name='gclid']").val(gclid).trigger('change');
    $("*[name='pl_page']").val(pl_page).trigger('change');
    $("*[name='pl_feeditemid']").val(pl_feeditemid).trigger('change');
    $("*[name='pl_targetid']").val(pl_targetid).trigger('change');
    $("*[name='pl_loc_physical_ms']").val(pl_loc_physical_ms).trigger('change');
    $("*[name='pl_loc_interest_ms']").val(pl_loc_interest_ms).trigger('change');

});




//disable enter button
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

$(document).ready(function () {
    //default at 10th option
    $('select[name="pensionPot"]>option:eq(0)').prop('selected',true);
   
    $("#step2").hide();
    $("#step3").hide();


    $("#backBtn2").click(function () {
        $("#step2").hide();
        $("#step1").show();
    });
    $("#backBtn3").click(function () {
        $("#step3").hide();
        $("#step1").show();

    });
});



$(document).ready(function(){
        
        $(document).on('click', '#next1', function(){ 
            stepone(); 
        });


        function stepone() {

        if ( $("*[name='postcode']").val() != ""){

                document.getElementById("step3").style.WebkitAnimation = "fadeOut 0.33s 1"; 
                // Code for Safari 4.0 - 8.0
                document.getElementById("step3").style.animation = "fadeOut 0.33s 1";
                setTimeout(function() { steptwothree(); }, 330);


                document.getElementById("requiredfield5").style.color = "transparent";
                document.getElementById("requiredfield5").style.textshadow = "1px 1px 3px transparent";


            document.getElementById("step1").style.WebkitAnimation = "fadeOut 0.33s 1"; 
            // Code for Safari 4.0 - 8.0
            document.getElementById("step1").style.animation = "fadeOut 0.33s 1";
            setTimeout(function() { steponetwo(); }, 330);

            $("*[name='typeOfAdvice']").val('annuity').trigger('change');
            $("*[name='pl_siteid']").val("19932").trigger('change');
            $("*[name='pl_leadgroupid']").val("51530").trigger('change');

            $("*[name='pl_associatedsite']").val("pensionannuityoptions.co.uk").trigger('change');
            


           document.getElementById("requiredfield2").style.color = "transparent";
            document.getElementById("requiredfield2").style.textshadow = "1px 1px 3px transparent";


        } else {
            document.getElementById("requiredfield2").style.color = "red";
            document.getElementById("requiredfield2").style.textshadow = "1px 1px 3px black";
        }
    }

    function steponetwo() {

        document.getElementById("step1").style.display = "none";
        document.getElementById("step3").style.display = "block";
        document.getElementById("step3").style.WebkitAnimation = "0.33s";
        document.getElementById("step3").style.animationDelay = "0.33s";
        document.getElementById("step3").style.WebkitAnimation = "fadeIn 0.33s 1"; 
        document.getElementById("step3").style.animation = "fadeIn 0.33s 1";
        // scrollToForm();

    }

    $(document).on('click', '#next2', function(){ 

        steptwo(); 
    });


    function steptwo() {
        if ((  ($("*[name='ageText']").val() != "")  )){
                
                document.getElementById("step3").style.WebkitAnimation = "fadeOut 0.33s 1"; 
                // Code for Safari 4.0 - 8.0
                document.getElementById("step3").style.animation = "fadeOut 0.33s 1";
                setTimeout(function() { steptwothree(); }, 330);

                var ageInput;
                ageInput = $("*[name='ageText']").val();

                $("*[name='F_1189_AGE_TEXT']").val(ageInput).trigger('change');


                document.getElementById("requiredfield5").style.color = "transparent";
                document.getElementById("requiredfield5").style.textshadow = "1px 1px 3px transparent";

        } else {
            document.getElementById("requiredfield5").style.color = "red";
            document.getElementById("requiredfield5").style.textshadow = "1px 1px 3px black";

        }   
    }

    function steptwothree() {
        document.getElementById("step2").style.display = "none";
        document.getElementById("step3").style.display = "block";
        document.getElementById("step3").style.WebkitAnimation = "0.33s";
        document.getElementById("step3").style.animationDelay = "0.33s";
        document.getElementById("step3").style.WebkitAnimation = "fadeIn 0.33s 1"; 
        document.getElementById("step3").style.animation = "fadeIn 0.33s 1";
        // scrollToForm();
    }


});