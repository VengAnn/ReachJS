import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/bookingcare-2020.svg';

class HomeHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img className="header-logo" src={logo} />

                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b>Chuyển khoa</b></div>
                                <div className="subs-title">Tìm bác sĩ theo chuyên khoa </div>
                            </div>
                            <div className="child-content">
                                <div><b>Cơ Sở y tế</b></div>
                                <div className="subs-title">Chọn bẹnhe viện phòng khám</div>
                            </div>
                            <div className="child-content">
                                <div><b>Bác sĩ</b></div>
                                <div className="subs-title">Chọn Bác sĩ giỏi</div>
                            </div>
                            <div className="child-content">
                                <div><b>Gói khám</b></div>
                                <div className="subs-title">Khám sức khỏe tổng quất</div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="far fa-question-circle"></i> Hỗ trợ</div>
                            <div className="language-vi">VN</div>
                            <div className="language-en">EN</div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1">NỀN TẢNG Y TẾ</div>
                        <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tìm Chuyên khoa khám bệnh" />

                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-hospital"></i></div>
                                <div className="text-child">Khám chuyên khoa</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-mobile"></i></div>
                                <div className="text-child">Khám từ xa</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-stethoscope"></i></div>
                                <div className="text-child">Khám tổng quất</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fa fa-plus-square" aria-hidden="true"></i></div>
                                <div className="text-child">Xết nghiệm y học</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fa fa-user-md" aria-hidden="true"></i></div>
                                <div className="text-child">Sức khỏe tính thần</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-procedures"></i></div>
                                <div className="text-child">Khám nha khoa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
