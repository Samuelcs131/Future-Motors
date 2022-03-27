const Loading = () => {
    return ( 
        <div id="loading">
            <svg width="205" height="250" viewBox="0 0 40 50">
                <polygon strokeWidth="1" stroke="#fff" fill="none" points="20,1 40,40 1,40"></polygon>
                <text fill="#fff" x="5" y="50">Loading</text>
            </svg>
        </div>
    );
}

export default Loading;