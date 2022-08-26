import styles from './kirjaform.module.scss';

function KirjaForm(props) {
    return(
        <>
        <form>
            <div className={styles.form}>
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="kirjailija">Kirjailija</label>
                        <input type="text" name="kirjailija" />
                    </div>
                </div>
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="kirjanimi">Kirjan nimi</label>
                        <input type="text" name="kirjanimi" />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="kirjaalkunimi">Kirjan alkuperäinen nimi</label>
                        <input type="text" name="kirjaalkunimi" />
                    </div>
                </div>
                    
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="sivuja">Sivujen määrä</label>
                        <input type="number" name="sivuja" />
                    </div>

                    <div>
                        <label htmlFor="vuosi">Ilmestymisvuosi</label>
                        <input type="number" name="vuosi" />
                    </div>
                </div>
                
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="painos">Kirjan painos</label>
                        <input type="number" name="painos" />
                    </div>
                    <div>
                        <label htmlFor="painosvuosi">Painoksen ilmestymisvuosi</label>
                        <input type="number" name="painosvuosi" />
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="malli">Ulkoasu</label>
                        <select name="malli" >
                            <option>Kovakantinen</option>
                            <option>Pehmeäkantinen</option>
                            <option>Pokkari</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sijainti">Kirjan sijainti</label>
                        <select name="sijainti">
                            <option>Turku</option>
                            <option>Eura</option>
                            <option>Myyty</option>
                            <option>Lainakirja</option>
                        </select>
                    </div>
                </div>


            </div>
        </form>
        </>
    );
}

export default KirjaForm;