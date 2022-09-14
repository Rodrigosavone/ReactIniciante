import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

  const navigate = useNavigate()

  function createPost(project) {
    //initialize cost and services 
    project.costs = 0
    project.services = []

    fetch("http://localhost:5000/project", {
      method:"POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(project)
    }).then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        //redirect
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Criar seu projeto para depois adicionar os serviços</p>

      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject