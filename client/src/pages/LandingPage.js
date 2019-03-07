import React from "react";
import "./LandingPage.scss";
import Task from "./TaskPage";
import QuoteMachine from "../components/QuoteMachine"

var projectList = [
  {
    title: "Student Login",
    index: "1",
    summary: "Login and check your goals!",
    href: Task,
  },
  {
    title: "Mentor Login",
    index: "2",
    summary: "Login here and check up on your Student"
  },
  {
    title: "About Us",
    index: "3",
    summary: "Who we are and what we do."
  }
];

const toggleClassName = (element, className) => {
  element.classList.contains(className)
    ? element.classList.remove(className)
    : element.classList.add(className);
};

// const changeClassName = (element, newClassName) => {
//   console.log(element.className, element.className === newClassName);
//   (element.className = newClassName);
// };

const MenuIcon = props => {
  const toggleStyleAttribute = (
    element,
    styleAttribute,
    attributeOn,
    attributeOff
  ) => {
    element.style[styleAttribute] === attributeOff
      ? (element.style[styleAttribute] = attributeOn)
      : (element.style[styleAttribute] = attributeOff);
  };
  const handleClick = e => {
    e.preventDefault();
    const _this = e._targetInst;
    const _reactElement = _this._currentElement;
    const _index = _reactElement.props.index;

    let _menuIconLinkNode = _this._hostParent._hostNode;
    let _projectTitleLinkNode = _menuIconLinkNode.previousSibling;
    let _projectSummaryDiv =
      _this._hostParent._hostParent._hostParent._hostNode.nextSibling;
    let _projectSummaryDividerSpan =
      _projectSummaryDiv.firstChild.childNodes[1];
    const _linkNewClassName = _menuIconLinkNode.id + "-current";
    toggleClassName(_menuIconLinkNode, _linkNewClassName);
    toggleClassName(_projectTitleLinkNode, _linkNewClassName);
    const _currentColor = _projectTitleLinkNode.style;
    console.log(_currentColor);
    toggleStyleAttribute(_projectSummaryDiv, "display", "none", "inline-block");
    toggleClassName(_projectSummaryDividerSpan, "project-divider-" + _index);
  };

  return (
    <a
      index={props.index}
      href={props.href}
      className="menu-icon"
      id={props.id}
      onClick={handleClick}
    >
      <i index={props.index} className="fa fa-angle-down" />
    </a>
  );
};

const Project = props => {
  const project = props.project;
  return (
    <section index={props.index}>
      <div index={props.index} className="project-title">
        <h2 index={props.index} className={props.h2ClassName} id={props.h2Id}>
          <span className="breakline-listener" id={props.listenerId}>
            <a index={props.index} href={props.href}>
              {project.title}{" "}
            </a>
          </span>
          <MenuIcon index={props.index} id={props.menuId} />
        </h2>
      </div>
      <div className="mask" index={props.index}>
        <div className="project-summary" index={props.index}>
          <p index={props.index}>{project.summary}</p>
          <span index={props.index} className="project-divider" />
          <h6 index={props.index} className="project-tools">
            {project.tools}
          </h6>
        </div>
      </div>
    </section>
  );
};

class ProjectList extends React.Component {
//   componentDidMount() {
//     // this.addBreaklineListeners();
//     this.testBreak();
//   }

//   addBreaklineListeners() {
//     let breaklineElement = document.getElementById("breakline0");
//     // console.log('firs', document.getElementById('pageTitleH10').firstChild.textContent)
//     let pageTitleElement = document.getElementById("pageTitleH10").firstChild;
//     Array.prototype.forEach.call(
//       document.getElementsByClassName("breakline-listener"),
//       listenerElement => {
//         listenerElement.addEventListener(
//           "mouseover",
//           e => {
//             e.preventDefault();
//             let titleTextContent = document
//               .getElementById("pageTitleH10")
//               .firstChild.textContent.split("");
//             const breaklineNewClassName =
//               "breakline-" +
//               listenerElement.id.slice(listenerElement.id.length - 1);
//             this.setState({ breaklineCurrentClassName: breaklineNewClassName });
//             changeClassName(breaklineElement, breaklineNewClassName);

//             const colorClassNameNew =
//               colorClassNames[
//                 Math.floor(Math.random() * colorClassNames.length)
//               ];
//             let insertOpen = [
//               "<span class='listenRandom ",
//               colorClassNameNew,
//               "'>"
//             ].join("");
//             const insertClose = "</span>";
//             // increment instead of random
//             const getEntryPoint = array => {
//               const ran = Math.floor(Math.random() * array.length);
//               const _entryPoint =
//                 array[ran] === " " ? getEntryPoint.call(array) : ran;
//               return _entryPoint;
//             };
//             const entryIndex = getEntryPoint(titleTextContent);
//             // console.log('text', titleTextContent);
//             // console.log('entryIndex,', entryIndex, 'text[entry]: ', titleTextContent[entryIndex], 'last,', titleTextContent[titleTextContent.length-1]);
//             titleTextContent.splice(
//               entryIndex,
//               1,
//               insertOpen,
//               titleTextContent[entryIndex],
//               insertClose
//             );
//             pageTitleElement.innerHTML = titleTextContent.join("");
//             titleTextContent = document
//               .getElementById("pageTitleH10")
//               .textContent.split("");
//             console.log(titleTextContent);
//           },
//           false
//         );
//       }
//     );
//   }

  render() {
    return (
      <section>
        {projectList.map((project, index) => {
          return (
            <Project
              index={index + 1}
              project={project}
              h2ClassName={
                "title project-title project-title-" + (index + 1).toString()
              }
              h2Id={"projectTitle" + (index + 1).toString()}
              listenerId={"breaklineListener" + (index + 1).toString()}
              href="#"
              menuId={"project-" + (index + 1).toString() + "-menu"}
            />
          );
        })}
      </section>
    );
  }
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breaklineCurrentClassName: "breakline-0"
    };
  }

  componentDidMount() {}

  handler() {}

  render() {
    // eslint-disable-next-line
    const { children } = this.props;
    return (
      <main>
        <div className="page-title" id="pageTitle">
          <h1 className="page-title-h1" id="pageTitleH10">
            <span className="title breakline-listener" id="pageTitle0">
              KEEP GOING
            </span>
          </h1>

          <span className="breakline-0" id="breakline0" />
        </div>

        <ProjectList projects={projectList} />
        <QuoteMachine />
      </main>
    );
  }
}

export default LandingPage;