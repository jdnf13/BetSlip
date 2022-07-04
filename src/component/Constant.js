/**
 * Archivo donde se guardan las constantes principales del proyecto
 * Tambien contiene algunos métodos adicionales importantes
 * @class Constant
 *
 */


 class Constant{
    
    static listBet = [
        "items"
    ];

    constructor(){
        this.getList    =   this.getList.bind();
        this.setList    =   this.setList.bind();
        this.upList     =   this.upList.bind();        
    }

    getList     =   ()  =>  {
        if(Constant.listBet.length > 0)
            return Constant.listBet
        else
            return null
    }

    setList     =   (item)  =>  {
        console.log('Ejecutamos set ... ');
        console.log('Entramos a verificar items set ... ')
        Constant.listBet.push(item)                
    }
    
    upList      =   (item)  =>  {
        for (let index = 0; index < Constant.listBet.length; index++) {
            if(item.seccion === Constant.listBet[index].seccion){
                Constant.listBet[index] =   item;
            }
        } 
    }


}

export default new Constant()


