import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImage from '../../assets/hireme.png'
import { Link } from 'react-scroll'
import fileName from '../../assets/Harshul_Vachheta_Resume.pdf'

const Intro = () => {
    const downloadCV = () => {
        const fileURL = fileName;
        const resume='Harshul_Vachheta_Resume.pdf'
        // Use fetch API to download the file
        fetch(fileURL).then(response => {
            // Check if the response is OK
            if (!response.ok) {
                throw new Error("Network Response was not ok");
            }
            return response.blob(); // Get the blob (binary data) from the response
        }).then(blob => {
            // Create a URL for the blob
            const url = window.URL.createObjectURL(new Blob([blob]));


            // Create a temporary link element
            const link = document.createElement('a');
            link.href = url;

            // Specify the filename
            link.setAttribute('download', resume);

            // Simulate click to trigger download
            document.body.appendChild(link);
            link.click();

            // Clean up resources
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
        }).catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        })
    }
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello, </span>
                <span className='introText'>I'm <span className='introName'>Harshul</span><br />DevOps Engineer</span>
                <p className='introPara'>I am a skilled DevOps Engineer <br/>with experience in CI/CD pipelines and <br />proficient in orchestrating infrastructure for <br/>peak efficiency, fine-tuning application deployments.</p>
                <Link><button className='btn' onClick={downloadCV}> <img src={btnImage} alt='Hire Me' className='btnImg' />Hire Me</button></Link>
            </div>
            <img src={bg} alt='' className='bg' />
        </section>
    )
}

export default Intro;