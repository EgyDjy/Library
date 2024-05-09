import React from 'react'

const PoppinsFontLink = document.createElement("link");
PoppinsFontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
PoppinsFontLink.rel = "stylesheet";
document.head.appendChild(PoppinsFontLink);

class Karya extends React.Component {
    render() {
        return (
            <div style={styles.Container}>

                <header style={styles.Header}>
                    <p>My Project</p>
                </header>

                <main style={styles.Main}>
                    <h3 style={styles.h3}>My Project</h3>
                </main>

                <main style={styles.Main1}>
                    <div style={styles.ImageContainer}>
                        <img url='https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_640.jpg' alt='' style={styles.Image} />
                    </div>
                    <p style={styles.ImageDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </main>

                <main style={styles.Main2}>
                <div style={styles.ImageContainer}>
                        <img url='https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_640.jpg' alt='' style={styles.Image} />
                    </div>
                    <p style={styles.ImageDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </main>

                <main style={styles.Main3}>
                <div style={styles.ImageContainer}>
                        <img url='https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_640.jpg' alt='' style={styles.Image} />
                    </div>
                    <p style={styles.ImageDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </main>

                <main style={styles.Main2}>
                <div style={styles.ImageContainer}>
                        <img url='https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_640.jpg' alt='' style={styles.Image} />
                    </div>
                    <p style={styles.ImageDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
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
        marginTop: '350px',
        marginBottom: '80px',
        padding: '50px',
        textAlign: 'center',
        fontSize: '20px',
        background: 'rgba(226, 222, 187, 1)',
        borderRadius: '15px',
        marginLeft: '515px',
        marginRight: '515px',
        paddingTop: '20px',
        paddingBottom: '12px',
    },

    h3: {

    },

    h3_1: {
        marginTop: '40px'
    },

    Main1: {
        display: 'inline-block',
        padding: '30px',
        textAlign: 'left',
        paddingLeft: '28px',
        fontSize: '18px',
        backgroundColor: '#F5F5F5',
        borderRadius: '15px',
        marginRight: '730px',
        marginLeft: '40px',
        marginBottom: '120px',
        background: 'rgba(226, 222, 187, 1)',
    },

    Main2: {
        display: 'inline-block',
        padding: '30px',
        textAlign: 'left',
        paddingLeft: '28px',
        fontSize: '18px',
        backgroundColor: '#F5F5F5',
        borderRadius: '15px',
        marginTop: '-220px',
        marginRight: '40px',
        marginLeft: '730px',
        marginBottom: '20px',
        background: 'rgba(226, 222, 187, 1)',
    },

    Main3: {
        display: 'inline-block',
        padding: '30px',
        textAlign: 'left',
        paddingLeft: '28px',
        fontSize: '18px',
        backgroundColor: '#F5F5F5',
        borderRadius: '15px',
        marginTop: '-220px',
        marginRight: '730px',
        marginLeft: '40px',
        marginBottom: '120px',
        background: 'rgba(226, 222, 187, 1)',
    },

    ImageContainer: {
        textAlign: 'center',
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_640.jpg")',
    },

    Image: {
        maxWidth: '100px', // Sesuaikan ukuran gambar sesuai kebutuhan
        height: '280px',
        borderRadius: '15px',
    },

    ImageDescription: {
        marginTop: '20px',
        fontSize: '16px',
        textAlign: 'justify',
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

export default Karya;