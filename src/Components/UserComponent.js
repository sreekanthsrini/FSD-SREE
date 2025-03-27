import React from "react";
import UserService from "../Services/UserService";
class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        UserService.getSreeUsers().then((response)=>{
            this.setState({users:response.data})
        });
    }
    render(){
        return(
            <div>
                <h1 className="text-centre">
                    User List
                </h1>
                <table>
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>User Firstname</td>
                            <td>User Lastname</td>
                            <td>User email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user=>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
        
    }
}
export default UserComponent
