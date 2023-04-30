import { getCookie } from "cookies-next";
import { verifica } from "../../services/users";

export default function Home() {
  return (
    <div>
      <h1>ola mundo</h1>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });

    if (!token) throw new Error("Token Invalido");

    verifica(token);
    return {
      props: {},
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};
