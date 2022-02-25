import ClientOnly from "../components/ClientOnly";
import Characters from "./characters/[page]";

const home = () => {
  return (
    <ClientOnly>
      <Characters></Characters>
    </ClientOnly>
  );
};
export default home;
