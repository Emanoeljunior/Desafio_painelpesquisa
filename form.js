
    let enderecos = [];
    const addEndereco = (ev)=>{
        ev.preventDefault();
  
        // Validations
        function validate_dir()
        {
            var long_option = document.getElementById("long_option");
            var selectedValue = long_option.options[long_option.selectedIndex].value;
                if (selectedValue == "Oeste")
            {
            long_grau = -long_grau;
                
            } 
            var lat_option = document.getElementById("lat_option");
            var selectedValue = lat_option.options[lat_option.selectedIndex].value;
            if (selectedValue == "Sul")
            {
            lat_grau = -lat_grau;
                
            } 
        }
       

        //Conversão para gruas decimais
        //https://www.oblogdomestre.com.br/2015/04/ConverterGrausMinutosESegundosParaGrausDecimaisEViceVersa.Matematica.html
        var lat_grau = Number(document.getElementById('lat_grau').value) + Number(document.getElementById('lat_min').value)/60+ Number(document.getElementById('lat_seg').value)/3600
        var long_grau = Number(document.getElementById('long_grau').value) + Number(document.getElementById('long_min').value)/60+ Number(document.getElementById('long_seg').value)/3600

        validate_dir()
        let endereco = {
            BAIRRO_LOCALIDADE: document.getElementById('bairro').value,
            COMPLEMENTO: document.getElementById('complemento').value,
            LATITUDE: String(lat_grau),
            LONGITUDE: String(long_grau),
            NOME_LOGRADOURO: document.getElementById('nome_log').value,
            NUMERO_DA_RESIDENCIA: document.getElementById('numero').value,
            TIPO_DO_LOGRADOURO: document.getElementById('tipo_log').value
        }

        enderecos.push(endereco)
        document.forms[0].reset();
        console.log('added',{enderecos});
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('formulario').addEventListener('submit',addEndereco);
    });
