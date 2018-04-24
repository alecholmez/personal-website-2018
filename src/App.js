import React, {
    Component
} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
              <div className="uk-background-cover background" data-uk-height-viewport></div>
              <div className="uk-padding-large">
                  <p className="uk-text-large uk-text-meta">Alec Holmes</p>
                  <h1 className="uk-heading-primary uk-margin-large uk-margin-remove-bottom">Programmer. Gentlemen. Moto Enthusiast.</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <hr className="uk-margin-large-top"/>

                  <div className="uk-section uk-section-default">
                    <div className="uk-child-width-expand" data-uk-grid>
                      <div>
                        <h4 className="uk-text-meta">Connect</h4>
                        <ul className="uk-list">
                          <li>Twitter</li>
                          <li>Facebook</li>
                          <li>Github</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="uk-text-meta">Connect</h4>
                        <ul className="uk-list">
                          <li>Twitter</li>
                          <li>Facebook</li>
                          <li>Github</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="uk-text-meta">Connect</h4>
                        <ul className="uk-list">
                          <li>Twitter</li>
                          <li>Facebook</li>
                          <li>Github</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="uk-text-meta">© 2018 - Alec Holmes</p>
              </div>
            </div>
        );
    }
}

export default App;