import dog from "../Assets/Test Images/dog.jpg";
// import ImageUploader from "../Components/ImageUploader";
function AllPosts() {
  return (
    <div className="flex flex-col gap-4 align-middle justify-center items-center">
      <h2 className="font-bold text-cyan-950">all the post will show here</h2>
      <img src={dog} alt="" />

      {/* Add more images */}
      <div>{/* <ImageUploader /> */}</div>
    </div>
  );
}

export default AllPosts;
