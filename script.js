// #################### DONNEES ################################
let Voitures = [
    {
      "Marque": "Toyota",
      "Modele": "Corolla",
      "Annee": 2021,
      "Couleur": "Bleu",
      "Transmission": "Automatique",
      "Options": {
        "AirConditionne": true,
        "Cuir": false,
        "GPS": true,
        "ToitOuvrant": false,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": false,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": false
      },
      "URL": "https://th.bing.com/th/id/OIP.jlb4ecAd0bztf2PEDiUieAAAAA?rs=1&pid=ImgDetMain"
    },
    {
      "Marque": "Honda",
      "Modele": "Civic",
      "Annee": 2020,
      "Couleur": "Rouge",
      "Transmission": "Manuelle",
      "Options": {
        "AirConditionne": true,
        "Cuir": true,
        "GPS": false,
        "ToitOuvrant": true,
        "Bluetooth": true,
        "CameraDeRecul": false,
        "SiegesChauffants": true,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": true
      },
      "URL": "https://th.bing.com/th/id/R.aa18782b1f667ea6947aae831baa904d?rik=cGdnCNXA%2brP4Yw&pid=ImgRaw&r=0"
    },
    {
      "Marque": "Ford",
      "Modele": "Mustang",
      "Annee": 2022,
      "Couleur": "Noir",
      "Transmission": "Automatique",
      "Options": {
        "AirConditionne": true,
        "Cuir": true,
        "GPS": true,
        "ToitOuvrant": false,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": true,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": true
      },
      "URL": "https://th.bing.com/th/id/OIP.IBnqyaq6uLEgHW_ovT-ftgAAAA?rs=1&pid=ImgDetMain"
    },
    {
      "Marque": "Chevrolet",
      "Modele": "Malibu",
      "Annee": 2019,
      "Couleur": "Blanc",
      "Transmission": "Automatique",
      "Options": {
        "AirConditionne": true,
        "Cuir": false,
        "GPS": true,
        "ToitOuvrant": false,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": false,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": false
      },
      "URL": "https://th.bing.com/th/id/OIP.Pl4IEWKDswr9nbt-ubcX6AAAAA?rs=1&pid=ImgDetMain"
    },
    {
      "Marque": "Nissan",
      "Modele": "Altima",
      "Annee": 2020,
      "Couleur": "Gris",
      "Transmission": "Automatique",
      "Options": {
        "AirConditionne": true,
        "Cuir": false,
        "GPS": true,
        "ToitOuvrant": true,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": false,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": true
      },
      "URL": "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/Nissan/2020_Altima/Brilliant-Silver-Metallic.jpg"
    },
    {
      "Marque": "BMW",
      "Modele": "Serie 3",
      "Annee": 2021,
      "Couleur": "Noir",
      "Transmission": "Automatique",
      "Options": {
        "AirConditionne": true,
        "Cuir": true,
        "GPS": true,
        "ToitOuvrant": true,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": true,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": true
      },
      "URL": "https://th.bing.com/th/id/OIP.IlNNUKAdW4AqtsQABtHl7QHaEK?rs=1&pid=ImgDetMain"
    },
    {
      "Marque": "Mercedes-Benz",
      "Modele": "C-Class",
      "Annee": 2022,
      "Couleur": "Argent",
      "Transmission": "Automatique",
      "Options": {
        "AirConditionne": true,
        "Cuir": true,
        "GPS": true,
        "ToitOuvrant": true,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": true,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": true
      },
      "URL": "https://th.bing.com/th/id/OIP.ZjD00Y5feBBRHSLr8CRSmQHaE8?rs=1&pid=ImgDetMain"
    },
    {
      "Marque": "Audi",
      "Modele": "A4",
      "Annee": 2021,
      "Couleur": "Blanc",
      "Transmission": "Automatique",
      "Options": {
        "AirConditionne": true,
        "Cuir": true,
        "GPS": true,
        "ToitOuvrant": true,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": true,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": true
      },
      "URL": "https://dealer-content.s3.amazonaws.com/images/models/audi/2021/a4/colors/ibis-white.png"
    },
    {
      "Marque": "Volkswagen",
      "Modele": "Passat",
      "Annee": 2020,
      "Couleur": "Bleu",
      "Transmission": "Automatique",
      "Options": {
        "AirConditionne": true,
        "Cuir": false,
        "GPS": true,
        "ToitOuvrant": true,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": false,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": true
      },
      "URL": "https://th.bing.com/th/id/OIP.6eEsODquYNVzF7euEiE7bgHaFj?rs=1&pid=ImgDetMain"
    },
    {
      "Marque": "Hyundai",
      "Modele": "Elantra",
      "Annee": 2019,
      "Couleur": "Rouge",
      "Transmission": "Manuelle",
      "Options": {
        "AirConditionne": true,
        "Cuir": false,
        "GPS": true,
        "ToitOuvrant": false,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": false,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": false
      },
      "URL": "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Hyundai-Elantra-CA-Fiery-Red-Color.png"
    },
    {
      "Marque": "Kia",
      "Modele": "Optima",
      "Annee": 2020,
      "Couleur": "Argent",
      "Transmission": "Automatique",
      "Options": {
        "AirConditionne": true,
        "Cuir": true,
        "GPS": true,
        "ToitOuvrant": false,
        "Bluetooth": true,
        "CameraDeRecul": true,
        "SiegesChauffants": true,
        "ControleDeStabilite": true,
        "VitresElectriques": true,
        "AssistanceAuStationnement": true
      },
      "URL": "https://di-uploads-pod16.dealerinspire.com/raybrandtkia/uploads/2020/04/2020-Kia-Optima-in-Sparkling-Silver.png"
    }
  ];

  
