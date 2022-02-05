import type { NextPage } from 'next';

export type DetailsProps = {};

const Details: NextPage = ({}: DetailsProps) => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:bg-teal-500 open:text-white">
        <summary className="cursor-pointer ">What is my fav food</summary>
        <span>김치</span>
      </details>
      <ul className="list-disc px-5 marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <div>
        <input
          type="file"
          className="file:cursor-pointer file:rounded-xl file:border-0 file:bg-purple-300 file:px-5 file:text-white file:transition-colors file:hover:border file:hover:border-purple-300 file:hover:bg-white file:hover:text-purple-300"
        />
      </div>
      <div>
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400 first-line:hover:bg-teal-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit libero
          est aliquid quaerat? Vitae eligendi suscipit, qui autem, recusandae
          inventore explicabo perspiciatis placeat dignissimos repellat commodi
          praesentium fugit quibusdam eaque?
        </p>
      </div>
    </div>
  );
};

export default Details;
