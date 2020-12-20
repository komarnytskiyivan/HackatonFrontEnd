import React, { Component } from 'react';
import PropTypes from 'prop-types';
import places from 'places.js';
import connect from './connector';

class Places extends Component {
  static propTypes = {
    refine: PropTypes.func.isRequired,
    defaultRefinement: PropTypes.object.isRequired,
  };

  createRef = c => (this.element = c);

  componentDidMount() {
    const { refine, defaultRefinement } = this.props;

    const autocomplete = places({
      container: this.element,
    });

    autocomplete.on('change', event => {
      console.log("*************")
      console.log(event.suggestion)
      refine(event.suggestion);
    });

    autocomplete.on('clear', () => {
      refine(defaultRefinement);
    });
  }

  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <input
          ref={this.createRef}
          type="search"
          id="address-input"
          placeholder="Введіть адресу"
        />
      </div>
    );
  }
}

export default connect(Places);