let Options = {
    "AirConditionne": "Climatisation",
    "Cuir": "Sièges en cuir",
    "GPS": "Système de navigation GPS",
    "ToitOuvrant": "Toit ouvrant",
    "Bluetooth": "Connectivité Bluetooth",
    "CameraDeRecul": "Caméra de recul",
    "SiegesChauffants": "Sièges chauffants",
    "ControleDeStabilite": "Contrôle de stabilité",
    "VitresElectriques": "Vitres électriques",
    "AssistanceAuStationnement": "Assistance au stationnement"
  };
  
let index = 0; // Voitures[index]










// ############################# MAIN SCRIPT #######################################

const btnNext = document.getElementById("btnNext");
const btnPrevious = document.getElementById("btnPrevious");
const radioTrierAnnee = document.getElementById("radioTrierAnnee");
const radioTrierMarque = document.getElementById("radioTrierMarque");
const btnModify = document.getElementById("btnModify");
const btnCancelChange = document.getElementById("btnCancelChange");
const btnSaveChange = document.getElementById("btnSaveChange");
const btnNew = document.getElementById("btnNew");
const btnCreate = document.getElementById("btnCreate");
const btnCancelCreate = document.getElementById("btnCancelCreate");

afficherVoiture();


// ---- NEXT ----
btnNext.addEventListener("click",function(){
  nextVoiture();
  afficherVoiture();
});

// ---- PREVIOUS ----
btnPrevious.addEventListener("click",function(){
  previousVoiture();
  afficherVoiture();
});


// ---- TRIE PAR ANNEE ------------
radioTrierAnnee.addEventListener("change",function(){
  if(radioTrierAnnee.checked){
    trierVoitures(1);
    index = 0;
    afficherVoiture();
  }
});

// ----- TRIE PAR MARQUE -------------
radioTrierMarque.addEventListener("change",function(){
  if(radioTrierMarque.checked){
    trierVoitures(2);
    index = 0;
    afficherVoiture();
  }
});


// ------ MODIFY ------------
btnModify.addEventListener("click",function(){
  btnCancelChange.style.display = "inline";
  btnSaveChange.style.display = "inline";
  btnModify.style.display = "none";

  let inputs = document.querySelectorAll("#modification > label input");
  inputs.forEach(function(input){
    input.disabled = false;
  });

  let checkboxes = document.querySelectorAll(".special > label");
  checkboxes.forEach(function(checkbox){
    checkbox.style.display = "block";
  });

  document.getElementById("transmission").disabled = false;
  document.getElementById("optionsEnText").style.display = "none";

});


