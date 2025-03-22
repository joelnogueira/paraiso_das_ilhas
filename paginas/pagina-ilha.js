
    var httpsRequest;
    function fazerRequisicao(url , destino){
        httpsRequest = new XMLHttpRequest();

        if(!httpsRequest){
            alert("Erro na requisicao!")
            return false;
        }
        
        httpsRequest.onreadystatechange = situacaoDaRequisicao
        httpsRequest.open('GET', url);
        httpsRequest.send();
    }

    function situacaoDaRequisicao(){
        if(httpsRequest.readyState == 4){
            if(httpsRequest.status == 200){

                document.getElementById('conteudo').innerHTML = httpsRequest.responseText;
            }
            else{
                alert("pagina não encontrada!")
            }

        }
    }

    //Saiba mais "Descricao"
    document.getElementById("mais").style.display='none'
    document.getElementById("saiba-mais").addEventListener('click', function(){
        document.getElementById("mais").style.display='block'
        document.getElementById("saiba-mais").style.display = "none";

    })
