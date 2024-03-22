"use client";
import React, { useRef } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  select,
  unselect,
  selectAll,
  unselectAll,
} from "../lib/features/parent/parentSlice";
export const ParentTable = ({ data }) => {
  const dispatch = useDispatch();
  const rowSelection = useSelector((state) => state.parent.rowSelection);
  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: (e) => {
              if (table.getIsAllRowsSelected()) dispatch(unselectAll());
              else dispatch(selectAll(data));
              table.getToggleAllRowsSelectedHandler()(e);
              // console.log(table.getIsAllRowsSelected());
            },
          }}
        />
      ),
      cell: ({ row }) => (
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: (e) => {
              if (row.getIsSelected())
                dispatch(unselect(row?.original?.ParenId));
              else dispatch(select(row?.original?.ParenId));
              row.getToggleSelectedHandler()(e);
              // console.log(row);
            },
          }}
        />
      ),
    },
    {
      header: "Parent ID",
      accessorKey: "ParenId",
    },
    {
      header: "Parent Name",
      accessorKey: "ParentName",
    },
    {
      header: "Email",
      accessorKey: "EmailId",
    },
    {
      header: "Phone No",
      accessorKey: "PhoneNo",
    },

    {
      header: "Children Name",
      accessorKey: "ChildrenName",
    },
    {
      header: "Working",
      accessorKey: "Working",
      cell: (row) => (row?.getValue() ? "Yes" : "No"),
    },
    {
      header: "Occupation",
      accessorKey: "Occupation",
    },
    {
      header: "Martial Status",
      accessorKey: "MartialStatus",
    },
  ];
  const initialVisibility = {
    select: true,
    ParenId: false,
    ParentName: true,
    EmailId: true,
    PhoneNo: true,
    ChildrenName: true,
    Working: true,
    Occupation: true,
    MartialStatus: true,
  };
  return (
    <Table
      data={data}
      rowSelection={rowSelection}
      id={"ParenId"}
      initialVisibility={initialVisibility}
      columns={columns}
    />
  );
};
function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
  const ref = useRef(null);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}
