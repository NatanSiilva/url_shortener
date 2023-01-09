// Referências: ------------------------------------------------------------------------------------
// - Conditions in Pipeline: https://medium.com/@MichaKutz/conditionals-in-a-declarative-pipeline-jenkinsfile-d1a4a44e93bb
// - Pipeline Steps:         https://www.jenkins.io/doc/pipeline/steps/
// - Publish Over SSH:       https://www.jenkins.io/doc/pipeline/steps/publish-over-ssh/
// - HTTP Request:           https://www.jenkins.io/doc/pipeline/steps/http_request/#http-request-plugin



pipeline {
    agent any

    environment {
        JOB_EXEC_TIMEOUT = 600
        WORKDIR = '/var/lib/jenkins/workspace/url-shortener'

        DOCKERFILE = 'Dockerfile'
        DOCKER_COMPOSE_FILE = 'docker-compose-hlg.yml'
        CONTAINER_NAME = 'app'
    }

    stages(){
        
        stage ("Docker compose down"){            
            steps {
                echo "============================== Docker compose down ================================"
                sh ("cd ${WORKDIR} && docker-compose -f ${DOCKER_COMPOSE_FILE} down")
            }
        }

        stage ("Docker compose build"){            
            steps {
                echo "============================== Docker compose build ================================"
                sh ("cd ${WORKDIR} && docker-compose -f ${DOCKER_COMPOSE_FILE} up -d --build")
            }
        }         

        // stage ("Docker compose up"){            
        //     steps {
        //         echo "============================== Docker compose up ================================"
        //         sh ("cd ${WORKDIR} && docker-compose -f ${DOCKER_COMPOSE_FILE} up -d")
        //     }
        // } 

        // stage ("Run Migrations"){        
        //     steps {
        //         echo "============================= Running Migrations ==================================="
        //         sh ("cd ${WORKDIR} && docker-compose exec ${CONTAINER_NAME} bash alembic upgrade head")
        //     }
        // }

        // stage ("Build Frontend 01"){            
        //     steps {
        //         echo "=================================== npm install =============================="
        //         sh ("cd ${WORKDIR} && docker-compose exec ${CONTAINER_NAME} npm install")
        //     }
        // }

        // stage ("Build Frontend 02"){            
        //     steps {
        //         echo "=================================== npm run build =============================="
        //         sh ("cd ${WORKDIR} && docker-compose exec ${CONTAINER_NAME} npm run build")
        //     }
        // }
    }
}
