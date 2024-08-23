import React from "react";
import "./MyProjects.css";

function MyProjects() {
  function bookMyShow() {
    window.location.href =
      "https://github.com/yogeshpandey143/Movie-Booking-System";
  }
  function eBook() {
    window.location.href = "https://ebook-reactjs-springboot.vercel.app/";
  }
  function snapTalk() {
    window.location.href =
      "https://github.com/yogeshpandey143/snaptalk-spring-reactjs";
  }
  return (
    <div className="service-container">
      <h1 className="heading">My Projects</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-logo">SnapTalk</div>

          <p>
            SnapTalk is an innovative social media platform designed to connect
            people and foster engaging online communities. The platform combines
            the power of modern web technologies to provide users with a
            seamless and secure social networking experience.
          </p>
          <button className="card-btn" onClick={snapTalk}>
            read more
          </button>
        </div>
        <div className="card">
          <div className="card-logo">E-Book</div>

          <p>
            E-Book is an innovative online store dedicated to the sale of
            digital books, providing users with a seamless and user-friendly
            experience. Built using modern web technologies, E-Book leverages
            the power of React to deliver a dynamic and responsive platform for
            book enthusiasts to browse, purchase, and enjoy a wide array of
            e-books.
          </p>
          <button className="card-btn" onClick={eBook}>
            read more
          </button>
        </div>
        <div className="card">
          <div className="card-logo">CinePrime</div>

          <p>
            The Movie Booking System is a web-based application developed using
            Spring Boot, designed to facilitate the seamless booking of movie
            tickets. This system allows users to browse available movies, select
            showtimes, and book tickets, providing an efficient and
            user-friendly interface for cinema-goers.
          </p>
          <button className="card-btn" onClick={bookMyShow}>
            read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
