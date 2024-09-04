import React from "react";
import { Container } from "./components/layouts/container";
import { Section } from "./components/layouts/section";
import { Button } from "./components/ui/button";

const App: React.FC = () => {
  return (
    <Section bg='crimson'>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in
          cum nulla sapiente minus consequuntur quibusdam necessitatibus velit!
          Distinctio, ipsum possimus expedita ad quia quaerat est qui enim eum?
          Mollitia, accusamus, sit expedita itaque non adipisci corporis iure
          est asperiores, facere qui totam fuga neque. Dolore id facere magnam
          commodi totam expedita sint autem vero asperiores quia odit delectus
          pariatur, nisi harum ipsa quisquam, minus aut. Nostrum autem non
          mollitia modi nulla incidunt vel natus, cupiditate consequuntur
          placeat enim vitae dolores tempore. Asperiores fuga odit dignissimos.
          Libero at magnam quisquam maiores, veritatis dolorem temporibus
          nesciunt, consequuntur harum quod quasi deleniti.
        </p>
        <Button primary>Click me</Button>
        <Button >Click me</Button>
      </Container>
    </Section>
  );
};

export default App;

// SECOND APP EXERCISE

// import { ReactNode as RN } from "react";
// import {useFetch} from "./hooks/useFetch";

// const App = (): RN => {
//   const { loading, error, data } = useFetch('/users');

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <h1>{error}</h1>;

//   return (
//     <div>
//       <ul>
//         {data.map((item: any) => {
//           return <li key={item.id}>{item.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default App;

// FIRST APP EXERCISE

// import { FC, useEffect, useMemo, useState, useCallback, memo } from "react";
// import axios from "axios";

// const App: FC = memo(() => {
//   const [users, setUsers] = useState<any>([]);
//   const [num, setNum] = useState<number[]>([]);
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const limit = 200009
//   const useFetch = useCallback(async (): Promise<any> => {
//     try {
//       const response = await axios.get(url);
//       setUsers(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   useEffect(() => {
//     const result = useFetch();
//     console.log(result);
//   }, [useFetch]);

//   function loopNumbers(limit: number): number[] {
//     let numbers: number[] = [];

//     for (let i = 0; i < limit; i++) {
//       numbers.push(i);
//     }
//     return numbers;
//   }

//   // console.log(numbers);

//   useMemo(() => {
//     const numbers = loopNumbers(limit);
//     setNum(numbers);
//     console.log(numbers);
//   }, []);

//   return <div>App</div>;
// });

// export default App;
