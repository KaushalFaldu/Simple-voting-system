var c=0;
function btnvot(){
    var table = document.getElementsByClassName('dataoftable')[0];
    var name = document.getElementsByClassName('userinput')[0].value;
    var tkclass = document.getElementById('Tkclass').value;
    var gender = false;

    // var gender = $('.gender').val();
//     if ($(".gender:checked").length > 1 || $(".gender:checked").length == 0){
//       $('#dis').slideDown().html('<span id="error">Please choose a gender</span>');
//     }
//     else{
//       alert(gender)
//     }
    if((name!="") && (document.getElementById('m').checked==true ||document.getElementById('f').checked==true )){
        if(document.getElementById('m').checked==true){
            gender= "Male";
        }
        else{
            gender = "Female";
        }
        $(table).append(`<tr id="r${c}"><td id="name${c}">${name}</td><td id="gendar${c}">${gender}</td><td id="class${c}">${tkclass}</td><td><button id="btn${c}" onclick="btnvote2(${c})">Cast Your Vote</button></td></tr>`);
        c++;
    }
    else{
        alert("something is wrong...!! please fill all the details ");
    }
   

    // var tr = document.createElement('tr');   
    // var td1 = document.createElement('td');
    // var td2 = document.createElement('td');
    // var td3 = document.createElement('td');
    

    // var text1 = document.createTextNode(name);
    // var text2 = document.createTextNode(gender);
    // var text3 = document.createTextNode(tkclass);

    // td1.appendChild(text1);
    // td2.appendChild(text2);
    // td3.appendChild(text3);
    // tr.appendChild(td1);
    // tr.appendChild(td2);
    // tr.appendChild(td3);

    // table.appendChild(tr);
    
}
function btnvote2(temp){
    var name =$(`#name${temp}`).text();
    document.getElementById('text1').value=name;

    var gender = $(`#gendar${temp}`).text();
    if(gender=="Male"){
        $('#male').attr('checked',true);
        $('#female').attr('checked',false);
    }
    else{
       $('#male').attr('checked',false);
        $('#female').attr('checked',true);
    }

    var tk=$(`#class${temp}`).text();
    document.getElementById('text2').value=tk;
    $(`#r${temp}`).remove();
}


var cs12=0;
var cs22=0;
var cs32=0;
var cs42=0;
var cs14=0;
var cs24=0;
var cs34=0;
var cs44=0;
var cs16=0;
var cs26=0;
var cs36=0;
var cs46=0;
var cs18=0;
var cs28=0;
var cs38=0;
var cs48=0;


