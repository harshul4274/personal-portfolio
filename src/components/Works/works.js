import React from 'react'
import './works.css'
import SoftwareDevelopment from '../../assets/Software-developer-image.png'
import MonitoringAlert from '../../assets/MonitoringAlert.png'
import Security from '../../assets/security-image.png'
import Cloud from '../../assets/cloud-image.png'
import TechnicalSupport from '../../assets/technical-support-image.png'
import DomainHosting from '../../assets/domain-hosting-image.png'



const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDesc'>Group skills logically under headings like "Development Languages"(Node.js, Go), "Infrastructure and Systems" (Git, Docker, Kubernetes), "Monitoring and Alerting" (Grafana, Prometheus), "CI/CD" (GitHub Actions, Google Cloud Build, Spinnaker), "Cloud Platforms" (AWS, GCP), "Databases" (Couchbase, Elasticsearch, MinIO, Kafka, TiKV), and "Security" (Calico, Istio). </span>
            <div className='worksImags'>
                <img src={SoftwareDevelopment} className='worksImg' alt='Software Development' />
                <img src={MonitoringAlert} className='worksImg' alt='Manage CI/CD' />
                <img src={Security} className='worksImg' alt='Security' />
                <img src={Cloud} className='worksImg' alt='Cloud Platform' />
                <img src={TechnicalSupport} className='worksImg' alt='Technical Support' />
                <img src={DomainHosting} className='worksImg' alt='Domain Hosting' />
            </div>
        </section>
    );
}

export default Works;