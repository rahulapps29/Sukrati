import React, { useState } from "react";
import img1 from "../images/Sofa Set.jpg";
import img2 from "../images/Dining Table.jpg";
import img3 from "../images/Lounge Chair.png";
import img4 from "../images/Coffee Table.jpg";
import img5 from "../images/Bed Frame.png";
import img6 from "../images/Book shelf.jpg";

const furnitureData = [
  { id: 1, image: img1, name: "Sofa Set" },
  { id: 2, image: img2, name: "Dining Table" },
  { id: 3, image: img3, name: "Lounge Chair" },
  { id: 4, image: img4, name: "Coffee Table" },
  { id: 5, image: img5, name: "Bed Frame" },
  { id: 6, image: img6, name: "Book shelf" },
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "5px",
      }}
    >
      {furnitureData.map((item) => (
        <div key={item.id} style={{ margin: "10px", textAlign: "center" }}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "20rem",
              height: "300px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => openModal(item)}
          />
          <h3>{item.name}</h3>
        </div>
      ))}

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "relative",
              textAlign: "center",
              color: "white",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 15px",
                cursor: "pointer",
                fontSize: "16px",
                zIndex: 1100,
              }}
            >
              Close
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              style={{
                maxWidth: "90%",
                maxHeight: "80%",
                borderRadius: "5px",
              }}
            />
            <h2 style={{ marginTop: "5px" }}>{selectedImage.name}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
