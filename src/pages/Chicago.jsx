import chicago1 from "../assets/chicago1.jpg"
import Header from "../components/Header"

export default function Chicago() {
  return (
    <section className="">
      <Header />
        <h2 className="font-medium text-4xl text-pink-800 my-4 font-bold flex items-center justify-center">Chicago P.D</h2>
        <img className="w-96 block mx-auto" src={chicago1} alt="Capa da série Chicago P.D" />
        <p className="flex items-center justify-center">O spin-off de Chicago Fire, Chicago P.D. se concentra no fictício 21º Distrito, que abriga patrulheiros e a unidade de inteligência de elite do departamento, liderada pelo detetive-sargento Hank Voight (Jason Beghe). As três primeiras temporadas e a primeira metade da quarta temporada se concentram na patrulha e nos oficiais de inteligência, mas o programa muda para se concentrar na Unidade de Inteligência a partir da segunda metade da quarta temporada, depois que o oficial Kevin Atwater (LaRoyce Hawkins) e a oficial Kim Burgess (Marina Squerciati) avançam para a Unidade de Inteligência.</p>
        
    </section>
    
  )
}
