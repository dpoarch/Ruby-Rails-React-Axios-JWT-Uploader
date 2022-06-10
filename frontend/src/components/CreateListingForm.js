import React, { Component } from 'react'
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth'
import { addListing } from '../actions/listing';
import { Redirect } from 'react-router'
import { Button, Form, Segment, Container } from 'semantic-ui-react'
import ReactDropzone from 'react-dropzone';

class CreateListingForm extends Component {
  state = {
    name: "",
    price: 0,
    address: "",
    description: "",
    host_id: this.props.host_id,
    neighbourhood_id: 1,
    fireRedirect: false,
    avatars: null,
  }

  componentDidMount(){}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFileDrop = files => {
    this.setState({
      avatars: files,
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.addListing(
      this.state.name,
      this.state.price,
      this.state.address,
      this.state.description,
      this.state.host_id,
      this.state.neighbourhood_id,
      this.state.avatars
    );

    this.setState({
      name: "",
      price: 0,
      address: "",
      description: "",
      host_id: this.props.host_id,
      neighbourhood_id: 1,
      fireRedirect: true,
      avatars: null,
    })
  }

  render() {
    const { fireRedirect } = this.state
    return (
      <Container>
        <Segment>
          <Form
            onSubmit={this.handleSubmit}
            encType="multipart/form-data">
            <Form.Field>
              <Form.Input
                label="name"
                placeholder="name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <Form.Input
                label="price"
                placeholder="price per night"
                type="number"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
              />
              <Form.Input
                label="address"
                placeholder="address"
                type="text"
                name="address"
                onChange={this.handleChange}
                value={this.state.address}
              />
              <Form.Input
                label="description"
                placeholder="description"
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <br />
              <ReactDropzone multiple onDrop={this.handleFileDrop} style={{position: "relative", width: 200, height: 100, border:"1px dashed grey"}}>
                <center>Drop photos here </center>
                <center>(less then 4 pictures)</center>
              </ReactDropzone>
              {this.state.avatars ?
                <div>
                  <h2>Uploading {this.state.avatars.length} files...</h2>
                  <img width="100px" src={this.state.avatars[0].preview} alt="listing" style={{margin: 10, width: 200, height: 100, border:"1px solid grey"}}/>
                  {this.state.avatars[1]? <img width="100px" src={this.state.avatars[1].preview} alt="listing" style={{margin: 10, width: 200, height: 100, border:"1px solid grey"}}/>:null}
                  {this.state.avatars[2]? <img width="100px" src={this.state.avatars[2].preview} alt="listing" style={{margin: 10, width: 200, height: 100, border:"1px solid grey"}}/>:null}
                  {this.state.avatars[3]? <img width="100px" src={this.state.avatars[3].preview} alt="listing" style={{margin: 10, width: 200, height: 100, border:"1px solid grey"}}/>:null}
                </div>
                : null}
            </Form.Field>
            <Button type="submit">Add Listing</Button>
          </Form>

          {fireRedirect && (
            <Redirect to={'/listings'} />
          )}
        </Segment>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.usersReducer)
  return {
    host_id: state.usersReducer.user.id,
    neighbourhoods: state.neighbourhoodsReducer.neighbourhoods
  }
}

export default withAuth(connect(mapStateToProps)(CreateListingForm))
