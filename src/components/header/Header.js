import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { actionsAuth } from "../../store/auth/AuthSlice";
import { initialState } from "../../store/todo/TodoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  

  return (
    <HeaderStyle>
      <h1>Todo Redux</h1>
      {isAuthorized && (
        <nav>
          <ul>
            <li>
              <Link to="/">
                {" "}
                <button
                  onClick={() => dispatch(actionsAuth.login(initialState))}
                >
                  Logout
                </button>
              </Link>
            </li>
          </ul>{" "}
        </nav>
      )}
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3c0080;
  color: white;
  padding: 0 10%;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }
  li {
    margin: 0 1rem;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
  }
  :hover & :active {
    color: #b864da;
  }
  button {
    font-size: 1.25rem;
    background-color: #ffbb00;
    border: 1px solid #ffbb00;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    color: #2c2922;
    :hover & :active {
      background-color: #ffa600;
      border-color: #ffa600;
    }
  }
`;
