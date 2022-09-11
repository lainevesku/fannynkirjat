import KirjaForm from "../../components/kirjaform/kirjaform";

function AddKirja(props) {
    return(
        <>
        <h2>Lisää uusi kirja</h2>
        <KirjaForm onKirjaSubmit={props.onKirjaSubmit}/>
        </>
    );
}

export default AddKirja;