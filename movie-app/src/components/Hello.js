function Hello(props) {
    const { name } = props;

    return (
        <div>
            <h2>Hello React</h2>
            <p>Saya { name } - Frontend Engineer</p>
        </div>
    );
}

export default Hello;

// import "./App.css";

// import Hello from "./Hello";

// function App() {
//     return (
//         <div>
//             <h2>This is Create React App</h2>
//             {/*
//                 Memanggil Component Hello
//                 Mengirim props name
//             */}
//             <Hello name="Daniel" />
//         </div>
//     );
// }

// export default App;