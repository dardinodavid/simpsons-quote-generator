import React, { Component } from 'react';
import { Spring } from 'react-spring';
import { Transition, animated } from 'react-spring';
import Quote from './components/Quote';
import Button from './components/Button';
import SiteHeading from './components/SiteHeading';
import SiteFooter from './components/SiteFooter'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          quote: '',
          author: ''
        }
        this.getQuote = this.getQuote.bind(this);
        this.getQuote();
    }

    getQuote(){
      var xmlr = new XMLHttpRequest();
      xmlr.onreadystatechange = function(){
          if(xmlr.readyState == 4 && xmlr.status == 200){
            var test = JSON.parse(xmlr.responseText);
            this.setState({quote : test[0]['quote'], author : test[0]['character']})
          };
      }.bind(this);
      xmlr.open("GET", "https://thesimpsonsquoteapi.glitch.me/quotes", true);
      xmlr.send();
    }

    render() {

        return (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 500 }}>
            {props =>
              <div id="quote-box" style={props} className="container">
                <SiteHeading />
                <main>
                    <div id="quote">
                      <Transition
                      native
                      items={this.state.quote}
                      from={{ opacity: 0 }}
                      enter={{ opacity: 1 }}
                      leave={{ display: 'none' }}
                      >
                        {item =>
                         (props => (
                            <animated.div style={props}>
                              <Quote quote={this.state.quote} author={this.state.author} />
                            </animated.div>
                            ))
                        }
                    </Transition>
                  </div>
                  <div id="buttons">
                    <Button id="new-quote" clicked={this.getQuote} icon="fas fa-quote-right" text="Next Quote" />
                    <Button id="tweet-quote" icon="fab fa-twitter" text="Tweet Quote" link={`https://twitter.com/intent/tweet?text="${this.state.quote}" ${this.state.author}`} linkTarget="_blank" />
                  </div>
                </main>
                <SiteFooter />
              </div>
            }
          </Spring>
        );
    }
}

export default App;
