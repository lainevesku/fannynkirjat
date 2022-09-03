import ArvosteluForm from "../../components/arvosteluform/arvosteluform";
import { useParams } from "react-router-dom";

function AddArvostelu(props) {

    const { id } = useParams();
    const index = props.data.findIndex(kirja => kirja.id === id);
    let kirja = props.data[index];

    return(
        <>
            <div>
            <h2>Kirjoita arvostelu kirjasta {kirja.kirjanimi}</h2>
            <ArvosteluForm onKirjaSubmit={props.onKirjaSubmit} data={kirja} />
            </div>
        </>
    );
}

export default AddArvostelu;