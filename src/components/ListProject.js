import React,{useContext} from "react";
import "../css/list-projects.css";
import classNames from "classnames";
import { FaGithub, FaLink } from "react-icons/fa";
import { StateContext } from "../SetContext";

export default function ListProject() {
    const{project}=useContext(StateContext)

  return (
    <>
    <div className="listBox">
      {project.map((item) => {
        return (
          <>
          <div className={classNames("listContainer", { reverse:item.id%2===1 })} key={item.id}>
           
              <div className="phone">
                <img src={item.img} alt="" />
              </div>
              <article className="projectDescription">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <div className="linkProject">
                  <a href={item.git} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>

                  <a href={item.link} target="_blank" rel="noreferrer">
                    <FaLink />
                  </a>
                </div>
              </article>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
}
