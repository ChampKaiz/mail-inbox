import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import data from "./mail.json";
import { stringify } from "css";

class App extends Component {
  state = {
    mails: []
  };
  componentDidMount() {
    this.setState({ mails: data }); //รับข้อมูล e-mail จากไฟล์ mail.json
  }
  render() {
    return (
      //navigation bar
      <div className="main">
        <div className="navbar bg-light">
          <h3>Inbox</h3>
          <h3 style={{ textAlign: "right", color: "rgb(56, 151, 240)" }}>
            filter <i class="arrow down"></i>
          </h3>
        </div>
        {/*map ข้อมูลใน array ของตัวแปล mails ออกมาทีละชุดๆ*/}
        {this.state.mails.map(mail => (
          <div>
            <article class="mail row">
              <div class="circle">
                {/*วงกลมหน้าเมล */}
                <h1>{mail.from.name.substring(0, 1)}</h1>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h5>
                  {mail.from.name} <br />{" "}
                </h5>
                <h5>
                  {mail.subject} <br />{" "}
                </h5>
                <p>
                  {mail.body} <br />
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
