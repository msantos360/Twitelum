import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'

class HomePage extends Component {

    constructor(){
            super();
            this.state = { novoTweet: "",
            tweets: []
        }
    }

    adicionaTweet = (infosDoEvento) => {
        infosDoEvento.preventDefault();
        
        if(this.state.novoTweet.length > 0) {
            this.setState({
                tweets: [this.state.novoTweet, ...this.state.tweets],
                novoTweet: ""
            });
        }
    }

    mapTweets = () => {
        const { tweets } = this.state

        if( tweets.length ){
            return tweets.map((tweetInfo, index) => <Tweet
              key={ tweetInfo + index }
              texto={ tweetInfo }  
            />)
        }

        return <p>Post um novo tweet!</p>

    }

  render() {
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@msantos" />
        </Cabecalho>
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="novoTweet" onSubmit={ this.adicionaTweet }>
                        <div className="novoTweet__editorArea">
                            <span className={`novoTweet__status}
                                ${
                                    this.state.novoTweet.length > 140
                                    ? 'novoTweet__status--invalido':''
                                }
                                `
                            }>
                                { this.state.novoTweet.length }/140
                                </span>
                            <textarea
                                className="novoTweet__editor"
                                value={ this.state.novoTweet }
                                onChange={ (event) => this.setState({ novoTweet: event.target.value})}
                                placeholder="O que está acontecendo?">
                            </textarea>
                        </div>
                        <button type="submit" className="novoTweet__envia"
                            disabled={ this.state.novoTweet.length > 140 || this.state.novoTweet.length === 0 }
                            type="submit">
                            Tweetar
                        </button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                    { this.state.tweets.map(
                        (tweetInfo, index) => {
                            return <Tweet key={ tweetInfo + index }
                            texto={ tweetInfo } />
                        }
                    )}
                </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
