import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/200w.webp?cid=ecf05e47096d602b9c8c23f27ea19a222d6af31bd8a9ff09&rid=200w.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
