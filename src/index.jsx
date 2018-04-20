import React from 'react';
import ReactDOM from 'react-dom';
import createCard from './card.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get(`http://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
      console.log(this.state.posts);
    });
  }

  thumbnail(source) {
    return source === 'self' ? 'https://via.placeholder.com/150x150' : source;
  }

  render() {
    const cards = this.state.posts.map(post => {
      const Card = createCard(
        <React.Fragment>
          <h1>{post.author}</h1>
          <p>{post.title}</p>
        </React.Fragment>,
      );

      return <Card key={post.id} src={this.thumbnail(post.thumbnail)} />;
    });

    return <React.Fragment>{cards}</React.Fragment>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
