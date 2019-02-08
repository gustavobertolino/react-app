import React from 'react';
import developer from '../../assets/developer.png';
import designer from '../../assets/designer.png';
import tester from '../../assets/tester.png';

const card = (props) => {

    let img = null;

    switch(props.area) {
        case 'dev':
            img = developer;
            break;
        case 'tester': 
            img = tester;
            break;
        case 'designer':
            img = designer;
            break;
        default:
            console.log('Img not found');
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
        <div className="card">
          <img className="card-img-top" src={img} alt="Card"/>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div>
               <b>Descrição:</b>
              <p>{props.description}</p>

              <b>Salário base:</b>
              <p>{props.salary}</p>

            </div>
            <button onClick={props.removeHandler} className="btn btn-warning">
              <i className="far fa-edit"></i>
            </button>
            <a href="#" className="btn btn-danger">
              <i className="far fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
    );
}

export default card;