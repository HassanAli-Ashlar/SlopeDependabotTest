import React, { useState } from 'react';

function BlogPagination() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="pagination-container">
                        <ul className="page-numbers">
                            <li>
                                <a
                                    className={`page-numbers ${
                                        currentPage === 1 ? 'current' : ''
                                    }`}
                                    onClick={() => handlePageClick(1)}
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`page-numbers ${
                                        currentPage === 2 ? 'current' : ''
                                    }`}
                                    onClick={() => handlePageClick(2)}
                                >
                                    2
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPagination;
