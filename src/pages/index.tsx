import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.scss';

import rezzsha_src from 'assets/img/rezzsha.png';
const ItuskiHome = () => {
    return (
        <>
            <div className='home-first-section d-flex justify-content-center align-items-center'>
                <span className='home-title' style={{ marginTop: '100px' }}>ITSUKI</span>
            </div>

            <div className="fade-border" style={{ marginTop: '-40vh' }} />

            <div className='home-second-section'>
                <Row className='mt-5 align-items-center'>
                    <Col sm='6'>
                        <div className='d-flex flex-column' style={{ width: '51vw', paddingLeft:'102px' }}>
                            <span className='home-description-title'>
                                Rezzsha was the first Itsuki whose birth was a surprise.
                            </span>

                            <span className='home-description' style={{ marginTop: '7vh' }}>
                                When Itsuki are ready to be born, the forest brings them into the physical realm through a birthing ceremony, these are the happiest times for the Itsuki and all the beings of the forest, laughter and drumbeat is heard all throughout the realm and some celebrations are rumored to have lasted months.
                            </span>
                        </div>
                    </Col>
                    <Col sm='6'>
                        <div>
                            <img src={rezzsha_src} alt='rezzsha' width={'100%'} />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ItuskiHome;