// ---------- CANCEL MODIFICATION --------------
btnCancelChange.addEventListener("click",function(){
  
  formReturnToInitialStyle();
  afficherVoiture();

});

// ----------- SAVE CHANGE ---------------
btnSaveChange.addEventListener("click",function(){
  modifierVoiture();
  formReturnToInitialStyle();
  afficherVoiture();
});

// ---------- NEW CAR ---------------------
btnNew.addEventListener("click",function(){
  document.getElementById("partie2").style.display = "block";
});


// ----------- ANNULER CREATE ---------------
btnCancelCreate.addEventListener("click",function(){
  cacherPartie2();
})

// ---------- CREATE NEW CAR -----------------
btnCreate.addEventListener("click",function(){
  creerVoiture();
  afficherVoiture();
  cacherPartie2();
});









//############################## METHODES ##########################################


function formReturnToInitialStyle(){
  btnCancelChange.style.display = "none";
  btnSaveChange.style.display = "none";
  btnModify.style.display = "inline";

  let inputs = document.querySelectorAll("#modification > label input");
  inputs.forEach(function(input){
    input.disabled = true;
  });

  let checkboxes = document.querySelectorAll(".special > label");
  checkboxes.forEach(function(checkbox){
    checkbox.style.display = "none";
  });

  document.getElementById("transmission").disabled = true;
  document.getElementById("optionsEnText").style.display = "inline";
}

function cacherPartie2(){
  document.getElementById("partie2").style.display = "none";
  document.getElementById("ajout").reset();
}

// ----------- AFFICHAGE ----------------
function afficherVoiture(){
    const voiture = Voitures[index];
    const form = document.getElementById("modification");
    const image = document.getElementById("imageVoiture");
    
    Object.entries(voiture).forEach(([key,value]) => {
        if(key !== "Options"){
            form[key].value = value;
        }
        else{
            Object.entries(voiture.Options).forEach(([key,value]) => {
                form[key].checked = value;
            });
        }
    });
    image.src = voiture["URL"];

    document.getElementById("optionsEnText").textContent = optionsToString(voiture.Options);
}

function optionsToString(options) {
    let text = " ";

    Object.entries(options).forEach(([key,value]) => {
        if(value){
            text = text.concat(Options[key]);
            text = text.concat(",");
        }
    });

    text = text.slice(0,-1)
    return text;
}


// --------------------- NAVIGUATION ---------------------------

function trierVoitures(i) {
 
    if(i===1){
        Voitures.sort((a, b) => a.Annee - b.Annee);
    }
    else{
        Voitures.sort((a, b) => a.Marque.localeCompare(b.Marque));
    }

}

function nextVoiture(){
    if(index < Voitures.length - 1){
        index++;
    }
    else{
        index = 0;
    }
}

function previousVoiture(){
    if(index > 0){
        index--;
    }
    else{
        index = Voitures.length - 1;
    }
}



// ---------------- MODIFICATION -------------------------

function modifierVoiture(){

    const form = document.getElementById("modification");
    const formData = new FormData(form);
    const voiture = Voitures[index];
    resetOptions(voiture);

    formData.forEach((value,key) => {
        if(form[key].type === "checkbox"){
            voiture.Options[key] = true;
        }
        else if (voiture[key] !== value){
            voiture[key] = value;
        }
    });
}


function resetOptions(voiture){
    Object.keys(voiture.Options).forEach(key => {
        voiture.Options[key] = false;
    });
}


// ------------------ AJOUT ----------------------------

function creerVoiture() {
    const form = document.getElementById('ajout');
    const formData = new FormData(form);
    const nouvelleVoiture = {};
    nouvelleVoiture.Options = {};
   
    formData.forEach((value, key) => {
        if (form[key].type === 'checkbox') {
            nouvelleVoiture.Options[key] = form[key].checked;
            
        } else {
            nouvelleVoiture[key] = value;
        }
    });

    Voitures.push(nouvelleVoiture);
    index = Voitures.length - 1;
  }



