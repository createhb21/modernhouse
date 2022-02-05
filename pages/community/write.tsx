export type writeProps = {};

function write({}: writeProps) {
  return (
    <form className="px-4 py-10">
      <textarea
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-400 focus:ring-indigo-400 "
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="mt-2 w-full rounded-md border border-transparent bg-indigo-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
        Submit
      </button>
    </form>
  );
}

export default write;
