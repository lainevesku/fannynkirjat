import { Link } from "react-router-dom";
import Kirja from "../../components/kirja/kirja";
import { FloatingButton, ButtonContainer } from "../../shared/uibuttons/uibuttons";
import { MdMenuBook } from 'react-icons/md';

function Kirjat(props) {

    const kirjat = props.data.map((kirja) => <Kirja key={kirja.id}data={kirja} />);

    return(
        <ButtonContainer>
            <div>
                { kirjat }
                <Link to="/add"><FloatingButton primary><MdMenuBook /></FloatingButton></Link>
            </div>
        </ButtonContainer>
    );
}

export default Kirjat;