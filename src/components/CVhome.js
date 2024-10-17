import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CVhome = () => {
    const [photoUrl, setPhotoUrl] = useState(''); 
    const location = useLocation();
    const {
        name,
        title,
        email,
        phone,
        linkedin,
        jobtitle,
        company,
        responsibilities,
        degree,
        institution,
        years,
        skillsList,
        responsibilitiesList
    } = location.state || {
        photo: 'invalid',
        name: 'invalid',
        title: 'invalid',
        email: 'invalid',
        phone: 'invalid',
        linkedin: 'invalid',
        jobtitle: 'invalid',
        company: 'invalid',
        responsibilities: 'invalid',
        degree: 'invalid',
        institution: 'invalid',
        years: 'invalid',
        skills: 'invalid'
    };

    const styles = {
        cvContainer: {
            maxWidth: '600px',
            margin: 'auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            border: '1px solid #ddd',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        cvHeader: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        cvHeaderName: {
            margin: '10px 0',
            fontSize: '2em',
            color: '#333',
        },
        cvHeaderTitle: {
            color: '#555',
            fontStyle: 'italic',
        },
        photo: {
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            margin: '10px auto',
            display: 'block',
            objectFit: 'cover',
        },
        cvSection: {
            margin: '20px 0',
        },
        cvSectionTitle: {
            borderBottom: '2px solid #007BFF',
            paddingBottom: '5px',
            color: '#007BFF',
            fontSize: '1.5em',
        },
        job: {
            margin: '10px 0',
        },
        jobTitle: {
            margin: 0,
            fontWeight: 'bold',
        },
        jobList: {
            listStyleType: 'disc',
            marginLeft: '20px',
        },
        contactInfo: {
            margin: '10px 0',
        },
        button: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: '#fff',
            cursor: 'pointer',
        },
        input: {
            margin: '10px 0',
            padding: '10px',
            width: '100%',
            border: '1px solid #ccc',
            borderRadius: '5px',
        },
    };

    const printCV = () => {
        window.print();
    };

    return (
        <div style={styles.cvContainer}>
            <header style={styles.cvHeader}>
                <img 
                    src={photoUrl || "https://via.placeholder.com/100"}
                    alt="Profile" 
                    style={styles.photo} 
                />
                <h1 style={styles.cvHeaderName}>{name}</h1>
                <h2 style={styles.cvHeaderTitle}>{title}</h2>
            </header>

      
            <input 
                type="text" 
                placeholder="Enter Photo URL" 
                value={photoUrl} 
                onChange={(e) => setPhotoUrl(e.target.value)} 
                style={styles.input}
            />

            <section style={styles.cvSection}>
                <h3 style={styles.cvSectionTitle}>Contact Information</h3>
                <p style={styles.contactInfo}>Email: {email}</p>
                <p style={styles.contactInfo}>Phone: {phone}</p>
                <p style={styles.contactInfo}>LinkedIn: {linkedin}</p>
            </section>

            <section style={styles.cvSection}>
                <h3 style={styles.cvSectionTitle}>Experience</h3>
                <div style={styles.job}>
                    <h4 style={styles.jobTitle}>{jobtitle}</h4>
                    <p>{company}</p>
                </div>
                {responsibilitiesList.length > 0 ? (
                    responsibilitiesList.map((responsibility, index) => (
                        <ul key={index} style={styles.jobList}>
                            <li>{responsibility}</li>
                        </ul>
                    ))
                ) : (
                    <p>No responsibilities listed.</p>
                )}
            </section>

            <section style={styles.cvSection}>
                <h3 style={styles.cvSectionTitle}>Education</h3>
                <p>{degree}</p>
                <p>{institution}, {years}</p>
            </section>

            <section style={styles.cvSection}>
                <h3 style={styles.cvSectionTitle}>Skills</h3>
                <ul style={styles.jobList}>
                    {skillsList.length > 0 ? (
                        skillsList.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))
                    ) : (
                        <li>No skills listed.</li>
                    )}
                </ul>
            </section>

            <div style={styles.cvContainer}>
                <button onClick={printCV} style={styles.button}>Print CV</button>
            </div>
        </div>
    );
};

export default CVhome;
