import "../Styles/sideMenu.css";

export default function SideMenu() {
  return (
    <div className="tags">
      <div
        className="issue-tags issueSixLink"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.querySelector("#issue6").offsetTop,
            behavior: "smooth"
          });
        }}
      >
        Issue 6
      </div>

      <div
        className="issue-tags issueFiveLink"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.querySelector("#issue5").offsetTop,
            behavior: "smooth"
          });
        }}
      >
        Issue 5
      </div>

      <div
        className="issue-tags issueFourLink"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.querySelector("#issue4").offsetTop,
            behavior: "smooth"
          });
        }}
      >
        Issue 4
      </div>

      <div
        className="issue-tags issueThreeLink"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.querySelector("#issue3").offsetTop,
            behavior: "smooth"
          });
        }}
      >
        Issue 3
      </div>

      <div
        className="issue-tags issueTwoLink"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.querySelector("#issue2").offsetTop,
            behavior: "smooth"
          });
        }}
      >
        Issue 2
      </div>

      <div
        className="issue-tags issueOneLink"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.querySelector("#issue1").offsetTop,
            behavior: "smooth"
          });
        }}
      >
        Issue 1
      </div>
    </div>
  );
}
