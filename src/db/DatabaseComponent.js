// import React, { Component } from "react";
import axios from "axios";

export function getMysql() {
  axios
    .get("http://localhost:5000/api/data")
    .then((response) => {
      this.setState({ data: response.data });
      console.log(this.state.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export function postMysql(data) {
  axios
    .post("http://localhost:5000/api/data", data)
    .then((response) => {
      console.log("Data added successfully");
      this.getMysql();
    })
    .catch((error) => {
      console.error("Error adding data:", error);
    });
}

// class DatabaseComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   componentDidMount() {}

//   render() {
//     const { data } = this.state;

//     return (
//       <div>
//         <h1>Data from MySQL</h1>
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.nombre}</li>
//           ))}
//         </ul>
//         <button onClick={this.getMysql}>Get Mysql</button>
//       </div>
//     );
//   }
// }

// export default DatabaseComponent;
