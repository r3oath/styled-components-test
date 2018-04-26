import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Card from './card';
import axios from 'axios';

type Props = {};
type State = {
  posts: Array<{
    author: any, 
    title: any, 
    thumbnail: any,
    id: any,
  }>
};

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
  }

  thumbnail(source: string) : string {
    return source === 'self' ? 'https://via.placeholder.com/150x150' : source;
  }

  render() {
    const cards = this.state.posts.map(post => {
      const props = {
        content: {
          primary: (
            <React.Fragment>
              <h1>{post.author}</h1>
              <p>{post.title}</p>
            </React.Fragment>
          ),
          metadata: (
            <React.Fragment>
              <small>{post.id}</small>
            </React.Fragment>
          ),
          imageUrl: this.thumbnail(post.thumbnail),
        },
        modifiers: { primary: true },
      };

      return (
        <Link key={post.id} to={`/r/${post.id}`}>
          <Card {...props} />
        </Link>
      ); 
    });

    return (
      <Router>
        <React.Fragment>
          <Route exact={true} path="/" render={() => (
            <React.Fragment>{cards}</React.Fragment>
          )} />
          <Route path="/r/:postId" render={() => (
            <h1>Viewing post</h1>
          )} />
        </React.Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

