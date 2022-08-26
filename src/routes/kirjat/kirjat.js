import Kirja from "../../components/kirja/kirja";
import { FloatingButton, ButtonContainer } from "../../shared/uibuttons/uibuttons";
import { MdMenuBook } from 'react-icons/md';

function Kirjat(props) {
    return(
        <ButtonContainer>
            <div>
                <Kirja />
                <Kirja />
                <Kirja />
                <Kirja />
                <FloatingButton primary><MdMenuBook /></FloatingButton>
            </div>
        </ButtonContainer>
    );
}

export default Kirjat;