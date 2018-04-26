// @flow

import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/card";

type Props = {};

type State = {
  posts: Array<{
    author: any,
    title: any,
    thumbnail: any,
    id: any
  }>
};

type Post = {
  author: string,
  title: string,
  id: number,
  thumbnail: string
};

export default class Home extends React.Component<Props, State> {
  constructor(props: Props): void {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount(): void {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
  }

  thumbnail(source: string): string {
    return source === "self" ? "https://via.placeholder.com/150x150" : source;
  }

  render(): React.Node {
    const cards = this.state.posts.map(this.createCard.bind(this));

    return <React.Fragment>{cards}</React.Fragment>;
  }

  createCard(post: Post): React.Node {
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
        imageUrl: this.thumbnail(post.thumbnail)
      },
      modifiers: { primary: true }
    };

    return (
      <Link key={post.id} to={`/r/${post.id}`}>
        <Card {...props} />
      </Link>
    );
  }
}
