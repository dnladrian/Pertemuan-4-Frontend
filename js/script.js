const body = document.querySelector("body");

const Header = document.createElement( "h2");

header.textContent = "Meet The Engineers";

body.appendChild(header);

function Profile() {
    return (
        <div>
            <h2>Meet The Engineers</h2>
            <ul>
                <li>Lovelace</li>
                <li>Hopper</li>
            </ul>
        </div>    
    );
}


// Ambil element id root.
const container = document.getElementById("root");

// Buat root untuk menampilkan React component.
const root = ReactDOM.createRoot(container);

// Render UI yang ingin ditampilkan
root.render(<h2>Meet The Engineers</h2>);

function Header() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

function Main(){
    return (
        <main>
            <Hello />
            <Hello />
            <Hello />
            <Hello />
            <Hello />
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <h2>Copyright @aufaroot18</h2>
            <p>Created by React.js</p> 
        </footer>
    );
}

function App() {
    return (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
    )
}

function Hello() {
    const name = "Daniel Adrian Aryasena";

    return (
        <div>
            <h2>Hello React</h2>
            <p>Saya {name} - Frontend Engineer</p>
        </div>
    );
}

function Main() {
    return (
        <main>
            {
                /**
                 * Mengirim props ke component Hello
                 * nama props: name
                 */
            }
            <Hello name="Daniel" />
            <Hello name="Mikel" />
            <Hello name="Hannah" />
            <Hello name="Jonas" />
            <Hello name="Martha" />
        </main>
    );
}

