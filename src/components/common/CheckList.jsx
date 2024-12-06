export default function CheckList({ items }) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-x-3">
          <svg
            className="h-6 w-5 flex-none text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}
