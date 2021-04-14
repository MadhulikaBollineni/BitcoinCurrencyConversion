import React from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Moment from "moment";

const chartState = {
  labels: [],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "rgb(178, 255, 195)",
      borderColor: "rgb(0, 178, 39)",
      pointRadius: 0,
      data: []
    }
  ]
};

const current = new Date();
const endDate = Moment(`${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`).format("YYYY-MM-DD");
current.setDate(current.getDate() - 60);
const startDate = Moment(`${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`).format("YYYY-MM-DD");

export default class CurrencyChart extends React.Component {
  componentDidMount() {
    axios
      .get(
        "https://api.coindesk.com/v1/bpi/historical/close.json?currency=" +
          this.props.currencySelected +
          "&start=" +
          startDate +
          "&end=" +
          endDate
      )
      .then(response => {
        this.graphData(response.data.bpi);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get(
        "https://api.coindesk.com/v1/bpi/historical/close.json?currency=" +
          this.props.currencySelected +
          "&start=" +
          startDate +
          "&end=" +
          endDate
      )
      .then(response => {
        this.graphData(response.data.bpi);
      })
      .catch(error => {
        console.log(error);
      });
  }

  graphData = data => {
    let x = [];
    let y = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        x.push(key);
        y.push(parseInt(data[key]));
      }
    }
    chartState.labels = x;
    chartState.datasets[0].data = y;
  };

  render() {
    return (
      <React.Fragment>
        {this.props.currencySelected ? (
          <div>
            <Line
              data={chartState}
              options={{
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        color: "rgba(0, 0, 0, 0)"
                      }
                    }
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        color: "rgba(0, 0, 0, 0)"
                      }
                    }
                  ]
                },
                title: {
                  display: true,
                  text: "Last 60 Days trend",
                  fontSize: 20
                },
                legend: {
                  display: false,
                  position: "right"
                }
              }}
              dot={false}
              showMarker={false}
            />
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
