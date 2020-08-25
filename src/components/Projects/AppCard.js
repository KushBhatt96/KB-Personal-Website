import React from "react"

const AppCard = props => {
  return (
    <div>
      <div className="text-center">
        <h1>{props.outerTitle}</h1>
        {props.outerDescription && <h4>{props.outerDescription}</h4>}
      </div>
      <div className="row post-design shadow">
        <div className="col-xl-6 col-lg-12 text-center about-color1">
          <img
            className="mt-5 mb-5 shadow-lg project-square"
            src={props.mainImage}
          />
        </div>
        <div className="col-xl-6 col-lg-12 p-5">
          <h4>Summary</h4>
          <p className="project-p1 mb-4">{props.summary}</p>
          <h4>Front End</h4>
          <div className="container-fluid>">
            <div className="row ml-1">
              {props.FEPhoto1 && (
                <div>
                  <img className="stack-photos shadow" src={props.FEPhoto1} />
                </div>
              )}
              {props.FEPhoto2 && (
                <div>
                  <img className="stack-photos shadow" src={props.FEPhoto2} />
                </div>
              )}
              {props.FEPhoto3 && (
                <div>
                  <img className="stack-photos shadow" src={props.FEPhoto3} />
                </div>
              )}
              {props.FEPhoto4 && (
                <div>
                  <img className="stack-photos shadow" src={props.FEPhoto4} />
                </div>
              )}
              {props.FEPhoto5 && (
                <div>
                  <img className="stack-photos shadow" src={props.FEPhoto5} />
                </div>
              )}
            </div>
          </div>
          <h4>Back End</h4>
          <div className="container-fluid>">
            <div className="row ml-1">
              {props.BEPhoto1 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto1} />
                </div>
              )}
              {props.BEPhoto2 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto2} />
                </div>
              )}
              {props.BEPhoto3 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto3} />
                </div>
              )}
              {props.BEPhoto4 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto4} />
                </div>
              )}
              {props.BEPhoto5 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto5} />
                </div>
              )}
            </div>
          </div>
          <button type="button" className="btn btn-info btn-lg mt-4">
            View Project
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppCard
