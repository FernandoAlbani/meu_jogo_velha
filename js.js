var contador_id = 0;

class Titulo {
    render(){
        const titulo = document.createElement('h1');
        titulo.textContent = 'JOGO DA VELHA ';
        titulo.style.display = 'inline-block';
        titulo.style.color = '#A020F0';
        titulo.style.backgroundColor = '#ffffff'
        return titulo;
    }
}

class ContainerTitulo {

    render() {
        const container_titulo = document.createElement('div');
        container_titulo.style.display = 'flex';
        container_titulo.style.marginTop = '5px'
        container_titulo.style.justifyContent = 'center';
        return container_titulo
    }
}


class Container {

    render() {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.marginTop = '20px'
        container.style.justifyContent = 'center';
        return container
    }
}



class Tabela{

    render() {
        const tabela = document.createElement('table');
        tabela.style.backgroundColor = "#000000";
        return tabela
    }
}

class Linha{
    render() {

        const linha = document.createElement('tr');
        return linha;
    }
}

class Quadrado{
    render() {
        contador_id++;
        const quadrado = document.createElement('td');
        quadrado.style.width = '150px';
        quadrado.style.height = '150px';
        quadrado.style.backgroundColor = "#00BFFF"
        quadrado.style.fontSize = "120px";
        quadrado.style.color = "#A020F0";
        quadrado.style.textAlign = "center";
        quadrado.style.cursor = "pointer";
        quadrado.addEventListener("click", function (e) {
            joga(this.id);
            verif();
        });

        if(contador_id === 1){
            quadrado.id = 'cel11'
        }
        if(contador_id === 2){
            quadrado.id = 'cel12'
        }
        if(contador_id === 3){
            quadrado.id = 'cel13'
        }
        if(contador_id === 4){
            quadrado.id = 'cel21'
        }
        if(contador_id === 5){
            quadrado.id = 'cel22'
        }
        if(contador_id === 6){
            quadrado.id = 'cel23'
        }
        if(contador_id === 7){
            quadrado.id = 'cel31'
        }
        if(contador_id === 8){
            quadrado.id = 'cel32'
        }
        if(contador_id === 9){
            quadrado.id = 'cel33'
        }

        return quadrado;
    }
}

class Button {
    render() {
        const button = document.createElement('input');
        button.type = 'button';
        button.name = 'limpar';
        button.value = 'Novo Jogo';
        button.addEventListener("click", function (e) {
            novo();
        });
        return button;
    }
}

const container = new Container().render();
const tabela = new Tabela().render();
const titulo = new Titulo().render();
const div_Titulo = new ContainerTitulo().render();
div_Titulo.append(titulo);
document.body.append(div_Titulo);
tabela.append(new Linha().render());
tabela.append(new Quadrado().render());
tabela.append(new Quadrado().render());
tabela.append(new Quadrado().render());
tabela.append(new Linha().render());
tabela.append(new Quadrado().render());
tabela.append(new Quadrado().render());
tabela.append(new Quadrado().render());
tabela.append(new Linha().render());
tabela.append(new Quadrado().render());
tabela.append(new Quadrado().render());
tabela.append(new Quadrado().render());
container.append(tabela);
document.body.append(container);

const container2 = new Container().render();
const botao = new Button().render();
container2.append(botao);
document.body.append(container2);

letra = "X";

function joga(celula){
    celulaclicada = document.getElementById(celula).innerHTML;
    if (celulaclicada == "X" || celulaclicada == "O"){
        alert("Opa, este quadrado já foi escolhido!");
    }else{
        document.getElementById(celula).innerHTML = letra;
        if (letra == "X"){
            letra = "O";
        }else{
            letra = "X";
        }
    }
}


function verif(){
    c11 = document.getElementById('cel11').innerHTML;
    c12 = document.getElementById('cel12').innerHTML;
    c13 = document.getElementById('cel13').innerHTML;
    c21 = document.getElementById('cel21').innerHTML;
    c22 = document.getElementById('cel22').innerHTML;
    c23 = document.getElementById('cel23').innerHTML;
    c31 = document.getElementById('cel31').innerHTML;
    c32 = document.getElementById('cel32').innerHTML;
    c33 = document.getElementById('cel33').innerHTML;
    if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13)) || ((c11 != '') && (c22 != '') && (c33 != '') && (c11 == c22) && (c22 == c33)) || ((c11 != '') && (c21 != '') && (c31 != '') && (c11 == c21) && (c21 == c31)) || ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) || ((c31 != '') && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) || ((c12 != '') && (c22 != '') && (c32 != '') && (c12 == c22) && (c22 == c32)) || ((c13 != '') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) || ((c31 != '') && (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13))){
        alert('Você ganhou! Parabéns campeão!');
    }else if(
        c11 != '' &&
        c12 != '' &&
        c13 != '' &&
        c21 != '' &&
        c22 != '' &&
        c23 != '' &&
        c31 != '' &&
        c32 != '' &&
        c33 != ''
    ){
        alert('Deu Velha');
    }
}

function novo(){
    for (i=1; i<4; i++){
        for (j=1; j<4; j++){
            nomecelula = 'cel' + i + j
            document.getElementById(nomecelula).innerHTML = '';

        }
    }
}