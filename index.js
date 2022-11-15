
function Navbar() {
  return (
  <header> 
    <nav>
      <img src="./React-icon.svg.png" width="40px"/>
      <h1>Navbar</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
  )
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
)}

function Footer() {
  return <footer><small>© 2022 Doorenbosch development. All rights reserved.</small></footer>
}

const page = (
  <div>
    <Navbar />
    <List />
    <Footer />
  </div>
)



ReactDOM.render(page
  , document.getElementById("root"))
