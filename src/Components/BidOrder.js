import React from 'react';
import AbstractOrder from './AbstractOrder';

class BidOrder extends AbstractOrder {

  render() {
    return (
      <tr className="bid">
        <td className="fill-bid" style={{backgroundSize: this.getPercentage() + "% 100%"}}>$
          {this.props.cumulative.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
        </td>
      </tr>
    );
  }
}

export default BidOrder;
