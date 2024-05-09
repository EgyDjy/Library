import React from 'react'

const PoppinsFontLink = document.createElement("link");
PoppinsFontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
PoppinsFontLink.rel = "stylesheet";
document.head.appendChild(PoppinsFontLink);

class Beranda extends React.Component {
    About = () => {
        window.location.href = './Tentangsaya';
    };

    Creations = () => {
        window.location.href = './Karya';
    };

    Contact = () => {
        window.location.href = './Kontak';
    };
    render() {
        return (
            <div style={styles.Container}>


                <main style={styles.Main}>
                        <h2 style={styles.h2}>Welcome to</h2>
                        <h2 style={styles.h2}>My Website</h2>
                    <p style={styles.p}>On this website you can find out several things about me, see my work, and also you can contact me.</p>
                </main>

                <main style={styles.Main1}>
                    <h3>Check About Me</h3>
                    <h3 style={styles.Mainh3}>Right Here !</h3>
                    <p>You can find out some things about me that maybe some people don't know.</p>
                    <button  style={styles.Button} onClick={this.About}>About Me</button>
                </main>

                <main style={styles.Main2}>
                    <h3>Check My Project</h3>
                    <h3 style={styles.Mainh3}>Right Here !</h3>
                    <p>You can see some of my work that I immortalized on this website.</p>
                    <button style={styles.Button} onClick={this.Creations}>My Creations</button>
                </main>

                <main style={styles.Main1}>
                    <h3>You Can Contact Me</h3>
                    <h3 style={styles.Mainh3}>Right Here !</h3>
                    <p>You can contact me via my contact or social media if you want to ask something.</p>
                    <button style={styles.Button} onClick={this.Contact}>Contact</button>
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
        marginTop: '-45px',
        marginBottom: '20px',
        padding: '20px',
        textAlign: 'center'
    },

    Main: {
        padding: '25px',
        textAlign: 'left',
        paddingLeft: '65px',
        fontSize: '20px',
        backgroundColor: '#F5F5F5',
        borderRadius: '15px',
        marginRight: '680px',
        marginBottom: '280px',
        background: 'rgba(240, 240, 210, 0.7)',
    },

    h2: {
        marginBottom: '17px',
        fontWeight: 'bold',
        fontSize: '60px',
    },

    p: {
        marginTop: '80px',
    },

    Main1: {
        padding: '65px',
        textAlign: 'left',
        paddingLeft: '100px',
        fontSize: '18px',
        backgroundColor: '#F5F5F5',
        borderRadius: '15px',
        marginRight: '680px',
        marginBottom: '165px',
        background: 'rgba(226, 222, 187, 0.8)',
    },

    Main2: {
        padding: '65px',
        textAlign: 'right',
        paddingLeft: '100px',
        fontSize: '18px',
        backgroundColor: '#F5F5F5',
        borderRadius: '15px',
        marginLeft: '680px',
        marginBottom: '165px',
        background: 'rgba(226, 222, 187, 0.8)',
    },

    Mainh3: {
        fontWeight: 'bold',
        paddingBottom: '40px',
    },

    Button: {
        borderRadius: '7px',
        marginTop: '25px',
        marginBottom: '15px',
        transition: 'background-color 0.3s ease',
        backgroundColor: '#211e1e', // warna default
        color: '#F5F5F5',
        padding: '10px 33px',
        border: 'none',
    },

    Footer: {
        marginTop: '130px',
        marginBottom: '-100px',
        marginLeft: '-100px',
        marginRight: '-100px',
        backgroundColor: '#211e1e',
        padding: '70px',
        textAlign: 'center',
        color: '#C0C0C0',
    }
}

export default Beranda;