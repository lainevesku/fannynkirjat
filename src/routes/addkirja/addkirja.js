import KirjaForm from "../../components/kirjaform/kirjaform";

function AddKirja(props) {
    return(
        <>
        <h2>Uuden kirjan lisääminen</h2>
        <KirjaForm onKirjaSubmit={props.onKirjaSubmit}/>
        </>
    );
}

export default AddKirja;