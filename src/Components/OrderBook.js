import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AskOrder from './AskOrder';
import BidOrder from './BidOrder';


class OrderBook extends Component {

    render() {
        function sumQuantities(orders) {
            return orders.reduce((total, order) => total + order.quantity, 0);
        }

        let totalAsks = sumQuantities(this.props.askOrders);
        let totalBids = sumQuantities(this.props.bidOrders);
        let maxCumulative = Math.max(totalAsks, totalBids);

        let deepCopyArrayOfObj = (arr => arr.map(order => Object.assign({}, order)));

        // Deep copy and sort orders
        let askOrders = deepCopyArrayOfObj(this.props.askOrders).sort((a, b) => a.price > b.price); // ascending order
        let bidOrders = deepCopyArrayOfObj(this.props.bidOrders).sort((a, b) => a.price < b.price); // descending order


        function renderOrders(ComponentClass, orders) {
            let cumulative = 0;
            return orders.map((order, index) => {
                order.cumulative = (cumulative += order.quantity);
                order.maxCumulative = maxCumulative;
                return (<ComponentClass key={index} {...order} />);
            });
        }

        return (
            <div className="OrderBook">
            <div className="box">
                <div className="b2">
                    <div className="row">
                        {/*<div className="col-xs-3 s1hide">*/}
                            {/*<table>*/}
                                {/*<tbody>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+5.0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+4.5</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+4.0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+3.5</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+3.0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+2.5</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+2.0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+1.5</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+1.0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="ask">*/}
                                    {/*<td className="fill-ask">+0.5</td>*/}
                                {/*</tr>*/}
                                {/*</tbody>*/}
                            {/*</table>*/}
                        {/*</div>*/}
                        <div className="col-xs-9 s1hide">
                            <table>
                                <tbody>
                                {renderOrders(BidOrder, bidOrders).reverse()}
                                </tbody>
                            </table>
                        </div>
                        {/*<div className="col-xs-3 s9hide">*/}
                            {/*<table>*/}
                                {/*<tbody>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">-0.5</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">-1.0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">-1.5</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">-2.0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">-2.5</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">-3.0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">-3.5</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">-4.0</td>*/}
                                {/*</tr>*/}
                                {/*<tr className="bid">*/}
                                    {/*<td className="fill-bid">-4.5</td>*/}
                                {/*</tr>*/}

                                {/*</tbody>*/}
                            {/*</table>*/}
                        {/*</div>*/}

                        <div className="col-xs-9 s9hide">
                            <table>
                                <tbody>
                                {renderOrders(AskOrder, askOrders)}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        );
    }
}

OrderBook.propTypes = {
    askOrders: PropTypes.array,
    bidOrders: PropTypes.array
};

export default OrderBook;
