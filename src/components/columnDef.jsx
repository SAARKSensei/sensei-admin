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
import * as counsellor from "../lib/features/counsellor/counsellorSlice";
import * as school from "../lib/features/school/schoolSlice";
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
export const CounsellorTable = ({ data }) => {
  const dispatch = useDispatch();
  const rowSelection = useSelector((state) => state.counsellor.rowSelection);
  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: (e) => {
              if (table.getIsAllRowsSelected())
                dispatch(counsellor.unselectAll());
              else dispatch(counsellor.selectAll(data));
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
                dispatch(counsellor.unselect(row?.original?.ParenId));
              else dispatch(counsellor.select(row?.original?.ParenId));
              row.getToggleSelectedHandler()(e);
              // console.log(row);
            },
          }}
        />
      ),
    },
    {
      header: "Counsellor ID",
      accessorKey: "ParenId",
    },
    {
      header: "Counsellor Name",
      accessorKey: "ParentName",
    },
    {
      header: "Email ID",
      accessorKey: "EmailId",
    },
    {
      header: "Phone No",
      accessorKey: "PhoneNo",
    },

    {
      header: "City",
      accessorKey: "ChildrenName",
    },
    {
      header: "Working(Full/Part)",
      accessorKey: "Working",
      cell: (row) => (row?.getValue() ? "Yes" : "No"),
    },
    {
      header: "RCI approve",
      accessorKey: "Occupation",
    },
    {
      header: "Description",
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
export const SchoolTable = ({ data }) => {
  const dispatch = useDispatch();
  const rowSelection = useSelector((state) => state.school.rowSelection);
  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: (e) => {
              if (table.getIsAllRowsSelected()) dispatch(school.unselectAll());
              else dispatch(school.selectAll(data));
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
                dispatch(school.unselect(row?.original?.ParenId));
              else dispatch(school.select(row?.original?.ParenId));
              row.getToggleSelectedHandler()(e);
              // console.log(row);
            },
          }}
        />
      ),
    },
    {
      header: "School ID",
      accessorKey: "ParenId",
    },
    {
      header: "School Name",
      accessorKey: "ParentName",
    },
    {
      header: "Email ID",
      accessorKey: "EmailId",
    },
    {
      header: "Phone No",
      accessorKey: "PhoneNo",
    },

    {
      header: "City",
      accessorKey: "ChildrenName",
    },
    {
      header: "Affiliation",
      accessorKey: "Working",
      cell: (row) => (row?.getValue() ? "Yes" : "No"),
    },
    {
      header: "Grade",
      accessorKey: "Grade",
    },
    {
      header: "Type",
      accessorKey: "Occupation",
    },
    {
      header: "Strength",
      accessorKey: "MartialStatus",
    },
    {
      header: "Compensation",
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
