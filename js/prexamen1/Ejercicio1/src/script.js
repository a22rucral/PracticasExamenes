{
    const edad_boton = document.getElementById('edad');
    const cookie_boton = document.getElementById('cookie');
    const ventana_boton = document.getElementById('ventana');
    const regexp_boton = document.getElementById('regexp');
    const listar_boton = document.getElementById('listar');
    const borrar_boton = document.getElementById('borrar');

    
    const validar_fecha = (cadena) => {
        const max_dias = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];
        let [dias, mes, año] = extraer_fechas_cadenas(cadena);
        let validada = true; 
        año < 0 ? validada = false : validada = true; 
        mes <= 12 && mes >= 1 ? validada = true : validada = false;
        dias <= 0 && dias > max_dias[mes-1] ? validada = false : validada = true;
        return validada; 
    }
    
    const extraer_fechas_cadenas = (cadena) =>{
        let dias = Number(cadena.slice(0,2));
        let mes = Number(cadena.slice(3,5));
        let año = Number(cadena.slice(6,10));
        return [dias, mes, año];
    }
    
    const averiguar_edad = (edad) => {
        const fecha_actual = new Date();
        let dias_actual = fecha_actual.getDate(); 
        let mes_actual = fecha_actual.getMonth() + 1;
        let año_actual = fecha_actual.getFullYear();
        let [dias, mes, año] = extraer_fechas_cadenas(edad);
        let años = 0;
        if(mes > mes_actual){
            años = (año_actual -1) - año;
        }
        else if(mes < mes_actual){
            años = año_actual - año;
        }
        else if(mes == mes_actual){
            console.log('LLega');
            if(dias_actual < dias){
                años = (año_actual -1) - año;
            }
            else if(dias_actual >= dias){
                años = año_actual - año;
                console.log(años);
            }
            
        }
        return años;
    }
    
    const gestionar_edad = () => {
        let edad = prompt('Dimet tu edad en el siguiente formato : (DD/MM/YYYY)');
        const regexp = /\d{2}\/\d{2}\/\d{4}/;
        edad = edad.match(regexp);
        edad = edad?  edad[0]:false;
        console.log(edad);
        let mensaje;
        if(edad){
            if(validar_fecha(edad)){
                años = averiguar_edad(edad);
                años >= 18 ? mensaje = 'Eres mayor de edad' : mensaje = 'Eres menor de edad';
            }
            else{
                mensaje = 'La fecha está mal introducida';
            }
        }
        else{
            mensaje = 'El formato no es correcto';
            
        }
        console.log(mensaje);
    }
    
    const crear_cookie = () => {
        
    }

    const crear_ventana = () => {
        
    }
    
    const validar_cadena = () => {
        const regexp = /\d{4}\-[A-Z]{3}/
        let matricula = prompt('Dime la matrícula: (0000-XXX)');
        matricula = matricula.match(regexp);
        matricula ? mensaje = 'La matrícula es válida' : mensaje ='La matrícula no está en formato';
        console.log(mensaje);
    }


    const listar_cookie = () => {
        
    }
    
    const borrar_cookie = () => {
        
    }
    
    edad_boton.addEventListener('click', gestionar_edad);
    cookie_boton.addEventListener('click', crear_cookie);
    ventana_boton.addEventListener('click', crear_ventana);
    regexp_boton.addEventListener('click', validar_cadena);
    listar_boton.addEventListener('click', listar_cookie);
    borrar_boton.addEventListener('click', borrar_cookie);
    
}