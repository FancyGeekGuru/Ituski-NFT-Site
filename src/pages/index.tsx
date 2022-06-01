import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import './index.scss';

import itsuki_rarity_src from 'assets/img/itsuki-rarity.png';
import left_flower_src from 'assets/img/left-flower.png';
import rezzsha_src from 'assets/img/rezzsha.png';
import right_flower_src from 'assets/img/right-flower.png';
import itsuki_branches_src from 'assets/img/itsuki-branches.png';
import next_src from 'assets/img/next.png';
import prev_src from 'assets/img/prev.png';


const traits_list = [
    {
        title: 'Clothes',
        value: 72
    },
    {
        title: 'Body',
        value: 18
    },
    {
        title: 'Hair',
        value: 18
    },
    {
        title: 'Expressions',
        value: 24
    },
    {
        title: 'Hands',
        value: 10
    },
    {
        title: 'Jwellery',
        value: 52
    },
    {
        title: 'Background',
        value: 42
    }
];

const ItuskiHome = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <video className="video-background" width={'100%'} autoPlay loop muted playsInline>
                    <source src='/video/itsuki-braches.mp4' type="video/mp4" />
                </video>
            </div>

            <div className="fade-border" style={{ marginTop: '-40vh' }} />

            <div className='home-second-section'>
                <Row className='align-items-center' style={{ marginTop: '60px' }}>
                    <Col sm='6'>
                        <div className='d-flex flex-column description-padding'>
                            <span className='home-description-title'>
                                Rezzsha was the first Itsuki whose birth was a surprise.
                            </span>

                            <span className='home-description' style={{ marginTop: '50px' }}>
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

                <span className='d-flex justify-content-center home-sub-title home-sub-title-margin-top'>ITSUKI RARITY</span>

                <div className='home-gap'>
                    <img src={itsuki_rarity_src} width={'100%'} />
                </div>
            </div>

            <div className='background-second-color' style={{ marginTop: '-15px' }}>
                <span className='d-flex justify-content-center home-sub-title home-sub-title-margin-top'>TRAITS</span>

                <div className='d-flex justify-content-end'>
                    <div className='left-image-margin-top' style={{ width: '50%' }}>
                        <img src={left_flower_src} width={'100%'} />
                    </div>
                </div>

                <div className='home-container' style={{ marginTop: '-30px' }}>
                    <Row>
                        {
                            traits_list.map((row, index) => {
                                return (
                                    <Col xs='6' lg='4' xl='3' key={index} style={{ marginTop: '30px' }}>
                                        <div className='Trait-Card'>
                                            <span >{row.value}</span>
                                            <span>{row.title}</span>
                                        </div>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </div>

                <div className='d-flex justify-content-start'>
                    <div style={{ width: '50%', marginTop: '-30px' }}>
                        <img src={right_flower_src} width={'100%'} />
                    </div>
                </div>

                <div>
                    <span className='d-flex justify-content-center home-sub-title'>ITUSKI BRANCHES</span>

                    <Carousel
                        fade
                        nextIcon={<img src={next_src} width={'22%'} />}
                        nextLabel={''}
                        prevIcon={<img src={prev_src} width={'22%'} />}
                        prevLabel={''}
                        indicators={false}
                    >
                        <Carousel.Item>
                            <div className='d-flex justify-content-center'>
                                <div className='w-75'>
                                    <div className='slider-section'>
                                        <div className='d-flex flex-column slider-description-box'>
                                            <span className='slider-section-title'>ITUSKI <span>VISION 1</span></span>
                                            <span className='slider-section-description mt-5'>
                                                We at Itsuki adore nature. We believe that giving back to nature is an important element for human growth and existence. This extends into the animal kingdom aswell.
                                                <br /><br />
                                                We thrive on creating the greatest organic NFT community ever to explore and implement all the possibilities of bringing technology and nature together.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex justify-content-center'>
                                <div className='w-75'>
                                    <div className='slider-section'>
                                        <div className='d-flex flex-column slider-description-box'>
                                            <span className='slider-section-title'>ITUSKI <span>VISION 2</span></span>
                                            <span className='slider-section-description mt-5'>
                                                We at Itsuki adore nature. We believe that giving back to nature is an important element for human growth and existence. This extends into the animal kingdom aswell.
                                                <br /><br />
                                                We thrive on creating the greatest organic NFT community ever to explore and implement all the possibilities of bringing technology and nature together.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div style={{ marginBottom: '120px' }}>
                    <span className='d-flex justify-content-center home-sub-title home-sub-title-margin-top'>TEAM</span>

                    <div className='home-container home-sub-title-margin-top '>
                        <Row style={{ rowGap: '30px' }}>
                            {
                                [0, 0, 0, 0].map((_, index) => {
                                    return (
                                        <Col sm='6' md='4' lg='3' key={index}>
                                            <div className='team-member-card'>
                                                <div style={{ minHeight: '250px', background: '#D9D9D9' }}></div>
                                                <div style={{ minHeight: '60px', background: '#0E0B26', border: '1px solid gray' }}></div>
                                            </div>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '500px' }}>
                <span className='d-flex justify-content-center home-sub-title home-sub-title-margin-top'>FAQ</span>

                {/** Collapse */}

                <div className='home-container home-sub-title-margin-top' style={{ gap: '30px' }}>
                    {
                        [0, 0, 0, 0].map((_, index) => {
                            return (
                                <div key={index} style={{ minHeight: '60px', background: '#D9D9D9', marginTop: '35px' }}></div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default ItuskiHome;