import { Link, useNavigate } from "react-router-dom";
import array from "../utils/data";
import ButtonComp from "../components/button/Button";
import strings from "../utils/commonString";

export default function Home() {

  const {
    headerName,
    headerAge,
    updateBtn,
    deleteBtn,
    createName
  } = strings;

  let history = useNavigate();

  function setID(id, name, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }

  function deleted(id) {
    let index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    array.splice(index, 1);

    history("/");
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{headerName}</th>
            <th>{headerAge}</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => {
            return (
              <tr>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>
                  <Link to={`/edit`}>
                    <ButtonComp
                      onClick={(e) => setID(item.id, item.Name, item.Age)}
                    >
                      {updateBtn}
                    </ButtonComp>
                  </Link>
                </td>

                <td>
                  <ButtonComp onClick={(e) => deleted(item.id)}>
                    {deleteBtn}
                  </ButtonComp>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="./create">
        <ButtonComp>{createName}</ButtonComp>
      </Link>
    </div>
  );
}

