import React, { Component, PropTypes } from 'react';
 
export default class Category extends Component {
  render() {
    return (
		<option value={this.props.category.nome}>{this.props.category.nome}</option>
    );
  }
}
 
Category.propTypes = {
  // This component gets the category to display through a React prop.
  // We can use propTypes to indicate it is required
  category: PropTypes.object.isRequired,
};