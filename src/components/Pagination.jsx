const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="flex py-4 gap-3 justify-center">
        {pages.map((page) => (
            <li className={`${currentPage === page && "text-red-500"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>
        ))}
    </ul>
  )
}

export default Pagination