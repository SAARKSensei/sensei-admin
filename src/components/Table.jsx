"use client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState, useRef, useEffect } from "react";

export default function Table({
  rowSelection,
  id,
  data,
  columns,
  initialVisibility,
}) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColoumnVisibility] = useState(initialVisibility);
  const [columnSelectOpen, setColumnSelectOpen] = useState(false);
  const columnSelectRef = useRef(null);
  useEffect(() => {
    console.log(rowSelection);
  }, [rowSelection]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      rowSelection,
      columnVisibility,
      sorting: sorting,
      globalFilter: filtering,
    },

    enableRowSelection: true,
    getRowId: (row) => row[id],
    onColumnVisibilityChange: setColoumnVisibility,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });
  useEffect(() => {
    //console.log("rerender");
    const handler = (e) => {
      if (!columnSelectRef.current?.contains(e.target))
        setColumnSelectOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div className="w-full min-w-96 mt-4">
      <div className="flex items-center w-full">
        <input
          className=" my-4 mr-auto p-4 h-10 button-action-outline"
          placeholder="Search..."
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
        <div className=" relative" ref={columnSelectRef}>
          <button
            id="dropdownCheckboxButton"
            data-dropdown-toggle="dropdownDefaultCheckbox"
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ddark:bg-blue-600 ddark:hover:bg-blue-700 ddark:focus:ring-gray-800"
            type="button"
            onClick={() => setColumnSelectOpen((prev) => !prev)}
          >
            Columns
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownDefaultCheckbox"
            class={`${
              columnSelectOpen ? "" : " hidden "
            }  z-10 absolute w-fit bg-white divide-y divide-gray-100 rounded-lg shadow ddark:bg-gray-700 ddark:divide-gray-600`}
          >
            <ul
              class="p-3 space-y-3 text-sm text-gray-700 ddark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) =>
                  column.columnDef.header === undefined ? (
                    <></>
                  ) : (
                    <li key={column.id}>
                      <div class="flex items-center">
                        <input
                          checked={column.getIsVisible()}
                          onChange={column.getToggleVisibilityHandler()}
                          id="checkbox-item-1"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 ddark:focus:ring-gray-600 ddark:ring-offset-gray-700 ddark:focus:ring-offset-gray-700 focus:ring-2 ddark:bg-gray-600 ddark:border-gray-500"
                        />
                        <label
                          for="checkbox-item-1"
                          class="ms-2 whitespace-nowrap text-sm font-medium text-gray-900 ddark:text-gray-300"
                        >
                          {column.id === "select"
                            ? "Select"
                            : column.columnDef?.header}
                        </label>
                      </div>
                    </li>
                  )
                )}
            </ul>
          </div>
        </div>
      </div>
      <div className=" overflow-scroll scrollbar-hide">
        <table className="border-collapse table-auto overflow-scroll w-fit text-sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="whitespace-nowrap border-b dddark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dddark:text-slate-200  text-left"
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getIsSorted()
                          ? { asc: " ↑", desc: " ↓" }[
                              header.column.getIsSorted()
                            ]
                          : header.id === "select"
                          ? ""
                          : " ⇅"}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="bg-white dddark:bg-slate-800">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="w-fit overflow-x-auto scrollbar-hide border-b border-slate-100 dddark:border-slate-700 p-4  text-slate-500 dddark:text-slate-400"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center gap-2">
        {typeof rowSelection === Object && Object.keys(rowSelection).length ? (
          <div>{Object.keys(rowSelection).length} Rows Selected</div>
        ) : null}

        <label className="ml-auto " htmlFor="pageSie">
          Rows/Page
        </label>
        <input
          type="number"
          id="pageSize"
          className="border rounded p-1 w-16"
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        />
        <button
          className=" border rounded p-1 "
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <strong>
          {table.getState().pagination.pageIndex + 1} /{table.getPageCount()}
        </strong>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}
