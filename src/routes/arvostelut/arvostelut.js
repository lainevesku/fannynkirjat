import { Link } from "react-router-dom";
import Arvostelu from "../../components/arvostelu/arvostelu";
import { FloatingButton, ButtonContainer } from "../../shared/uibuttons/uibuttons";
import { MdMenuBook } from 'react-icons/md';

function Arvostelut(props) {

    const kirjat = props.data?.map((kirja) => <Arvostelu key={kirja.id} data={kirja} />);

    console.log(props.data);
    console.log(kirjat);

    return(
        <ButtonContainer>
            <div>
                { kirjat }
                <Link to="/add"><FloatingButton primary><MdMenuBook /></FloatingButton></Link>
            </div>
        </ButtonContainer>
    );
}

export default Arvostelut;