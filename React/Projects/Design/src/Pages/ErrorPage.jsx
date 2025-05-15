import lost from "../Assets/errorPageIllustration.jpg";
function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <img className="w-1/4" src={lost} alt="lost person image" />
      <h1 className="text-8xl text-red-900 font-black">404</h1>
      <h1 className="text-xl">Page not found!</h1>
    </div>
  );
}

export default ErrorPage;
