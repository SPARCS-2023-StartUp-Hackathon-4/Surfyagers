const TextBox = ({ text, setText, placeHolder }) => {
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        className="focus:outline-none text-[16px] w-full placeholder:text-[#A6A5A5]"
        onChange={onChange}
        value={text}
        placeholder={placeHolder}
      />
    </>
  );
};

export default TextBox;
