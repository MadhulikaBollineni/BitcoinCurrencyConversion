import React from "react";
import { fetchData } from "./Action";
import { connect } from "react-redux";
import { Button, Divider } from "antd";
import "./MainPage.css";
import CurrencyChart from "./CurrencyChart";

class MainPage extends React.Component {
  state = {
    bitCoinValue: this.props.posts.posts.posts
      ? this.props.posts.posts.posts.USD.rate + " USD"
      : "",
    currencySelected: "USD"
  };
  componentDidMount = () => {
    this.props.fetchData();
  };

  onClick = () => {
    this.props.fetchData();
  };

  handleChangeCurrency = e => {
    setTimeout(() => {
      switch (e.target.value) {
        case "USD":
          this.setState({
            bitCoinValue: this.props.posts.posts.posts.USD.rate + " USD",
            currencySelected: "USD"
          });
          break;
        case "GBP":
          this.setState({
            bitCoinValue: this.props.posts.posts.posts.GBP.rate + " GBP",
            currencySelected: "GBP"
          });
          break;
        case "EUR":
          this.setState({
            bitCoinValue: this.props.posts.posts.posts.EUR.rate + " EUR",
            currencySelected: "EUR"
          });
          break;
      }
    }, 1000);
  };

  render() {
    const { posts } = this.props.posts;
    return (
      <React.Fragment>
        <div className="main-page">
          <div style={{ paddingBottom: "1vw" }}>1 Bitcoin Equals</div>
          <select onChange={this.handleChangeCurrency}>
            <option value="USD">United States Dollar</option>
            <option value="GBP">British Pound Streling</option>
            <option value="EUR">Euro</option>
          </select>
          <h2>{this.state.bitCoinValue}</h2>
        </div>
        <div className="graph-page">
          <CurrencyChart currencySelected={this.state.currencySelected} />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { posts: state };
};
const mapDispatchToProps = { fetchData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);