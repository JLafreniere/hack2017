let langueFr = true;

var joursSemaine = [
  ["#txtDimanche", "Dimanche", "Sunday"],
  ["#txtLundi", "Lundi", "Monday"],
  ["#txtMardi", "Mardi", "Tuesday"],
  ["#txtMercredi", "Mercredi", "Wednesday"],
  ["#txtJeudi", "Jeudi", "Thursday"],
  ["#txtVendredi", "Vendredi", "Friday"],
  ["#txtSamedi", "Samedi", "Saturday"]
];
var txtBouton = [
["#btnSoumettre", "Soumettre", "Submit"],
["#btnPointsChauds" ,"Points chauds", "Hot spots"],
["#btnChangerOpacite" ,"Changer l'opacité", "Change opacity"],
["#btnJour" ,"Jour", "Day"]
];
function changerLangue(){
let th = 1;
if (langueFr){
	th = 2;
	langueFr = false;}
	else{
	th = 1;
	langueFr = true;}

for (var i = 0; i < joursSemaine.length; i++) {
    $(joursSemaine[i][0]).html(joursSemaine[i][th]);
}
 for (var i = 0; i < txtBouton.length; i++) {
    $(txtBouton[i][0]).html(txtBouton[i][th]);
 }
}