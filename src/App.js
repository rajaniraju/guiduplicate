import Graph from "./components/ClinicalDisplay";
import "./App.css";

import ClinicalDisplay from "./components/ClinicalDisplay";

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">VentMon Respiration Analysis</h1>
        <p className="lead">
          This is a work in progress of{" "}
          <a href="https://www.pubinv.org">Public Invention</a>. It can be
          attached to a data server to produce an interactive or static analysis
          of a respiration. It&#39;s primary purpose is to test pandemic
          ventilators, but it is free software meant to be reused for other
          purposes.
        </p>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            PIRDS data server url:
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="dserverurl"
          aria-describedby="basic-addon3"
        />

        <div className="input-group-append">
          <a
            className="btn btn-outline-dark btn-sm"
            href="#"
            role="button"
            id="useofficial"
          >
            Use Ventmon Data Lake: ventmon.coslabs.com
          </a>
        </div>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Trace ID:
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="traceid"
          aria-describedby="basic-addon3"
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" htmlFor="samples_to_plot">
            Number of Samples (~10s per 15000 samples):
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="samples_to_plot"
          aria-describedby="samples_to_plot"
        />
      </div>

      <div>
        <label htmlFor="livetoggle">Plot Live:</label>
        <label className="switch">
          <input type="checkbox" id="livetoggle" checked />
          <span className="slider round"></span>
        </label>

        <label htmlFor="displaytoggle">Clinical Display:</label>
        <label className="switch">
          <input type="checkbox" id="displaytoggle" />
          <span className="slider round"></span>
        </label>

        {/* <div id="leftjustify">
          <button type="button" class="btn btn-primary">
            5s
          </button>
          <button type="button" class="btn btn-primary">
            10s
          </button>
          <button type="button" class="btn btn-primary">
            15s
          </button>
          <button type="button" class="btn btn-primary">
            30s
          </button>
          <button type="button" class="btn btn-primary">
            60s
          </button>
          <button type="button" class="btn btn-primary">
            120s
          </button>
          <button type="button" class="btn btn-primary">
            180s
          </button>
          <button type="button" class="btn btn-primary">
            300s
          </button>
        </div> */}
      </div>
      <ClinicalDisplay />
    </div>
  );
}

export default App;
