
export const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-slate-800 gap-20">
      <h1 className="text-5xl font-bold font-serif text-center text-red-500 bg-black bg-opacity-50 p-4 rounded-xl"> Error 404 </h1>
      <p className="text-justify text-lg font-serif text-black bg-white bg-opacity-50 p-4 rounded-xl hover:bg-opacity-100 transition duration-500 ease-in-out"> La página que buscas no existe. </p>
      <img
        src="https://cdn.icon-icons.com/icons2/2985/PNG/512/sad_face_emoji_emoticon_icon_187174.png"
        alt="Error 404"
        className="w-1/4 h-1/4"
      />
    </div>
  )
}
