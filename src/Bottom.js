import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import { Link } from 'react-router-dom';
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';

class Bottom extends Component {
  render() {
    return (
      <>
   <section>
          <div className="fixed-action-btn vertical">
            <a className="btn-floating btn-large red pulse">
              <i className="large material-icons">mode_edit</i>
            </a>
            <ul>
              <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a>
              </li>
              <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a>
              </li>
              <li><a className="btn-floating green"><i className="material-icons">publish</i></a>
              </li>
              <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a>
              </li>
            </ul>
          </div>
      </section>
       
                  </>
    );
  }
}
export default Bottom;

