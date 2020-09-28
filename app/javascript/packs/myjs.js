
let name=document.getElementById('name');
let btn_submit = document.getElementById('btn_vote');
//////////
let selected_team = document.getElementsByClassName("r_team");
let selected_goal_keeper = document.getElementsByClassName("r_goal");
let selected_defender = document.getElementsByClassName("r_def");
let selected_midfilder = document.getElementsByClassName('r_mid');
let selected_striker = document.getElementsByClassName('r_striker');
let selected_country = document.getElementById('country');



btn_vote.onclick = function(){

localStorage.setItem('name',name.value);
  for(let i=0; i<13;i++){
    if(selected_team[i].checked){
      localStorage.setItem('team',selected_team[i].value)
      break;
    }
  }
  for(let i=0; i<6;i++){
    if(selected_goal_keeper[i].checked){
      localStorage.setItem('goalkeeper',selected_goal_keeper[i].value)
      break;
    }
  }
  for(let i=0; i<5;i++){
    if(selected_defender[i].checked){
      localStorage.setItem('defender',selected_defender[i].value)
      break;
    }
  }
  for(let i=0; i<6;i++){
    if(selected_midfilder[i].checked){
      localStorage.setItem('midfilder',selected_midfilder[i].value)
      break;
    }
  }
  for(let i=0; i<5;i++){
    if(selected_striker[i].checked){
      localStorage.setItem('striker',selected_striker[i].value)
      break;
    }
  }
  localStorage.setItem('country',selected_country.value);

}


window.onload = function () {
  if(Object.keys(localStorage).length==7){
    btn_submit.disabled=true ;
  }

  name.value=localStorage.getItem('name');
  selected_country.value=localStorage.getItem('country');
  let team=localStorage.getItem('team'),
      defender =localStorage.getItem('defender'),
      goalkeeper=localStorage.getItem('goalkeeper'),
      midfilder =localStorage.getItem('midfilder'),
      striker=localStorage.getItem('striker');

  for(let i=0; i<13;i++){
    if(selected_team[i].value==team){
      selected_team[i].checked=true;
      break;
    }
  }

  for(let i=0; i<6;i++){
    if(selected_goal_keeper[i].value==goalkeeper){
      selected_goal_keeper[i].checked=true;
      break;
    }
  }

  for(let i=0; i<5;i++){
    if(selected_defender[i].value==defender){
      selected_defender[i].checked=true;
      break;
    }
  }

  for(let i=0; i<6;i++){
    if(selected_midfilder[i].value==midfilder){
    selected_midfilder[i].checked=true;
      break;
    }
  }

  for(let i=0; i<5;i++){
    if(selected_striker[i].value==striker){
    selected_striker[i].checked=true;
      break;
    }
  }

}
