import React from 'react';
import { useQuery, gql } from '@apollo/client';
import PostingCard from './jobPosting';

const GET_POSTINGS = gql`
  query GetAllJobs{
    jobs{
        _id
        title
        description
        company
        url 
    }
  }
`;

// const GET_JOB = gql`
// query GetJob($id: ID!){ job(id:$id){ _id title description url company } }
// `;

function PostingList() {
  const { loading, error, data } = useQuery(GET_POSTINGS);
  // const { loading, error, data } = useQuery(GET_JOB, {
  //   variables: { id:"64950e7ef4d181efcdbf08e8" }
  // });
  
  console.log(loading, error, data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-wrap justify-center align-middle">
      {data.jobs.map((job) => (
        <PostingCard job={job} />
      ))}
    </div>
  );
}

export default PostingList;
