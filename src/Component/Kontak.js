import React from "react";

const PoppinsFontLink = document.createElement("link");
PoppinsFontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
PoppinsFontLink.rel = "stylesheet";
document.head.appendChild(PoppinsFontLink);

class Kontak extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        if(this.state.name && this.state.email && this.state.phone && this.state.message) {
            alert('Form Has been submitted');
            window.location.href = './Beranda';
            console.log(this.state);
        } else {
            alert('Please fill all the forms');
            window.location.href = './Kontak';
        }
        
    };
    render() {
        return (
            <div style={styles.Container}>
                <header style={styles.Header}>
                    <p>Contact Us</p>
                </header>

                <main style={styles.Main1}>
                    <h3 style={styles.Main1_h3}>Get in Touch</h3>
                    <p style={styles.Main1_p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <form onSubmit={this.handleSubmit}>
                        <label style={styles.label}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <label style={styles.label}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <label style={styles.label}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={this.state.phone}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <label style={styles.label}>
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={this.state.message}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
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
        marginBottom: '360px',
    },

    Main1: {
        padding: '50px',
        textAlign: 'center',
        fontSize: '20px',
        backgroundColor: '#bcbcbc',
        borderRadius: '15px',
    },


     Main1_h3: {
        textAlign: 'center',
        marginBottom: '20px',
    },

    Main1_p: {
        textAlign: 'center',
        marginTop: '0px',
        marginBottom: '35px',
        fontSize: '15px',
        paddingLeft: '150px',
        paddingRight: '150px',
    },

    label: {
        marginBottom: '15px',
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
export default Kontak;