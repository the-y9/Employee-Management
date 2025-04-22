import "../style/style.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormControl, InputGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { useStore } from "../store/data";
import AddEmp from "./AddEmp";
import AdminManageModal from "./AdminMan";
import GenericTable from "./GenericTable";
import UpEmp from "./EditEmp";

// const columns =;

function Display() {
  const { store, delEmployee } = useStore();

  const [dpt, setDpt] = useState("");
  const [des, setDes] = useState("");
  const [search, setSearch] = useState("");
  // const [te, setTe] = useState("");

  const filteredData = store.data.filter((d) => {
    // const searchData = (search === "" || d.ename === search)
    const searchData =
      search === "" ||
      d.id.toString().includes(search.toLowerCase()) ||
      d.ename.toLowerCase().includes(search.toLowerCase()) ||
      d.dept.toLowerCase().includes(search.toLowerCase()) ||
      d.designation.toLowerCase().includes(search.toLowerCase()) ||
      d.tech_expertise.toLowerCase().includes(search.toLowerCase());

    const filterData =
      (dpt === "" || d.dept === dpt) && (des === "" || d.designation === des);
    return filterData && searchData;
  });
  const clearFilter = () => {
    setDpt("");
    setDes("");
  };

  const renderCustomActions = (item) => {
    return (
      <>
        <Button variant="danger" onClick={() => delEmployee(item.id)}>
          Delete
        </Button>
        <UpEmp data={item} />
      </>
    );
  };

  return (
    <div className="display-container">
      <h1 className="text-center my-4">Employee Master</h1>

      <Container>
        <Row className="align-items-start">
          <Col md={6}>
            <div className="mb-4">
              {/* <label htmlFor="department-select" className="form-label">
                Department:
              </label> */}
              <select
                id="department-select"
                className="form-select"
                onChange={(e) => setDpt(e.target.value)}
                value={dpt}
              >
                <option value="">Select Department</option>
                {store.dept.map((d) => (
                  <option key={d.id} value={d.dname}>
                    {d.dname}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              {/* <label htmlFor="designation-select" className="form-label">
                Designation:
              </label> */}
              <select
                id="designation-select"
                className="form-select"
                onChange={(e) => setDes(e.target.value)}
                value={des}
              >
                <option value="">Select Designation</option>
                {store.designation.map((d) => (
                  <option key={d.id} value={d.dename}>
                    {d.dename}
                  </option>
                ))}
              </select>
            </div>
          </Col>

          <Col md={2} className="d-flex flex-column gap-3">
            <Button variant="warning" onClick={clearFilter}>
              Clear Filters
            </Button>
            <AddEmp />
          </Col>

          <Col md={4}>
            <AdminManageModal />
            <InputGroup className="my-3">
              <InputGroup.Text>
                <Icon.Search />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
            <h5 className="text-muted">Search: {search}</h5>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-4">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span>Rows Returned: {filteredData.length}</span>
        </div>
        <GenericTable
          colHeaders={["id", "ename", "dept", "designation", "tech_expertise"]}
          data={filteredData}
          renderActions={renderCustomActions}
          variant="light"
        />
      </Container>
    </div>
  );
}

export default Display;
