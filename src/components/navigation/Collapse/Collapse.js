import React from 'react';

const collapse = (props) => (
    <div className="container pt-3">

        <div>
            <a className="btn btn-primary-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Nova vaga
            </a>
        </div>
        <div className="collapse mb-3" id="collapseExample">
            {props.children}
        </div>
    </div>
)

export default collapse;