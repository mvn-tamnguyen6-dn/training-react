import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [listPage, setListPage] = useState([]);
  
  useEffect(() => {
    fetch(`https://reqres.in/api/users?per_page=3&page=${currentPage}`)
      .then(response => response.json())
      .then(res => {
        setUsers(res.data);
        setTotalPages(res.total_pages);
        getListPage(res.total_pages);
      });
  },[currentPage]);

  function getListPage (totalPages) {
    const result = [];
    for (let index = 1; index <= totalPages; index++) {
      result.push(index);
    }
    setListPage(result);
  };

  function onChangePage (page) {
    setcurrentPage(page);
  }

  function onPrevious () {
    if (currentPage > 1) {
      setcurrentPage(currentPage-1)
    }
  }

  function onNext () {
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1)
    }
  }

  return(
    <div className="user-list-page">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <img src={user.avatar} alt="img"></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example" className="nav-pagination">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={() => onPrevious()}>
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </button>
          </li>
          {listPage.map((page) => (
            <li className={`page-item ${currentPage === page? 'active' : ''}`}>
              <button className="page-link" onClick={() => onChangePage(page)}>{page}</button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={() => onNext()}>
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Users;
