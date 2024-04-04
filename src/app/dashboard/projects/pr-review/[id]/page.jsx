"use client"
import { useEffect, useState } from 'react';
import { useRouter,useSearchParams, usePathname } from 'next/navigation';
import axios from 'axios';

const PRReviewerPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const  id  = pathname.split('/').pop();
  const [prData, setPrData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const  id  = pathname.split('/').pop();
      console.log(id);
      axios.get(`http://localhost:5000/pull-request/review/${id}`)
        .then((res) => {
            console.log(res.data)
          setPrData(res.data);
          setLoading(false);
        });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!prData) {
    return <div>No data found for PR</div>;
  }

  // Render PR data here

  return (
    <div className="container mx-auto px-4">
      {prData.prs.map((pr) => (
        <div key={pr.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <h2 className="text-black-xl font-semibold mb-2">{pr.number}{" "}{pr.title}</h2>
          <a href={pr.url} className="text-blue-500">{pr.url}</a>
          <p className="text-gray-600">{pr.body}</p>
          <p className="text-gray-600">Author: {pr.user}</p>
          <p className="text-gray-600">Status: {pr.review}</p>
        </div>
      ))}
    </div>
  );
};

export default PRReviewerPage;
