import { useEffect, useRef } from "react";
import "../Styles/main.scss";
import { data } from "./data";
// import useScrollSnap from "react-use-scroll-snap";
import SideMenu from "./sideMenu.js";

export default function Main() {
  const GroupRef = useRef([]);
  const scrollRef = useRef([]);

  // useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 }); //This gives you the scroll snap effect

  const onScroll = (el) => {
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();

        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    document.body.style.color = `${styles.group.dataset.txtcolor}`;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={scrollRef} style={{ height: "100vh", width: "100vw" }}>
      <h1 style={{ color: "black" }}>BACKSTAGE TALKS</h1>

      <SideMenu />

      {data.map((
        group,
        i //maping to the data in data.js
      ) => (
        <div className="container">
          <div
            id={group.id}
            ref={(el) => (GroupRef.current[i] = el)} //Referencing the current object
            style={{
              paddingTop: "40px",
              paddingBottom: "160px"
            }}
            data-bgcolor={group.theme.background} ///This changes the background color.
          >
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <img
                src={group.image.text}
                alt={group.image.alt}
                style={{
                  scrollSnapAlign: "start",
                  width: "420px"
                }}
              />
            </div>
            <p
              className="title"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {group.title}
            </p>
            <a href={group.a} style={group.color1}>
              {group.buyHere}
            </a>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {group.page}&nbsp;
              <a href={group.a} style={group.color2}>
                {" "}
                selected stores
              </a>
              .
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
