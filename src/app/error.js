"use client"
const ErrorPage = ({ error, reset }) => {
    return (
        <div>
            Error Page.....
            <h1>{error.message}</h1>

            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
};

export default ErrorPage;