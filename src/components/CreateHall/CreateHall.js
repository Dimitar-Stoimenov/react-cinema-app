import './CreateHall.css';

import { create } from '../../services/hallService';

const CreateHall = () => {

    const createHandler = (e) => {
        e.preventDefault();

        let { hallName, row1, row2, row3, row4, row5, row6, row7, row8, row9, row10 } = Object.fromEntries(new FormData(e.currentTarget));

        create(hallName, row1, row2, row3, row4, row5, row6, row7, row8, row9, row10)
            .then(hallData => {
                console.log('created hall!')
            })
    }

    return (
        <div className="create-container">
            <form method="POST" onSubmit={createHandler}>
                <input type="text" className="form-input" name="hallName" placeholder="hallName" />
                <input type="number" className="form-input" name="row1" placeholder="row1" />
                <input type="number" className="form-input" name="row2" placeholder="row2" />
                <input type="number" className="form-input" name="row3" placeholder="row3" />
                <input type="number" className="form-input" name="row4" placeholder="row4" />
                <input type="number" className="form-input" name="row5" placeholder="row5" />
                <input type="number" className="form-input" name="row6" placeholder="row6" />
                <input type="number" className="form-input" name="row7" placeholder="row7" />
                <input type="number" className="form-input" name="row8" placeholder="row8" />
                <input type="number" className="form-input" name="row9" placeholder="row9" />
                <input type="number" className="form-input" name="row10" placeholder="row10" />
                <button type="submit" className="submit-button">Create Hall</button>
            </form>
        </div>
    );
}

export default CreateHall;