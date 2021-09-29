// função Data 
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

// função dos botões
let sidebar = document.querySelector(".sidebar");
let fecharBtn = document.querySelector("#btn");
let buscarBtn = document.querySelector(".bx-search-alt-2");

// Barra lateral aberta quando você clica no icone do menu hamburger
fecharBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("active");
    menuBtnChange();//chamando a função
});

// Barra lateral aberta quando você clica no icone de pesquisa
buscarBtn.addEventListener("click", ()=>{ 
    sidebar.classList.toggle("active");
    menuBtnChange(); //chamando a função
});

// código para alterar o botão da barra lateral
function menuBtnChange() {
   if(sidebar.classList.contains("active")){
     fecharBtn.classList.replace("bx-menu", "bx-menu-alt-right");//substituindo a classe icone
   }else {
     fecharBtn.classList.replace("bx-menu-alt-right","bx-menu");//substituindo a classe icone
 }
}

// Função ao clicar em "adicionar" abre um formulario para adicionar um card de notas
let elementos = 0
let titulo = ""
let conteudo = ""

function criarNota(){
  titulo = document.getElementById("titulo").value 
  conteudo = document.getElementById("conteudo").value 

  let notaSelection = document.getElementById("nota");
  notaSelection.innerHTML +=
   `<div class= "nt">
    <a href="javascript:window.excluir()"><i class='bx bxs-x-circle'></i></a>
    <h2>${titulo}</h2>
    <p>${conteudo}<p>
    </div>`;
}

function form_notas(){
  document.getElementById('form_notas').style.display='block';
}

function fechar() {
  document.getElementById('form_notas').style.display='none';
}

function excluir() {
  document.getElementById('nota').style.display='none';
}