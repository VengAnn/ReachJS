//link to weste bootstap 4
//https://getbootstrap.com/docs/4.0/utilities/spacing/

import React, { Component } from 'react';
//import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManager.scss';
import { getAllUsers, createNewUserService, deleteUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        };
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errcode === 0) {
            this.setState({
                arrUsers: response.users
            });
            //console.log('check state user 1', this.state.arrUsers);
        }

    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        });
    };

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        });
    };

    createNewUser = async (data) => {
        try {

            let response = await createNewUserService(data);
            if (response && response.errcode !== 0) {
                alert(response.errMessage);
            }
            else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                });

                emitter.emit('EVENT_CLEAR_MODAL_DATA')   //, { 'id': 'your id' }
            }
            //console.log('response create user: ', response);
        } catch (e) {
            console.log(e);
        }
        //alert('call me');
        //console.log('check data from child : ', data);
    };

    handleDeleteUser = async (user) => {
        //alert('call delete')
        console.log('delte: ', user);
        try {
            let res = await deleteUserService(user.id);
            if (res && res.errcode === 0) {
                await this.getAllUsersFromReact();
            }
            else {
                alert(res.errMessage);
            }
            console.log(res);
        } catch (e) {
            console.log(e);
        }

    }

    /**life cycle
     * 1.Run component
     * 2.Run constructor -> init state
     * 3.Did muont (set state)
     * 4. Render
     * 
     * 
     * 
     * 
     * 
     */
    render() {
        //console.log('check render', this.state)
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                <div className="title text-center"> Manager users With Veng Ann </div>
                <div className="mx-1">
                    <button
                        className="btn btn-primary px-3"
                        onClick={() => this.handleAddNewUser()}
                    ><i className="fas fa-plus"></i> Add New Users</button>
                </div>
                <div className="user-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                            {arrUsers && arrUsers.map((item, index) => {
                                console.log('veng ann check map', item, index)
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn btn-edit"><i className="fas fa-edit"></i></button>
                                            <button className="btn btn-delete" onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
