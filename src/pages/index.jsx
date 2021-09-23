import CardRazasPerros from 'components/CardRazasPerros';
import 'styles/App.css';
import bordercollie from 'media/border-collie.jpg';
import rhodesiam from 'media/rhodesiam.jpg'


function Index() {
return (

    <div>
     <section>
         <h1>Razas de perros</h1>
         <ul className="breedCardContainer ">
             <CardRazasPerros nombreRaza='Border Collie' imagen={bordercollie}/>
             <CardRazasPerros nombreRaza='Rhodesiam' imagen={rhodesiam}/>
         </ul>
     </section>
     <section></section>
    </div>
    );
}
export default Index;