function SearchBox({ value, updateFilterInput }) {
  return (
    <>
      <input
        type="text"
        onChange={e => updateFilterInput(e.target.value)}
        value={value}
      />
    </>
  );

  // З кнопкою (без параметрів у адресному рядку):
  // return (
  //   <>
  //     <form onSubmit={submit}>
  //       <input
  //         type="text"
  //         onChange={e => setInputValue(e.target.value)}
  //         value={inputValue}
  //         name="filter"
  //       />

  //       <button type="submit">search</button>
  //     </form>
  //   </>
  // );
}

export default SearchBox;
