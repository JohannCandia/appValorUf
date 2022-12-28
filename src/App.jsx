
import { useEffect, useState } from 'react'
import './App.css'

const App = ()=>{
      
      const [data, setDAta] = useState({})
      useEffect(()=>{
            const getValoresUf = async () =>{
                  const url  ="https://mindicador.cl/api"
                  const respuesta = await fetch(url)
            
                  const valor = await respuesta.json();
                  setDAta(valor)
                  console.log(data)
            }
                  getValoresUf();
      },[])

  return (  
      <>
            <h1>INDICADORES DIA DE HOY</h1>
            <table className='table table-hover table-dark'>
            <thead className='thead-dark'>
            <tr>
           
                  <th scope="col">Moneda</th>
                  <th scope="col">valor</th>
              
            </tr>
            </thead>
            
           
            <tbody>
            <tr>
                  
                  <td>{data?.uf?.nombre}</td>
                 <td> <p> Valor de hoy  ${data?.uf?.valor} </p></td>
            
            </tr>
            <tr>
                  <td>{data?.dolar?.nombre}</td>
                  <td> <p> Valor de hoy ${data?.dolar?.valor} </p></td>
            </tr>
             <tr>
                  <td>{data?.utm?.nombre}</td>
                  <td><p> Valor de hoy ${data?.utm?.valor} </p></td>
            </tr>
             <tr>
                  <td>{data?.euro?.nombre}</td>
                  <td><p> Valor de hoy ${data?.euro?.valor} </p></td>
             </tr>    
                
     
    

    

    
            </tbody>
            </table>

      </>
              
          )
  
  }
  export default App;