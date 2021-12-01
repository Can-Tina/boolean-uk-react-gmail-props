import EmailDisplay from './EmailDisplay.js'

function EmailsDisplay(props) {
    return (
    <main className="emails">
        <EmailDisplay filteredEmails={props.filteredEmails} toggleRead={props.toggleRead} toggleStar={props.toggleStar}/>
      </main>)
}

export default EmailsDisplay