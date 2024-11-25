const Shimmer = () =>{
    return(
        <div className="shimmer-container">
  {Array(8).fill("").map((_, index) => (
    <div className="shimmer-card" key={index}>
      <div className="shimmer-image"></div>
      <div className="shimmer-text"></div>
      <div className="shimmer-text" style={{ width: "60%" }}></div>
    </div>
  ))}
</div>

    )
};

export default Shimmer;