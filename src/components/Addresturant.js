import React, { Component } from 'react';
import {Form , Button } from 'react-bootstrap';
class Addresturant extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            rating: 4.6,
            address: "",
            image: "https://www.thedailymeal.com/sites/default/files/slideshows/1943277/2108053/0.jpg"
        }
    }

    /**
     * create restorant
     */
    create(){
        console.log(this.state);
        fetch("http://localhost:3000/restoruants",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
         }
        ).then((response)=>{
            response.json().then((result)=>{
                console.warn(result);
            })
        })
    }


    render() {
        return (
            <div className="add-restorant">
                {/* <Form  onSubmit={this.create() }> */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Restorant Name</Form.Label>
                        <Form.Control type="test" placeholder="Enter Name" 
                          onChange={(event)=>{ this.setState({name: event.target.value }) }}
                         />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Restorant Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" 
                         onChange={(event)=>{ this.setState({address: event.target.value }) }}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Restorant Rating</Form.Label>
                        <Form.Control type="number" placeholder="Rating" />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicPassword">
                        <Form.Label>Restorant Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group> */}
                
                    <Button variant="primary"  type="submit" onClick={()=> this.create()}>
                        Submit
                    </Button>
                {/* </Form> */}
            </div>
        );
    }
}

export default Addresturant;