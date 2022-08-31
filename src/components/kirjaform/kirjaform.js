import styles from './kirjaform.module.scss';
import useForm from '../../shared/useform';
import { Button } from '../../shared/uibuttons/uibuttons';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function KirjaForm(props) {

   
    const history = useHistory();

    const submit = () => {
        let storedvalues = Object.assign({}, values);
        storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
        props.onKirjaSubmit(storedvalues);
        history.push("/");
    }


    const initialState = props.data ? props.data : {
        kirjailija:     "",
        kirjanimi:      "",
        kirjaalkunimi:  "",
        sivuja:         0,
        vuosi:          0,
        painos:         0,
        painosvuosi:    0,
        malli:          "Kovakantinen",
        sijainti:       "Turku"
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
                        <label htmlFor="kirjailija">Kirjailija</label>
                        <input type="text" name="kirjailija" onChange={handleChange} value={values.kirjailija} required />
                    </div>
                </div>
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="kirjanimi">Kirjan nimi</label>
                        <input type="text" name="kirjanimi" onChange={handleChange} value={values.kirjanimi} required />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="kirjaalkunimi">Kirjan alkuperäinen nimi</label>
                        <input type="text" name="kirjaalkunimi" onChange={handleChange} value={values.kirjaalkunimi} />
                    </div>
                </div>
                    
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="sivuja">Sivujen määrä</label>
                        <input type="number" name="sivuja" onChange={handleChange} value={values.sivuja} min="0" />
                    </div>

                    <div>
                        <label htmlFor="vuosi">Ilmestymisvuosi</label>
                        <input type="number" name="vuosi" onChange={handleChange} value={values.vuosi} min="0" required />
                    </div>
                </div>
                
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="painos">Kirjan painos</label>
                        <input type="number" name="painos" onChange={handleChange} value={values.painos} min="0"/>
                    </div>
                    <div>
                        <label htmlFor="painosvuosi">Painoksen vuosi</label>
                        <input type="number" name="painosvuosi" onChange={handleChange} value={values.painosvuosi} min="0" />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="malli">Ulkoasu</label>
                        <select name="malli" onChange={handleChange} value={values.malli} >
                            <option value="Kovakantinen">Kovakantinen</option>
                            <option value="Pehmeäkantinen">Pehmeäkantinen</option>
                            <option value="Pokkari">Pokkari</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sijainti">Kirjan sijainti</label>
                        <select name="sijainti" onChange={handleChange} value={values.sijainti}>
                            <option value="Turku">Turku</option>
                            <option value="Eura">Eura</option>
                            <option value="Myyty">Myyty</option>
                            <option value="Lainakirja">Lainakirja</option>
                        </select>
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

export default KirjaForm;