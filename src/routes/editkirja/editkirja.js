import KirjaForm from "../../components/kirjaform/kirjaform";
import { useParams } from "react-router-dom";

function EditKirja(props) {

    const { id } = useParams();
    const index = props.data.findIndex(kirja => kirja.id === id);
    let kirja = props.data[index];

    return(
        <div>
            <div>{kirja.kirjanimi}</div>
        <h2>Kirjan tietojen muokkaaminen</h2>
        <KirjaForm onKirjaSubmit={props.onKirjaSubmit} data={kirja} onKirjaDelete={props.onKirjaDelete} />
        </div>
    );
}

export default EditKirja; 