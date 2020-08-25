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
            alt="One of Kush Bhatt's personal projects"
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
                  <img className="stack-photos shadow" src={props.FEPhoto1} alt="Icon of a programming language or technology part of the project stack"/>
                </div>
              )}
              {props.FEPhoto2 && (
                <div>
                  <img className="stack-photos shadow" src={props.FEPhoto2} alt="Icon of a programming language or technology part of the project stack"/>
                </div>
              )}
              {props.FEPhoto3 && (
                <div>
                  <img className="stack-photos shadow" src={props.FEPhoto3} alt="Icon of a programming language or technology part of the project stack"/>
                </div>
              )}
              {props.FEPhoto4 && (
                <div>
                  <img className="stack-photos shadow" src={props.FEPhoto4} alt="Icon of a programming language or technology part of the project stack"/>
                </div>
              )}
              {props.FEPhoto5 && (
                <div>
                  <img className="stack-photos shadow" src={props.FEPhoto5} alt="Icon of a programming language or technology part of the project stack"/>
                </div>
              )}
            </div>
          </div>
          <h4>Back End</h4>
          <div className="container-fluid>">
            <div className="row ml-1">
              {props.BEPhoto1 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto1} alt="Icon of a programming language or technology part of the project stack"/>
                </div>
              )}
              {props.BEPhoto2 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto2} alt="Icon of a programming language or technology part of the project stack"/>
                </div>
              )}
              {props.BEPhoto3 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto3} alt="Icon of a programming language or technology part of the project stack"/>
                </div>
              )}
              {props.BEPhoto4 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto4} alt="Icon of a programming language or technology part of the project stack"/>
                </div>
              )}
              {props.BEPhoto5 && (
                <div>
                  <img className="stack-photos shadow" src={props.BEPhoto5} alt="Icon of a programming language or technology part of the project stack"/>
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
