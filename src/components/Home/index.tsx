import { useGetAllBooks } from '../../hooks/useGetAllBooks';
const Home = () => {
  useGetAllBooks();

  return <div>Home</div>;
};

export { Home };
