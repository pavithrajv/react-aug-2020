import React from 'react';


class FriendDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            newsince:parseInt(this.props.since)
        }
       
    }

    deleteCurrentFriend=()=>{
        console.log("delete friend with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editFriendWithId=()=>{
        console.log("edit friend with id: " + this.props.id);
        this.props.editId(this.props.id)
    }
    addSince=()=>{
        console.log("add since renderd")
        console.log(this.props.since)
        this.setState({
            newsince: this.state.newsince + 1
        })
        
    }

    minusSince=()=>{
        console.log("add since renderd")
        console.log(this.props.since)
        this.setState({
            newsince: this.state.newsince - 1
        })
        
    }
    render() { 
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.state.newsince}</td>
                <td>
                    <button onClick={this.addSince}>Since + </button>
                </td>
                <td>
                    <button onClick={this.minusSince}>Since - </button>
                </td>
                <td>
                    <button onClick={this.editFriendWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentFriend}>Del</button>
                </td>
                
            </tr>    
        )
    }
       
}
 
export default FriendDetail;