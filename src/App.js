import {Component} from 'react'

import './App.css'

import HistoryItems from './Components/HistoryItems/index'

// These are the list used in the application. You can move them to any component needed.
export const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
// const App = () => <BrowserHistory initialHistoryList={initialHistoryList} />

class App extends Component {
  state = {searchInput: '', searchHistory: initialHistoryList}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {searchHistory} = this.state
    const filteredHistory = searchHistory.filter(each => each.id !== id)
    this.setState({searchHistory: filteredHistory})
  }

  render() {
    const {searchInput, searchHistory} = this.state
    const searchResult = searchHistory.filter(eachApp =>
      eachApp.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="content-container">
          <div className="nav-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="brand-logo"
            />
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search history"
                className="search-bar"
                value={searchInput}
                onChange={this.onSearchInput}
                deleteHistory={this.deleteHistory}
              />
            </div>
          </div>
          {searchHistory.length === 0 || searchResult.length === 0 ? (
            <p className="no-items">There is no history to show</p>
          ) : (
            <ul className="history-container">
              {searchResult.map(eachHistory => (
                <HistoryItems
                  key={eachHistory.id}
                  historyLists={eachHistory}
                  deleteUserHistory={this.deleteHistory}
                />
              ))}
            </ul>
          )}
          {/* {searchResult.length === 0 && (
            <div className="no-item-container">
              <p className="no-items">There is no history to show</p>
            </div>
          )} */}

          {/* <ul className="history-container">
            {searchResult.map(eachHistory => (
              <HistoryItems
                key={eachHistory.id}
                historyLists={eachHistory}
                deleteUserHistory={this.deleteHistory}
              />
            ))}
          </ul> */}
        </div>
      </div>
    )
  }
}

export default App
