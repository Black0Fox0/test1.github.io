
let data = [];
const horaire = ["Matin", "ApresMidi", "Soir"];

function Horaire()
{
    for(let x of horaire)
        {
            document.getElementById("horaire").innerHTML += `<option value="${x}">${x}</option>`
        }
    if(sessionStorage.getItem("Json")){
        data = JSON.parse(sessionStorage.getItem("Json"))
        charge(data)
    }
}
Horaire()

function inscrire()
{

    const inscription = {
        "nom" : document.getElementById("nom").value,
        "prenom" : document.getElementById("prenom").value,
        "horaire" : document.getElementById("horaire").value,
        "condition" : document.getElementById("condition").value
    };

    data.push(inscription);
    charge(data);

}

function charge(list = data)
{   
    var table = document.querySelector('tbody');
    table.innerHTML = "";
    list.forEach(x =>
    {
        let ligne = `<tr>
                        <td>${x.nom}</td><td>${x.prenom}</td><td>${x.horaire}</td><td>${x.condition}</td>
                        <td><button onclick="editer(this)">éditer</button>
                            <button onclick="supprimer(this)">supprimer</button>
                        </td>
                    </tr>`;
        table.innerHTML += ligne;
    });
    console.log(data)
}

function sauvegarder()
{
    let jsonData =JSON.stringify(data);
    sessionStorage.setItem("Json", jsonData);
    console.log(jsonData);
    console.log(data);
}

function supprimer(btn){
    let row = btn.parentNode.parentNode;
    data.splice(row.rowIndex,1);

    let table = row.parentNode;
    table.removeChild(row)
}

function editer(btn){
    var ligne_edit=btn.parentNode.parentNode;

    document.getElementById('nom').value=ligne_edit.cells[0].innerText;
    document.getElementById('prenom').value=ligne_edit.cells[1].innerText;
    document.getElementById('horaire').value=ligne_edit.cells[2].innerText;
    document.getElementById('condition').value=ligne_edit.cells[3].innerText;

    supprimer(btn);
}
