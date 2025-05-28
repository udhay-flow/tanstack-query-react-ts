import { useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY_HERE = "react_query_as_state_management";

const useRctQryAsStateMangmnt = () => {
  // query
  const queryClient = useQueryClient();
  const { data: countState } = useQuery({
    queryKey: [QUERY_KEY_HERE],
    queryFn: () => ({
      count: 0,
    }),
    staleTime: Infinity
  });

  
  // methods
  const increentMthd = () => {
    const count = countState?.count ?? 0
    queryClient.setQueryData([QUERY_KEY_HERE], () => ({
      count: count + 1,
    }));
  };

  const dcremntMthd = () => {
    const count = countState?.count ?? 0
    queryClient.setQueryData([QUERY_KEY_HERE], () => ({
      count: count - 1,
    }));
  };

  return { countState, increentMthd, dcremntMthd };
};

export default useRctQryAsStateMangmnt;
