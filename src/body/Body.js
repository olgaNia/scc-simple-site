import dataFromWiki from "../data/DataFromWiki.json"
import "./Body.css"

function Body(){
    console.log(dataFromWiki)
    return(
     <div className="Body">
         {dataFromWiki.map(el=>
             <section className="section" key={el.id}>

         <h2>{el.title}</h2>
                 <div>{el.body}</div>
             </section>
         )}
     </div>
    )
}
export default Body;