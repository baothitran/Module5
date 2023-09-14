const handleLogin = () => {
    alert(JSON.stringify(
        {
            "email": document.querySelector('#email').value,
            "password": document.querySelector('#password').value
        }
    ))
}

const loginForm = (
    <form method="GET" action="#">
        <div>
            <label className="form-label">Email</label>
            <input type="text" id="email" />
        </div>
        <div>
            <label className="form-label">Password</label>
            <input type="password" id="password" />
        </div>
        <button type="button" onClick={handleLogin}
            style={{
                background: "red",
                color: "white",
                padding: "5px 20px"
            }}
        > Login
        </button>
    </form>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(loginForm);