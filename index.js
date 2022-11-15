function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img src="./React-icon.svg.png" />
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Title() {
  return <h1>React is cool</h1>;
}
function List() {
  return (
    <ol>
      <li>It's composable</li>
      <li>React is declerative</li>
      <li>React is being maintained by my favourite company</li>
      <li>Seems to make you hireable</li>
      <li>Looks cool</li>
    </ol>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Doorenbosch development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
      <React.Fragment>
      <Header />
      <div className = "main">
        <Title />
        <List />
      </div>
      <Footer />
      </React.Fragment>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"));
