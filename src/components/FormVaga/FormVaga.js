import React from 'react';
import Axios from 'axios';

class formVaga extends React.Component {

    objModel = Object.freeze({
      name: '',
      description: '',
      skills: '',
      differentials: '',
      salary: '',
      area: '',
      isPcd: false
    });

    state = {
      newJob: { ...this.objModel}
    }

    postJobHandler = (event) => {

      let objId = '';
      Axios.post('/jobs', this.state.newJob).then(response => {
        objId = response.data;
      })

      this.props.addItemList({ ...this.state.newJob});
      event.preventDefault();
      this.setState({newJob: { ...this.objModel} });
    }

    onValueChangeHandler = (attrName, paramValue) => {
      let currentJob = this.state.newJob;
      currentJob[attrName] = paramValue;
      this.setState({ newJob: currentJob} );
    }

    render() {
      return (
        <div className="container">
        <form onSubmit={this.postJobHandler}>
        <div class="form-group col-12">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" id="nome"
              value={ this.state.newJob.name } required
              onChange={ (event) => this.onValueChangeHandler('name', event.target.value)}/>
          </div>
          <div class="form-group col-12">
            <label for="descricao">Descrição</label>
            <textarea class="form-control" id="descricao" rows="3"
            value={ this.state.newJob.description } required
            onChange={ (event) => this.onValueChangeHandler('description', event.target.value)}></textarea>
          </div>
          <div class="form-group col-sm-12 col-md-6">
            <label for="habilidades">Habilidades necessárias</label>
            <textarea class="form-control" id="habilidades" rows="3"
            value={ this.state.newJob.skills }
            onChange={ (event) => this.onValueChangeHandler('skills', event.target.value)}></textarea>
          </div>
          <div class="form-group col-sm-12 col-md-6">
            <label for="diferenciais">Diferenciais</label>
            <textarea class="form-control" id="diferenciais" rows="3"
            value={ this.state.newJob.differentials }
            onChange={ (event) => this.onValueChangeHandler('differentials', event.target.value)}></textarea>
          </div>
          <div class="form-group col-sm-12 col-md-6">
            <label for="salario">Salário Base</label>
            <input type="text" class="form-control" id="salario"
            value={ this.state.newJob.salary } required
            onChange={ (event) => this.onValueChangeHandler('salary', event.target.value)}/>
          </div>
          <div class="form-group col-sm-12 col-md-6">
            <label for="area">Área</label>
            <select class="form-control" id="area"
            value={ this.state.newJob.area }
            onChange={ (event) => this.onValueChangeHandler('area', event.target.value)}>
              <option>Desenvolvimento</option>
              <option>Design</option>
              <option>Teste</option>
            </select>
          </div>
          <div class="form-group form-check col-sm-12 col-md-6 ml-3">
              <input type="checkbox" class="form-check-input" id="isPCD"
              value={ this.state.newJob.description }
              onChange={ (event) => this.onValueChangeHandler('isPcd', event.target.checked)}/>
              <label class="form-check-label" for="isPCD">Vaga para PCD</label>
            </div>
  
          <div class="form-group col-12 text-right mb-0">
            <button type="submit" class="btn btn-success">Criar vaga</button>
          </div>
        </form>
        </div>
    );
    }

}

export default formVaga;