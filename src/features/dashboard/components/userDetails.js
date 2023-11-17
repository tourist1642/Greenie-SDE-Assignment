import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import TableSortLabel from "@mui/material/TableSortLabel"; // Import TableSortLabel

import usersData from "../../../data/user.json";
import { blueGradient1 } from "components/tailwindClasses";


function Index(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("data : ", usersData.users);

    setData(() => usersData.users);
  }, []);

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (columnId) => {
    if (sortBy === columnId) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(columnId);
      setSortOrder("asc");
    }
  };

  let sortedData = data.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (sortOrder === "asc") {
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
    } else {
      if (aValue > bValue) return -1;
      if (aValue < bValue) return 1;
    }
    return 0;
  });

  const [search, setSearch] = useState("");

  if (search !== "") {
    sortedData = sortedData?.filter((item) =>
      item?.name?.toLowerCase?.()?.includes(search.toLowerCase())
    );
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let rows =
    sortedData && sortedData?.length > 0
      ? sortedData?.map((item) => {
          return {
            id: item.id,
            name: item.name,
            email: item.email,
            contact: item.contact,
            creationDate: new Date(item.creationDate)?.toDateString(),
          };
        })
      : [];

  const Cols = [
    { id: "id", label: "id" },
    { id: "name", label: "name" },
    { id: "email", label: "email" },
    { id: "contact", label: "Contact" },
    { id: "creationDate", label: "Creation Date" },
  ];

  const [currentUserId, setCurrentUserId] = useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = (id) => {
    setCurrentUserId(() => id);

    setOpenModal(() => true);
  };


  const handleClose = () => {
    setOpenModal(() => false);
    setCurrentUserId(() => null);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1% 1%",
        }}
        className="bg-greyBg2  flex-grow h-15 rounded mb-2 "
      >
        <div className="h-10  mr-2 flex-1 text-base rounded  flex items-center relative">
          <input
            type="text"
            className="  flex-1 p-2 bg-inputBg  "
            placeholder={"Search Name"}
            value={search}
            onChange={(e) => {
              setSearch(() => e.target.value);
            }}
          />
          <img src={"/searchIcon.svg"} alt="" className="mx-2" />
        </div>
      </div>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="">
            <TableRow>
              {Cols &&
                Cols?.length > 0 &&
                Cols?.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={
                      {
                        // fontWeight: "600",
                      }
                    }
                    sx={{ bgcolor: "rgba(217, 217, 217, 0.25)" }}
                    className=" dark:bg-lightBlack3 dark:text-lightBlack1"
                  >
                    <TableSortLabel
                      active={sortBy === column.id}
                      direction={sortBy === column.id ? sortOrder : "asc"}
                      onClick={() => handleSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => (
                <TableRow
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    handleModalOpen(row.id);
                  }}
                >
                  {Cols.map((column) => {
                    const value = row[column.id];

                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ maxWidth: column.maxWidth }}
                        onClick={() => {}}
                        className="dark:text-white dark:border-b9 dark:bg-lightBlack border-b"
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="dark:bg-lightBlack dark:text-white"
      />
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute p-1p top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] shadow rounded-10 bg-white dark:bg-lightBlack dark:text-white">
          {" "}
          <div>
            Do you want to download the report for user with id :{" "}
            <span className="font-bold"> {currentUserId}</span> ?
          </div>
          <div
            className={
              "flex justify-center items-center mr-[2vw] h-15 w-60 rounded-10 font-bold mt-2p cursor-pointer " +
              blueGradient1
            }
          >
            Download
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Index;
