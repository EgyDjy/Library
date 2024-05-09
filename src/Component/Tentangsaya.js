import React from 'react'

const PoppinsFontLink = document.createElement("link");
PoppinsFontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
PoppinsFontLink.rel = "stylesheet";
document.head.appendChild(PoppinsFontLink);

class Tentangsaya extends React.Component {
    render() {
        return (
            <div style={styles.Container}>

                <header style={styles.Header}>
                    <p>About Me</p>
                </header>

                <main style={styles.Main}>
                    <h3 style={styles.h3}>My Profile</h3> 
                    <h5>Name      : Egy Djaya Utama</h5>
                    <h5>Age       : 17th</h5>
                    <h5>Education : SMK Telkom Malang</h5>

                    <h3 style={styles.h3_1}>My Hobbies</h3>
                    <h5> - Playing video games</h5>
                    <h5> - Playing Basketball</h5>
                    <h5> - Listening to music</h5>
                    <h5> - Automotive</h5>

                    <h3 style={styles.h3_1}>My Skills</h3>
                    <h5> - HTML</h5>
                    <h5> - CSS</h5>
                    <h5> - Java</h5>
                    <h5> - Node</h5>
                    <h5> - React</h5>
                    <h5> - JavaScript</h5>
                    <h5> - UI/UX Designer</h5>
                </main>

                <footer style={styles.Footer}>
                    <p>Contact Us :</p>
                    <p>+62-812-1665-3401
                        <br />
                        djayaegy@gmail.com
                        <br />
                        @EgyDjy
                    </p>
                </footer>
            </div>
        )
    }
}

const styles = {
    Container: {
        padding: '100px',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
        backgroundImage: 'url("https://wallpapercave.com/wp/wp9139711.jpg")',
        backgroundSize: '1525px 637px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#2A4B48',
    },

    Header: {
        marginTop: '130px',
        padding: '30px',
        textAlign: 'center',
        fontSize: '65px',
        background: 'rgba(240, 240, 210, 0.4)',
        borderRadius: '15px',
        marginLeft: '380px',
        marginRight: '380px',
    },

    Main: {
        marginTop: '380px',
        padding: '50px',
        paddingLeft: '70px',
        textAlign: 'left',
        fontSize: '20px',
        backgroundColor: '#bcbcbc',
        borderRadius: '15px',
    },

    h3: {

    },

    h3_1: {
        marginTop: '40px'
    },

    Footer: {
        marginTop:'130px',
        marginBottom: '-100px',
        marginLeft: '-100px',
        marginRight: '-100px',
        backgroundColor: '#211e1e',
        padding: '70px',
        textAlign: 'center',
        color: '#C0C0C0',
    }
}

export default Tentangsaya;