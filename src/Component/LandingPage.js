import React from "react";
import "./style.css";

export const Landingpage = () => {
    return (
        <div className="landingpage">
            <div className="div">
                <div className="overlap">
                    <div className="ellipse" />
                    <div className="ellipse-2" />
                    <div className="group">
                        <div className="overlap-group">
                            <div className="overlap-2">
                                <div className="rectangle" />
                                <img className="search" alt="Search" src="search-1-1.png" />
                                <div className="text-wrapper">Google</div>
                            </div>
                            <div className="rectangle-2" />
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Daftar</div>
                            </div>
                            <div className="overlap-3">
                                <div className="rectangle-3" />
                                <div className="text-wrapper-3">Guest</div>
                                <img className="user" alt="User" src="user-1.png" />
                            </div>
                            <div className="overlap-4">
                                <div className="text-wrapper-4">Daftar</div>
                                <p className="sudah-punya-akun">
                                    <span className="span">Sudah punya akun Biztify?</span>
                                    <span className="text-wrapper-5">&nbsp;</span>
                                    <span className="text-wrapper-6">Masuk</span>
                                </p>
                            </div>
                            <img className="line" alt="Line" src="line-1.svg" />
                            <img className="img" alt="Line" src="line-2.svg" />
                            <div className="text-wrapper-7">Atau daftar dengan</div>
                            <div className="text-wrapper-8">Phone Number or Email</div>
                        </div>
                    </div>
                </div>
                <div className="group-wrapper">
                    <div className="overlap-wrapper">
                        <div className="overlap-5">
                            <div className="group-2">
                                <img className="network" alt="Network" src="network-2.png" />
                                <div className="text-wrapper-9">Biztify</div>
                            </div>
                            <div className="text-wrapper-10">Find your relation!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingpage;