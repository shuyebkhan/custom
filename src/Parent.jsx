import useFetch from "./Custom";

function Parent() {
  const [myData, isError] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <>
      <div className="container">
        <h1>Fetch-Api</h1>
        {!isError == "" && <h2>{isError}</h2>}
        <table className="table" style={{ width: "100%" }}>
          <tr>
            <th>ID</th>
            <th>USER_ID</th>
            <th>Title</th>
          </tr>

          {myData.map(({ id, userId, title }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{title}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Parent;
