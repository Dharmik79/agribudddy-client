import React from "react";
import { Pagination } from "react-bootstrap";

export default function index(props) {
  const max = Math.ceil(props?.data?.totalCount / props.limit);
  return (
    <Pagination className="justify-content-center">
      <Pagination.Prev
        disabled={(max || props.activePage) == 1}
        onClick={() => {
          props.activePage > 1 && props.handlePageChange(props.activePage - 1);
        }}
      />

      {props.activePage > 2 && (
        <Pagination.Item
          onClick={() => props.handlePageChange(1)}
          // active={1 === props.activePage}
        >
          {1}
        </Pagination.Item>
      )}

      {props.activePage > 3 && max > 4 && <Pagination.Ellipsis />}

      {props.activePage == max && max > 3 && (
        <Pagination.Item
          onClick={() => props.handlePageChange(props.activePage - 2)}
          // active={props.activePage - 2 === props.activePage}
        >
          {props.activePage - 2}
        </Pagination.Item>
      )}

      {props.activePage - 1 >= 1 && (
        <Pagination.Item
          onClick={() => props.handlePageChange(props.activePage - 1)}
          // active={props.activePage - 1 === props.activePage}
        >
          {props.activePage - 1}
        </Pagination.Item>
      )}

      {
        <Pagination.Item
          onClick={() => props.handlePageChange(props.activePage)}
          active={true}
        >
          {props.activePage}
        </Pagination.Item>
      }

      {props.activePage < max && (
        <Pagination.Item
          onClick={() => props.handlePageChange(props.activePage + 1)}
          // active={props.activePage + 1 === props.activePage}
        >
          {props.activePage + 1}
        </Pagination.Item>
      )}

      {max >= 3 && props.activePage < max && props.activePage == 1 && (
        <Pagination.Item
          onClick={() => props.handlePageChange(props.activePage + 2)}
          // active={props.activePage + 2 === props.activePage}
        >
          {props.activePage + 2}
        </Pagination.Item>
      )}

      {props.activePage < max - 2 && max > 4 && <Pagination.Ellipsis />}
      {max > 3 && props.activePage < max - 1 && (
        <Pagination.Item onClick={() => props.handlePageChange(max)}>
          {max}
        </Pagination.Item>
      )}

      <Pagination.Next
        disabled={max == (props?.activePage || 1)}
        onClick={() => {
          props?.activePage < max &&
            props.handlePageChange(props.activePage + 1);
        }}
      />
    </Pagination>
  );
}
