import Perfil from "./components/perfil/perfil";
import Formulario from "./components/Formulario/index";
import ReposList from "./components/ReposList";

function App() {
  const nome = 'Bruno'

  function retornaNome(){
    return nome
  }

  //objeto
  const pessoa = {
    nome: 'Maria'
  }
  let estaDeDia = true;

  return(
    // fragmento
    <> 
      <Perfil  nomeUsuario="JackMorais"/>  
      <ReposList /> 
      {/* <Formulario />
      <h1>Olá, { retornaNome() }</h1>
      <h2>Subtitulo</h2>
      {estaDeDia ? 'Bom dia' : "Boa tarde"} */}
      
    </>
    
  )
  
}

export default App
