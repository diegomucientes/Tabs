import React,{useState} from 'react';
import './Tabs.css';

const Tabs = (props)=>{
    const [tabs, setTabs] = useState([ // Creo un Hook para crear un Array de Objetos, donde cada objeto tiene la propiedad title,content y state
        {                                  //El cambio de contenido será a travéz de un cambio en la propiedad state...
        title: 'Tab1',
        content: 'Contenido 1',
        state: '',
        },
        {
        title: 'Tab2',
        content: 'Contenido 2',
        state: '',
    
        },
        {
        title: 'Tab3',
        content: 'Contenido 3',
        state: 'ejecutando',
    
        }]);
        const changeTab = (item,index)=>{  // Creo una función para cambiar el state de los objetos, se crea un componente funcional "pestañas"
                                            // que crea una copia y condiciona la propiedad state segpun los titulos de la copia y el componente original
            let pestañas = tabs.map(tab=>{
                tab.title===tabs[index].title ? tab.state='ejecutando':tab.state="";
                return tab;
            });
            setTabs(pestañas); // Seteo el Hook para que tome el componente funcional pestañas y cambie el estado de tabs
        }
        
        // Se crea un div "wrapper" que contiene un div de titulos y un div de contenidos, traemos tabs y volvemos a aplicar map para generar un
        // <a> component donde doi un classname según el estado que se este ejecutando y pongo onClick para setear que cambie el estado según 
        // el click del usuario, la función changeTab que cambia el estado, se le otorga las propiedades del map


        //Finalmente se usa filter para tomar los state "ejecutando" y se vuelve a usar map para pasar el contenido de item, que copio de tabs
        return(
            <div className="wrapper">
                <div className="titulos"> 
                    {tabs.map((item,index)=>
                    <a key={index} className={item.state}onClick={()=>changeTab(item,index)}>{item.title}</a>
                    )}
                </div>
                <div className="contenido">
                    {tabs.filter(item=>item.state==='ejecutando').map((item,index)=><p key={index}>{item.content} </p>)}
    
                </div>
            </div>
        )

}

                
export default Tabs;
