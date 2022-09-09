import Arvostelu from "../../components/arvostelu/arvostelu";

function Arvostelut(props) {

    const kirjat = props.data?.map((kirja) => <Arvostelu key={kirja.id} data={kirja} />);

    return(
            <div>
                { kirjat }
            </div>  
    );
}

export default Arvostelut;