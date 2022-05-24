import './index.css'

const HistoryItems = props => {
  const {historyLists, deleteUserHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyLists

  const onDeleteHistory = () => {
    deleteUserHistory(id)
  }

  return (
    <li className="history-list-items">
      <p className="time">{timeAccessed}</p>
      <div className="history-block">
        <div className="app-app-name">
          <img src={logoUrl} alt="domain logo" className="app-image" />
          <div className="name-url-container">
            <p className="app-name">{title}</p>
            <p className="url-link">{domainUrl}</p>
          </div>
        </div>
        <button
          onClick={onDeleteHistory}
          type="button"
          testid="delete"
          className="custom-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete-icon"
            className="delete-icon"
            // onClick={onDeleteHistory}
          />
        </button>
        {/* <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete-icon"
          className="delete-icon"
          onClick={onDeleteHistory}
        /> */}
      </div>
    </li>
  )
}

export default HistoryItems
