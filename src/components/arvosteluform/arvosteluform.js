import styles from './arvosteluform.module.scss';
import useForm from '../../shared/useform';
import { Button } from '../../shared/uibuttons/uibuttons';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ArvosteluForm(props) {

    const history = useHistory();

    const submit = () => {
        let storedvalues = Object.assign({}, values);
        storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
        props.onKirjaSubmit(storedvalues);
        history.push("/");
    }

    const initialState = props.data ? props.data : {
        arvostelu:      ""
    };

    const { values, handleChange, handleSubmit } = useForm(submit, initialState, false);

    // peruttaa tapahtuman ja palaa edelliselle sivulle muokkaussivulta
    const handleCancel = (event) => {
        event.preventDefault();
        history.goBack();
      }
  
      // Poistaa tapahtuman
      const handleDelete = (event) => {
        event.preventDefault();
        props.onKirjaDelete(values.id);
        history.push("/");
        }

    return(
        <>
            <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="arvostelu">Kirjailija</label>
                        <input type="textarea" name="arvostelu" onChange={handleChange} value={values.arvostelu} required />
                    </div>
                </div>
                <div className={styles.form_row}>
                    <div>
                        <Button onClick={handleCancel}>PERUUTA</Button>
                    </div>
                    <div>
                        <Button primary type="submit">{ props.data ? "TALLENNA" : "LISÄÄ" } </Button>
                    </div>
                </div>
                
                {props.onKirjaDelete ? 
                <div className={styles.form_row}>
                    <div>
                        <Button danger onClick={handleDelete}>POISTA</Button>
                    </div> 
                    <div></div>
                </div> : "" }

            </div>
            </form>
        </>
    );
}

export default ArvosteluForm;