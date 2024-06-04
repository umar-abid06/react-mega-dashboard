import { Button, Heading, Row } from "../ui";
import CabinTable from "../features/cabins/CabinTable";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/ Sort</p>
      </Row>
      <Row>
        <CabinTable />

        <Button>Add new cabin</Button>
      </Row>
    </>
  );
};

export default Cabins;
