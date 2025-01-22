import { useRef, useState } from "react";
import default_image from "../Assets/default_image.svg";
import "./ImageGenerator.css";

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  const inputRef = useRef<HTMLInputElement>(null);

  const imageGenerator = async () => {
    const prompt = inputRef.current?.value.trim();
    if (!prompt) {
      alert("Please enter a valid description.");
      return;
    }

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer  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",
          },
          body: JSON.stringify({
            prompt,
            n: 1,
            size: "512x512",
          }),
        }
      );

      const responseBody = await response.json(); 

      if (!response.ok) {
        console.error("Error response details:", responseBody);
        throw new Error(
          `Failed to fetch image: ${
            responseBody.error?.message || "Unknown error"
          }`
        );
      }

      const generatedImageUrl = responseBody.data[0]?.url;

      if (generatedImageUrl) {
        setImage_url(generatedImageUrl);
      } else {
        throw new Error("No image URL found in response.");
      }
    } catch (error: any) {
      console.error("Error generating image:", error.message);
    }
  };

  return (
    <div
      className="ai-image-generator"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        gap: "30px",
      }}
    >
      <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
        AI Image{" "}
        <span style={{ color: "#DE1B89", fontWeight: "600" }}>Generator</span>
      </h1>
      <div
        className="img-loading"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img
          style={{ width: "512px" }}
          src={image_url === "/" ? default_image : image_url}
          alt="AI Generated"
        />
      </div>
      <div
        className="search-box"
        style={{
          display: "flex",
          width: "1000px",
          height: "95px",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#1F3540",
          borderRadius: "50px",
        }}
      >
        <input
          className="search-input"
          type="text"
          ref={inputRef}
          placeholder="Describe what you want to see"
          style={{
            width: "600px",
            height: "50px",
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: "18px",
            color: "white",
            paddingLeft: "35px",
          }}
        />
        <button
          className="generate-btn"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "300px",
            height: "85px",
            fontSize: "20px",
            borderRadius: "50px",
            background: "#DE1B89",
            cursor: "pointer",
            color: "white",
            border: "none",
          }}
          onClick={imageGenerator}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default ImageGenerator;
