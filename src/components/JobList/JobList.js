import React from 'react';
import Card from '../Card/Card';
import Collapse from '../navigation/Collapse/Collapse';
import FormVaga from '../FormVaga/FormVaga';
import Axios from 'axios';

// const jobList = () => (
//   <div>
//     <Card/>
//     <Card/>
//     <Card/>
//   </div>
// );

class jobList extends React.Component {

  state = {
    jobs: [
      {id: 1, name: 'Desenvolvedor Back', description: 'Formado em Computação e Afins', salary: 3000, area: 'dev'},
      {id: 2, name: 'Designer', description: 'Formado em UX/UI', salary: 3000, area: 'designer'},
      {id: 3, name: 'Tester', description: 'Formado em Computação e Afins', salary: 3000, area: 'tester'},
      {id: 4, name: 'Devops', description: 'Formado em Computação e Afins', salary: 3000, area: 'dev'}
    ]
  };

  jobCreateHandler = (paramNewJob) => {
    let newList = this.state.jobs;
    newList.push(paramNewJob);
    this.setState({jobs: newList});
  }

  jobRemoveHandler = (paramId, paramName) => {
    if (window.confirm(`Deseja realmente remover a vaga ${paramName} ?`)) {

      Axios.delete(`/jobs/${paramId}`).then( () => {
        const index = this.state.jobs.findIndex(job => job.id === paramId.id);
      
        let newList = this.state.jobs;
        newList.splice(index, 1);
        this.setState({jobs: newList});
      
        window.alert('Removido com sucesso!');
      }
      ).catch(error => { console.error(error)})
    }
  }

  componentDidMount() {
    Axios.get('/jobs').then(response => {
      this.setState({jobs: response.data});
    }).catch(error => {console.log(error)});
  }

  render() {

    let renderJobs = this.state.jobs.map(job => {
      return <Card
        key={job.id}
        name={job.name}
        description={job.description}
        salary={job.salary}
        area={job.area}
        removeHandler={() => this.jobRemoveHandler(job.id, job.name)}/>;
    });
    return (
      <div>
        <Collapse >
          <FormVaga addItemList={this.jobCreateHandler}></FormVaga>
        </Collapse>

        <div className="row d-flex p-4 bd-highlight">
        { renderJobs }
      </div>
      </div>
    );
  };
}

export default jobList;