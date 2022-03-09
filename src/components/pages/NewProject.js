import { useNatigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'

function NewProject(){

    const navigate = useNatigate()

    function createPost(project) {
        
        //Initialize cost and services
        project.cost = 0;
        project.services =[];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            Headers: {
                'Content-type': 'application/json',
            },
        })
        .then(resp => resp.json)
        .then((data) => {
            // Redirect
            navigate('/projects', {message: 'Projeto criado com sucesso!'})
        })
        .cathch(err => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviço</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject;