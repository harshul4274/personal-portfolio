import React from 'react'
import './skills.css';
import GoLang from '../../assets/golang-icon.png'
import NodeLang from '../../assets/node-js-icon.png'
import Docker from '../../assets/docker-icon.png'
import Kubernetes from '../../assets/kubernetes-icon.png'
import Grafana from '../../assets/grafana-icon.png'
import Database from '../../assets/database-icon.png'
import GCP from '../../assets/google-cloud-icon.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillsTitle'>What I do<br /></span>
            <span className='skillsDesc'>Hi, I am Harshul Vachheta, a Senior DevOps Engineer, passionate about developing backend applications while CI/CD with teams of Software Developers and managing applications, aspiring to become a DevOps Engineer.</span>
            <div className='skillsBar'>
                <img src={GoLang} alt='GoLang' className='skillsBarImg' />
                <div className='skillsBarText'>
                    <h2>Go Language</h2>
                    <p>In my experience with GoLang, I've specialized in architecting microservices tailored for swift and dependable data delivery to clients on a daily basis. Additionally, I've spearheaded initiatives to streamline data pipelines by implementing efficient data cleanup processes, ensuring optimal system performance and resource utilization.</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={NodeLang} alt='Node Js' className='skillsBarImg' />
                <div className='skillsBarText'>
                    <h2>Node JS</h2>
                    <p>In this project, I developed microservices to automate daily database backups, effectively ensuring data integrity and availability. Additionally, I implemented folder compression techniques to optimize backup storage space, thereby enhancing efficiency and reducing overall backup size.</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={Docker} alt='Docker' className='skillsBarImg' />
                <div className='skillsBarText'>
                    <h2>Docker</h2>
                    <p>I specialize in crafting lightweight Docker images for a variety of programming languages, ensuring optimal performance and reliability in production environments.</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={Kubernetes} alt='Kubernetes' className='skillsBarImg' />
                <div className='skillsBarText'>
                    <h2>Kubernetes</h2>
                    <p>On a daily basis, I deploy a multitude of applications, APIs, and microservices to effectively manage and scale containerized applications within the production environment</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={Database} alt='Database' className='skillsBarImg' />
                <div className='skillsBarText'>
                    <h2>Database</h2>
                    <p>Proficient in configuring and optimizing databases for production environments, ensuring robust security measures, efficient storage solutions, and reliable data retrieval mechanisms.</p>
                </div>
            </div>      
            <div className='skillsBar'>
                <img src={GCP} alt='GCP' className='skillsBarImg' />
                <div className='skillsBarText'>
                    <h2>GCP</h2>
                    <p>Explore the limitless possibilities of Google Cloud Platform: unleash the power of scalable infrastructure and cutting-edge services organize website.</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={Grafana} alt='Grafana' className='skillsBarImg' />
                <div className='skillsBarText'>
                    <h2>Grafana</h2>
                    <p>Elevate organize data visualization game with Grafana: turn insights into action on organize website to track and monitor organize applications.</p>
                </div>
            </div>
        </section>
    )
}

export default Skills;