body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
}
.chat-container {
    width: 400px;
    margin: 40px auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 20px;
}
#chat-log {
    height: 300px;
    overflow-y: auto;
    border: 1px solid #eee;
    padding: 10px;
    margin-bottom: 10px;
    background: #fafafa;
}
.user, .bot {
    margin: 8px 0;
}
.user {
    text-align: right;
    color: #0078d7;
}
.bot {
    text-align: left;
    color: #222;
}
#chat-form {
    display: flex;
}
#user-input {
    flex: 1;
    padding: 8px;
}
button {
    padding: 8px 16px;
    background: #0078d7;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}