export default function loading() {
  return (
    <div className="mx-[0.7rem] md:mx-[1rem] lg:mx-[10rem] text-secondary font-mono">
      <div className="flex justify-between items-center px-10 lg:px-40 font-semibold text-center my-5">
        <div
          onClick={() => {
            window.location.href = "/";
          }}
          className="text-4xl hover:cursor-pointer hover:text-secondary-hover"
        >
          TypNote
        </div>
      </div>
      <hr />
      <div className="text-center">Loading...</div>
    </div>
  );
}
