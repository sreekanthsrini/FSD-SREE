// import React from "react";
// import SreeServioces from "../Services/SreeServioces";
// import "./Components.css";



// class SreeComponents extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             users:[]
//         }
//     }
//     componentDidMount(){
//         SreeServioces.getSreeUsers().then((response)=>{
//             this.setState({users:response.data})
//         });
//     }

//     render(){
//         return(

//             <div style={{ textAlign: "center", fontFamily: "Arial" }}>
//             <h1 style={{ color: "#333" }}>STUDENT MARKS DETAILS</h1>
//             <table style={{
//                 width: "80%",
//                 margin: "20px auto",
//                 borderCollapse: "collapse",
//                 boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"
//             }}>
//                 <thead style={{ backgroundColor: "#007bff", color: "white" }}>
//                     <tr>
//                         <td>UserId</td>
//                         <td>Name</td>
//                         <td>Mark</td>
//                         <td>Grade</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.users.map(user => (
//                         <tr key={user.id} style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.mark}</td>
//                             <td>{user.grade}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
        
//         )
//     }

// }
// export default SreeComponents 


import React from "react";
import SreeServioces from "../Services/SreeServioces";
import { withRouter } from "./withRouter"; // Import withRouter for navigation
import "./Components.css";

class SreeComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        SreeServioces.getSreeUsers().then((response) => {
            this.setState({ users: response.data });
        });
    }

    handleNavigate = () => {
        this.props.navigate("/advice"); // Navigate to Advice.jsx
    };

    render() {
        return (
            <div style={{ textAlign: "center", fontFamily: "Arial" }}>
                <h1 style={{ color: "#333" }}>STUDENT MARKS DETAILS</h1>
                <table style={{
                    width: "80%",
                    margin: "20px auto",
                    borderCollapse: "collapse",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"
                }}>
                    <thead style={{ backgroundColor: "#007bff", color: "white" }}>
                        <tr>
                            <td>UserId</td>
                            <td>Name</td>
                            <td>Mark</td>
                            <td>Grade</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => (
                            <tr key={user.id} style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.mark}</td>
                                <td>{user.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Add Navigation Button */}
                <button 
                    onClick={this.handleNavigate} 
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "20px"
                    }}
                >
                    Go to Advice Page
                </button>
            </div>
        );
    }
}

export default withRouter(SreeComponents);  // Use withRouter to enable navigation
