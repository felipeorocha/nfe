import React, { Component } from 'react';
import PromoCard from './PromoCard';
import Loader from './Loader';
import './PromoList.css';

class PromoList extends Component {
  state = {
    selectedPromos: [],
    added: [],
    totalAmount: '',
    price: 0.09
  };

  count = 0;

  handleAddFunc = product => {
    const { id } = product;
    const exists = this.state.selectedPromos.find(item => item.id === id);

    if (!exists) {
      this.setState({ selectedPromos: [...this.state.selectedPromos, product], added: [...this.state.added, id] });
    }

    const total = this.state.price * this.state.added.length;
    const consults = this.count++;
    console.log(consults)

    if (consults < 5) {
      this.setState({ price: 0.09 })
    } else {
      this.setState({ price: 0.25 })
    }

    this.setState({ totalAmount: total }, () => {
      console.log(this.state.totalAmount);
    });
  }

  render() {
    if (this.props.loading) {
      return (
        <Loader />
      );
    }

    const promoItem = this.props.promos.map(item => {
      return <PromoCard
              key={item.id}
              title={item.title}
              content={item.body}
              id={item.id}
              price={this.state.price}
              addFunc={this.handleAddFunc}
              added={this.state.added.indexOf(item.id)!==-1}
            />
    });

      return <div className="promo-list-container">{promoItem}</div>;
    }

}

export default PromoList;
