const photos = [
  "/customer1.png",
  "/customer2.png",
  "/customer3.png",
  "/customer4.png",
  "/customer5.png"
];

<div className="slider-wrapper">

  {/* Left Button */}
  <button
    className="slider-btn left-btn"
    onClick={() =>
      setCurrentIndex(
        (currentIndex - 1 + photos.length) % photos.length
      )
    }
  >
    ❮
  </button>

  <div
    className="reviews-container"
    style={{
      transform: `translateX(-${currentIndex * 375}px)`
    }}
  >
    {photos.map((photo, index) => (
      <div
        className={`photo-box ${
          index === currentIndex ? "active-photo" : ""
        }`}
        key={index}
      >
        <img
          src={photo}
          alt={`Customer ${index + 1}`}
        />
      </div>
    ))}
  </div>

  {/* Right Button */}
  <button
    className="slider-btn right-btn"
    onClick={() =>
      setCurrentIndex(
        (currentIndex + 1) % photos.length
      )
    }
  >
    ❯
  </button>

</div>
