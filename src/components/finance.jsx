import React from 'react';
import './finance.css';
import money from "../assets/services/money.svg";
import fast from "../assets/services/fast.svg";
import up from "../assets/services/up.svg";

const Finance = () => {


    return (  
        <>


<section className="hms-fin-section">
            <div className="hms-fin-container">
                
                {/* Header Content */}
                <div className="hms-fin-header hms-reveal-up">
                    <h1>Installments & Financing</h1>
                    <p className="hms-fin-subtitle">
                        Drive your dream car today with our flexible installment options. 
                        We partner with trusted financial institutions to provide competitive rates and fast approvals.
                    </p>
                    <h4 className="hms-fin-label">Flexible Payment Plans</h4>
                </div>

                {/* Features Grid */}
                <div className="hms-fin-grid">
                    <div className="hms-fin-card hms-reveal-up" style={{ animationDelay: '0.2s' }}>
                        <div className="hms-fin-icon">
                            <i className="fas fa-hand-holding-usd">
                                <img src={money} />
                            </i>
                        </div>
                        <h3>Low Down Payment</h3>
                    </div>

                    <div className="hms-fin-card hms-reveal-up" style={{ animationDelay: '0.4s' }}>
                        <div className="hms-fin-icon">
                            <i className="fas fa-bolt">
                            <img src={fast} />
                            </i>
                        </div>
                        <h3>Fast Approval</h3>
                    </div>

                    <div className="hms-fin-card hms-reveal-up" style={{ animationDelay: '0.6s' }}>
                        <div className="hms-fin-icon">
                            <i className="fas fa-chart-line">
                            <img src={up} />
                            </i>
                        </div>
                        <h3>Flexible Terms</h3>
                    </div>
                </div>

                {/* Bottom Highlight */}
                <div className="hms-fin-footer hms-reveal-up" style={{ animationDelay: '0.8s' }}>
                    <p>Starting from <span>10%</span> Down Payment</p>
                </div>

            </div>
        </section>
        
        </>
    );
}
 
export default Finance;