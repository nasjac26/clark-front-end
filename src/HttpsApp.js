import HttpsRedirect from 'react-https-redirect';
import App from './App'

// you can just wrap your entire app to redirect it to the equivalent https version
// for example:
// http://example.com/    =>    https://example.com/

// you can also use a "disabled" prop to dinamically disable it
// <HttpsRedirect disabled={...}>

function HttpsApp() {
    return (
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
    );
}

export default HttpsApp;