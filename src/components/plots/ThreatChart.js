import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Plotly from 'plotly.js';

class ThreatChart extends React.Component {

  constructor () {
    super();
    this.state={};
  }

  // data should be an array of track and truth data
  // filtered by a track id
  static propTypes = {
    data: PropTypes.object,
    title: PropTypes.string
  }

  componentDidMount () {
    const plotDiv = ReactDOM.findDOMNode(this);
    this.setState({
      plotDiv
    });
    Plotly.newPlot(plotDiv, this.createPlotData(this.props.data), this.createLayout());
  }

  createPlotData (data) {
    return [{
      values: [data.airThreats.value],
      labels: [data.airThreats.label],
      text: [data.airThreats.label],
      annotations: {
        xanchor: 'center',
        color: '#ffff'
      },
      hoverinfo: 'label+value',
      hole: 0.6,
      type: 'pie',
      name: 'All Threats'
    }];
  }

  createLayout () {
    const { title } = this.props;
    return {
      title,
      height: 300,
      width: 300,
      margin: {
        t: 0,
        b: 0,
        l: 20,
        r: 20
      },
      hoverinfo: 'label+name',
      showlegend: false
    };
  }

  config = {
    showLink: false,
    displayModeBar: true
  };

  render () {
    return (
      <div />
    );
  }
}

export default ThreatChart;