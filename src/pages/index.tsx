import ClientOnly from "../components/ClientOnly";
import Characters from "./characters/[page]";

const home = () => {
  return (
    <ClientOnly>
      <Characters page="1"></Characters>
    </ClientOnly>
  );
};
export default home;
