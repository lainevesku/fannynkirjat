import Kirja from "../../components/kirja/kirja";
import { FloatingButton, ButtonContainer } from "../../shared/uibuttons/uibuttons";
import { MdMenuBook } from 'react-icons/md';

function Kirjat(props) {

    const kirjat = props.data.map((kirja) => <Kirja key={kirja.id}data={kirja} />);

    return(
        <ButtonContainer>
            <div>
                { kirjat }
                <FloatingButton primary><MdMenuBook /></FloatingButton>
            </div>
        </ButtonContainer>
    );
}

export default Kirjat;