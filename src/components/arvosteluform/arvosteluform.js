import styles from './arvosteluform.module.scss';
import useForm from '../../shared/useform';
import { Button } from '../../shared/uibuttons/uibuttons';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Rating } from '@mui/material';

function ArvosteluForm(props) {

    const history = useHistory();

    const submit = () => {
        let storedvalues = Object.assign({}, values);
        storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
        props.onKirjaSubmit(storedvalues);
        history.push("/");
    }

    const initialState = props.data ? props.data : {
        arvostelu:      "",
        rating_kieli:   0,
        rating_hahmot:  0,
        rating_juoni:   0,
        rating_aika:    0,
        rating_koko:    0
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
                        <label htmlFor="rating_kieli">Kieli</label>
                        <Rating
                        name="rating_kieli"
                        value={values.rating_kieli}
                        onChange={handleChange}
                        defaultValue={2.5}
                        precision={0.5}
                        />
                    </div>
                    <div>
                        <label htmlFor="rating_hahmot">Hahmot</label>
                        <Rating 
                        name="rating_hahmot"
                        value={values.rating_hahmot} 
                        onChange={handleChange}
                        defaultValue={2.5}
                        precision={0.5}
                        />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="rating_juoni">Juoni</label>
                        <Rating
                        name="rating_juoni"
                        value={values.rating_juoni}
                        onChange={handleChange}
                        defaultValue={2.5}
                        precision={0.5}
                        />
                    </div>
                    <div>
                        <label htmlFor="rating_aika">Aikansa edellä</label>
                        <Rating
                        name="rating_aika"
                        value={values.rating_aika}
                        onChange={handleChange}
                        defaultValue={2.5}
                        precision={0.5}
                        />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div>
                    <label htmlFor="rating_koko">Kokonaisuus</label>
                    <Rating
                    name="rating_koko"
                    value={values.rating_koko}
                    onChange={handleChange}
                    defaultValue={2.5}
                    precision={0.5}
                    />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="arvostelu">Kirjoita arvostelu tähän:</label>
                        <textarea name="arvostelu" onChange={handleChange} value={values.arvostelu} cols="4" rows="8"/>
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