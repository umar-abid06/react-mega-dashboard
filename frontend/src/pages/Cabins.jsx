import { Button, Heading, Row } from "../ui";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/ Sort</p>
      </Row>
      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
};

export default Cabins;
