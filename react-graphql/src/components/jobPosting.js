import React, { useState } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery, gql } from "@apollo/client";

library.add(faTrash, faFilePen);

const DELETE_POSTING = gql`
  mutation DeleteQuery($id: ID!) {
    deleteJobListing(id: $id) {
      deletedJobId
    }
  }
`;

const GET_POSTINGS = gql`
  query GetAllJobs {
    jobs {
      _id
      title
      description
      company
      url
    }
  }
`;

const EDIT_POSTING = gql`
  mutation UpdateJob($id: ID!, $input: UpdateJobListingInput!) {
    updateJobListing(id: $id, input: $input) {
      title
      description
      _id
      company
      url
    }
  }
`;

function PostingCard({ job }) {
  const [deleteHover, setDeleteHover] = useState(false);
  const [editHover, setEditHover] = useState(false);
  const [editPop, setEditPop] = useState(false);

  const [title, setTitle] = useState(job.title);
  const [desc, setDesc] = useState(job.desc);
  const [company, setCompany] = useState(job.company);
  const [url, setUrl] = useState(job.url);

  const handleMouseEnter = () => {
    setDeleteHover(true);
  };

  const handleMouseLeave = () => {
    setDeleteHover(false);
  };

  const handleMouseEnter2 = () => {
    setEditHover(true);
  };

  const handleMouseLeave2 = () => {
    setEditHover(false);
  };

  const [deleteMutation] = useMutation(DELETE_POSTING);

  const [editMutation] = useMutation(EDIT_POSTING);

  const handleDelete = () => {
    deleteMutation({
      variables: {
        id: job._id,
      },
      refetchQueries: [{ query: GET_POSTINGS }],
    });
  };

  const handleEdit = () => {
    setEditPop(true);
  };

  const handleCancelEdit = () => {
    setEditPop(false);
  };

  const handleUpdate = () => {
    console.log(title);
    editMutation({
      variables: {
        id: job._id,
        input: {
          title: title,
          description: desc,
          company: company,
          url: url,
        },
      },
      refetchQueries: [{ query: GET_POSTINGS }],
    });
  };

  return (
    <div className="max-w-sm p-6 m-6 bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-white w-96">
      <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {job.title}
      </h5>
      <h4 className="mb-2 text-l tracking-tight text-gray-900 dark:text-white">
        {job.company}
      </h4>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {job.description}
      </p>
      <div className="flex items-center">
        <a
          href={job.url}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go To Website
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <FontAwesomeIcon
          icon="fa-solid fa-trash"
          bounce={deleteHover}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="m-5 mr-4 p-2 bg-red-500 rounded-md text-white cursor-pointer"
          onClick={handleDelete}
        />
        <FontAwesomeIcon
          icon="fa-solid fa-file-pen"
          bounce={editHover}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className="ml-0 p-2 pr-1 bg-green-500 rounded-md text-white cursor-pointer"
          onClick={handleEdit}
        />
      </div>
      {editPop && (
        <>
          <div className="fixed left-0 top-0 w-screen h-screen bg-gray-500 opacity-50"></div>
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 bg-gray-800 p-20 flex justify-center items-center pointer-events-auto border-2 rounded-3xl">
            <form className="w-3/4" id="form">
              <p className="text-3xl font-bold mb-4 text-white">
                Update Job Posting
              </p>
              <div className="relative mb-2" data-te-input-wrapper-init>
                <span className="text-white text-sm">Title</span>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  name="title"
                  placeholder="Title"
                  defaultValue={job.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="relative mb-2" data-te-input-wrapper-init>
                <span className="text-white text-sm m-0">Company</span>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput11"
                  name="company"
                  placeholder="Company"
                  defaultValue={job.company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="relative mb-2" data-te-input-wrapper-init>
                <span className="text-white text-sm">Description</span>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput11"
                  name="desc"
                  placeholder="Description"
                  defaultValue={job.description}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <div className="relative mb-5" data-te-input-wrapper-init>
                <span className="text-white text-sm">URL</span>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput11"
                  name="url"
                  placeholder="URL"
                  defaultValue={job.url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <div className="mb-12 pb-1 pt-1 text-center">
                <button
                  className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  type="submit"
                  id="Create"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675,#b44593)",
                  }}
                  onClick={handleUpdate}
                >
                  Update
                </button>
                <button
                  className="mb-3 inline-block w-full rounded border-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] hover:bg-neutral-500 hover:bg-opacity-20"
                  id="JoinAsGuest"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default PostingCard;
