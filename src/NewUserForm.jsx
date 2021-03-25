import React from 'react';

export class NewUserForm extends React.Component {
  state = {
    username: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.username) {
      return;
    }

    this.props.onAdd(this.state.username); 

    this.setState({username: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a name"
          value={this.state.username}
          onChange={(event) => {
            this.setState(({
              username: event.target.value,
            }));
          }}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}