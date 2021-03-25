import React from 'react';

export class User extends React.Component {
  state = {
    name: this.props.user.name, 
  }

  render() {
    const { user, onRename, onDelete } = this.props;

    return (
      <>
        {user.name}

        <form onSubmit={(event) => {
          event.preventDefault();
          onRename(user.id, this.state.name);
        }}>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => {
              this.setState({
              name: event.target.value,
              });
            }}
          />

          <button>
            Save
          </button>

          <button
            onClick={() => onDelete(user.id)}
          >
            X
          </button>
        </form>
      </>
    );
  }
}
