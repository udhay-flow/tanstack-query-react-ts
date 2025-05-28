// const QUERY_KEY_HERE = "react_query_as_state_management";

const useRctQryAsStateMangmnt = () => {
  // query
  const countState = {count: 0}

  
  // methods
  const increentMthd = () => {
    // define increment logics using queryclient's setQueryData method
  };

  const dcremntMthd = () => {
    // define decrement logics using queryclient's setQueryData method
  };

  return { countState, increentMthd, dcremntMthd };
};

export default useRctQryAsStateMangmnt;
