import React from "react";
import { host } from "lib/config";

type Props = {
  username: string;
};

const Share: React.FC<Props> = ({ username }) => {
  const url = `${host}/${encodeURIComponent(username)}`;

  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Share your timeline
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>{url}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
