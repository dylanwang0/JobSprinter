import { useRef, useEffect, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Navigate, useNavigate } from "react-router-dom";

const CREATE_POSTING = gql`
  mutation CreateJobListing($input: CreateJobListingInput!) {
    createJobListing(input: $input) {
      _id
      title
      description
      company
      url
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

function CreateJob() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");

  const inputElement1 = useRef(null);
  const inputLabel1 = useRef(null);
  const inputElement2 = useRef(null);
  const inputLabel2 = useRef(null);
  const inputElement3 = useRef(null);
  const inputLabel3 = useRef(null);
  const inputElement4 = useRef(null);
  const inputLabel4 = useRef(null);

  useEffect(() => {
    const inputTransition = (inputElement, inputLabel) => {
      return () => {
        const hasText = inputElement.current.value.trim() !== "";
        const labelClassList = inputLabel.current.classList;

        if (hasText) {
          labelClassList.add("-translate-y-[1.6rem]");
          labelClassList.add("-translate-x-[0.5rem]");
          labelClassList.add("scale-[0.8]");
          labelClassList.add("text-primary");
        } else {
          labelClassList.remove("-translate-y-[1.6rem]");
          labelClassList.remove("-translate-x-[0.5rem]");
          labelClassList.remove("scale-[0.8]");
          labelClassList.remove("text-primary");
        }
      };
    };

    inputElement1.current.addEventListener(
      "input",
      inputTransition(inputElement1, inputLabel1)
    );
    inputElement2.current.addEventListener(
      "input",
      inputTransition(inputElement2, inputLabel2)
    );
    inputElement3.current.addEventListener(
      "input",
      inputTransition(inputElement3, inputLabel3)
    );
    inputElement4.current.addEventListener(
      "input",
      inputTransition(inputElement4, inputLabel4)
    );

    return () => {
      inputElement1.current?.removeEventListener(
        "input",
        inputTransition(inputElement1, inputLabel1)
      );
      inputElement2.current?.removeEventListener(
        "input",
        inputTransition(inputElement2, inputLabel2)
      );
      inputElement3.current?.removeEventListener(
        "input",
        inputTransition(inputElement3, inputLabel3)
      );
      inputElement4.current?.removeEventListener(
        "input",
        inputTransition(inputElement4, inputLabel4)
      );
    };
  }, []);
  //   let clickedButton = "";
  //   document.getElementById("Join").addEventListener("click", function () {
  //     clickedButton = "Join";
  //   });

  //   document.getElementById("JoinAsGuest").addEventListener("click", function () {
  //     clickedButton = "JoinAsGuest";
  //   });
  //   let form = document.getElementById("form");
  const [mutateFunction, { data, loading, error }] =
    useMutation(CREATE_POSTING);

  const handleSubmit = async () => {
    mutateFunction({
      variables: {
        input: {
          title: title,
          company: company,
          description: desc,
          url: url,
        },
      },
      refetchQueries: [{ query: GET_POSTINGS }],
    });
    // await refetch();
    navigate("/");
  };

  //   form.addEventListener("submit", handleSubmit);
  return (
    <div className="w-full bg-gray-800 p-10 flex justify-center items-center pointer-events-auto">
      <form className="w-1/2" id="form" onSubmit={handleSubmit}>
        <p className="text-3xl font-bold mb-4 text-white">Create A Job Posting</p>
        <div className="relative mt-6 mb-5" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            name="title"
            placeholder="Title"
            ref={inputElement1}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            id="exampleFormControlInput2"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:-translate-x-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            ref={inputLabel1}
          >
            Title
          </label>
        </div>

        <div className="relative mb-5" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput11"
            name="company"
            placeholder="Company"
            ref={inputElement2}
            onChange={(e) => setCompany(e.target.value)}
          />
          <label
            id="exampleFormControlInput12"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:-translate-x-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            ref={inputLabel2}
          >
            Company
          </label>
        </div>

        <div className="relative mb-5" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput11"
            name="desc"
            placeholder="Description"
            ref={inputElement3}
            onChange={(e) => setDesc(e.target.value)}
          />
          <label
            id="exampleFormControlInput12"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:-translate-x-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            ref={inputLabel3}
          >
            Description
          </label>
        </div>

        <div className="relative mb-5" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput11"
            name="url"
            placeholder="URL"
            ref={inputElement4}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label
            id="exampleFormControlInput12"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:-translate-x-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            ref={inputLabel4}
          >
            URL
          </label>
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
          >
            Create
          </button>
          <button
            className="mb-3 inline-block w-full rounded border-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] hover:bg-neutral-500 hover:bg-opacity-20"
            id="JoinAsGuest"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateJob;
