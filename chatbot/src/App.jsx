import SendbirdApp from '@sendbird/uikit-react/App';
import '@sendbird/uikit-react/dist/index.css';
import "./App.css";

const App = () => {
    const appId = import.meta.env.VITE_APP_ID;
    const userId = import.meta.env.VITE_USER_ID;

    return (
        <div className="App">
            <SendbirdApp
                appId={appId}   // Use environment variable for Sendbird application ID
                userId={userId} // Use environment variable for user ID
            />
        </div>
    );
};

export default App;