function vote(){
    if(document.getElementById('text2').value=="2TK1"){
        if(document.getElementById('can1').checked==true){
            ++cs12;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can2').checked==true){
            ++cs22;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can3').checked==true){
            ++cs32;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can4').checked==true){
            ++cs42;
            document.getElementById('text1').value="";
            $('#male').prop('checked',false);
            $('#female').prop('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
    }
    if(document.getElementById('text2').value=="4TK1"){
        if(document.getElementById('can1').checked==true){
            ++cs14;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can2').checked==true){
            ++cs24;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can3').checked==true){
            ++cs34;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can4').checked==true){
            ++cs44;
            document.getElementById('text1').value="";
            $('#male').prop('checked',false);
            $('#female').prop('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
    }
    if(document.getElementById('text2').value=="6TK1"){
        if(document.getElementById('can1').checked==true){
            ++cs16;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can2').checked==true){
            ++cs26;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can3').checked==true){
            ++cs36;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can4').checked==true){
            ++cs46;
            document.getElementById('text1').value="";
            $('#male').prop('checked',false);
            $('#female').prop('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
    }
    if(document.getElementById('text2').value=="8TK1"){
        if(document.getElementById('can1').checked==true){
            ++cs18;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can2').checked==true){
            ++cs28;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can3').checked==true){
            ++cs38;
            document.getElementById('text1').value="";
            $('#male').attr('checked',false);
            $('#female').attr('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
        if(document.getElementById('can4').checked==true){
            ++cs48;
            document.getElementById('text1').value="";
            $('#male').prop('checked',false);
            $('#female').prop('checked',false);
            $('#can1').prop('checked',false);
            $('#can2').prop('checked',false);
            $('#can3').prop('checked',false);
            $('#can4').prop('checked',false);
            document.getElementById('text2').value="";
        }
    }
}

function declar() {
    document.getElementById('candidate1s2').innerHTML =cs12;
    document.getElementById('candidate2s2').innerHTML =cs22;
    document.getElementById('candidate3s2').innerHTML =cs32;
    document.getElementById('candidate4s2').innerHTML =cs42;

    document.getElementById('candidate1s4').innerHTML =cs14;
    document.getElementById('candidate2s4').innerHTML =cs24;
    document.getElementById('candidate3s4').innerHTML =cs34;
    document.getElementById('candidate4s4').innerHTML =cs44;
    
    document.getElementById('candidate1s6').innerHTML =cs16;
    document.getElementById('candidate2s6').innerHTML =cs26;
    document.getElementById('candidate3s6').innerHTML =cs36;
    document.getElementById('candidate4s6').innerHTML =cs46;

    document.getElementById('candidate1s8').innerHTML =cs18;
    document.getElementById('candidate2s8').innerHTML =cs28;
    document.getElementById('candidate3s8').innerHTML =cs38;
    document.getElementById('candidate4s8').innerHTML =cs48;
    
    colorsem2();
    colorsem4();
    colorsem6();
    colorsem8();   
}

function colorsem2(){
    //console.log("click");
    var highestvote = Math.max(cs12,cs22,cs32,cs42);
    document.getElementById('text11').style.backgroundColor="white";
    document.getElementById('text12').style.backgroundColor="white";
    document.getElementById('text13').style.backgroundColor="white";
    document.getElementById('text14').style.backgroundColor="white";

    if(highestvote>0){
        if(cs12==highestvote){
            document.getElementById('text11').style.backgroundColor="green";
        }
        if(cs22==highestvote){
            document.getElementById('text12').style.backgroundColor="green";
        }
        if(cs32==highestvote){
            document.getElementById('text13').style.backgroundColor="green";
        }
        if(cs42==highestvote){
        document.getElementById('text14').style.backgroundColor="green";
        }  
    }

}

function colorsem4(){

    var highestvote = Math.max(cs14,cs24,cs34,cs44);
    document.getElementById('t1').style.backgroundColor="white";
    document.getElementById('t2').style.backgroundColor="white";
    document.getElementById('t3').style.backgroundColor="white";
    document.getElementById('t4').style.backgroundColor="white";

    if(highestvote>0){
        if(cs14==highestvote){
            document.getElementById('t1').style.backgroundColor="green";
        }
        if(cs24==highestvote){
            document.getElementById('t2').style.backgroundColor="green";
        }
        if(cs34==highestvote){
            document.getElementById('t3').style.backgroundColor="green";
        }
        if(cs44==highestvote){
        document.getElementById('t4').style.backgroundColor="green";
        }  
    }

}

function colorsem6(){

    var highestvote = Math.max(cs16,cs26,cs36,cs46);
    document.getElementById('te1').style.backgroundColor="white";
    document.getElementById('te2').style.backgroundColor="white";
    document.getElementById('te3').style.backgroundColor="white";
    document.getElementById('te4').style.backgroundColor="white";

    if(highestvote>0){
        if(cs16==highestvote){
            document.getElementById('te1').style.backgroundColor="green";
        }
            if(cs26==highestvote){
                document.getElementById('te2').style.backgroundColor="green";
            }
            if(cs36==highestvote){
                document.getElementById('te3').style.backgroundColor="green";
            }
            if(cs46==highestvote){
            document.getElementById('te4').style.backgroundColor="green";
            }  
    }

}

function colorsem8(){

    var highestvote = Math.max(cs18,cs28,cs38,cs48);
    document.getElementById('tex1').style.backgroundColor="white";
    document.getElementById('tex2').style.backgroundColor="white";
    document.getElementById('tex3').style.backgroundColor="white";
    document.getElementById('tex4').style.backgroundColor="white";

    if(highestvote>0){
        if(cs18==highestvote){
            document.getElementById('tex1').style.backgroundColor="green";
        }
            if(cs28==highestvote){
                document.getElementById('tex2').style.backgroundColor="green";
            }
            if(cs38==highestvote){
                document.getElementById('tex3').style.backgroundColor="green";
            }
            if(cs48==highestvote){
            document.getElementById('tex4').style.backgroundColor="green";
            }  
    }

}



