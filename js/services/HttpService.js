class HttpService
{
    static get(url, objeto_dados)
    {

        return new Promise( (resolve, reject) => {

            let xhr = new XMLHttpRequest();

            if(objeto_dados){

                url += "?";

                for(let campo in objeto_dados){
                    url += `${campo}=${objeto_dados[campo]}&`;
                }

            }
    
            xhr.open('GET', url);
    
            xhr.onload = () => {

                if(xhr.status == 200){
                    resolve(xhr.responseText);
                }else{
                    reject(xhr.responseText);
                }
    
            }

            xhr.send();

        } )

    }

    static post(url, objeto_dados)
    {

        return new Promise( (resolve, reject) => {

            let xhr = new XMLHttpRequest();

            let string_dados = '';

            for(let campo in objeto_dados){
                string_dados += `${campo}=${objeto_dados[campo]}&`;
            }
    
            xhr.open('POST', url);

            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
            xhr.onload = () => {

                if(xhr.status == 200){
                    resolve(xhr.responseText);
                }else{
                    reject(xhr.responseText);
                }
    
            }

            xhr.send(string_dados);

        } )

    }
}